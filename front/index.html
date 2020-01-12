<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Finanzas</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link rel="stylesheet" href="myStyle.css">
</head>
<body>
  
  <div id="app" class="mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h1 class="text-center p-2 font-anton">Finanzas Personales</h1>
          <div class="row mt-3">
            <div class="col-md-12">
              <p class="text-right">Saldo General, {{totalGeneral}}$ </p>
            </div>
          </div>
          <ul class="nav nav-tabs mt-1" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="saldo-dis-tab" data-toggle="tab" href="#saldo-dis" role="tab" aria-controls="saldo-dis" aria-selected="true">Saldo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="distribucion-tab" data-toggle="tab" href="#distribucion" role="tab" aria-controls="distribucion" aria-selected="true">distribucion</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="ingresos-tab" data-toggle="tab" href="#ingresos" role="tab" aria-controls="ingresos" aria-selected="false">Ingresos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="gastos-tab" data-toggle="tab" href="#gastos" role="tab" aria-controls="gastos" aria-selected="false">Gastos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="distribuciones-tab" data-toggle="tab" href="#distribuciones" role="tab" aria-controls="distribuciones" aria-selected="false">Distribuciones</a>
            </li>
          </ul>
  
          <div class="tab-content" id="myTabContent">

            <!-- distribucion saldo -->
            <div class="tab-pane fade show active" id="saldo-dis" role="tabpanel" aria-labelledby="distribucion-tab">
              <ul class="list-group">
                <li class="list-group-item" v-for="s in saldo">
                  <h5><small>{{s.nombre}}, </small>{{s.total_i - s.total_g}}$</h5>                               
                </li>
              </ul>
              <p class="mt-1 text-right" style="font-size: 12px;">
                Saldo total de cada una de las distribuciones
              </p>              
            </div>            

            <!-- distribucion -->
            <div class="tab-pane fade" id="distribucion" role="tabpanel" aria-labelledby="distribucion-tab">              
              <ul class="list-group">
                <li class="list-group-item" v-for="d_i in distribucion_ingresos">
                  <h5><small>{{d_i.nombre}}, </small>{{d_i.total}}$</h5>                               
                </li>
              </ul>
              <p class="mt-1 text-right" style="font-size: 12px;">
                Total acumulado de cada una de las distribuciones
              </p>
            </div>

            <!-- Ingresos -->
            <div class="tab-pane fade" id="ingresos" role="tabpanel" aria-labelledby="ingresos-tab">
              <div class="p-2 text-right">
                {{ingresosTotal}}$
                <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#agregarIngresos"> Nuevo </button>            
              </div>

              <ul class="list-group">
                <li class="list-group-item" v-for="ingreso in ingresos">
                  <h4><small>Monto, </small>{{ingreso.monto}}$</h4>
                  <p>De {{ingreso.quien}}, para {{ingreso.de_que}} </p>
                  <p>Esta en {{ingreso.donde_esta}}, {{ingreso.date}}</p>
                </li>
              </ul>
            </div>

            <!-- Gastos -->
            <div class="tab-pane fade" id="gastos" role="tabpanel" aria-labelledby="gastos-tab">
              <div class="p-2 text-right">
                <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#agregarGastos"> Nuevo </button>                          
              </div>
              <ul class="list-group">
                <li class="list-group-item" v-for="gasto in gastos">
                  <h4><small>Monto,</small> {{gasto.monto}}$</h4>
                  <p>distribucion, {{gasto.distribucion}} </p>
                  <p>detalles, {{gasto.detalles}} </p>
                </li>
              </ul>
            </div>

            <!-- Distribuciones -->
            <div class="tab-pane fade" id="distribuciones" role="tabpanel" aria-labelledby="distribuciones-tab">
              <div class="p-2 text-right">
                Total porcentaje : {{sumPorcentaje}}% <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#addDistribuciones"> Distribuciones </button>                          
              </div>
              <ul class="list-group">
                <li class="list-group-item" v-for="distri in distribuciones">
                  <h4><small>{{distri.nombre}}</small> , {{distri.porcentaje}}%</h4>
                </li>
              </ul>              
            </div>
          </div>        
        </div>
      </div>
    </div>    

    <!-- Modal Ingresos -->
    <div class="modal fade" id="agregarIngresos" tabindex="-1" role="dialog" aria-labelledby="agregarIngresosLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="agregarIngresosLabel">Ingresos</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">        
            <div class="form-group">
              <label for="">Monto</label>
              <input type="text" v-model='i.monto' class="form-control" placeholder="Ingrese el monto">
            </div>
            <div class="form-group">
              <label for="">De Quien</label>
              <input type="text" v-model='i.quien' class="form-control" placeholder="De quien la plata">
            </div>     
            <div class="form-group">
              <label for="">De que</label>
              <input type="text" v-model='i.de_que' class="form-control" placeholder="De que la plata">
            </div>     
            <div class="form-group">
              <label for="">Donde esta?</label>
              <input type="text" v-model='i.donde_esta' class="form-control" placeholder="Donde esta la plata">
            </div>                
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-success" @click="addIngresos()">Guardar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Gastos -->
    <div class="modal fade" id="agregarGastos" tabindex="-1" role="dialog" aria-labelledby="agregarGastosLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="agregarGastosLabel">Gastos</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">        
            <div class="form-group">
              <label for="">Monto</label>
              <select v-model="g.distribucion_id" class="form-control">
                <option v-for="dis in distribuciones" v-bind:value="dis._id" >{{dis.nombre}}, {{dis.porcentaje}}</option>
              </select>
            </div> 
            <div class="form-group">
              <label for="">Monto</label>
              <input type="text" v-model='g.monto' class="form-control" placeholder="Ingrese el monto">
            </div>  
            <div class="form-group">
              <label for="">Detalles</label>
              <input type="text" placeholder="Detalles" v-model="g.detalles" class="form-control">
            </div>                  
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-success" @click="addGastos()">Guardar</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Distribuciones -->
    <div class="modal fade" id="addDistribuciones" tabindex="-1" role="dialog" aria-labelledby="addDistribucionesLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addDistribucionesLabel">Distribuciones</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">        
            <div class="form-group">
              <label for="">Nombre Distribucion</label>
              <input type="text" v-model='d.nombre' class="form-control" placeholder="Ingrese el nombre">
            </div>                    
            <div class="form-group">
              <label for="">Porcentaje</label>
              <input type="text" v-model='d.porcentaje' class="form-control" placeholder="Ingrese el porcentaje">
            </div>                    
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-success" @click="addDistribuciones()">Guardar</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <script src="moment.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="myVue.js"></script>
</body>
</html>