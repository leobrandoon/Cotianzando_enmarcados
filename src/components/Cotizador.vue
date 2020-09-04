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

            <!-- Seleciona el tipo de vidrio -->
            <select class="custom-select" value required="required" v-model:="Cristal">
              <option selected>Tipo Vidrio</option>
              <option value="1">Sencillo</option>
              <option value="2">Anti Reflejo</option>
            </select>
            <!-- seleciona si lleva margen -->
            <select class="custom-select" value required="required" v-model:="Margen">
              <option selected>Tipo Margen</option>
              <option value="1">passepartout</option>
              <option value="2">Folia</option>
            </select>

            <!-- aca va la lista de molduras disponibles -->

            <select class="custom-select" value required="required" v-model:="Tipomol">
              <option selected>Tipo Moldura</option>
              <option value="1">Plana</option>
              <option value="2">Espejo</option>
              <option value="3">Corniza</option>
              <option value="3">Diseño</option>
            </select>

            <select class="custom-select" value required="required" v-model:="Diseño">
              <option selected>Diseño Moldura</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <!-- misma forma de selecionar pero con objeto -->
            <select class="custom-select" value required="required" v-model:="Diseño">
              <option selected>Diseño Moldura array</option>
              <option
                v-for="moldura in molduras"
                v-bind:value="moldura.value"
                :key="moldura"
              >{{ moldura.text }}</option>
            </select>
            <div class="row">
              <div class="col-sm-6">
                <div class="card-body">Total por Enmarcar</div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-header">Aca debe ir el $total</div>
                </div>
              </div>
            </div>
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
      Cristal: "",
      Margen: "",
      Tipomol: "",
      Diseño: "",

      molduras: [
        { text: "moldura plana 3cm", value: "" },
        { text: "moldura plana 5cm", value: "" },
        { text: "moldura plana 6cm", value: "" },
        { text: "moldura plana 7cm", value: "" },
      ],
    };
  },
};
</script>

<style>
</style> 