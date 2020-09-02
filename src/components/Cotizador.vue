<template>
  <div>
    <div class="row">
      <!-- aca ingresamos las medidas -->
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <!-- ancho -->
            <h5 class="card-title">Insgresa las medidas de los que quieres enmarcar</h5>
            <label>Ancho</label>
            <input type="email" class="form-control" required="required" v-model="Ancho" />
            <!-- lago -->
            <label>Largo</label>
            <input type="email" class="form-control" required="required" v-model="Largo" />
          </div>
        </div>
      </div>

      <!-- aca seleccionamos como queremos enmarcar -->
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Selecciona como quieres enmarcar</h5>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Vidrio Sencillo</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Vidrio Opaco</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">passepartout</label>
            </div>

            <!-- aca va la lista de molduras disponibles -->

            <ul id="Molduras">
              <li v-for="TipoMolduras in TipoMoldura">{{TipoMoldura.moldura}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cotizador",
  data() {
    return {
      Ancho: "",
      Largo: "",
    };
  },
};
</script>

<style>
</style> 