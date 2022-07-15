import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';

@Injectable()
export class ProductosService {
  constructor() {}

  listaDeProductos = [
    {
      id: 1,
      nombre: 'Redragon Zeus X H510-rgb',
      precio: 8929,
      descripcion: 'Retroiluminación RGB, micrófono, hq...',
      descripcionProducto:
        'Los Zeus son auriculares premium diseñados para disfrutar al 100% del magnífico mundo sonoro de los mejores juegos: sus drivers de 53 mm y su micrófono con cancelación de ruidos te darán siempre una calidad de recepción y transmisión de audio extraordinaria. Poseen conectividad doble: USB 7.1 virtual, y analógica 3,5 mm stereo. El micrófono y el cable son desmontables, y son compatibles PC, consolas y smartphones.',
      imagen:
        'https://mexx-img-2019.s3.amazonaws.com/Auricular-Gamer-Redragon-Zeus-H510-Rgb_41187_1.jpeg',
      imagenes: [
        'https://d3ugyf2ht6aenh.cloudfront.net/stores/955/018/products/alpha_zeus_x_square_black_21-68d3b1412c2656b64d16386373029383-640-0.png',
        'https://artify.cl/thumbs/Redragon-h510-rgb-zeus-x-juego-de-auriculares-micr%C3%B3fono/169764-6.jpeg',
        'https://www.xtremetecpc.com/wp-content/uploads/2021/11/H510-RGB-3.jpg',
      ],
      marca: 'redragon',
      producto: 'auriculares',
    },
    {
      id: 2,
      nombre: 'Redragon Scylla H901',
      precio: 2865,
      descripcion: '20k Hz,Sensibilidad: 113 dB, hq...',
      descripcionProducto: '',
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_2X_960720-MLA49533572618_032022-F.webp',
      marca: 'redragon',
      producto: 'auriculares',
    },
    {
      id: 3,
      nombre: 'Mouse pad Logitech G240',
      precio: 1999,
      descripcion: 'Speed Gaming Tela Antideslizante...',
      imagen:
        'https://outtec.com.ar/wp-content/uploads/2021/10/Logitech-Pad-Mouse-Flexible-G240-943-000093-1.jpg',
      descripcionProducto: '',
      marca: 'logitech',
      producto: 'mousepads',
    },
    {
      id: 4,
      nombre: 'Redragon Themis 2 gamer',
      precio: 2655,
      descripcion: 'Sonido de alta calidad mediante...',
      descripcionProducto: '',
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_639168-MLA42859694926_072020-O.jpg',
      imagenes: [
        'https://d2r9epyceweg5n.cloudfront.net/stores/001/574/495/products/redragon-auricular-h220-themis-2-61-5971a739abaf15fb4316245135032688-1024-1024.png',
        'https://www.venex.com.ar/products_images/1616525602_h220_themis_3.png',
        'https://www.venex.com.ar/products_images/1616525603_h220_themis_1.png',
      ],
      marca: 'redragon',
      producto: 'auriculares',
    },
    {
      id: 5,
      nombre: 'Redragon Griffin M607 negro',
      precio: 1969,
      descripcion: 'El sistema de detección de movi..',
      descripcionProducto: '',
      imagen:
        'http://d2r9epyceweg5n.cloudfront.net/stores/374/879/products/griffin-21-6a40abb4862333239116190462014954-640-0.jpg',
      imagenes: [
        'https://www.pchouse.com.py/wp-content/uploads/2021/07/MOUSE-REDRAGON-M607-GRIFFIN-GAMING-RGB-7200DPI.png',
        'https://gameplaysparaguay.com/wp-content/uploads/2021/05/mouse_redragon-griffin-2.jpg',
        'https://www.pccompu.com.uy/imgs/productos/productos34_34267.jpg',
      ],
      marca: 'redragon',
      producto: 'mouses',
    },
    {
      id: 6,
      nombre: 'Auricular gamer Genius HS-G560',
      precio: 5569,
      descripcion: 'Confort para largas sesiones de juego. ..',
      descripcionProducto: '',
      imagen:
        'https://www.korolos.com.co/wp-content/uploads/2020/08/KORO-1-24.jpg',
      marca: 'genius',
      producto: 'auriculares',
    },
    {
      id: 7,
      nombre: 'Monitor Hp M22f 21.5 Ips',
      precio: 42229,
      descripcion: 'Retro Led Fhd Vga+hdmi 16:9 5ms...',
      descripcionProducto: '',
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_830549-MLA48497235861_122021-O.webp',
      marca: 'hp',
      producto: 'monitores',
    },
    {
      id: 8,
      nombre: 'Monitor gamer Samsung F24T35 ',
      precio: 53929,
      descripcion: 'led 24 " azul y gris oscuro...',
      descripcionProducto:
        'Un monitor a tu medida\nCon su pantalla LED no solo ahorrás energía ya que su consumo es bajo sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.\nUna experiencia visual de calidad\nEste monitor de 24" te va a resultar cómodo para estudiar trabajar o ver una película en tus tiempos de ocio. Asimismo su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.',
      imagen:
        'http://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/04/12093123/240.jpg',
      imagenes: [
        'https://moncasecomputer.com/wp-content/uploads/2021/02/monitor-samsung-24-f24t350fhl-ips-vga-hdmi-2.jpg',
        'https://moncasecomputer.com/wp-content/uploads/2021/02/monitor-samsung-24-f24t350fhl-ips-vga-hdmi-5.jpg',
        'https://moncasecomputer.com/wp-content/uploads/2021/02/monitor-samsung-24-f24t350fhl-ips-vga-hdmi-3.jpg',
      ],
      marca: 'samsung',
      producto: 'monitores',
    },
    {
      id: 9,
      nombre: 'Mouse Gamer Logitech G203',
      precio: 3169,
      descripcion: 'RGB configurable, sensor optico..',
      descripcionProducto: '',
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_665863-MLA43567531465_092020-O.webp',
      marca: 'logitech',
      producto: 'mouses',
    },
    {
      id: 10,
      nombre: 'Teclado Logitech G213 Prodigy',
      precio: 7381,
      descripcion: 'Teclado qwerty, iluminacion RGB.',
      descripcionProducto: '',
      imagen: 'https://katech.com.ar/wp-content/uploads/TGA056-1.jpg',
      marca: 'logitech',
      producto: 'teclados',
    },
    {
      id: 8,
      nombre: 'Monitor gamer Samsung F24T35 ',
      precio: 53929,
      descripcion: 'led 24 " azul y gris oscuro...',
      descripcionProducto:
        'Un monitor a tu medida\nCon su pantalla LED no solo ahorrás energía ya que su consumo es bajo sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.\nUna experiencia visual de calidad\nEste monitor de 24" te va a resultar cómodo para estudiar trabajar o ver una película en tus tiempos de ocio. Asimismo su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.',
      imagen:
        'http://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/04/12093123/240.jpg',
      imagenes: [
        'https://moncasecomputer.com/wp-content/uploads/2021/02/monitor-samsung-24-f24t350fhl-ips-vga-hdmi-2.jpg',
        'https://moncasecomputer.com/wp-content/uploads/2021/02/monitor-samsung-24-f24t350fhl-ips-vga-hdmi-5.jpg',
        'https://moncasecomputer.com/wp-content/uploads/2021/02/monitor-samsung-24-f24t350fhl-ips-vga-hdmi-3.jpg',
      ],
      marca: 'samsung',
      producto: 'monitores',
    },
  ];
}

/*
Prototipo Objeto-Producto:
    {
      id: ,
      nombre: '',
      precio: ,
      descripcion: '',
      descripcionProducto:'',
      imagen: '',
      imagenes:[];
      marca: '',
      producto: '',
    },
*/
