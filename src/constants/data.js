import images from "./images";
import { FaPaperPlane, FaEdit, FaRocket, FaShoppingCart, FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { ImMagicWand } from "react-icons/im";
import { AiOutlineReload } from "react-icons/ai";

const gradient = "url(#blue-gradient)";

const services = [
    {
        id: 1,
        icon: <FaPaperPlane style={{ fill: gradient }} />,
        title: "Marketing Digital",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa."
    },
    {
        id: 2,
        icon: <BiDollarCircle style={{ fill: gradient }} />,
        title: "Feiras",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa."
    },
    {
        id: 12,
        title: "Marca",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa."
    },
    {
        id: 13,
        title: "Criação de conteúdo",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa."
    },
    {
        id: 14,
        title: "Design gráfico",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa."
    },
    {
        id: 15,
        title: "Compra de mídia",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa."
    }
];

const about = [
    {
        id: 7,
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa."
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style={{ fill: gradient }} />,
        title: "Ideias e planos",
        text: "Somos apaixonados por gerar ideias que não apenas surpreendem, mas também impulsionam resultados tangíveis."
    },
    {
        id: 9,
        icon: <AiOutlineReload style={{ fill: gradient }} />,
        title: "Estratégias imediatas",
        text: "Em um mundo onde a velocidade é essencial. Compreendemos a importância das estratégias imediatas no cenário digital em constante evolução. "
    }
];

const features = [
    {
        id: 10,
        title: "Marketing Digital",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa. O marketing digital é mais do que uma presença online; é a arte de contar histórias cativantes, criar experiências envolventes e construir relacionamentos duradouros."
    },
    {
        id: 11,
        title: "Feiras",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa. O marketing digital é mais do que uma presença online; é a arte de contar histórias cativantes, criar experiências envolventes e construir relacionamentos duradouros."
    },
    {
        id: 12,
        title: "Marca",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa. O marketing digital é mais do que uma presença online; é a arte de contar histórias cativantes, criar experiências envolventes e construir relacionamentos duradouros."
    },
    {
        id: 13,
        title: "Criação de conteúdo",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa. O marketing digital é mais do que uma presença online; é a arte de contar histórias cativantes, criar experiências envolventes e construir relacionamentos duradouros."
    },
    {
        id: 14,
        title: "Design gráfico",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa. O marketing digital é mais do que uma presença online; é a arte de contar histórias cativantes, criar experiências envolventes e construir relacionamentos duradouros."
    },
    {
        id: 15,
        title: "Compra de mídia",
        text: "O marketing não é mais apenas uma ferramenta; é uma jornada dinâmica e interativa. O marketing digital é mais do que uma presença online; é a arte de contar histórias cativantes, criar experiências envolventes e construir relacionamentos duradouros."
    }
];

const portfolio = [
    {
        id: 16,
        title: "Jornadas digitais extraordinárias",
        text: "Explore nosso portfólio e testemunhe como transformamos visões em experiências digitais inesquecíveis. Descubra como cada projeto conta uma história única de sucesso online.",
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        title: "Design que resplandece online",
        text: "Navegue por nosso portfólio e mergulhe em um mundo de designs envolventes e inovadores. Cada criação reflete não apenas estética, mas também estratégias poderosas para cativar seu público.",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "Resultados mensuráveis, marcas memoráveis",
        text: "Descubra como ajudamos marcas a se destacarem, conquistando a atenção online e impulsionando o crescimento.",
        image: images.portfolio_img_3,
    }
];

const testimonials = [
    {
        id: 19,
        name: "Maria Jordânia",
        text: "Parceria excepcional! A agência não apenas aumentou nossa visibilidade online, mas também proporcionou uma experiência colaborativa única.",
        image: images.customer_img_1,
        rating: 3
    },
    {
        id: 20,
        name: "Anderson Silva",
        text: "Parceria excepcional! A agência não apenas aumentou nossa visibilidade online, mas também proporcionou uma experiência colaborativa única.",
        image: images.customer_img_2,
        rating: 5
    },
    {
        id: 21,
        name: "Pedro Bialsa",
        text: "Parceria excepcional! A agência não apenas aumentou nossa visibilidade online, mas também proporcionou uma experiência colaborativa única.",
        image: images.customer_img_3,
        rating: 2
    },
    {
        id: 22,
        name: "Jaíne Souza",
        text: "Parceria excepcional! A agência não apenas aumentou nossa visibilidade online, mas também proporcionou uma experiência colaborativa única.",
        image: images.customer_img_4,
        rating: 4
    },
    {
        id: 23,
        name: "Lisa Vieira",
        text: "Parceria excepcional! A agência não apenas aumentou nossa visibilidade online, mas também proporcionou uma experiência colaborativa única.",
        image: images.customer_img_5,
        rating: 2
    },
    {
        id: 24,
        name: "Vitória Alencar",
        text: "Parceria excepcional! A agência não apenas aumentou nossa visibilidade online, mas também proporcionou uma experiência colaborativa única.",
        image: images.customer_img_6,
        rating: 4
    }
]

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style={{ fill: gradient }} />,
        info: "77 999304932",
        text: "Aceitamos ligações ou atendimento via whatsapp"
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
        info: "marketingdigital@info.com",
        text: "Envie um e-mail para a nossa agência"
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
        info: "Oliveira dos Brejinhos",
        text: "Localização situada no centro da cidade"
    }
]

const sections = { services, about, qualities, features, portfolio, testimonials, contact };

export default sections;