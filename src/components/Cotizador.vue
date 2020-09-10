<template>
  <div>
    <!-- aca ingresamos las medidas -->
    <div class="jumbotron">
      <h1 class="display-4">Enmarcaciones Leo</h1>
      <p>el taller de enmarcaiones de Chile</p>
      <hr class="my-4" />
      <div class="col" id="medidas">
        <div class="card-body">
          <h5 class="card-title">Ingresa las medidas de los que quieres enmarcar</h5>
          <!-- ancho -->
          <div class="row">
            <div class="col-sm-6">
              <label>Ancho</label>
              <input type="number" class="form-control" required="required" v-model="Ancho" />
            </div>
            <!-- lago -->
            <div class="col-sm-6">
              <label>Largo</label>
              <input type="email" class="form-control" required="required" v-model="Largo" />
            </div>
          </div>
        </div>

        <!-- aca seleccionamos como queremos enmarcar -->
        <div class="col" id="seleciona enmarcado">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Selecciona como quieres enmarcar</h5>

              <!-- Seleciona el tipo de vidrio -->
              <select class="custom-select" value required="required" v-model:="Cristal">
                <option selected>Tipo Vidrio</option>
                <option
                  v-for="vidrio in vidrios"
                  v-bind:value="vidrio.value"
                  :key="vidrio"
                >{{ vidrio.id }}</option>
              </select>
              <!-- seleciona si lleva margen -->
              <select class="custom-select" value required="required" v-model:="Margen">
                <option selected>Tipo Margen</option>
                <option
                  v-for="margen in margenes"
                  v-bind:value="margen.value"
                  :key="margen"
                >{{ margen.id }}</option>
              </select>

              <!-- aca va la lista de molduras disponibles -->
              <!-- misma forma de selecionar pero con objeto -->
              <select class="custom-select" value required="required" v-model:="Diseño">
                <option selected>Tipo Moldura</option>
                <option
                  v-for="moldura in molduras"
                  v-bind:value="moldura.value"
                  :key="moldura"
                >{{ moldura.id }}</option>
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
  </div>
</template>

<script>
export default {
  name: "Cotizador",
  data() {
    return {
      Ancho: "",
      Largo: "",
      Cristal: [1],
      Margen: [1],
      Diseño: [1],

      molduras: [
        { id: "moldura plana 2cm", price: 7000 },
        { id: "moldura plana 3cm", price: 7000 },
        { id: "moldura plana 5cm", price: 7000 },
        { id: "moldura plana 6cm", price: 8000 },
        { id: "moldura plana 10cm", price: 9000 },
      ],
      margenes: [
        { id: "passepartout 5cm", price: 7000 },
        { id: "passepartout 10cm", price: 7000 },
        { id: "passepartout 15cm", price: 7000 },
      ],
      vidrios: [
        { id: "vidrio sencillo", price: 7000 },
        { id: "vidrio opaco", price: 7000 },
      ],
    };
  },
  computed: {
    // aca calculamos los metros cuadrados y lineales
    metrolineal: function () {
      return ((Number(this.Ancho) + Number(this.Largo)) / 100) * 2;
    },

    metrocuadrado: function () {
      return (Number(this.Largo) * Number(this.Ancho)) / 100;
    },
  },
};
</script>

<style>
</style> 