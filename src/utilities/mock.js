import ATR from '../assets/menu/ATR.jpg'
import DobleNelson from '../assets/menu/DOBLE-NELSON.jpg'
import Macquiavelica from '../assets/menu/MACQUIAVELICA.jpg'
import Taparterias from '../assets/menu/TAPARTERIAS.jpg'
import Tranqui120 from '../assets/menu/tranqui-120.jpg'
import TripleCheeseBacon from '../assets/menu/TRIPLE-CHEESE-BACON.jpg'
import Vikinga from '../assets/menu/VIKINGA.jpg'
import Birras from '../assets/menu/birras.jpg'
import Quilombera from '../assets/menu/quilombera.jpg'
import Bajonera from '../assets/menu/BAJONERA.jpg'
import Tucson from '../assets/menu/tucson.jpg'
import Golosa from '../assets/menu/GOLOSA.jpg'
import MegaPapas from '../assets/menu/MEGA-PAPAS.jpg'
import TablaBelgica from '../assets/menu/tabla-belgica.jpg'
import Papax from '../assets/menu/papax.jpg'

const products = [
    {
        id: '1', 
        title: 'ATR',
        description: 'Medallón de carne vacuna, queso cheddar, panceta, huevo, cebolla caramelizada, barbacoa.', 
        image: ATR, 
        price: 50,
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '2', 
        title: 'Doble Nelson', 
        description: '2 Medallones de carne vacuna, doble queso cheddar, doble panceta, huevo, cebolla caramelizada, barbacoa.',
        image: DobleNelson,
        price: 50,
        type: 'hamburguesas',
        featured: true
    },
    {
        id: '3', 
        title: 'Macquiavelica', 
        description: 'Hamburguesa triple carne, triple danbo, jamón, lluvia de mac & cheese + bacon + lluvia de verdeo.',
        image: Macquiavelica, 
        price: 50,
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '4', 
        title: 'Taparterias',
        description: 'Triple carne, triple danbo, bacon, montaña de papas fritas + baño de cheddar y bacon picado.', 
        image: Taparterias, 
        price: 50,
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '5', 
        title: 'Tranqui 120', 
        description: 'Doble carne, doble provoleta, bacon, tomate y pesto.',
        image: Tranqui120, 
        price: 50,
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '6', 
        title: 'Triple Cheese Bacon',
        description: 'Hamburguesa con triple carne, triple cheddar y triple bacon.', 
        image: TripleCheeseBacon, 
        price: 50,
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '7', 
        title: 'Quilombera', 
        description: 'Doble carne, doble cheddar, bacon, salsa especial.',
        image: Quilombera, 
        price: 50,
        type: 'hamburguesas',
        featured: true
    },
    {
        id: '8', 
        title: 'Pintas', 
        description: 'Cervezas artesanales, ideales para arrancar a tomar tranqui.',
        image: Birras, 
        price: 50,
        type: 'bebidas',
        featured: true
    },
    {
        id: '9', 
        title: 'Vikinga', 
        description: 'Milanesa de ternera / pechuga de pollo, cheddar, papas fritas + cheddar, bacon, huevos y verdeo.',
        image: Vikinga, 
        price: 50,
        type: 'milanesas',
        featured: false
    },
    {
        id: '10', 
        title: 'Bajonera', 
        description: 'Cuádruple carne, triple danbo, doble jamón, bacon y huevo frito y alioli.',
        image: Bajonera, 
        price: 50,
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '11', 
        title: 'Tucson', 
        description: 'Combo mega burger y mega papas.',
        image: Tucson, 
        price: 50,
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '12', 
        title: 'Golosa', 
        description: 'Triple carne, triple cheddar, bacon y cebolla frita + alioli.',
        image: Golosa, 
        price: 50,
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '13', 
        title: 'Mega Papas', 
        description: 'Cheddar, panceta y verdeo',
        image: MegaPapas, 
        price: 50,
        type: 'parapicar',
        featured: false
    },
    {
        id: '14', 
        title: 'Tabla Belgica', 
        description: 'La imagen habla por si sola, nuggets, rabas, salsas, que mas podes pedir.',
        image: TablaBelgica, 
        price: 50,
        type: 'parapicar',
        featured: true
    }
]

export const getProducts = new Promise(res=>{
    res(products)
})