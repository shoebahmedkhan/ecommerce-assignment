 const initialState = {
products :[{
    image : "Assets/AC.jpg",
    name : "Whirlpool 1.5 Ton 3 Star ",
    desc : `"Brand will contact for installation within 24-36 hrs of delivery, Standard Installation ₹1500 @₹999 +Tax till 30th June 2021' & additional charges for core drilling, extra copper wire, stand/fitting & other accessories.Contact Whirlpool @ 18002081800.
    . Details
    Split AC with inverter compressor: variable speed compressor which adjusts power depending on heat load.
    Capacity: 1.5 Ton. Suitable for medium sized rooms (111 to 150 sq ft)
    Energy Rating: 3 Star. Annual Energy Consumption: 1071.03 Units. ISEER Value: 3.85
    Warranty: 1 year on product, 1 year on condenser, 10 years on compressor
    Copper Condenser Coil:  Better cooling and requires low maintenance
    Key Features: Intellisense Inverter Technology; Noise Level: 45 db; Ambient Temperature: 55 degree Celsius
    Features: 6th sense technology;  Dust Filter, Dehumidifier, Stabilizer free operation (145v-290v)."`,
    price : 39999,
    id : 1
},{
    image : "Assets/cooler.jpg",
    name : "Havells Koolaire ",
    desc : `"Capacity:- 51 LTR
    Product Dimensions:- 70x41.5x105
    Powerful Air Delivery In hot summer Powerful Blower fan ensure cool air all the time
    Fully Collapsable louvers Collapsable Louvers don’t allow Dust & insects to go inside the cooler
    Auto Drain Uniquely designed auto drain process make sure hassle free drainage of old & dirty water
    Completely Collapsible Louvers To prevent dust/insects entering the Air Cooler, Variable Speed: The Havells air cooler is equipped with three-speed settings for user’s choice of air delivery and cooling
    Dust Filter net To separate dust from air ensuring dust free air gets washed through wet wood wool pads. Air becomes cool & clean. Dust filter net also prevents insects from entering air cooler."`,
    price : 12000,
    id : 2
},{
    image : "Assets/DSLR.jpg",
    name : "Canon EOS 1500D ",
    desc : `"Sensor: APS-C CMOS Sensor with 24.1 MP (high resolution for large prints and image cropping)
    ISO: 100-6400 sensitivity range (critical for obtaining grain-free pictures, especially in low light)
    Image Processor: DIGIC 4+ with 9 autofocus points (important for speed and accuracy of autofocus and burst photography)
    Video Resolution: Full HD video with fully manual control and selectable frame rates (great for precision and high-quality video work)
    Connectivity: WiFi, NFC and Bluetooth built-in (useful for remotely controlling your camera and transferring pictures wirelessly as you shoot)
    Lens Mount: EF-S mount compatible with all EF and EF-S lenses (crop-sensor mount versatile and compact, especially when used with EF-S lenses)
    For any queries, please contact_us on: [1860-180-3366]
    Country of Origin: Taiwan."`,
    price : 30000,
    id : 3
},{
    image : "Assets/fridge.jpg",
    name : "Whirlpool 200 L 4 ",
    desc : `"Direct-cool refrigerator; 200 litres capacity.
    Energy Rating: 4 Star
    New crescent door Design
    Intellisense inverter technology
    Up to 12 hours of milk preservation during power cuts
    Up to 7 days of Garden freshness
    Warranty: 1 year on product, 10 years on compressor."`,
    price : 17000,
    id : 4
},{
    image : "Assets/Grinder.jpg",
    name : "Butterfly Jet Elite Mixer ",
    desc : `"About this item
    Wattage: 750 W; Voltage: 220-240V, 50-60Hz ; Revolution: 18500
    No of Jars: 4; Jar Size: 0.4,0.75,1 in Ltr; Jar Material: Stainless Steel jars and PC Juicer Jar; Body Material: ABS body; Cord Material: 180 CM; Blade Material: Stainless Steel; Speed Control: 3 Speed motor for faster and efficient grinding
    Motor Warranty: 2; Product Warranty: 2; Customer Care Number: 9362 01 9362
    Do not worry if you experience some burning smell when you run your mixer grinder for the 1st time .This is due to the motor varnish getting heated for the 1st time. The problem should not recur in subsequent uses. If it does, please contact Brand Service Centre
    Read Manual Before Use
    Powerful motor, Auto Switch Off: Yes; Aesthetically designed ABS body
    Elegant handle and unbreakable lid; Special ventilator to reduce motor heating. Coupler: Special grade Nylon couplers used for better durability"`,
    price : 5000,
    id : 5
},{
    image : "Assets/HPLaptop.jpg",
    name : "HP Pavilion Gaming",
    desc : `"3.0GHz AMD ryzen5-4600h 4th Gen processor
    8GB DDR4 RAM
    1TB 7200rpm hard drive + 256GB SSD
    15.6-Inch screen, nvidia GeForce GTX 1650 4GB Graphics
    Windows 10 Home operating system
    8 hours battery life, 1.98kg laptop"`,
    price : 120000,
    id : 6
},{
    image : "Assets/HPPrinter.jpg",
    name : "HP Deskjet 2331 Colour",
    desc : `"HIGHLY AFFORDABLE PRINTER FOR YOUR PRINT, SCAN AND COPY NEEDS
    SIMPLE SET UP FROM YOUR PC: Use the HP Smart app to set up with USB in few easy steps
    RELIABLE CONNECTIVITY : High-speed USB 2.0 Connectivity
    SAVE YOUR PRODUCTIVE TIME: High speed printing for Home needs; Black: Up to 7.5 ppm (ISO) ;Color: Up to 5.5 ppm (ISO)
    VERSATILE PRINT/MEDIA OPTIONS: Supports A4; B5; A6; DL envelope"`,
    price : 23000,
    id : 7
},{
    image : "Assets/LGTV.jpg",
    name : "LG 80 cm (32 inches) HD  ",
    desc : `"Resolution: HD Ready (1366x768) | Refresh Rate: 50 hertz
    Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices
    Sound output: 10 Watts Output I 2 Speakers | DTS Virtual:X | Sound Type : Down Firing
    Smart TV Features: Web OS Smart TV | Wi-Fi | Home Dashboard | Screen Mirroring | Mini TV Browser | Multi-Tasking | Office 365
    Display: Active HDR | Display Type: Flat | BackLight Module: Slim LED"`,
    price : 70000,
    id : 8
},{
    image : "Assets/Speaker.jpg",
    name : "iBall Musi Boom IPX7 ",
    desc : `"Powerful Bass: Take the musical ‘boom’ with you wherever you go
    IPX7 Waterproof: Especially engineered rugged exterior equipped to withstand any climatic condition
    24 hours of playtime: Lasts a day without having to charge it
    TWS Technology - Connect 2 Musi Boom speakers and play as Wireless 2.0 speaker
    Hands-free conversations with built-in Mic, in Bluetooth mode
    Free carry belt bundled - easily portable"`,
    price : 7000,
    id : 9
},{
    image : "Assets/webcam.jpg",
    name : "Rapoo C200 720p HD ",
    desc : `"100° Super Wide-Angle Webcam with Microphone for Live Broadcast Video Calling Conference
    Use for Live Broadcast Video Calling Conference
    Colour - Black
    Super wide-angle lens creates a more wide image
    "`,
    price : 5000,
    id : 10
}],
productsQty:0,
}

const ProductReducer = (state= initialState,action)=>{
    switch (action.type){
        case "SET_PRODUCT":
            return{
                ...state, products:[...state.products,action.item]
            }
        case "ADD_PRODUCT":
            return{
                ...state, productsQty:action.item
            }
            default:
                return state;
    }
   
}
export default ProductReducer;
