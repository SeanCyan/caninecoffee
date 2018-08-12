const coffees = [
    {
      name: 'Americano',
      price: '£2.00'  
    },
    {
      name: 'Flat White',
      price: '£2.50'  
    },
    {
      name: 'Latte',
      price: '£2.50'  
    },
    {
      name: 'Cappuccino',
      price: '£2.50'  
    },
    {
      name: 'Espresso',
      price: '£1.80'  
    },
    {
      name: 'Mocha',
      price: '£2.50'  
    },
    {
     name: 'Hot Chocolate',
     price: '£2.40'
    }
]

const teas = [
    {
     name: 'Tea for One',
     price: '£1.50'  
    },
    {
     name: 'Tea for Two',
     price: '£2.90'  
    },
    {
     name: 'Flavoured Teas',
     price: '£2.00'  
    },
]

const coldDrinks = [
    {
      name: 'Bottled Water',
      price: '£1.00'  
    },
    {
      name:'Bottled Drinks',
      price: '£1.50' 
     }
]

const paninis = [
    {
      name: 'Ham & Cheese',
      price: '£4.50'  
    },
    {
      name: 'Tuna Mayo & Cheese',
      price:  '£4.50'   
    },
    {
      name: 'Mozzarella, Tomato & Pesto',
      price: '£4.50'  
    },
    {
      name: 'Chicken & Bacon Mayo',
      price: '£4.50'  
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
      name: 'Lillys Kitchen Organic',
      price: '£1.75'  
    },
]

const treats = [
    {
      name: 'Iced Peanut Butter & Carrot Cupcake',
      price: '£2.25' 
    },
    {
      name: 'Peanut Butter Doggy Doughnut',
      price: '£1.50'  
    }
]

const dogDrinks = [
    {
      name: 'Fresh Water',
      price: 'FREE'  
    },
    {
      name: 'Woof & Brew Selection',
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
      mq: window.matchMedia("(max-width: 767px)"),
    },

})