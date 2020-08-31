<template>
  <div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Insgresa las medidas de los que quieres enmarcar</h5>
            <label>Ancho</label>
            <input type="email" class="form-control" required="required" v-model="Ancho" />
            <label>Largo</label>
            <input type="email" class="form-control" required="required" v-model="Largo" />
          </div>
        </div>
      </div>
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
            <select class="form-control form-control-lg">
              <option>Large select</option>
              <option>Moldura Espejo 6cm</option>
              <option>Moldura Espejo 9cm</option>
              <option>Moldura Plana 2cm</option>
              <option>Moldura Plana 3cm</option>
              <option>Moldura Plana 6cm</option>
              <option>Moldura Plana 10cm</option>
              <option>Moldura Corniza</option>
            </select>

            <a href="#" class="btn btn-primary">Cotiza</a>
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