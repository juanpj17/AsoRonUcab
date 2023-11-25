<template>
    <div>
         <b-card no-body class="overflow-hidden" style="max-width: 600px;" header="Carnet de afiliacion"  header-bg-variant="light">
             <b-row no-gutters>
                <b-col md="6">
                     <b-card-img  :src="qrCodeData" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body>
                        <b-card-text  style="font-size: 15px; text-align: left;">
                        Nombres:
                        <br>
                         {{ texto  }}
                        Apellidos:
                         <br>
                        {{ texto  }}
                        CI:
                        <br>
                        {{ texto  }}
                         Codigo identificador: 
                         <br>
                        {{ texto  }}
                         </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>
  </template>
  
  <script>
  import QRCode from 'qrcode'
  export default {
    data() {
      return {
        //imagen: 'ruta-de-la-imagen',
        titulo: 'Título de afiliación',
        texto: 'Texto de afiliación',
        qrCodeData: null,
      };
    },created() {
    this.generateQRCode();
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
  
  <style scoped>
  .card {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .image-container {
    margin-right: 10px;
  }
  
  .image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .title {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  .text {
    font-size: 14px;
  }
  </style>