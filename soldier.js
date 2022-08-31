let soldier = {
    name: 'Ragnar',
    health: 5,
    weapon:{
       nameWeapon: 'M416',
       cartridges: 30
    },
    supplies: 3,
   
    fire(){
        if (this.weapon.cartridges <= 0) {
            console.log('обойма пуста. Перезаредитесь')
        }else{
            this.weapon.cartridges--
            console.log(`бах бах`)
        }
    },

    recharge(){
        if(this.supplies <= 0){
            return console.log('Не осталось припасов')
        }else{
            this.weapon.cartridges = 30
            this.supplies--
            console.log('Перезарядка..') 
        }
    },

    hurt(){
        if (this.health <= 0) {
           return console.log('Ты проиграл')
        }else{
            this.health--
        }
    },

}