<template>
  <div>
    <h1>Generador de Códigos QR</h1>
    <div>
      <b-button @click="generateQRCode" variant="primary" class="generate-button">
        Generar QR
      </b-button>
    </div>
    <div v-if="qrCodeData" class="mt-3">
      <img :src="qrCodeData" alt="Código QR" />
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  data() {
    return {
      qrCodeData: null,
    }
  },
  methods: {
    generateQRCode() {
      const textToEncode = 'www.google.com'; // Puedes cambiar esto a tus necesidades
      QRCode.toDataURL(textToEncode, (err, url) => {
        if (err) {
          console.error(err);
        } else {
          this.qrCodeData = url;
        }
      });
    },
  },
};
</script>

<style>
.generate-button {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
  transition: background-color 0.3s, border-color 0.3s;
}

.generate-button:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
