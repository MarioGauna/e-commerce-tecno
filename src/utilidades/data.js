import image1 from "../image/imagen1.jpg"
import image2 from "../image/imagen2.jpg"
import image3 from "../image/imagen3.jpg"
import image4 from "../image/imagen4.jpg"
import image5 from "../image/imagen5.jpg"
import image6 from "../image/imagen6.jpg"
import image7 from "../image/imagen7.jpg"
import image8 from "../image/imagen8.jpg"
import image9 from "../image/imagen9.jpg"
import image10 from "../image/imagen10.jpg"
import image11 from "../image/imagen11.jpg"
import image12 from "../image/imagen12.jpg"
import image13 from "../image/imagen13.jpg"
import image14 from "../image/imagen14.jpg"
import image15 from "../image/imagen15.jpg"
import image16 from "../image/imagen16.jpg"
import image17 from "../image/imagen17.jpg"
import image18 from "../image/imagen18.jpg"
import image19 from "../image/imagen19.jpg"
import image20 from "../image/imagen20.jpg"
import image21 from "../image/imagen21.jpg"

const data = [
    {
        id: 1,
        name: "Ryzen 3 3100",
        description:"The AMD Ryzen 3 3100 is a desktop processor with 4 cores, launched in April 2020. It is part of the Ryzen 3 lineup, using the Zen 2 (Matisse) architecture with Socket AM4. Thanks to AMD Simultaneous Multithreading (SMT) the core-count is effectively doubled, to 8 threads. Ryzen 3 3100 has 16MB of L3 cache and operates at 3.6 GHz by default, but can boost up to 3.9 GHz, depending on the workload. AMD is making the Ryzen 3 3100 on a 7 nm production node using 3,800 million transistors. ",
        stock: 10,
        price: 1,
        image: image1,
        categoryId: 1,
        ofertaId: 1,
    },
    {
        id: 2,
        name: "Ryzen 5 3600",
        description:"The AMD Ryzen 5 3600 is a desktop processor with 6 cores, launched in July 2019. It is part of the Ryzen 5 lineup, using the Zen 2 (Matisse) architecture with Socket AM4. Thanks to AMD Simultaneous Multithreading (SMT) the core-count is effectively doubled, to 12 threads. Ryzen 5 3600 has 32MB of L3 cache and operates at 3.6 GHz by default, but can boost up to 4.2 GHz, depending on the workload. AMD is making the Ryzen 5 3600 on a 7 nm production node using 3,800 million transistors. ",
        stock: 10,
        price: 1,
        image: image2,
        categoryId: 1,
        ofertaId: 2,
    },
    {
        id: 3,
        name: "Ryzen 7 3800x",
        description:"The AMD Ryzen 7 3800X is a desktop processor with 8 cores, launched in July 2019. It is part of the Ryzen 7 lineup, using the Zen 2 (Matisse) architecture with Socket AM4. Thanks to AMD Simultaneous Multithreading (SMT) the core-count is effectively doubled, to 16 threads. Ryzen 7 3800X has 32MB of L3 cache and operates at 3.9 GHz by default, but can boost up to 4.5 GHz, depending on the workload. AMD is building the Ryzen 7 3800X on a 7 nm production process using 3,800 million transistors.",
        stock: 20,
        price: 1,
        image: image3,
        categoryId: 1,
        ofertaId:2,
    },
    {
        id: 4,
        name: "Asus Pro WS X570-Ace",
        description:"ASUS Pro Workstation motherboards are designed for professionals in AI training, deep learning, animation, 3D rendering or media production. Featuring expandable graphics, extensive storage, impressive connectivity and exceptional overall performance and reliability, Pro Workstation motherboards are the ideal solution for creative professionals. Each motherboard includes centralized management software with support for out-of-band management, so they're also an efficient and cost-effective option for IT administrators.",
        stock: 32,
        price: 1,
        image: image4,
        categoryId: 2,
        ofertaId:1,
    },
    {
        id: 5,
        name: "Asus ROG Crosshair VIII Formula",
        description:"ROG has partnered with EK Water Blocks to create an integrated VRM water-cooling solution that keeps the massive power of the latest AMD Ryzen processors under control. Keeping with the water-cooling theme, the ROG Crosshair VIII Formula features on-board lighting that casts a rainfall design which pops against the board's mirror finish and is accented by the ROG logo. With its incredible cooling performance and gamer-oriented features, ROG Crosshair VIII Formula is the perfect foundation for your next high-performance gaming rig​.",
        stock: 20,
        price: 1,
        image: image5,
        categoryId: 2,
        ofertaId:2,
    },
    {
        id: 6,
        name: "Asus ROG Strix X570-E Gaming",
        description:"The ROG Strix X570-E Gaming motherboard delivers the quintessential ROG experience with a compelling mix of features and undeniable style that provide the ideal foundation for building a powerful ATX gaming system. Next-generation wireless networking delivers the smoothest online gameplay and a comprehensive cooling options ensure stable performance. Topped off with futuristic styling with onboard illumination, ROG Strix X570-E Gaming equips you with all you need to build a formidable weapon to rise above the rest.",
        stock: 20,
        price: 1,
        image: image6,
        categoryId: 2,
        ofertaId:2,
    },
    {
        id: 7,
        name: "Corsair Vengeance LPX 16 GB",
        description:"La memoria LPX Vengeance está diseñada para overclocking de alto rendimiento. El lector de SP de calor está hecho de aluminio puro para una disipación de calor más rápida, y la PCB de rendimiento personalizado ayuda a gestionar el calor y proporciona un espacio superior para overclocking en la cabeza. Cada IC es seleccionado individualmente para el potencial de rendimiento. El formato DDR4 está optimizado para las placas base Intel DDR4 más recientes y ofrece frecuencias más altas, mayor ancho de banda y menor consumo de energía que los módulos DDR3. Los módulos Vengeance LPX DDR4 están probados en compatibilidad en las placas base Intel DDR4 para un rendimiento rápido y fiable. Están disponibles en varios colores para que coincida con su placa base, sus componentes o simplemente con su estilo.",
        stock: 20,
        price: 1,
        image: image7,
        categoryId: 3,
        ofertaId: 2,
    },
    {
        id: 8,
        name: "Crucial Ballistix RGB 16 GB",
        description:"Crucial Ballistix RGB gaming memory is designed for high-performance overclocking and is ideal for gamers and performance enthusiasts looking to push beyond standard limits. Customize your rig with 16 RGB LEDs in 8 zones on each module and control light patterns and brightness with software utilities.",
        stock: 20,
        price: 1,
        image: image8,
        categoryId: 3,
        ofertaId:1,
    },
    {
        id: 9,
        name: "G.Skill Trident Z RGB 32 GB",
        description:"Diseñado y optimizado para una compatibilidad total en los últimos procesadores AMD Ryzen 3000 de la serie en placas base con chipset AMD X570, Trident Z Neo ofrece un rendimiento de memoria sin igual y una iluminación RGB vibrante a cualquier PC de juego o estación de trabajo con CPU AMD Ryzen 3000 y placas base AMD X570.",
        stock: 20,
        price: 1,
        image: image9,
        categoryId: 3,
        ofertaId:2,
    },
    {
        id: 10,
        name: "Sapphire Radeon RX 590",
        description:"The Radeon RX 590 is a performance-segment graphics card by AMD, launched on November 15th, 2018. Built on the 12 nm process, and based on the Polaris 30 graphics processor, in its Polaris 30 XT variant, the card supports DirectX 12. This ensures that all modern games will run on Radeon RX 590. The Polaris 30 graphics processor is an average sized chip with a die area of 232 mm² and 5,700 million transistors. It features 2304 shading units, 144 texture mapping units, and 32 ROPs. ",
        stock: 20,
        price: 1,
        image: image10,
        categoryId: 4,
        ofertaId:1,
    },
    {
        id: 11,
        name: "MSI Radeon RX 5600 XT",
        description:"The Radeon RX 5600 XT is a performance-segment graphics card by AMD, launched on January 21st, 2020. Built on the 7 nm process, and based on the Navi 10 graphics processor, in its Navi 10 XLE variant, the card supports DirectX 12. This ensures that all modern games will run on Radeon RX 5600 XT. The Navi 10 graphics processor is an average sized chip with a die area of 251 mm² and 10,300 million transistors. Unlike the fully unlocked Radeon RX 5700 XT, which uses the same GPU but has all 2560 shaders enabled,",
        stock: 20,
        price: 1,
        image: image11,
        categoryId: 4,
        ofertaId:2,
    },
    {
        id: 12,
        name: "Asus Radeon RX 6900 XT TUF",
        description:"The Radeon RX 6900 XT is an enthusiast-class graphics card by AMD, launched on October 28th, 2020. Built on the 7 nm process, and based on the Navi 21 graphics processor, in its Navi 21 XTX variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on Radeon RX 6900 XT. Additionally, the DirectX 12 Ultimate capability guarantees support for hardware-raytracing, variable-rate shading and more, in upcoming video games. The Navi 21 graphics processor is a large chip with a die area of 520 mm² and 26,800 million transistors. It features 5120 shading units, 320 texture mapping units, and 128 ROPs.",
        stock: 20,
        price: 1,
        image: image12,
        categoryId: 4,
        ofertaId:2,
    },
    {
        id: 13,
        name: "Western Digital Caviar Blue 500 GB",
        description:"Boost your PC storage with WD Blue drives, the brand designed just for desktop and all-in-one PCs with a variety of storage capacities.",
        stock: 20,
        price: 1,
        image: image13,
        categoryId: 5,
        ofertaId:2,
    },
    {
        id: 14,
        name: "Kingston A400 120 GB M.2-2280",
        description:"Kingston’s A400 solid-state drive dramatically improves the responsiveness of your existing system with incredible boot, loading and transfer times compared to mechanical hard drives. Powered by a latest gen controller for read and write speeds up to 500MB/s and 450MB/s 1 , this SSD is 10x faster than a traditional hard drive 1 for higher performance, ultra-responsive multi-tasking and an overall faster system.",
        stock: 20,
        price: 1,
        image: image14,
        categoryId: 5,
        ofertaId:2,
    },
    {
        id: 15,
        name: "Sabrent Rocket 4 Plus 4 TB",
        description:"Sabrent is a leading provider of innovative consumer electronics. We are committed to designing and developing products that provide the utmost in quality, dependability, and value. Sabrent strives for excellence with each product we develop by providing cutting-edge features at affordable prices.",
        stock: 20,
        price: 1,
        image: image15,
        categoryId: 5,
        ofertaId:1,
    },
    {
        id: 16,
        name: "Corsair CV 650 W 80+ Bronze Certified",
        description:"CV SERIES™ CV650 POWER SUPPLY QUIET AND DEPENDABLE 80 PLUS BRONZE EFFICIENCY ULTRA EFFICIENT CV series is 80 PLUS Bronze certified, providing up to 88% efficiency for less heat and lower energy costs. CONTINUOUS, RELIABLE OUTPUT Like all CORSAIR power supplies, the CV Series does exactly what it says it does: deliver continuous power at full capacity, no matter which wattage variant you choose. ",
        stock: 20,
        price: 1,
        image: image16,
        categoryId: 6,
        ofertaId:2,
    },
    {
        id: 17,
        name: "EVGA G3 550 W 80+ Gold Certified",
        description:"Unleash the next generation in power with the EVGA SuperNOVA 550 G3 Power Supply. Based on the award winning G2 series Power Supplies from EVGA, This power supply features 80 PLUS Gold rated efficiency, and clean, continuous power to every component. The ECO Thermal Control Fan System offers fan modes to provide zero fan noise during low load operations.",
        stock: 20,
        price: 1,
        image: image17,
        categoryId: 6,
        ofertaId:2,
    },{
        id: 18,
        name: "SeaSonic PRIME Ultra Titanium 1000 W 80+ Titanium Certified",
        description:"Its Ultra-high efficiency and outstanding performance are the fine results of Seasonic?s continuous commitment to innovation and advancement. Improved low-load efficiency, highly suppressed ripple noise and a generous 12-year manufacturer?s warranty are just some of the characteristics that set these series apart from other power supplies on the market.",
        stock: 20,
        price: 1,
        image: image18,
        categoryId: 6,
        ofertaId:1,
    },
    {
        id: 19,
        name: "Cooler Master MasterBox Q500L",
        description:"The Master Box Q500L supports a standard ATX motherboard and PSU in a highly compact layout. With the same exterior dimensions as the Master Box Q300L, support for a standard ATX motherboard was made possible by maximizing the usage of internal space. Although the PSU is mounted by default at the top/front of the chassis, the mounting bracket allows for the repositioning of the PSU depending on preference and form factor.",
        stock: 20,
        price: 1,
        image: image19,
        categoryId: 7,
        ofertaId:1,
    },{
        id: 20,
        name: "Corsair 5000D AIRFLOW",
        description:"El CORSAIR 5000D AIRFLOW es un gabinete ATX semitorre que muestra tu PC y no los cables. Un panel frontal optimizado para el flujo de aire proporciona la máxima ventilación a tu sistema, mientras que la gestión de cables CORSAIR RapidRoute facilita mantener los cables ocultos. Dos ventiladores CORSAIR AirGuide ofrecen flujo de aire dirigido y una bandeja de placa base con ventilador personalizable permite instalar varios radiadores de 14.1 pulgadas (360 mm).",
        stock: 20,
        price: 1,
        image: image20,
        categoryId: 7,
        ofertaId:1,
    },{
        id: 21,
        name: "Thermaltake Core P3",
        description:"Lleva la presentación al siguiente nivel con el chasis Core P3 TG Open Frame de Thermaltake. El diseño totalmente modular del Core P3 permite flexibilidad para diseños de colocación de 3 vías (montaje en pared, horizontal y vertical), ubicaciones de diseño de GPU dual: horizontal y vertical (TT Gaming Riser Cable incluido) y ubicaciones de colocación para sistemas de soporte AIO nativo y refrigeración líquida.",
        stock: 20,
        price: 1,
        image: image21,
        categoryId: 7,
        ofertaId:1,
    }
];
export default data;