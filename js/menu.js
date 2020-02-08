const coffees = [
    {
      name: 'Americano',
      price: '£1.50'  
    },
    {
      name: 'Flat White',
      price: '£1.80'  
    },
    {
      name: 'Latte',
      price: '£1.80'  
    },
    {
      name: 'Cappuccino',
      price: '£1.75'  
    },
    {
      name: 'Espresso',
      price: '£1.50'  
    },
    {
      name: 'Mocha',
      price: '£1.80'  
    },
    {
     name: 'Hot Chocolate',
     price: '£1.80'
    }
]

const teas = [
    {
     name: 'Tea for One',
     price: '£1.20'  
    },
    {
     name: 'Tea for Two',
     price: '£2.10'  
    },
    {
      name: 'Earl Grey',
      price: '£1.20',
    },
    {
     name: 'Flavoured Teas',
     price: '£1.50'  
    },
]

const coldDrinks = [
    {
      name: 'Bottled Water',
      price: '£1.00'  
    },
    {
      name:'Canned Drinks',
      price: '75p' 
     }
]

const paninis = [
    {
      name: 'Jalapeno Spicy Chicken',
      price: '£3.75'  
    },
    {
      name: 'Chicken Tikka',
      price:  '£3.75'   
    },
    {
      name: 'Mozzarella, Pesto & Tomato',
      price: '£3.75'  
    },
    {
      name: 'Ham & Cheese',
      price: '£2.75'  
    },
    {
      name: 'Cheese Savoury',
      price:  '£2.75'   
    },
    {
      name: 'Chicken & Bacon',
      price: '£2.75'  
    },
]


const sweets = [
    {
      name: 'Cake Slices',
      price: '£2.50'  
    },
    {
      name: 'Tray Bakes',
      price: '£2.50'  
    },
    {
      name: 'Biscuits & Cookies',
      price: '£1.75'  
    }
]

const wetFood = [
    {
      name: 'Afternoon Tea',
      price: 'from £3.50'   
    },
    {
      name: 'Lillys Kitchen Organic',
      price: '£1.10'  
    }
]

const treats = [
    {
      name: 'Pup-Tart',
      price: '50p each' 
    },
    {
      name: 'Peanut Butter Doggy Doughnut',
      price: '35p each'  
    },
    {
      name: 'Sausage Bowl',
      price: 'sm 50p, lg £1.00'  
    }
]

const dogDrinks = [
    {
      name: 'Fresh Water',
      price: 'FREE'  
    },
    {
      name: 'Woof & Brew Selection (flavours below)',
      price: '£1.00 per bowl'
    }
]

new Vue({
    el:'.content',
    data: {
      coffees: coffees,
      teas: teas,
      coldDrinks: coldDrinks,
      paninis: paninis,
      sweets: sweets,
      wetFood: wetFood,
      treats: treats,
      dogDrinks: dogDrinks,
      flipped: false,
      mobile: false,
    },
    methods: {
      onResize(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
          this.mobile = false;
        } else {
          this.mobile = true;
        }
      },
    },
    mounted() {
      // Register an event listener when the Vue component is ready
      window.addEventListener('resize', this.onResize)
    },
    
    beforeDestroy() {
      // Unregister the event listener before destroying this Vue instance
      window.removeEventListener('resize', this.onResize)
    }
})