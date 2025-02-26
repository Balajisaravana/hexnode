import { achivementImages, kioskImages, kioskTabImages, platformImages, sliderImages, testimonalIamges } from "../constant";

export const AchievementsData = [
    { src: achivementImages.Idc, alt: 'Idc', href: "https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/", content : "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024." },
    { src: achivementImages.Gartner, alt: 'Gartner', href:"https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/",  content : "Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools."},
    { src: achivementImages.Forrester, alt: 'Forrester', href:"https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/", content : "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023."},
  ];

export const kioskTabData = [
    {
      "id": "single",
      "label": "Single App Kiosk",
      "title": "Powerful Single-App Kiosk solutions for enhanced control",
        "image": kioskTabImages.singleImg,
      "content": [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use Hexnode's Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices."
      ]
    },
    {
      "id": "multi",
      "label": "Multi-App Kiosk",
      "title": "Elevate efficiency with Multi-App Kiosk",
      "image": kioskTabImages.multiImg,
      "content": [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
        "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
        "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode."
      ]
    },
    {
      "id": "web",
      "label": "Web-based Kiosk",
      "title": "Explore the new way to manage web apps and websites",
      "image": kioskTabImages.webImg,
      "content": [
        "Let users access essential and approved web apps, website and files only.",
        "Make the best use of website kiosk with Hexnode's advanced settings.",
        "Tailor your experience to match your unique use case.",
        "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience."
      ]
    },
    {
      "id": "digital",
      "label": "Digital Signages",
      "title": "Capture attention with Digital Signage Kiosks",
      "image": kioskTabImages.digitalImg,
      "content": [
        "Transform your devices into captivating digital signage kiosks that grab attention.",
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        "Advertise and show off your brand aesthetics to attract customers in different ways.",
        "Take control with Hexnode to reestablish your brand's presence."
      ]
    },
    {
      "id": "asam",
      "label": "ASAM Kiosk",
      "title": "Unlock the power of Autonomous Single App Mode (ASAM)",
      "image": kioskTabImages.asamImg,
      "content": [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        "Configure ASAM effortlessly and elevate your user experience like never before."
      ]
    }
  ]
  
  export const kioskModeData = [
    {
        "id": 1,
        "title": "Effortless kiosk deployment & management",
        "image": kioskImages.effortImg,
        "content": "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
        "point": ""
    },
    {
        "id": 2,
        "title": "Customized interface for brand visibility",
        "image": kioskImages.interfaceImg,
        "content": "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
        "point": "Brand visibility"
    },
    {
        "id": 3,
        "title": "What more can you do with Hexnode kiosk?",
        "image": kioskImages.protectImg,
        "content": "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
        "point": "Data security"
    },
    {
        "id": 4,
        "title": "Secure and update your app ecosystem",
        "image": kioskImages.stremlineImg,
        "content": "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
        "point": "App management"
    },
    {
        "id": 5,
        "title": "Provide an easy-to-use interface for end-users",
        "image": kioskImages.easyuseImg,
        "content": "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
        "point": "Easy to use interface"
    }
]

export const testimonialsData = [
  {
    "quote": "Most complete MDM solution I found, and I tested many of them, including major names.",
    "name": "Dalibor Kruljac",
    "designation": "",
    "company": "KAMELEYA LTD",
    "image": testimonalIamges.daliborImg
  },
  {
    "quote": "It seemed to be in-line with everything we were looking at.",
    "name": "Chris Robinson",
    "designation": "Executive Account Manager",
    "company": "NCS",
    "image": testimonalIamges.chrisImg
  },
  {
    "quote": "Hexnode is of great value. Works great with Android and iOS!",
    "name": "Justin Modrak",
    "designation": "Technology Coordinator",
    "company": "East Troy Community School District",
    "image": testimonalIamges.justinImg
  }
]

export const sliderData = [
  { "src": sliderImages.costco, "alt": "Costco" },
  { "src": sliderImages.gorillas, "alt": "Gorillas" },
  { "src": sliderImages.hilton, "alt": "Hilton" },
  { "src": sliderImages.lowes, "alt": "Lowes" },
  { "src": sliderImages.merck, "alt": "Merck" },
  { "src": sliderImages.marriott, "alt": "Marriot" },
  { "src": sliderImages.polaris, "alt": "Polaris" },
  { "src": sliderImages.saic, "alt": "Saic" },
  { "src": sliderImages.wolt, "alt": "Wolt" },
  { "src": sliderImages.auto, "alt": "Automotive" }
]


export const platformsData = [
  { src: platformImages.Andriod, alt: 'Android' },
  { src: platformImages.Windows, alt: 'Windows'},
  { src: platformImages.Ios, alt: 'iOS'},
  { src: platformImages.AndriodTv, alt: 'Android TV'},
  { src: platformImages.AppleTv, alt: 'Apple TV'},
  { src: platformImages.AmazonFire, alt: 'Amazon Fire'}
  ]
export const footerContent = [{label: "Terms of Use", href: "https://www.hexnode.com/legal/terms-of-use/"},
  {label: "Privacy", href: "https://www.hexnode.com/legal/privacy-policy/"},
  {label: "Cookies", href: "https://www.hexnode.com/legal/cookies-policy/"}]
