new Vue({
  el:'#app',
  created:function(){
    this.getDistribuciones()
    this.getIngresos()
    this.getgastos()
    this.getDisGastosIngresos()
  },
  data: {
    i : { monto : null, quien : null, de_que : null, donde_esta : null, date : moment().format() },
    g : { distribucion_id : null, monto : null, date : moment().format(), detalles : null },
    d : { nombre : null, porcentaje: null, date : moment().format() },
    distribuciones : [], ingresos : [], gastos : [], 
    distribucion_ingresos : [], distribucion_gastos : [],
    router: 'http://localhost:3001/'
  }, 
  methods: {
    getDistribuciones(){
      axios.get(this.router+'distribucion').then( (resp) => { this.distribuciones = resp.data.dis })
    },
    addDistribuciones(){
      axios.post(this.router+'distribucion', this.d).then((resp) => {
        this.getDistribuciones()
        $('#addDistribuciones').modal('hide')
      })
    },
    getIngresos(){
      axios.get(this.router+'ingresos').then((resp) => this.ingresos = resp.data.i )
    },
    addIngresos(){
      axios.post(this.router+'ingresos', this.i).then((resp) => {
        this.getIngresos() 
        $('#agregarIngresos').modal('hide')
      })
    },
    getgastos(){
      axios.get(this.router+'gastos').then((resp) => {           
        const g = resp.data
        const value = []
        g.map((gas) => {
          const dis = this.distribuciones.find( dis => dis._id === gas.distribucion_id )
          value.push({
            distribucion : dis.nombre,
            monto : gas.monto,
            detalles : gas.detalles,
            distribucion_id : dis._id       
          })
        })
        this.gastos = value
      })
    },
    addGastos(){
      axios.post(this.router+'gastos', this.g).then((resp) => {
        this.getgastos()
        $('#agregarGastos').modal('hide')
      })
    },
    getDisGastosIngresos(){
      // Distribuciones de Ingresos 
      axios.get(this.router+'distribucion/ingresos').then( (resp) => {
        const distrib = resp.data
        const valor = []
        distrib.map((di) => {          
          const dist = this.distribuciones.find( (d) => d._id === di._id)            
          valor.push({
            "nombre"      : dist.nombre, 
            "porcentaje"  : dist.porcentaje,
            "total"       : di.total,   
            'distribucion_id' : dist._id         
          })
        })  
        this.distribucion_ingresos = valor        
      })

      // Distribuciones de Gastos 
      axios.get(this.router+'distribucion/gastos').then( (resp_g) => {   
        const distrib_g = resp_g.data
        const valor_g = []
        distrib_g.map((di_g) => {          
          const dist_g = this.distribuciones.find( (d_g) => d_g._id === di_g._id)                    
          valor_g.push({
            "nombre"      : dist_g.nombre, 
            "porcentaje"  : dist_g.porcentaje,
            "total"       : di_g.total,     
            'distribucion_id' : dist_g._id,
            'count_g'   : di_g.count
          })
        })   
        this.distribucion_gastos = valor_g        
      })            
    }
  },
  computed: {
    ingresosTotal : function(){
      let sum = 0
      this.ingresos.forEach(function(i){      
        sum = (parseFloat(i.monto + sum))
      })
      return sum;
    },
    sumPorcentaje: function(){
      let sum = 0
      this.distribuciones.forEach(function(d){
        sum = parseFloat(d.porcentaje + sum)
      })
      return sum
    },

    /**
     * Total de dinero en general
     */
    totalGeneral:function(){
      let ingresos = 0
      this.distribucion_ingresos.forEach(function(d_i){
        ingresos = parseFloat(ingresos + d_i.total)
      })

      let gastos = 0
      this.distribucion_gastos.forEach(function(d_g){
        gastos = parseFloat(gastos + d_g.total)
      })

      return parseFloat(ingresos - gastos) // Total
    },


    saldo:function(){

      // Total de Gastas por distirbucion
      let gastos = 0; let arrayGastos = []
      this.distribucion_gastos.forEach(function(d_g){
        arrayGastos.push(d_g)
        gastos = parseFloat(gastos + d_g.total)
      })

      // El total positivo de cada una de las distribuciones en ingresos 
      let ingresos = 0; let arrayIngresos = [];
      this.distribucion_ingresos.forEach(function(d_i){
        arrayIngresos.push(d_i)
        ingresos = parseFloat(ingresos + d_i.total)
      })
            
      let new_total = []
      arrayIngresos.map((a_i) => {      

        const gastos = arrayGastos.find( a_g => a_g.distribucion_id == a_i.distribucion_id)  
        
        // Guardamos el total de gastos y de gasto de la misma distribucion
        // que lo sume y reste el mismo Vuejs
        
        let total_gasto = 0
        let count_gasto = 0

        if(gastos){
          total_gasto = gastos['total']
          count_gasto = gastos['count_g']
        }else{
          total_gasto = 0
          count_gasto = 0
        }
        
        new_total.push({ 
          'nombre'          : a_i['nombre'],
          'distribucion_id' : a_i['distribucion_id'],
          'total_i'         : a_i['total'],
          'total_g'         : total_gasto,
          'count_g'         : count_gasto
        })

      })
      return new_total
    }
  }
})