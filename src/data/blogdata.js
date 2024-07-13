
const blogData = [
    {
      id: 1,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/65f876efb56ef92d0a25512c_Screenshot%202024-03-18%20at%205.15.43%20PM-p-1080.png",
      title: "Pond Foundation Launches Groundbreaking Verification Platform",
      description: "Pond Foundation launches Earthtrust, a public platform for businesses and other organizations to prove their claims through radical transparency, data, and documentation.",
      date: "Mar 25, 2024",
      readMoreLink: ""
    },
    {
      id: 2,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/65ef07d1db7eed2a513d5917_Screenshot%202024-03-11%20at%201.30.38%20PM-p-1080.png",
      title: "Pond Foundation GHG Report ISO14064-1 Verified!",
      description: "The Pond Foundation's My Carbon Zero initiative calculates carbon emissions for members using GHG Protocol and ISO14064-1 standards. They've completed fourteen projects, including Guardian Capital Group in Canada. Guardian sought ISO certification, which was achieved in February 2024 after a process involving initial calculation, pre-verification audit, closing data gaps, and a full audit.",
      date: "Mar 11, 2024",
      readMoreLink: ""
    },
    {
      id: 3,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/656c7ec8b268271c7a07d813_1701350264402.jpeg",
      title: "Pond Foundation is Walking the Walk",
      description: "In our earlier post with our emissions report, we stated that our current Lifetime Carbon Balance was 42tCO2. Well, today, we’re happy to announce, we’re now at zero having bought these CRCs.",
      date: "Jan 16, 2024",
      readMoreLink: ""
    },
    {
      id: 4,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/64f0a96b3fc9d344273befc9_Steam%20Distillation%20Unit%20Chamoli-p-1080.jpeg",
      title: "AgriNet Becomes Newest Pond Foundation Member",
      description: "AgriNet, with operations in Chamoli District of Uttarakhand, northern India, has joined Pond Foundation.",
      date: "Sep 1, 2023",
      readMoreLink: ""
    },
    {
      id: 5,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/63e1350ab44781ef9852604b_news-sample-1-p-1080.jpg",
      title: "Buy food, make an impact",
      description: "A Message from Chris Langwallner, Founder and CEO of WhatIF Foods, partnering with us, Pond Foundation, the soils and farming communities in Northern Ghana.",
      date: "Aug 29, 2023",
      readMoreLink: ""
    },
    {
      id: 6,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/63e6230abd736953ad16f8a9_WaterSafe_Thumbnail-p-1080.jpg",
      title: "Launching project WaterSafe",
      description: "Project WaterSafe is an innovative project that will provide a sustainable clean water supply to communities in need in Ghana.",
      date: "Aug 29, 2023",
      readMoreLink: ""
    },
    {
      id: 7,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/64a3ca0abbfb3331b313f54d_Beverage%2BBottles.png",
      title: "Beverage packaging and the climate",
      description: "The climate-based justification of WhatIF Foods' choice of beverage packaging.",
      date: "Aug 29, 2023",
      readMoreLink: ""
    },
    {
      id: 8,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/649d7a284ed8a211310e44de_Screenshot%202023-06-29%20at%2014.33.33.png",
      title: "Pond Foundation's Greenhouse Gas Emissions Report: A Step Towards Carbon Neutrality",
      description: "In their latest report, the Pond Foundation provides an in-depth analysis of our greenhouse gas (GHG) emissions in 2022 and their Lifetime Carbon Balance (LCB) since 2020.",
      date: "Jul 4, 2023",
      readMoreLink: ""
    },
    {
      id: 9,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/649d7a284ed8a211310e44de_Screenshot%202023-06-29%20at%2014.33.33.png",
      title: "Pond Foundation Greenhouse Gas Accounting Report",
      description: "Recent publication of Pond Foundation Greenhouse Gas Accounting Report.",
      date: "Jun 30, 2023",
      readMoreLink: ""
    },
    {
      id: 10,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/646356551fa7a58b33e1643f_cropped-kasima-limited-company-logo-1-1.png",
      title: "Kasima Ghana Joins Pond Foundation",
      description: "Kasima Ghana, Pond Foundation’s implementation partner on the Regenerative Bambara Project with Foundation member WhatIF Foods in northern Ghana, has become the Foundation’s newest member.",
      date: "May 30, 2023",
      readMoreLink: ""
    },
    {
      id: 11,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/6437b7b9684751c8b52b08de_DC_SiteLogo.jpg",
      title: "Dynamic Startup Dutch Carboneers Joins Pond Foundation",
      description: "Dutch Carboneers, a dynamic Dutch startup led by Mart de Bruijn and Berend de Haas, two environmentally conscious, deeply committed young entrepreneurs, has joined Pond Foundation.",
      date: "May 1, 2023",
      readMoreLink: ""
    },
    {
      id: 12,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/63e1350ab4478161b55260d3_news-sample-4-p-1080.jpg",
      title: "Guardian Capital becomes a founding member of The Pond Foundation",
      description: "The Pond Foundation is excited to announce its newest founding member, Guardian Capital Group.",
      date: "Apr 19, 2023",
      readMoreLink: ""
    },
    {
      id: 13,
      imgSrc: "https://cdn.prod.website-files.com/63cf28055c506446c4cde0fb/63d911f31ddde9846f017ac6_GuardianCapital.png",
      title: "Guardian Capital Group",
      description: "On 13 December, our largest member of Pond Foundation to date, Guardian Capital Group based in Canada, announced their commitment to start amortizing its Lifetime Carbon Balance with a first payment and support for projects.",
      date: "Apr 19, 2023",
      readMoreLink: ""
    },
    {
      id: 14,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/63e1350ab447816fb85260d9_Sarah%2520Santacroce%252C%2520Founder%2520of%2520The%2520Gentle%2520Business%2520Revolution%25204-p-1080.jpg",
      title: "Sarah Santacroce: Solopreneur member of Pond Foundation and Humane Marketer",
      description: "Sarah Santacroce is a solopreneur and a pioneer in the field of Humane Marketing.‍ What exactly is Humane Marketing?‍ Sarah describes Humane Marketing as marketing for “the generation that cares”, and is an antidote to the traditional marketing strategies that prey on the guilt and shame of the consumers. It aims to bring the human connection back into the world of business and marketing.",
      date: "Apr 19, 2023",
      readMoreLink: ""
    },
    {
      id: 15,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/63e1350ab44781c2d85260d7_Nature4Justice.png",
      title: "The Ripple Has Spread To Nature For Justice",
      description: "We exist at a time when partnerships seem more important than ever. At least in recent memory, few organizations go on their journey alone. When it’s shared with a kindred spirit, the journey is far less arduous and far more memorable. The Pond Foundation and Nature For Justice are about to embark on a united mission to help those most affected by climate change.",
      date: "Apr 19, 2023",
      readMoreLink: ""
    },
    {
      id: 16,
      imgSrc: "https://cdn.prod.website-files.com/63e1350ab44781067c52603c/63e1350ab447813c555260d6_image-p-1080.jpeg",
      title: "WhatIF Foods and The Pond Foundation partner to grow the ripple of change",
      description: "We are pleased to announce that WhatIF Foods has become The Pond Foundation’s newest member. Inspiring relationships are at the forefront of our work here at The Pond. Living by our values, it was a no-brainer that our founder Scott Poynton and WhatIF Foods’ founder Christoph Langwallner came together to embark on a journey that is paving the way to bring about global food system change.",
      date: "Apr 19, 2023",
      readMoreLink: ""
    }
  ];
  
  export default blogData;
  