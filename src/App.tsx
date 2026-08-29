import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  Copy,
  Check,
  Globe,
  BookOpen,
  Sparkles,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Play,
  RotateCcw,
  CheckCircle2,
  Share2,
  Layers,
  HelpCircle,
  Send,
  Zap,
  Award,
  Search,
  MessageSquare,
  AlertTriangle,
  Lightbulb,
  Bookmark,
  VolumeX,
  Heart,
  Mic,
  MicOff,
  UserCheck,
  ExternalLink,
  Flame,
  Info,
  Volume1
} from 'lucide-react';

const ROADMAP_DATA = [
  // WEEK 1: THE CORE ENGINES & HIGH-FREQUENCY VERBS
  {
    day: 1,
    week: 1,
    titleEn: "The Ultimate Chameleon Verb: 'GET'",
    titleEs: "El verbo camaleón: 'GET'",
    badge: "Verbo Rey",
    summaryEs: "El verbo más versátil del inglés. Los hispanohablantes suelen usar verbos muy formales cuando los nativos simplemente usan 'GET'.",
    summaryEn: "The most versatile verb in English. Spanish speakers often use formal Latin verbs where natives simply use 'GET'.",
    tipEs: "💡 En lugar de decir 'I arrived home', 'I bought a coffee' o 'I understand', el 90% de las veces un nativo dirá: 'I got home', 'I got a coffee', 'I get it'.",
    tipEn: "💡 Instead of formal verbs like 'arrive', 'purchase', or 'understand', native speakers use 'get' for almost all of them in spoken English.",
    words: [
      {
        word: "Get",
        ipa: "/ɡɛt/",
        pronunciationGuide: "[GUET]",
        phoneticTip: "Suena con 'G' suave como 'gato', nunca como 'jota'.",
        pos: "verb",
        meaningEs: "Obtener / Conseguir / Llegar / Ponerse / Entender",
        meaningEn: "Obtain, receive, arrive, become, understand",
        exampleEn: "I get it now, thanks for explaining!",
        exampleEs: "¡Ya lo entiendo, gracias por explicar!",
        noteEs: "Reemplaza a 'understand' en conversación casual."
      },
      {
        word: "Get to (a place)",
        ipa: "/ɡɛt tuː/",
        pronunciationGuide: "[GUET tu]",
        phoneticTip: "Une el sonido: 'Gué-tu'.",
        pos: "phrasal verb",
        meaningEs: "Llegar a (un lugar)",
        meaningEn: "Arrive at a destination",
        exampleEn: "What time do you get to work?",
        exampleEs: "¿A qué hora llegas al trabajo?",
        noteEs: "Mucho más común y natural que 'arrive at'."
      },
      {
        word: "Get + Adjective",
        ipa: "/ɡɛt .../",
        pronunciationGuide: "[GUET + adjetivo]",
        phoneticTip: "Expresa cambio de estado (ponerse/hacerse).",
        pos: "pattern",
        meaningEs: "Ponerse / Volverse (cambio de estado)",
        meaningEn: "To become (tired, angry, dark, ready)",
        exampleEn: "It's getting late and I'm getting tired.",
        exampleEs: "Se está haciendo tarde y me estoy cansando.",
        noteEs: "Equivale a los verbos reflexivos en español (cansarse, enojarse)."
      },
      {
        word: "Get along with",
        ipa: "/ɡɛt əˈlɒŋ wɪð/",
        pronunciationGuide: "[GUET e-LÓNG uiz]",
        phoneticTip: "La 'TH' final suena como una 'D' suave entre los dientes.",
        pos: "phrasal verb",
        meaningEs: "Llevarse bien con alguien",
        meaningEn: "Have a friendly relationship with someone",
        exampleEn: "I get along very well with my coworkers.",
        exampleEs: "Me llevo muy bien con mis compañeros de trabajo.",
        noteEs: "Básico para hablar de relaciones familiares y laborales."
      }
    ],
    familyQuiz: {
      questionEn: "How do you naturally say: '¿A qué hora llegaste a casa ayer?'",
      questionEs: "¿Cómo dices de forma natural: '¿A qué hora llegaste a casa ayer?'",
      options: [
        "What time did you arrive to your house yesterday?",
        "What time did you get home yesterday?",
        "When did you reach home yesterday?",
        "What hour you got at house yesterday?"
      ],
      correct: 1,
      explanationEs: "'Get home' es la forma 100% natural. Además, 'home' nunca lleva 'to' (no se dice 'get to home')."
    }
  },
  {
    day: 2,
    week: 1,
    titleEn: "Make vs. Do: The Eternal Spanish Trap",
    titleEs: "Make vs. Do: La trampa del español",
    badge: "Error Frecuente",
    summaryEs: "En español usamos 'Hacer' para todo. En inglés, 'Make' es crear o producir algo nuevo, y 'Do' es realizar una acción, tarea o rutina.",
    summaryEn: "In Spanish 'Hacer' covers everything. In English, 'Make' is to create/produce, and 'Do' is for actions/tasks/routines.",
    tipEs: "💡 Regla de oro: Si creas algo tangible o un sonido ➔ MAKE (make coffee, make a mistake, make noise). Si es una tarea, rutina o acción genérica ➔ DO (do homework, do business, do your best).",
    tipEn: "💡 Golden Rule: If creating/producing ➔ MAKE. If performing an action/duty ➔ DO.",
    words: [
      {
        word: "Make a decision",
        ipa: "/meɪk ə dɪˈsɪʒən/",
        pronunciationGuide: "[MÉIK a de-SÍ-shon]",
        phoneticTip: "No digas 'Teik a decisión'. En inglés se 'hace' (make).",
        pos: "collocation",
        meaningEs: "Tomar una decisión",
        meaningEn: "To decide between options",
        exampleEn: "We need to make a decision by tonight.",
        exampleEs: "Tenemos que tomar una decisión antes de esta noche.",
        noteEs: "En inglés se 'hace' una decisión (make), no se 'toma' (take)."
      },
      {
        word: "Do me a favor",
        ipa: "/duː miː ə ˈfeɪvər/",
        pronunciationGuide: "[DU mi a FÉI-vor]",
        phoneticTip: "La 'V' en 'favor' vibra en el labio inferior.",
        pos: "phrase",
        meaningEs: "Hazme un favor",
        meaningEn: "Perform a helpful act for someone",
        exampleEn: "Could you do me a quick favor?",
        exampleEs: "¿Podrías hacerme un favor rápido?",
        noteEs: "Nunca se dice 'make me a favor'."
      },
      {
        word: "Make a mistake",
        ipa: "/meɪk ə mɪˈsteɪk/",
        pronunciationGuide: "[MÉIK a mis-TÉIK]",
        phoneticTip: "Empieza la 'S' directamente: 'mis-téik', sin agregar una 'E' antes.",
        pos: "collocation",
        meaningEs: "Cometer un error",
        meaningEn: "To do something incorrectly",
        exampleEn: "Don't worry, everyone makes mistakes.",
        exampleEs: "No te preocupes, todos cometen errores.",
        noteEs: "No se dice 'commit a mistake' en habla diaria, se dice 'make'."
      },
      {
        word: "Do your best",
        ipa: "/duː jɔːr bɛst/",
        pronunciationGuide: "[DU yor BEST]",
        phoneticTip: "'Your' suena como 'Yor'.",
        pos: "phrase",
        meaningEs: "Dar lo mejor de ti / Hacer lo posible",
        meaningEn: "To try as hard as you can",
        exampleEn: "Just relax and do your best in the interview.",
        exampleEs: "Solo relájate y da lo mejor de ti en la entrevista.",
        noteEs: "Frase de apoyo super común en familia."
      }
    ],
    familyQuiz: {
      questionEn: "Which sentence is CORRECT in English?",
      questionEs: "¿Cuál frase es CORRECTA en inglés?",
      options: [
        "I need to make my homework before dinner.",
        "Can you make me a favor please?",
        "I made a big mistake at work today.",
        "Let's do a cake for mom's birthday."
      ],
      correct: 2,
      explanationEs: "Los errores se 'crean' (make a mistake). Las tareas llevan 'do' (do homework) y los favores llevan 'do' (do a favor)."
    }
  },
  {
    day: 3,
    week: 1,
    titleEn: "BE & HAVE: Age, Feelings & State of Mind",
    titleEs: "BE y HAVE: Edad, Sensaciones y Estados",
    badge: "Gramática Clave",
    summaryEs: "En español 'tenemos' hambre, frío, miedo o años. En inglés 'somos' (BE) esas cosas.",
    summaryEn: "In Spanish we 'have' hunger, cold, fear, or age. In English, you 'are' (BE) those things.",
    tipEs: "💡 Nunca digas 'I have 30 years' o 'I have hunger'. Di: 'I am 30 years old', 'I am hungry', 'I am thirsty', 'I am cold'.",
    tipEn: "💡 Never use 'have' for age, physical feelings, or emotional conditions. Always use 'I am...'",
    words: [
      {
        word: "I am hungry / thirsty",
        ipa: "/aɪ æm ˈhʌŋɡri / ˈθɜːrsti/",
        pronunciationGuide: "[AI am JÁN-gri / ZÉRS-ti]",
        phoneticTip: "La 'H' de hungry suena como una 'J' suave exhalando aire.",
        pos: "phrase",
        meaningEs: "Tengo hambre / Tengo sed",
        meaningEn: "Feeling the need for food/water",
        exampleEn: "I'm so hungry! Let's grab some lunch.",
        exampleEs: "¡Tengo tanta hambre! Vamos a comer algo.",
        noteEs: "Usa el verbo 'To Be', nunca 'I have hungry'."
      },
      {
        word: "I am ... years old",
        ipa: "/aɪ æm ... jɪərz oʊld/",
        pronunciationGuide: "[AI am ... YIRS óuld]",
        phoneticTip: "La 'Y' de years suena suave como en 'yerba'.",
        pos: "phrase",
        meaningEs: "Tengo ... años",
        meaningEn: "Expressing one's age",
        exampleEn: "My daughter is seven years old.",
        exampleEs: "Mi hija tiene siete años.",
        noteEs: "En inglés 'eres' los años de viejo, no los 'posees'."
      },
      {
        word: "I am in a hurry",
        ipa: "/aɪ æm ɪn ə ˈhʌri/",
        pronunciationGuide: "[AI am in a JÓ-rri]",
        phoneticTip: "Suena fluido: 'ai-am-i-na-jó-rri'.",
        pos: "phrase",
        meaningEs: "Tengo prisa / Estoy apurado",
        meaningEn: "Needing to act or move quickly",
        exampleEn: "I can't talk right now, I'm in a hurry.",
        exampleEs: "No puedo hablar ahora, tengo prisa.",
        noteEs: "Alternativa común: 'I'm rushing'."
      },
      {
        word: "Have a seat",
        ipa: "/hæv ə siːt/",
        pronunciationGuide: "[JAV a SIIT]",
        phoneticTip: "Alarga la 'I' de 'seat' [siit] para no confundirla con otra palabra.",
        pos: "courtesy phrase",
        meaningEs: "Toma asiento / Siéntate",
        meaningEn: "Polite invitation to sit down",
        exampleEn: "Please come in and have a seat.",
        exampleEs: "Por favor pasa y toma asiento.",
        noteEs: "Mucho más educado y cálido que 'Sit down!'."
      }
    ],
    familyQuiz: {
      questionEn: "How do you say 'Mi hermano tiene frío y tiene 25 años'?",
      questionEs: "¿Cómo dices 'Mi hermano tiene frío y tiene 25 años'?",
      options: [
        "My brother has cold and has 25 years.",
        "My brother is cold and is 25 years old.",
        "My brother feels cold and have 25 years.",
        "My brother is having cold and 25 years."
      ],
      correct: 1,
      explanationEs: "Tanto para el frío como para la edad se usa el verbo 'is' (To Be)."
    }
  },
  {
    day: 4,
    week: 1,
    titleEn: "Survival Modals: Would, Could, Should",
    titleEs: "Verbos Modales: Cortesía y Fluidez",
    badge: "Cortesía & Poder",
    summaryEs: "Los 3 comodines para sonar educado, pedir favores y dar consejos sin sonar demandante.",
    summaryEn: "The three golden auxiliaries to sound polite, request favors, and advise without sounding demanding.",
    tipEs: "💡 Un hispanohablante a menudo dice 'I want water' (suena demandante). Los nativos siempre dicen 'I would like water' o 'Could I have water?'.",
    tipEn: "💡 Replace 'I want' with 'I would like' or 'Could I get' to instantly sound natural and well-mannered.",
    words: [
      {
        word: "Would like",
        ipa: "/wʊd laɪk/",
        pronunciationGuide: "[WUD LÁIK]",
        phoneticTip: "¡La 'L' de would es 100% muda! Suena como 'wud'.",
        pos: "modal phrase",
        meaningEs: "Me gustaría / Quisiera",
        meaningEn: "Polite desire ('want')",
        exampleEn: "I would like a cup of coffee, please.",
        exampleEs: "Me gustaría una taza de café, por favor.",
        noteEs: "Contracción: 'I'd like' [AID LÁIK]."
      },
      {
        word: "Could you...?",
        ipa: "/kʊd juː/",
        pronunciationGuide: "[KUD YU]",
        phoneticTip: "La 'L' es muda. No pronuncies 'culd', di 'kud'.",
        pos: "modal question",
        meaningEs: "¿Podrías...?",
        meaningEn: "Polite request",
        exampleEn: "Could you please help me with this door?",
        exampleEs: "¿Podrías ayudarme con esta puerta, por favor?",
        noteEs: "La clave número 1 para pedir ayuda en tiendas o la calle."
      },
      {
        word: "Should",
        ipa: "/ʃʊd/",
        pronunciationGuide: "[SHUD]",
        phoneticTip: "La 'L' es muda. Suena como 'shud'.",
        pos: "modal verb",
        meaningEs: "Debería(s)",
        meaningEn: "Giving friendly advice or recommendation",
        exampleEn: "You should rest a little bit today.",
        exampleEs: "Deberías descansar un poco hoy.",
        noteEs: "Para dar consejos afectuosos a la familia."
      },
      {
        word: "Might",
        ipa: "/maɪt/",
        pronunciationGuide: "[MÁIT]",
        phoneticTip: "La 'GH' es muda, suena como 'máit'.",
        pos: "modal verb",
        meaningEs: "Tal vez / Puede que (probabilidad)",
        meaningEn: "Possibility (maybe)",
        exampleEn: "It might rain later, bring an umbrella.",
        exampleEs: "Puede que llueva más tarde, lleva un paraguas.",
        noteEs: "Equivale a 'a lo mejor / tal vez'."
      }
    ],
    familyQuiz: {
      questionEn: "How do you politely order food at a restaurant?",
      questionEs: "¿Cómo pides comida de forma educada en un restaurante?",
      options: [
        "Give me the chicken soup right now.",
        "I want the chicken soup.",
        "I would like the chicken soup, please.",
        "I have to take the chicken soup."
      ],
      correct: 2,
      explanationEs: "'I would like...' o 'Could I get...' son las formas estándar de cortesía."
    }
  },
  {
    day: 5,
    week: 1,
    titleEn: "5 High-Power Action Verbs (Take, Put, Keep, Give, Bring)",
    titleEs: "5 Verbos de alta potencia (Take, Put, Keep, Give, Bring)",
    badge: "Acciones Diarias",
    summaryEs: "Estos 5 verbos componen más del 30% de los diálogos familiares y órdenes cotidianas en el hogar.",
    summaryEn: "These 5 simple verbs form over 30% of daily domestic dialog and instructions.",
    tipEs: "💡 'Take' no solo es tomar con la mano: es tomar tiempo ('It takes 10 minutes'), llevar a alguien ('I take my kids to school') o tomar fotos ('take pictures').",
    tipEn: "💡 'Take' is used for time duration, transporting people, and taking photos.",
    words: [
      {
        word: "Take your time",
        ipa: "/teɪk jɔːr taɪm/",
        pronunciationGuide: "[TÉIK yor TÁIM]",
        phoneticTip: "Dilo con calma: 'Téik yor táim'.",
        pos: "phrase",
        meaningEs: "Tómate tu tiempo / Sin prisa",
        meaningEn: "No need to hurry",
        exampleEn: "Take your time, there is no rush.",
        exampleEs: "Tómate tu tiempo, no hay prisa.",
        noteEs: "Frase perfecta para calmar a alguien apurado."
      },
      {
        word: "Put away",
        ipa: "/pʊt əˈweɪ/",
        pronunciationGuide: "[PUT a-UÉI]",
        phoneticTip: "Suena como una sola palabra: 'pu-ta-uéi'.",
        pos: "phrasal verb",
        meaningEs: "Guardar en su lugar / Ordenar",
        meaningEn: "Return an item to its proper storage place",
        exampleEn: "Please put away your clothes.",
        exampleEs: "Por favor guarda tu ropa en su lugar.",
        noteEs: "Imprescindible para la casa y la familia."
      },
      {
        word: "Keep in touch",
        ipa: "/kiːp ɪn tʌtʃ/",
        pronunciationGuide: "[KIIP in TACH]",
        phoneticTip: "La 'U' de touch suena como 'A': 'tach'.",
        pos: "idiom",
        meaningEs: "Mantenerse en contacto",
        meaningEn: "To stay connected with someone",
        exampleEn: "Let's keep in touch over the weekend.",
        exampleEs: "Mantengámonos en contacto durante el fin de semana.",
        noteEs: "Típica despedida cariñosa."
      },
      {
        word: "Bring vs. Take",
        ipa: "/brɪŋ / teɪk/",
        pronunciationGuide: "[BRING / TÉIK]",
        phoneticTip: "Bring = hacia acá. Take = hacia allá.",
        pos: "pair",
        meaningEs: "Traer (hacia aquí) vs. Llevar (hacia allá)",
        meaningEn: "Bring = towards speaker; Take = away from speaker",
        exampleEn: "Bring me the keys, and take the trash out.",
        exampleEs: "Tráeme las llaves y saca la basura.",
        noteEs: "La misma distinción que en español 'traer' y 'llevar'."
      }
    ],
    familyQuiz: {
      questionEn: "What does 'Take your time' mean?",
      questionEs: "¿Qué significa 'Take your time'?",
      options: [
        "Mira tu reloj rápidamente.",
        "Tómate tu tiempo, no te apures.",
        "Llega a tiempo a la cita.",
        "El tiempo se está acabando."
      ],
      correct: 1,
      explanationEs: "Significa tomarse las cosas con calma y sin prisa."
    }
  },

  // WEEK 2: CONNECTORS & TRANSITIONS
  {
    day: 6,
    week: 1,
    titleEn: "The 5 Ws + Powerful Conversational Questions",
    titleEs: "Las 5 preguntas maestras y conversación fluida",
    badge: "Iniciar Charlas",
    summaryEs: "Cómo mantener una conversación viva haciendo las preguntas correctas con la entonación adecuada.",
    summaryEn: "How to keep a conversation flowing by asking natural follow-up questions.",
    tipEs: "💡 En inglés, las preguntas con 'Do you...' no traducen literalmente '¿Haces tú...?'; 'Do' es solo la señal acústica de que estás haciendo una pregunta.",
    tipEn: "💡 Auxiliary 'Do/Does' is just a grammatical flag that indicates a question in present tense.",
    words: [
      {
        word: "How often...?",
        ipa: "/haʊ ˈɒfən/",
        pronunciationGuide: "[JAU Ó-fen]",
        phoneticTip: "La 'T' en often no se pronuncia: suena 'ó-fen'.",
        pos: "question phrase",
        meaningEs: "¿Con qué frecuencia / Cada cuánto...?",
        meaningEn: "Asking about frequency",
        exampleEn: "How often do you call your family?",
        exampleEs: "¿Cada cuánto llamas a tu familia?",
        noteEs: "Mucho más natural que decir 'With what frequency'."
      },
      {
        word: "How long does it take?",
        ipa: "/haʊ lɒŋ dʌz ɪt teɪk/",
        pronunciationGuide: "[JAU LONG daz it TÉIK]",
        phoneticTip: "Daz it téik: entonación hacia arriba al final.",
        pos: "question phrase",
        meaningEs: "¿Cuánto tiempo se tarda / demora?",
        meaningEn: "Asking about duration of time",
        exampleEn: "How long does it take to drive there?",
        exampleEs: "¿Cuánto tiempo se tarda en llegar en auto?",
        noteEs: "Pregunta indispensable para viajes y direcciones."
      },
      {
        word: "What do you mean?",
        ipa: "/wɒt duː juː miːn/",
        pronunciationGuide: "[WAT du yu MIIN]",
        phoneticTip: "En habla rápida suena: 'Wa-da-yu-miin'.",
        pos: "question phrase",
        meaningEs: "¿Qué quieres decir? / ¿A qué te refieres?",
        meaningEn: "Asking for clarification",
        exampleEn: "What do you mean by that?",
        exampleEs: "¿A qué te refieres con eso?",
        noteEs: "Frase clave para cuando no entiendes algo."
      },
      {
        word: "How come?",
        ipa: "/haʊ kʌm/",
        pronunciationGuide: "[JAU KAM]",
        phoneticTip: "La 'O' en come suena como una 'A' corta: 'kam'.",
        pos: "casual question",
        meaningEs: "¿Cómo así? / ¿Por qué razón? (informal)",
        meaningEn: "Informal way to ask 'Why?'",
        exampleEn: "You're not coming tonight? How come?",
        exampleEs: "¿No vienes esta noche? ¿Cómo así?",
        noteEs: "Se usa como sinónimo amistoso de 'Why?'."
      }
    ],
    familyQuiz: {
      questionEn: "How do you ask: '¿Cada cuánto visitas a tus abuelos?'",
      questionEs: "¿Cómo preguntas: '¿Cada cuánto visitas a tus abuelos?'",
      options: [
        "How much times you visit your grandparents?",
        "How often do you visit your grandparents?",
        "Every when do you visit your grandparents?",
        "How long do you visit your grandparents?"
      ],
      correct: 1,
      explanationEs: "'How often' es la forma exacta y natural para preguntar 'cada cuánto tiempo'."
    }
  },
  {
    day: 7,
    week: 1,
    titleEn: "Week 1 Review & Family Milestone",
    titleEs: "Repaso Semana 1 y Práctica Familiar",
    badge: "Meta Semana 1",
    summaryEs: "¡Felicidades por completar la primera semana! Hoy consolidamos los verbos pilares y las respuestas rápidas.",
    summaryEn: "Congratulations on finishing Week 1! Today we consolidate the pillar verbs and quick reactions.",
    tipEs: "💡 Repite las frases en voz alta usando el botón de audio antes de compartirlas por WhatsApp con tu familia.",
    tipEn: "💡 Practice speaking out loud with the audio button before sharing your daily message.",
    words: [
      {
        word: "I got it!",
        ipa: "/aɪ ɡɒt ɪt/",
        pronunciationGuide: "[AI GAT IT]",
        phoneticTip: "Une la 'T' con la 'I': 'Ai-gá-tit'.",
        pos: "phrase",
        meaningEs: "¡Entendido! / ¡Yo me encargo!",
        meaningEn: "I understand / I will take care of it",
        exampleEn: "Don't worry about the bill, I got it!",
        exampleEs: "No te preocupes por la cuenta, ¡yo me encargo!",
        noteEs: "Doble sentido: entender o pagar/encargarse."
      },
      {
        word: "Let me know",
        ipa: "/lɛt miː noʊ/",
        pronunciationGuide: "[LET MI NOU]",
        phoneticTip: "La 'K' en know es 100% muda.",
        pos: "phrase",
        meaningEs: "Avísame / Déjame saber",
        meaningEn: "Inform me when you know",
        exampleEn: "Let me know when you arrive.",
        exampleEs: "Avísame cuando llegues.",
        noteEs: "La forma más común de cerrar un mensaje familiar."
      },
      {
        word: "Sounds good!",
        ipa: "/saʊndz ɡʊd/",
        pronunciationGuide: "[SÁUNDZ GUD]",
        phoneticTip: "La 'S' inicial sin agregar 'E' antes.",
        pos: "phrase",
        meaningEs: "¡Me parece bien! / ¡Suena bien!",
        meaningEn: "Agreement to a proposal",
        exampleEn: "We can meet at 6:00 PM. — Sounds good!",
        exampleEs: "Podemos encontrarnos a las 6:00 PM. — ¡Me parece bien!",
        noteEs: "La respuesta positiva más usada en el día a día."
      },
      {
        word: "No worries",
        ipa: "/noʊ ˈwʌriz/",
        pronunciationGuide: "[NOU UÓ-rris]",
        phoneticTip: "La 'W' suena suave como 'uó'.",
        pos: "phrase",
        meaningEs: "No te preocupes / De nada",
        meaningEn: "You're welcome / It's not a problem",
        exampleEn: "Thanks for the ride! — No worries!",
        exampleEs: "¡Gracias por llevarme! — ¡No te preocupes / De nada!",
        noteEs: "Sustituto moderno y relajado de 'You're welcome'."
      }
    ],
    familyQuiz: {
      questionEn: "Someone tells you: 'See you at 7 PM for dinner.' How do you answer casually?",
      questionEs: "Alguien te dice: 'Nos vemos a las 7 PM para cenar.' ¿Cómo respondes casualmente?",
      options: [
        "I accept your sound.",
        "Sounds good! See you then.",
        "It makes a good sound.",
        "I am agreement."
      ],
      correct: 1,
      explanationEs: "'Sounds good!' es la forma natural de aceptar una propuesta o plan."
    }
  },

  // WEEK 2: CONNECTOR WORDS (FLUENCY GLUE)
  {
    day: 8,
    week: 2,
    titleEn: "Sentence Glues: Because, So, Since, That's why",
    titleEs: "Conectores de Causa y Efecto (El pegamento del idioma)",
    badge: "Conectores",
    summaryEs: "Deja de hablar en oraciones cortas como robot. Conecta dos ideas con causa y consecuencia.",
    summaryEn: "Connect two thoughts together smoothly instead of speaking in isolated, robotic sentences.",
    tipEs: "💡 'That's why' equivale a 'Por eso...' y es una de las frases más útiles para explicar motivos a la familia.",
    tipEn: "💡 Use 'That's why' to mean 'Por eso...' when explaining your reasons.",
    words: [
      {
        word: "That's why",
        ipa: "/ðæts waɪ/",
        pronunciationGuide: "[DATS UÁI]",
        phoneticTip: "La 'TH' suena con vibración de lengua entre los dientes.",
        pos: "connector",
        meaningEs: "Por eso / Es por esa razón que...",
        meaningEn: "For that specific reason",
        exampleEn: "I woke up late, that's why I missed the bus.",
        exampleEs: "Me desperté tarde, por eso perdí el autobús.",
        noteEs: "Vital para responder y dar explicaciones."
      },
      {
        word: "Since (cause)",
        ipa: "/sɪns/",
        pronunciationGuide: "[SINS]",
        phoneticTip: "Sonido directo de 'S'.",
        pos: "connector",
        meaningEs: "Ya que / Dado que / Como...",
        meaningEn: "Because / considering that",
        exampleEn: "Since you are already here, let's have dinner.",
        exampleEs: "Ya que estás aquí, cenemos.",
        noteEs: "No solo significa 'desde' de tiempo, también 'ya que'."
      },
      {
        word: "So that",
        ipa: "/soʊ ðæt/",
        pronunciationGuide: "[SOU DAT]",
        phoneticTip: "Une: 'Sou-dat'.",
        pos: "connector",
        meaningEs: "Para que / Con el fin de que",
        meaningEn: "In order that / with the goal of",
        exampleEn: "I left early so that I wouldn't be late.",
        exampleEs: "Salí temprano para que no llegara tarde.",
        noteEs: "Une un propósito con una acción."
      },
      {
        word: "Therefore",
        ipa: "/ˈðɛərfɔːr/",
        pronunciationGuide: "[DÉR-for]",
        phoneticTip: "Acento en la primera sílaba: 'Dér-for'.",
        pos: "connector",
        meaningEs: "Por lo tanto / Por consiguiente",
        meaningEn: "As a result / formal consequently",
        exampleEn: "We worked hard, therefore we succeeded.",
        exampleEs: "Trabajamos duro, por lo tanto tuvimos éxito.",
        noteEs: "Un poco más formal, ideal para trabajo o mensajes serios."
      }
    ],
    familyQuiz: {
      questionEn: "Complete: 'I didn't study, ________ I failed the test.'",
      questionEs: "Completa: 'I didn't study, ________ I failed the test.' (No estudié, por eso reprobé el examen)",
      options: [
        "that's why",
        "because of",
        "since that",
        "although"
      ],
      correct: 0,
      explanationEs: "'That's why' conecta la causa previa con el resultado."
    }
  },
  {
    day: 9,
    week: 2,
    titleEn: "Contrast Connectors: Although, Even though, However, But",
    titleEs: "Conectores de Contraste: Aunque, Sin embargo",
    badge: "Matices",
    summaryEs: "Aprende a contrastar ideas como un hablante fluido usando 'Although', 'Even though' y 'However'.",
    summaryEn: "Contrast thoughts smoothly using everyday words for 'Aunque' and 'Sin embargo'.",
    tipEs: "💡 'Even though' es un 'Aunque' con más énfasis. 'However' casi siempre va seguido de una coma (,).",
    tipEn: "💡 'Even though' adds stronger emphasis than 'Although'.",
    words: [
      {
        word: "Even though",
        ipa: "/ˈiːvən ðoʊ/",
        pronunciationGuide: "[ÍI-ven DOU]",
        phoneticTip: "La 'GH' final en though es completamente muda: 'dou'.",
        pos: "connector",
        meaningEs: "A pesar de que / Aunque",
        meaningEn: "Despite the fact that",
        exampleEn: "Even though it was raining, we went for a walk.",
        exampleEs: "A pesar de que estaba lloviendo, fuimos a caminar.",
        noteEs: "Mucho más enfático que un simple 'pero'."
      },
      {
        word: "However",
        ipa: "/haʊˈɛvər/",
        pronunciationGuide: "[jau-É-ver]",
        phoneticTip: "La 'H' inicial se exhala suave: 'jau-é-ver'.",
        pos: "connector",
        meaningEs: "Sin embargo / No obstante",
        meaningEn: "On the other hand / but",
        exampleEn: "I wanted to go; however, I was too tired.",
        exampleEs: "Quería ir; sin embargo, estaba demasiado cansado.",
        noteEs: "Muy elegante en correos y conversaciones formales."
      },
      {
        word: "Although",
        ipa: "/ɔːlˈðoʊ/",
        pronunciationGuide: "[ol-DOU]",
        phoneticTip: "La terminación 'though' rima con 'snow'.",
        pos: "connector",
        meaningEs: "Aunque",
        meaningEn: "In spite of the fact that",
        exampleEn: "Although he is young, he is very smart.",
        exampleEs: "Aunque es joven, es muy inteligente.",
        noteEs: "Se coloca comúnmente al inicio de la frase."
      },
      {
        word: "Instead of",
        ipa: "/ɪnˈstɛd ɒv/",
        pronunciationGuide: "[in-STÉD ov]",
        phoneticTip: "Si le sigue un verbo, siempre termina en '-ing'.",
        pos: "prepositional phrase",
        meaningEs: "En lugar de / En vez de",
        meaningEn: "In place of someone or something",
        exampleEn: "Let's drink tea instead of coffee today.",
        exampleEs: "Bebamos té en vez de café hoy.",
        noteEs: "Si le sigue un verbo, lleva '-ing' (instead of going)."
      }
    ],
    familyQuiz: {
      questionEn: "How do you translate: 'Fuimos al parque en lugar de quedarnos en casa'?",
      questionEs: "¿Cómo traduces: 'Fuimos al parque en lugar de quedarnos en casa'?",
      options: [
        "We went to the park in place to stay at home.",
        "We went to the park instead of staying home.",
        "We went to the park rather to stay home.",
        "We went to the park substitution of staying."
      ],
      correct: 1,
      explanationEs: "'Instead of' significa 'en lugar de' y el verbo que le sigue lleva -ing (staying)."
    }
  },
  {
    day: 10,
    week: 2,
    titleEn: "The 'Actually' Trap & False Friend Connectors",
    titleEs: "La gran trampa de 'Actually' y falsos amigos",
    badge: "Zona de Alerta",
    summaryEs: "¡Cuidado! 'Actually' NO significa 'Actualmente'. Significa 'En realidad / De hecho'.",
    summaryEn: "Watch out! 'Actually' does NOT mean 'Currently'. It means 'In fact / Really'.",
    tipEs: "💡 Para decir 'Actualmente' di 'Currently' o 'Nowadays'. Para decir 'En realidad' di 'Actually'.",
    tipEn: "💡 Use 'Currently' or 'These days' for 'Actualmente'. Save 'Actually' for 'En realidad'.",
    words: [
      {
        word: "Actually",
        ipa: "/ˈæktʃuəli/",
        pronunciationGuide: "[ÁK-chu-a-li]",
        phoneticTip: "El sonido 'tu' se pronuncia 'chu' en inglés: 'ák-chu-li'.",
        pos: "adverb",
        meaningEs: "En realidad / De hecho (¡NO 'actualmente'!)",
        meaningEn: "In fact, really, in reality",
        exampleEn: "Actually, I prefer to stay home tonight.",
        exampleEs: "En realidad, prefiero quedarme en casa esta noche.",
        noteEs: "El error #1 de los hispanohablantes en el trabajo."
      },
      {
        word: "Currently",
        ipa: "/ˈkɜːrəntli/",
        pronunciationGuide: "[KÓ-rrent-li]",
        phoneticTip: "Esta es la palabra correcta para 'actualmente'.",
        pos: "adverb",
        meaningEs: "Actualmente / En este momento",
        meaningEn: "At the present time, now",
        exampleEn: "She is currently working on a new project.",
        exampleEs: "Ella está trabajando actualmente en un nuevo proyecto.",
        noteEs: "Esta es la palabra correcta para 'actualmente'."
      },
      {
        word: "Nowadays",
        ipa: "/ˈnaʊədeɪz/",
        pronunciationGuide: "[NÁU-a-deis]",
        phoneticTip: "Suena 'náu-a-deis'.",
        pos: "adverb",
        meaningEs: "Hoy en día / En la actualidad",
        meaningEn: "In the present era",
        exampleEn: "Nowadays, everyone uses a smartphone.",
        exampleEs: "Hoy en día, todo el mundo usa un teléfono inteligente.",
        noteEs: "Muy natural al hablar de cómo han cambiado los tiempos."
      },
      {
        word: "As a matter of fact",
        ipa: "/æz ə ˈmætər ɒv fækt/",
        pronunciationGuide: "[as a MÁ-ter ov FAKT]",
        phoneticTip: "Dilo rápido: 'as-a-má-ter-ov-fakt'.",
        pos: "idiom",
        meaningEs: "De hecho / Para que sepas",
        meaningEn: "In reality / actually",
        exampleEn: "As a matter of fact, I already bought the tickets!",
        exampleEs: "De hecho, ¡ya compré las entradas!",
        noteEs: "Frase para dar una sorpresa o dato real."
      }
    ],
    familyQuiz: {
      questionEn: "If someone asks 'Do you live in New York?' and you want to say 'En realidad, vivo en Miami', you say:",
      questionEs: "Si alguien te pregunta '¿Vives en Nueva York?' y quieres decir 'En realidad, vivo en Miami', dices:",
      options: [
        "Currently, I live in Miami.",
        "Actually, I live in Miami.",
        "Actuality, I live in Miami.",
        "Nowadays, I live in Miami."
      ],
      correct: 1,
      explanationEs: "'Actually' se usa para corregir amablemente o decir 'en realidad'."
    }
  },
  {
    day: 11,
    week: 2,
    titleEn: "Conversational Fillers: Sounding Like a Native Speaker",
    titleEs: "Muletillas y conectores para sonar natural",
    badge: "Habla Natural",
    summaryEs: "Los nativos nunca hacen silencio incómodo. Usan palabras de relleno mientras piensan la siguiente frase.",
    summaryEn: "Native speakers use smooth conversational fillers while gathering their next thought.",
    tipEs: "💡 En vez de decir 'Ehhh...', usa 'You know...', 'I mean...', o 'To be honest...'.",
    tipEn: "💡 Replace hesitation sounds with natural phrases like 'You know' or 'To be honest'.",
    words: [
      {
        word: "To be honest",
        ipa: "/tuː biː ˈɒnɪst/",
        pronunciationGuide: "[tu bi Ó-nest]",
        phoneticTip: "¡La 'H' en honest es 100% muda! Suena 'ó-nest'.",
        pos: "filler phrase",
        meaningEs: "Para ser sincero / La verdad es que...",
        meaningEn: "Speaking candidly and truthfully",
        exampleEn: "To be honest, I didn't really like the movie.",
        exampleEs: "Para ser sincero, la verdad no me gustó la película.",
        noteEs: "Da un tono muy humano y confiable a tu inglés."
      },
      {
        word: "By the way",
        ipa: "/baɪ ðə weɪ/",
        pronunciationGuide: "[bai da UÉI]",
        phoneticTip: "La 'W' suena suave como 'uéi'.",
        pos: "phrase",
        meaningEs: "Por cierto / A propósito",
        meaningEn: "Introducing a new related topic",
        exampleEn: "By the way, did you talk to your mom today?",
        exampleEs: "Por cierto, ¿hablaste con tu mamá hoy?",
        noteEs: "Para cambiar de tema suavemente en un chat."
      },
      {
        word: "I mean...",
        ipa: "/aɪ miːn/",
        pronunciationGuide: "[ai MIIN]",
        phoneticTip: "Alarga la 'I': 'ai-miiin'.",
        pos: "filler",
        meaningEs: "O sea... / Es decir...",
        meaningEn: "Clarifying or rephrasing your previous point",
        exampleEn: "It's not bad, I mean, it could be better.",
        exampleEs: "No está mal, o sea, podría estar mejor.",
        noteEs: "La muletilla más común de todas."
      },
      {
        word: "As far as I know",
        ipa: "/æz fɑːr æz aɪ noʊ/",
        pronunciationGuide: "[as FAR as ai NOU]",
        phoneticTip: "La 'K' de know es muda.",
        pos: "phrase",
        meaningEs: "Que yo sepa / Hasta donde sé",
        meaningEn: "To the best of my knowledge",
        exampleEn: "As far as I know, the store is closed on Sundays.",
        exampleEs: "Que yo sepa, la tienda está cerrada los domingos.",
        noteEs: "Excelente para dar información sin comprometerte al 100%."
      }
    ],
    familyQuiz: {
      questionEn: "How do you smoothly switch topics to ask: 'Por cierto, ¿viste las llaves?'",
      questionEs: "¿Cómo cambias de tema suavemente para preguntar: 'Por cierto, ¿viste las llaves?'",
      options: [
        "For true, did you see the keys?",
        "By the way, did you see the keys?",
        "In the road, did you see the keys?",
        "To the side, did you see the keys?"
      ],
      correct: 1,
      explanationEs: "'By the way' es la traducción exacta y natural de 'Por cierto'."
    }
  },

  // WEEK 3: HIGH-IMPACT PHRASAL VERBS
  {
    day: 12,
    week: 2,
    titleEn: "Home & Morning Routine Phrasal Verbs",
    titleEs: "Verbos compuestos para la rutina del hogar",
    badge: "Rutina Diaria",
    summaryEs: "Las acciones de la casa en inglés casi nunca son un solo verbo; son combinaciones de dos palabras.",
    summaryEn: "Daily domestic actions are almost always phrasal verbs in real English.",
    tipEs: "💡 'Wake up' es abrir los ojos; 'Get up' es levantarse físicamente de la cama.",
    tipEn: "💡 'Wake up' means to stop sleeping; 'Get up' means physically getting out of bed.",
    words: [
      {
        word: "Wake up vs. Get up",
        ipa: "/weɪk ʌp / ɡɛt ʌp/",
        pronunciationGuide: "[UÉIK ap / GUET ap]",
        phoneticTip: "Enlace fonético: 'uéi-kap' y 'gué-tap'.",
        pos: "phrasal verb pair",
        meaningEs: "Despertarse vs. Levantarse de la cama",
        meaningEn: "Wake up = stop sleeping; Get up = rise out of bed",
        exampleEn: "I wake up at 6:00, but I get up at 6:30.",
        exampleEs: "Me despierto a las 6:00, pero me levanto a las 6:30.",
        noteEs: "Diferencia sutil pero que denota gran dominio."
      },
      {
        word: "Turn on / Turn off",
        ipa: "/tɜːrn ɒn / tɜːrn ɒf/",
        pronunciationGuide: "[TERN on / TERN of]",
        phoneticTip: "Nunca digas 'open/close the light' en inglés.",
        pos: "phrasal verbs",
        meaningEs: "Encender / Apagar (luces, aparatos)",
        meaningEn: "Activate / Deactivate power to a device",
        exampleEn: "Please turn off the lights before leaving.",
        exampleEs: "Por favor apaga las luces antes de salir.",
        noteEs: "No digas 'open/close the light' (error común del español)."
      },
      {
        word: "Look for",
        ipa: "/lʊk fɔːr/",
        pronunciationGuide: "[LUK for]",
        phoneticTip: "'Look' es mirar, pero 'Look for' es buscar.",
        pos: "phrasal verb",
        meaningEs: "Buscar",
        meaningEn: "Search for an item or person",
        exampleEn: "I'm looking for my glasses, have you seen them?",
        exampleEs: "Estoy buscando mis lentes, ¿los has visto?",
        noteEs: "'Look' solo es mirar, pero 'Look for' es buscar."
      },
      {
        word: "Run out of",
        ipa: "/rʌn aʊt ɒv/",
        pronunciationGuide: "[RAN AUT ov]",
        phoneticTip: "Suena unido: 'ra-náu-tov'.",
        pos: "phrasal verb",
        meaningEs: "Quedarse sin / Acabársele a uno algo",
        meaningEn: "To have no more of something left",
        exampleEn: "We ran out of milk, can you buy some?",
        exampleEs: "Nos quedamos sin leche, ¿puedes comprar un poco?",
        noteEs: "Frase reina para la lista de compras del hogar."
      }
    ],
    familyQuiz: {
      questionEn: "How do you tell someone in English: 'Apaga la televisión, por favor'?",
      questionEs: "¿Cómo le dices a alguien en inglés: 'Apaga la televisión, por favor'?",
      options: [
        "Close the TV, please.",
        "Turn off the TV, please.",
        "Shutdown the TV, please.",
        "Extinguish the TV, please."
      ],
      correct: 1,
      explanationEs: "Para electrodomésticos y luces siempre se usa 'Turn off' (apagar) o 'Turn on' (encender)."
    }
  },
  {
    day: 13,
    week: 2,
    titleEn: "Social & Outing Phrasal Verbs (Hang out, Pick up, Drop off)",
    titleEs: "Verbos para salir con amigos y familia",
    badge: "Vida Social",
    summaryEs: "Los tres verbos que necesitas para coordinar salidas, llevar a los hijos a la escuela y pasar el rato.",
    summaryEn: "The essential verbs needed to plan outings, pick up family members, and socialize.",
    tipEs: "💡 'Pick up' tiene 3 usos: levantar algo del suelo, recoger a alguien en auto, o contestar el teléfono.",
    tipEn: "💡 'Pick up' can mean lifting an object, collecting a person in a car, or answering a phone.",
    words: [
      {
        word: "Hang out",
        ipa: "/hæŋ aʊt/",
        pronunciationGuide: "[JANG AUT]",
        phoneticTip: "Une el sonido: 'jan-gáut'.",
        pos: "phrasal verb",
        meaningEs: "Pasar el rato / Convivir / Salir a divertirse",
        meaningEn: "Spend relaxed time with friends/family",
        exampleEn: "Do you want to hang out this Saturday?",
        exampleEs: "¿Quieres pasar el rato este sábado?",
        noteEs: "La palabra informal por excelencia para verse con amigos."
      },
      {
        word: "Pick up",
        ipa: "/pɪk ʌp/",
        pronunciationGuide: "[PIK AP]",
        phoneticTip: "Enlace: 'pí-kap'.",
        pos: "phrasal verb",
        meaningEs: "Recoger a alguien en auto / Levantar",
        meaningEn: "Collect someone by car / lift from ground",
        exampleEn: "I will pick you up at the station at 5:00.",
        exampleEs: "Te recojo en la estación a las 5:00.",
        noteEs: "Imprescindible para el transporte diario."
      },
      {
        word: "Drop off",
        ipa: "/drɒp ɒf/",
        pronunciationGuide: "[DRAP OF]",
        phoneticTip: "Enlace: 'dra-pof'.",
        pos: "phrasal verb",
        meaningEs: "Dejar a alguien en un lugar / Entregar algo",
        meaningEn: "Take someone to a destination and leave them there",
        exampleEn: "Can you drop me off at the supermarket?",
        exampleEs: "¿Puedes dejarme en el supermercado?",
        noteEs: "El opuesto directo de 'pick up'."
      },
      {
        word: "Meet up with",
        ipa: "/miːt ʌp wɪð/",
        pronunciationGuide: "[MIIT ap uiz]",
        phoneticTip: "Casual: 'Quedar de verse'.",
        pos: "phrasal verb",
        meaningEs: "Quedar de verse con / Reunirse con",
        meaningEn: "Meet someone at an agreed place",
        exampleEn: "I'm meeting up with a cousin for lunch.",
        exampleEs: "Quedé de verme con un primo para almorzar.",
        noteEs: "Suena mucho más casual que 'have a formal meeting'."
      }
    ],
    familyQuiz: {
      questionEn: "How do you ask: '¿Me puedes recoger en el trabajo a las 6?'",
      questionEs: "¿Cómo preguntas: '¿Me puedes recoger en el trabajo a las 6?'",
      options: [
        "Can you recollect me at work at 6?",
        "Can you pick me up at work at 6?",
        "Can you bring me at work at 6?",
        "Can you catch me at work at 6?"
      ],
      correct: 1,
      explanationEs: "'Pick me up' es la expresión natural para recoger a alguien en auto."
    }
  },
  {
    day: 14,
    week: 2,
    titleEn: "Problem-Solving Verbs: Figure out, Find out, Give up",
    titleEs: "Verbos para resolver problemas y enterarse",
    badge: "Soluciones",
    summaryEs: "Cómo expresar que resolviste algo difícil, descubriste un secreto o decidiste no rendirte.",
    summaryEn: "How to express finding solutions, discovering news, and persevering.",
    tipEs: "💡 'Find out' es enterarse de una información; 'Figure out' es pensar hasta encontrar la solución a un problema.",
    tipEn: "💡 'Find out' = discover facts; 'Figure out' = solve a mental puzzle or challenge.",
    words: [
      {
        word: "Figure out",
        ipa: "/ˈfɪɡjər aʊt/",
        pronunciationGuide: "[FÍ-guer aut]",
        phoneticTip: "Une: 'Fí-guer-aut'.",
        pos: "phrasal verb",
        meaningEs: "Descifrar / Resolver / Entender cómo funciona",
        meaningEn: "Understand or solve a problem through thinking",
        exampleEn: "Don't worry, we will figure it out together.",
        exampleEs: "No te preocupes, lo resolveremos juntos.",
        noteEs: "Una de las frases más reconfortantes del inglés."
      },
      {
        word: "Find out",
        ipa: "/faɪnd aʊt/",
        pronunciationGuide: "[FAIND aut]",
        phoneticTip: "Une la 'D': 'fain-daut'.",
        pos: "phrasal verb",
        meaningEs: "Enterarse / Descubrir información",
        meaningEn: "Discover a piece of information or truth",
        exampleEn: "I just found out that tomorrow is a holiday!",
        exampleEs: "¡Me acabo de enterar de que mañana es feriado!",
        noteEs: "El equivalente perfecto de 'enterarse'."
      },
      {
        word: "Give up",
        ipa: "/ɡɪv ʌp/",
        pronunciationGuide: "[GÜIV ap]",
        phoneticTip: "Une: 'Güi-vap'.",
        pos: "phrasal verb",
        meaningEs: "Rendirse / Darse por vencido",
        meaningEn: "Stop trying / surrender",
        exampleEn: "Never give up on your dreams!",
        exampleEs: "¡Nunca te des por vencido en tus sueños!",
        noteEs: "Frase motivacional fundamental para la familia."
      },
      {
        word: "Hold on",
        ipa: "/hoʊld ɒn/",
        pronunciationGuide: "[JOULD on]",
        phoneticTip: "Une: 'joul-don'.",
        pos: "phrasal verb",
        meaningEs: "Espera un momento / Aguanta",
        meaningEn: "Wait a short moment (often on the phone)",
        exampleEn: "Hold on a second, someone is knocking.",
        exampleEs: "Espera un segundo, alguien está tocando la puerta.",
        noteEs: "Sustituto conversacional de 'Wait a moment'."
      }
    ],
    familyQuiz: {
      questionEn: "What does 'Don't worry, we will figure it out' mean in Spanish?",
      questionEs: "¿Qué significa 'Don't worry, we will figure it out' en español?",
      options: [
        "No te preocupes, nos daremos por vencidos.",
        "No te preocupes, lo resolveremos / descifraremos juntos.",
        "No te preocupes, nos enteraremos mañana.",
        "No te preocupes, dibuja una figura."
      ],
      correct: 1,
      explanationEs: "'Figure it out' significa encontrar la solución a un problema."
    }
  },

  // WEEK 3: ADVANCED FALSE FRIENDS & REAL-LIFE CONVERSATION
  {
    day: 15,
    week: 3,
    titleEn: "The Embarrassing False Friends (Embarrassed, Realize, Notice)",
    titleEs: "Falsos amigos vergonzosos (Embarrassed, Realize, Notice)",
    badge: "Alerta Crítica",
    summaryEs: "Evita situaciones incómodas aprendiendo palabras en inglés que suenan idénticas al español pero significan algo totalmente diferente.",
    summaryEn: "Avoid awkward situations by mastering English words that sound like Spanish words but mean something else.",
    tipEs: "💡 'Embarrassed' NO es embarazada (embarazada = pregnant). 'Embarrassed' significa apenado o avergonzado.",
    tipEn: "💡 'Embarrassed' means ashamed/awkward, NEVER pregnant!",
    words: [
      {
        word: "Embarrassed",
        ipa: "/ɪmˈbærəst/",
        pronunciationGuide: "[em-BÁ-rast]",
        phoneticTip: "Embarazada se dice 'PREGNANT'.",
        pos: "adjective",
        meaningEs: "Avergonzado / Apenado (¡NO embarazada!)",
        meaningEn: "Feeling awkward, ashamed, or self-conscious",
        exampleEn: "I was so embarrassed when I forgot his name.",
        exampleEs: "Estaba tan apenado cuando olvidé su nombre.",
        noteEs: "Embarazada en inglés es 'Pregnant'."
      },
      {
        word: "Realize",
        ipa: "/ˈriːəlaɪz/",
        pronunciationGuide: "[RÍ-a-lais]",
        phoneticTip: "Para 'hacer un proyecto' se dice 'carry out' o 'make'.",
        pos: "verb",
        meaningEs: "Darse cuenta (¡NO realizar / hacer!)",
        meaningEn: "Become fully aware of something",
        exampleEn: "I didn't realize what time it was.",
        exampleEs: "No me di cuenta de qué hora era.",
        noteEs: "Para 'hacer o realizar un proyecto' se usa 'carry out' o 'make'."
      },
      {
        word: "Notice",
        ipa: "/ˈnoʊtɪs/",
        pronunciationGuide: "[NÓU-tis]",
        phoneticTip: "Noticia de TV o periódico se dice 'News'.",
        pos: "verb & noun",
        meaningEs: "Notar / Darse cuenta (¡NO una noticia!)",
        meaningEn: "Become aware of something by sight or hearing",
        exampleEn: "Did you notice her new haircut?",
        exampleEs: "¿Notaste su nuevo corte de pelo?",
        noteEs: "Noticia de televisión o periódico es 'News'."
      },
      {
        word: "Attend",
        ipa: "/əˈtɛnd/",
        pronunciationGuide: "[a-TÉND]",
        phoneticTip: "Atender a un cliente se dice 'Assist' o 'Help'.",
        pos: "verb",
        meaningEs: "Asistir a un evento/clase (¡NO atender al cliente!)",
        meaningEn: "Be present at an event, meeting, or class",
        exampleEn: "I will attend the family reunion this Sunday.",
        exampleEs: "Asistiré a la reunión familiar este domingo.",
        noteEs: "Atender a una persona o servir es 'Assist' o 'Help / Serve'."
      }
    ],
    familyQuiz: {
      questionEn: "If you want to say 'Mi prima está embarazada', what is the CORRECT sentence?",
      questionEs: "Si quieres decir 'Mi prima está embarazada', ¿cuál es la frase CORRECTA?",
      options: [
        "My cousin is very embarrassed.",
        "My cousin is pregnant.",
        "My cousin is expecting realization.",
        "My cousin is currently attended."
      ],
      correct: 1,
      explanationEs: "Embarazada se dice 'pregnant'. 'Embarrassed' significa apenada o avergonzada."
    }
  },
  {
    day: 16,
    week: 3,
    titleEn: "Professional False Friends: Assist, Sensible, Library, Success",
    titleEs: "Falsos amigos en el trabajo y la escuela",
    badge: "Inglés Profesional",
    summaryEs: "Diferencia las palabras que confunden a casi todos los hispanohablantes en correos electrónicos y oficinas.",
    summaryEn: "Master false cognates that confuse Spanish speakers in professional and academic settings.",
    tipEs: "💡 'Sensible' en inglés significa 'sensato y con sentido común'. 'Sensible' en español se dice 'Sensitive'.",
    tipEn: "💡 'Sensible' means reasonable and practical. 'Sensitive' means emotional/delicate.",
    words: [
      {
        word: "Sensible vs. Sensitive",
        ipa: "/ˈsɛnsɪbəl / ˈsɛnsɪtɪv/",
        pronunciationGuide: "[SÉN-si-bl / SÉN-si-tiv]",
        phoneticTip: "Sensible = Sensato. Sensitive = Sensible.",
        pos: "adjectives",
        meaningEs: "Sensato/Práctico vs. Sensible/Emocional",
        meaningEn: "Sensible = reasonable; Sensitive = emotional/delicate",
        exampleEn: "That was a very sensible decision.",
        exampleEs: "Esa fue una decisión muy sensata y madura.",
        noteEs: "Si alguien llora fácil, es 'sensitive', no 'sensible'."
      },
      {
        word: "Library vs. Bookstore",
        ipa: "/ˈlaɪbrəri / ˈbʊkstɔːr/",
        pronunciationGuide: "[LÁI-bre-ri / BUUK-stor]",
        phoneticTip: "Library = Gratis (prestar). Bookstore = Comprar.",
        pos: "nouns",
        meaningEs: "Biblioteca (prestar libros) vs. Librería (comprar)",
        meaningEn: "Library = borrow free books; Bookstore = buy books",
        exampleEn: "I study at the public library every afternoon.",
        exampleEs: "Estudio en la biblioteca pública todas las tardes.",
        noteEs: "La librería donde compras libros es 'bookstore'."
      },
      {
        word: "Success",
        ipa: "/səkˈsɛs/",
        pronunciationGuide: "[sak-SÉS]",
        phoneticTip: "Acento fuerte en la segunda sílaba: 'sak-sés'.",
        pos: "noun",
        meaningEs: "Éxito (¡NO suceso/acontecimiento!)",
        meaningEn: "The achievement of a goal or purpose",
        exampleEn: "Hard work is the key to success.",
        exampleEs: "El trabajo duro es la clave del éxito.",
        noteEs: "Un suceso o evento se dice 'event' o 'incident'."
      },
      {
        word: "Exit vs. Success",
        ipa: "/ˈɛɡzɪt/",
        pronunciationGuide: "[ÉK-sit]",
        phoneticTip: "Exit = Salida de emergencia.",
        pos: "noun",
        meaningEs: "Salida física (¡NO éxito!)",
        meaningEn: "A way out of a building or vehicle",
        exampleEn: "The emergency exit is on the left.",
        exampleEs: "La salida de emergencia está a la izquierda.",
        noteEs: "No confundir Exit (salida) con Éxito (success)."
      }
    ],
    familyQuiz: {
      questionEn: "Where do you go to borrow books for free?",
      questionEs: "¿A dónde vas a pedir prestados libros gratis?",
      options: [
        "To the bookstore.",
        "To the library.",
        "To the book exit.",
        "To the sensible shop."
      ],
      correct: 1,
      explanationEs: "'Library' es biblioteca (para pedir prestado). 'Bookstore' es donde se compran."
    }
  },
  {
    day: 17,
    week: 3,
    titleEn: "Daily Expressive Nuances: Kind of, Sort of, Pretty much",
    titleEs: "Matices cotidianos: Más o menos, Casi todo",
    badge: "Fluidez Diaria",
    summaryEs: "Cómo responder cuando algo no es blanco ni negro. En lugar de decir 'more or less' todo el tiempo, usa las frases nativas.",
    summaryEn: "How to express shades of gray. Replace repetitive 'more or less' with natural expressions.",
    tipEs: "💡 Los nativos casi nunca dicen 'more or less' al responder si están bien. Dicen 'I'm pretty good' o 'kind of tired'.",
    tipEn: "💡 Use 'kind of' or 'sort of' to soften statements instead of 'more or less'.",
    words: [
      {
        word: "Kind of / Sort of",
        ipa: "/kaɪnd ɒv / sɔːrt ɒv/",
        pronunciationGuide: "[KÁIN-da / SÓR-ta]",
        phoneticTip: "En la calle se reducen a 'Kinda' y 'Sorta'.",
        pos: "adverbs",
        meaningEs: "Más o menos / Un poco / Tipo...",
        meaningEn: "Somewhat / to a moderate degree",
        exampleEn: "I'm kind of tired today, but I'm okay.",
        exampleEs: "Estoy más o menos cansado hoy, pero estoy bien.",
        noteEs: "La forma más común de matizar cualquier adjetivo."
      },
      {
        word: "Pretty good",
        ipa: "/ˈprɪti ɡʊd/",
        pronunciationGuide: "[PRÍ-ti GUD]",
        phoneticTip: "'Pretty' aquí significa 'bastante', no 'bonita'.",
        pos: "phrase",
        meaningEs: "Bastante bien (muy positivo)",
        meaningEn: "Very good / quite well",
        exampleEn: "How was your day? — Pretty good!",
        exampleEs: "¿Cómo estuvo tu día? — ¡Bastante bien!",
        noteEs: "'Pretty' aquí no significa bonita, significa 'bastante'."
      },
      {
        word: "Pretty much",
        ipa: "/ˈprɪti mʌtʃ/",
        pronunciationGuide: "[PRÍ-ti MACH]",
        phoneticTip: "La 'U' de much suena como 'A': 'mach'.",
        pos: "phrase",
        meaningEs: "Básicamente / Prácticamente / Casi todo",
        meaningEn: "Almost completely / essentially",
        exampleEn: "Are you finished? — Pretty much, just one detail left.",
        exampleEs: "¿Terminaste? — Prácticamente, solo falta un detalle.",
        noteEs: "Usadísimo para confirmar que algo está casi listo."
      },
      {
        word: "Not at all",
        ipa: "/nɒt æt ɔːl/",
        pronunciationGuide: "[NA-ta-tol]",
        phoneticTip: "Une en un solo bloque: 'Na-ta-tol'.",
        pos: "phrase",
        meaningEs: "Para nada / En lo absoluto",
        meaningEn: "Certainly not / polite refusal",
        exampleEn: "Does it bother you? — Not at all!",
        exampleEs: "¿Te molesta? — ¡Para nada!",
        noteEs: "Excelente forma de ser amable y tranquilizar a alguien."
      }
    ],
    familyQuiz: {
      questionEn: "If someone asks 'How are you?' and you feel good, what sounds most natural?",
      questionEs: "Si alguien te pregunta '¿Cómo estás?' y te sientes bien, ¿qué suena más natural?",
      options: [
        "I am more or less fine.",
        "I'm doing pretty good, thanks!",
        "I am sensible and successful.",
        "I have good health today."
      ],
      correct: 1,
      explanationEs: "'I'm doing pretty good!' es la respuesta estándar y alegre en el día a día."
    }
  },
  {
    day: 18,
    week: 3,
    titleEn: "Everyday Transactions: Ordering, Paying & Shopping",
    titleEs: "Transacciones diarias: Pedir, Pagar y Compras",
    badge: "Inglés de Calle",
    summaryEs: "Frases exactas para pedir un café, preguntar si algo está en oferta y pedir la cuenta sin trabarse.",
    summaryEn: "Exact phrases to order drinks, ask about prices/sales, and ask for the check smoothly.",
    tipEs: "💡 En Estados Unidos se pide la cuenta diciendo 'Could we get the check, please?'. En el Reino Unido dicen 'the bill'.",
    tipEn: "💡 In the US ask for 'the check'; in the UK ask for 'the bill'.",
    words: [
      {
        word: "To go / For here",
        ipa: "/tuː ɡoʊ / fɔːr hɪər/",
        pronunciationGuide: "[tu GOU / for JÍER]",
        phoneticTip: "La primera pregunta que escucharás en todo restaurante.",
        pos: "phrases",
        meaningEs: "Para llevar / Para comer aquí",
        meaningEn: "Takeout vs. dining in restaurant",
        exampleEn: "A medium latte to go, please.",
        exampleEs: "Un café con leche mediano para llevar, por favor.",
        noteEs: "La primera pregunta que te harán en cualquier cafetería."
      },
      {
        word: "Can I get the check?",
        ipa: "/kæn aɪ ɡɛt ðə tʃɛk/",
        pronunciationGuide: "[kan ai GUET da CHEK]",
        phoneticTip: "En EE. UU. se dice 'check'; en UK se dice 'bill'.",
        pos: "phrase",
        meaningEs: "¿Me trae la cuenta, por favor?",
        meaningEn: "Asking the waiter for the restaurant bill",
        exampleEn: "Whenever you're ready, can we get the check?",
        exampleEs: "Cuando esté listo, ¿nos trae la cuenta por favor?",
        noteEs: "Elegante y respetuoso."
      },
      {
        word: "On sale vs. For sale",
        ipa: "/ɒn seɪl / fɔːr seɪl/",
        pronunciationGuide: "[on SÉIL / for SÉIL]",
        phoneticTip: "ON sale = Con rebaja/descuento.",
        pos: "pair",
        meaningEs: "En descuento/oferta vs. A la venta",
        meaningEn: "On sale = discounted price; For sale = available to buy",
        exampleEn: "These shoes are on sale for 30% off!",
        exampleEs: "¡Estos zapatos tienen un 30% de descuento!",
        noteEs: "Si tiene rebaja de precio, siempre es 'ON sale'."
      },
      {
        word: "Keep the change",
        ipa: "/kiːp ðə tʃeɪndʒ/",
        pronunciationGuide: "[KIIP da CHÉINDZH]",
        phoneticTip: "Para taxis o propinas rápidas.",
        pos: "phrase",
        meaningEs: "Quédese con el cambio / la propina",
        meaningEn: "Allow the recipient to keep the remaining money",
        exampleEn: "Here is twenty dollars, keep the change.",
        exampleEs: "Aquí tiene veinte dólares, quédese con el cambio.",
        noteEs: "Para taxis o propinas rápidas."
      }
    ],
    familyQuiz: {
      questionEn: "How do you order a sandwich to eat outside the cafe?",
      questionEs: "¿Cómo pides un sándwich para llevar?",
      options: [
        "A sandwich to carry away, please.",
        "A sandwich to go, please.",
        "A sandwich for outside, please.",
        "A sandwich for departure, please."
      ],
      correct: 1,
      explanationEs: "'To go' es la expresión universal en inglés para pedir comida para llevar."
    }
  },

  // WEEK 4: REAL-LIFE SPOKEN CONTRACTIONS & IDIOMS
  {
    day: 19,
    week: 4,
    titleEn: "Spoken Reductions: Gonna, Wanna, Gotta",
    titleEs: "Reducciones habladas: Gonna, Wanna, Gotta",
    badge: "Entrena tu Oído",
    summaryEs: "Por qué los nativos no hablan como los libros de texto y cómo entrenar tu oído para entender películas y charlas de la calle.",
    summaryEn: "Why native speakers blend words together and how to train your ear for fast spoken English.",
    tipEs: "💡 No necesitas forzarte a escribirlas en correos formales, pero DEBES entenderlas al instante cuando las escuchas.",
    tipEn: "💡 You don't need to write them formally, but you must recognize them instantly when heard.",
    words: [
      {
        word: "Gonna (Going to)",
        ipa: "/ˈɡənə/",
        pronunciationGuide: "[GÓ-na]",
        phoneticTip: "Reemplaza 100% a 'going to' en conversación.",
        pos: "spoken contraction",
        meaningEs: "Voy a / Va a (futuro inmediato)",
        meaningEn: "Future intention (going to)",
        exampleEn: "I'm gonna call my mom in five minutes.",
        exampleEs: "Voy a llamar a mi mamá en cinco minutos.",
        noteEs: "Reemplaza al 100% a 'going to' en el habla informal."
      },
      {
        word: "Wanna (Want to)",
        ipa: "/ˈwɒnə/",
        pronunciationGuide: "[UÁ-na]",
        phoneticTip: "Solo con I / You / We / They (no con He/She).",
        pos: "spoken contraction",
        meaningEs: "Quiero / Quieres (deseo)",
        meaningEn: "Desire (want to)",
        exampleEn: "Do you wanna grab some tacos tonight?",
        exampleEs: "¿Quieres ir por unos tacos esta noche?",
        noteEs: "Solo se usa con 'I / You / We / They', nunca con he/she."
      },
      {
        word: "Gotta (Got to / Have to)",
        ipa: "/ˈɡɒtə/",
        pronunciationGuide: "[GÁ-ta]",
        phoneticTip: "'I gotta go' = 'Me tengo que ir ya'.",
        pos: "spoken contraction",
        meaningEs: "Tengo que / Me tengo que ir (obligación)",
        meaningEn: "Obligation (have got to)",
        exampleEn: "I gotta go now, see you tomorrow!",
        exampleEs: "Me tengo que ir ahora, ¡nos vemos mañana!",
        noteEs: "'I gotta go' es la despedida más común del inglés."
      },
      {
        word: "Lemme (Let me)",
        ipa: "/ˈlɛmi/",
        pronunciationGuide: "[LÉ-mi]",
        phoneticTip: "Reducción de 'Let me'.",
        pos: "spoken contraction",
        meaningEs: "Déjame / Permíteme",
        meaningEn: "Allow me to",
        exampleEn: "Lemme check my schedule real quick.",
        exampleEs: "Déjame revisar mi agenda rapidito.",
        noteEs: "Reducción muy común en conversaciones telefónicas."
      }
    ],
    familyQuiz: {
      questionEn: "What does 'I gotta go' mean in casual conversation?",
      questionEs: "¿Qué significa 'I gotta go' en una charla casual?",
      options: [
        "Voy a llegar tarde.",
        "Tengo que irme ya.",
        "Quiero ir al cine.",
        "Déjame pensar."
      ],
      correct: 1,
      explanationEs: "'I gotta go' viene de 'I have got to go' (Tengo que irme)."
    }
  },
  {
    day: 20,
    week: 4,
    titleEn: "Top 4 English Idioms with Spanish Equivalents",
    titleEs: "4 Modismos ingleses y sus gemelos en español",
    badge: "Modismos",
    summaryEs: "Las frases hechas que le dan sabor al idioma y te hacen sonar como si hubieras vivido años en un país de habla inglesa.",
    summaryEn: "Colorful idiomatic expressions that make you sound like a native resident.",
    tipEs: "💡 Nunca traduzcas los modismos palabra por palabra. Aprende su equivalente emocional en español.",
    tipEn: "💡 Never translate idioms literally; learn their emotional twin meaning in Spanish.",
    words: [
      {
        word: "Piece of cake",
        ipa: "/piːs ɒv keɪk/",
        pronunciationGuide: "[PIIS ov KÉIK]",
        phoneticTip: "Equivale a 'está regalado' o 'pan comido'.",
        pos: "idiom",
        meaningEs: "Pan comido / Facilísimo",
        meaningEn: "Very easy task",
        exampleEn: "Don't worry about the exam, it's a piece of cake!",
        exampleEs: "No te preocupes por el examen, ¡es pan comido!",
        noteEs: "Equivale a 'está regalado / está facilito'."
      },
      {
        word: "Call it a day",
        ipa: "/kɔːl ɪt ə deɪ/",
        pronunciationGuide: "[KOL i-ta DÉI]",
        phoneticTip: "Frase reina al salir del trabajo.",
        pos: "idiom",
        meaningEs: "Dar por terminado el día de trabajo / Parar por hoy",
        meaningEn: "Stop working for the rest of the day",
        exampleEn: "We worked for eight hours, let's call it a day.",
        exampleEs: "Trabajamos por ocho horas, démoslo por terminado por hoy.",
        noteEs: "La frase perfecta para cuando termina la jornada."
      },
      {
        word: "Hit the nail on the head",
        ipa: "/hɪt ðə neɪl ɒn ðə hɛd/",
        pronunciationGuide: "[JIT da NÉIL on da JED]",
        phoneticTip: "¡Idéntico en español e inglés!",
        pos: "idiom",
        meaningEs: "Dar en el clavo / Acertar exactamente",
        meaningEn: "Describe exactly what is causing a situation",
        exampleEn: "You hit the nail on the head with your idea!",
        exampleEs: "¡Diste en el clavo con tu idea!",
        noteEs: "¡Existe exactamente igual en español e inglés!"
      },
      {
        word: "Better safe than sorry",
        ipa: "/ˈbɛtər seɪf ðæn ˈsɒri/",
        pronunciationGuide: "[BÉ-ter SÉIF dan SÓ-rri]",
        phoneticTip: "El refrán de todos los padres y madres.",
        pos: "proverb",
        meaningEs: "Más vale prevenir que lamentar",
        meaningEn: "It is wiser to be cautious than regret later",
        exampleEn: "Take a jacket with you, better safe than sorry.",
        exampleEs: "Lleva una chaqueta contigo, más vale prevenir que lamentar.",
        noteEs: "El refrán familiar favorito por excelencia."
      }
    ],
    familyQuiz: {
      questionEn: "How do you say 'Más vale prevenir que lamentar' in English?",
      questionEs: "¿Cómo se dice 'Más vale prevenir que lamentar' en inglés?",
      options: [
        "More good to secure than sad.",
        "Better safe than sorry.",
        "Piece of cake for everyone.",
        "Hit the nail before tomorrow."
      ],
      correct: 1,
      explanationEs: "'Better safe than sorry' es el proverbio idéntico en inglés."
    }
  },
  {
    day: 21,
    week: 4,
    titleEn: "Grand Fluency Graduation & Complete Review",
    titleEs: "Gran Graduación y Repaso de Fluidez",
    badge: "Graduación",
    summaryEs: "¡Has completado el núcleo de las 100+ palabras y estructuras más poderosas del inglés hablado!",
    summaryEn: "You have completed the core foundation of high-frequency spoken English words and phrases!",
    tipEs: "💡 La clave de la fluidez no es saber 10,000 palabras raras, sino dominar estas 100 palabras con confianza y velocidad.",
    tipEn: "💡 True fluency comes from automatic mastery of high-frequency connectors, modals, and verbs.",
    words: [
      {
        word: "You got this!",
        ipa: "/juː ɡɒt ðɪs/",
        pronunciationGuide: "[YU GAT DIS]",
        phoneticTip: "La mejor frase de aliento: '¡Tú puedes!'.",
        pos: "phrase of encouragement",
        meaningEs: "¡Tú puedes! / ¡Estás listo para esto!",
        meaningEn: "Encouraging phrase meaning 'you are capable of doing this'",
        exampleEn: "Go into that interview, you got this!",
        exampleEs: "Ve a esa entrevista, ¡tú puedes con esto!",
        noteEs: "La mejor frase para motivar a tus hijos o pareja."
      },
      {
        word: "Practice makes perfect",
        ipa: "/ˈpræktɪs meɪks ˈpɜːrfɪkt/",
        pronunciationGuide: "[PRÁK-tis MÉIKS PÉR-fekt]",
        phoneticTip: "El lema del éxito bilingüe.",
        pos: "proverb",
        meaningEs: "La práctica hace al maestro",
        meaningEn: "Constant repetition leads to mastery",
        exampleEn: "Keep speaking every single day, practice makes perfect!",
        exampleEs: "Sigue hablando todos los días, ¡la práctica hace al maestro!",
        noteEs: "El lema de nuestro curso familiar."
      },
      {
        word: "Proud of you",
        ipa: "/praʊd ɒv juː/",
        pronunciationGuide: "[PRÁUD ov YU]",
        phoneticTip: "Une: 'Práu-dov-yu'.",
        pos: "phrase",
        meaningEs: "Orgulloso(a) de ti",
        meaningEn: "Feeling deep satisfaction in someone's achievement",
        exampleEn: "I am so proud of you for learning English!",
        exampleEs: "¡Estoy tan orgulloso de ti por aprender inglés!",
        noteEs: "Un mensaje de amor para cerrar el ciclo."
      },
      {
        word: "Looking forward to it",
        ipa: "/ˈlʊkɪŋ ˈfɔːrwərd tuː ɪt/",
        pronunciationGuide: "[LÚ-king FÓR-ward tu IT]",
        phoneticTip: "La forma más cálida de esperar un encuentro.",
        pos: "phrase",
        meaningEs: "Esperándolo con ilusión / Con muchas ganas de que pase",
        meaningEn: "Awaiting a future event with excitement",
        exampleEn: "We're visiting next weekend, looking forward to it!",
        exampleEs: "Iremos a visitarlos el próximo fin de semana, ¡con muchas ganas!",
        noteEs: "La forma más cálida de anticipar un encuentro."
      }
    ],
    familyQuiz: {
      questionEn: "How do you cheer up a family member before a big challenge?",
      questionEs: "¿Cómo animas a un familiar antes de un reto importante?",
      options: [
        "You make this!",
        "You got this!",
        "You have this time!",
        "You are attended!"
      ],
      correct: 1,
      explanationEs: "'You got this!' es la frase moderna #1 de apoyo ('¡Tú puedes!')."
    }
  }
];

const SPANISH_PHONETIC_RULES = [
  {
    title: "1. La 'S' Inicial (No agregues una 'E')",
    example: "School, Spanish, Stop, Student",
    wrong: "❌ Es-chool / Es-panish",
    correct: "✅ Sss-chool / Sss-panish",
    desc: "En español ninguna palabra empieza con 'S' seguida de consonante, por eso solemos meter una 'E' fantasma. Haz el sonido de una serpiente (Sssss) antes de pronunciar la palabra."
  },
  {
    title: "2. La 'L' Silenciosa en Verbos Modales",
    example: "Could, Would, Should, Talk, Walk",
    wrong: "❌ Culd / Wuld / Shuld",
    correct: "✅ Kud / Wud / Shud / Tok / Wok",
    desc: "En inglés la letra 'L' en palabras como could, would, should, talk y walk es 100% muda. Pronunciarla suena extraño para un nativo."
  },
  {
    title: "3. La 'TH' Suave vs 'TH' Fuerte",
    example: "Thank you, Think, The, That",
    wrong: "❌ Tank you / De",
    correct: "✅ [Z]ank you / [D]at",
    desc: "Coloca suavemente la punta de la lengua entre tus dientes frontales y exhala aire. En 'Think' suena como la 'Z' de España, y en 'The/That' como una 'D' suave que vibra."
  },
  {
    title: "4. La 'V' que vibra vs la 'B' de los labios",
    example: "Very, Have, Favor, Live",
    wrong: "❌ Bery / Jáb",
    correct: "✅ Vvv-ery / Jáv",
    desc: "En español la 'B' y la 'V' suenan idénticas. En inglés la 'V' requiere que tus dientes superiores toquen tu labio inferior y vibren como un motorcito."
  }
];

// Helper to clean speech text for Web Speech Synthesis
const cleanSpeechText = (text) => {
  return text
    .replace(/[[\]()/]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

export default function App() {
  const [activeTab, setActiveTab] = useState('roadmap'); // 'roadmap' | 'lesson' | 'flashcards' | 'quiz' | 'pronunciation' | 'dictionary'
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [langMode, setLangMode] = useState('both'); // 'both' | 'es' | 'en'
  const [audioSpeed, setAudioSpeed] = useState(1.0); // 1.0 or 0.75
  const [accent, setAccent] = useState('en-US'); // 'en-US' | 'en-GB'

  // Family Message Customizer
  const [familyRecipient, setFamilyRecipient] = useState('Familia');
  const [messageTone, setMessageTone] = useState('cariñoso'); // 'cariñoso' | 'reto' | 'directo'

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState({});

  // Quiz state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Copy Feedback state
  const [copiedDay, setCopiedDay] = useState<number | null>(null);
  const [copiedWord, setCopiedWord] = useState<string | null>(null);

  // Audio playing state
  const [playingText, setPlayingText] = useState<string | null>(null);

  // Voice Recognition (Speech-to-Text Microphone test)
  const [isListening, setIsListening] = useState(false);
  const [speechTranscript, setSpeechTranscript] = useState('');
  const [speechFeedback, setSpeechFeedback] = useState<{ type: string; text: string } | null>(null);
  const [activeMicWord, setActiveMicWord] = useState<string | null>(null);

  // Search/Dictionary state
  const [searchQuery, setSearchQuery] = useState('');

  // Daily Streak
  const [completedDays, setCompletedDays] = useState({ 1: true });

  const currentDay = ROADMAP_DATA[selectedDayIndex] || ROADMAP_DATA[0];

  const speakText = (text: string, customSpeed: number | null = null) => {
    if (!('speechSynthesis' in window)) {
      return;
    }

    window.speechSynthesis.cancel(); // Stop ongoing speech

    const cleaned = cleanSpeechText(text);
    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.lang = accent;
    utterance.rate = customSpeed !== null ? customSpeed : audioSpeed;
    utterance.pitch = 1.0;

    // Try to find a nice native English voice if available
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(v => v.lang === accent || v.lang.startsWith(accent.split('-')[0]));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      setPlayingText(text);
    };

    utterance.onend = () => {
      setPlayingText(null);
    };

    utterance.onerror = () => {
      setPlayingText(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Web Speech Recognition for Real-Time Pronunciation Practice
  const startListening = (targetWord) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechFeedback({
        type: 'warning',
        text: 'Tu navegador no soporta reconocimiento de voz. Usa Google Chrome o Edge para practicar con el micrófono.'
      });
      return;
    }

    setActiveMicWord(targetWord);
    setSpeechTranscript('');
    setSpeechFeedback(null);
    setIsListening(true);

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const spoken = event.results[0][0].transcript.toLowerCase().trim();
        setSpeechTranscript(spoken);
        const targetClean = targetWord.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
        const spokenClean = spoken.replace(/[^a-z0-9 ]/g, '').trim();

        if (spokenClean.includes(targetClean) || targetClean.includes(spokenClean)) {
          setSpeechFeedback({
            type: 'success',
            text: `🎯 ¡Excelente pronunciación! Dijiste: "${spoken}"`
          });
        } else {
          setSpeechFeedback({
            type: 'retry',
            text: `Escuchamos: "${spoken}". Intenta otra vez diciendo: "${targetWord}"`
          });
        }
      };

      recognition.onerror = (e) => {
        setIsListening(false);
        setSpeechFeedback({
          type: 'warning',
          text: 'No logramos captar el audio. Por favor permite el acceso al micrófono y habla claro.'
        });
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (err) {
      setIsListening(false);
      console.error('Speech recognition error:', err);
    }
  };

  const copyToClipboard = (textToCopy, identifier) => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        if (typeof identifier === 'number') {
          setCopiedDay(identifier);
          setTimeout(() => setCopiedDay(null), 3000);
        } else {
          setCopiedWord(identifier);
          setTimeout(() => setCopiedWord(null), 2500);
        }
      }
    } catch (err) {
      console.error('Copy fallback error:', err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  // Generate WhatsApp Message Featuring El Salvador 🇸🇻 and Honduras 🇭🇳 Flags
  const generateFamilyMessage = (dayData) => {
    const greeting = messageTone === 'cariñoso'
      ? `¡Buenos días con mucho cariño, querida ${familyRecipient}! 💙`
      : messageTone === 'reto'
      ? `🚨 *RETO DE INGLÉS PARA ${familyRecipient.toUpperCase()}* 🚀`
      : `Lección de hoy para ${familyRecipient}:`;

    let msg = `🌟 *LECCIÓN DE INGLÉS DEL DÍA #${dayData.day}* 🇸🇻🇭🇳🇺🇸\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `${greeting}\n\n`;
    msg += `📌 *TEMA: ${dayData.titleEs.toUpperCase()}*\n`;
    msg += `_${dayData.titleEn}_\n\n`;
    msg += `💡 *Tip Clave:* ${dayData.tipEs}\n\n`;
    msg += `📖 *VOCABULARIO & GUÍA DE PRONUNCIACIÓN:*\n`;

    dayData.words.forEach((item, idx) => {
      msg += `\n${idx + 1}️⃣ *${item.word}*\n`;
      msg += `   🗣️ Pronúncialo: *${item.pronunciationGuide}*\n`;
      if (item.phoneticTip) {
        msg += `   🎯 Sonido: ${item.phoneticTip}\n`;
      }
      msg += `   🎯 Significado: ${item.meaningEs}\n`;
      msg += `   💬 Ejemplo: "${item.exampleEn}"\n`;
      msg += `   🇸🇻🇭🇳 Trad: "${item.exampleEs}"\n`;
      if (item.noteEs) {
        msg += `   ⚠️ Ojo: ${item.noteEs}\n`;
      }
    });

    if (dayData.familyQuiz) {
      msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
      msg += `🧠 *RETO FAMILIAR DE HOY:*\n`;
      msg += `${dayData.familyQuiz.questionEs}\n`;
      dayData.familyQuiz.options.forEach((opt, oIdx) => {
        msg += `  ${String.fromCharCode(65 + oIdx)}) ${opt}\n`;
      });
      msg += `\n👉 _Responde a este mensaje con tu opción (A, B, C o D) y te diré si acertaste._\n`;
    }

    msg += `\n✨ *¡Poco a poco y con constancia se llega lejos!* 🇸🇻🇭🇳🚀`;
    return msg;
  };

  const openWhatsAppDirect = (dayData) => {
    const msg = generateFamilyMessage(dayData);
    const encoded = encodeURIComponent(msg);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const toggleDayCompleted = (dayNumber) => {
    setCompletedDays(prev => ({
      ...prev,
      [dayNumber]: !prev[dayNumber]
    }));
  };

  // Flashcards handlers
  const nextFlashcard = () => {
    setIsCardFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % currentDay.words.length);
  };

  const prevFlashcard = () => {
    setIsCardFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + currentDay.words.length) % currentDay.words.length);
  };

  const toggleMastered = (word) => {
    setMasteredCards(prev => ({
      ...prev,
      [word]: !prev[word]
    }));
  };

  // Dictionary collection
  const allWordsList = ROADMAP_DATA.flatMap((day) =>
    day.words.map((w) => ({
      ...w,
      dayNumber: day.day,
      dayTitle: day.titleEs,
      dayTitleEn: day.titleEn
    }))
  );

  const filteredWords = allWordsList.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.word.toLowerCase().includes(q) ||
      item.meaningEs.toLowerCase().includes(q) ||
      item.meaningEn.toLowerCase().includes(q) ||
      item.exampleEn.toLowerCase().includes(q) ||
      (item.noteEs && item.noteEs.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col selection:bg-emerald-500 selection:text-slate-900">
      
      {}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-3 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('roadmap')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-sky-500/20 text-xl">
              🇸🇻
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-white tracking-tight">Inglés Fluido Familiar</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 flex items-center gap-1">
                  🇸🇻 🇭🇳 Edición Centroamérica
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Las 100+ palabras y frases de oro con pronunciación guiada en español
              </p>
            </div>
          </div>

          {/* Quick Controls: Language Switcher, Audio Accent, & Audio Speed */}
          <div className="flex items-center flex-wrap gap-2">
            
            {/* Language Toggle */}
            <div className="bg-slate-800 p-1 rounded-lg border border-slate-700 flex items-center text-xs">
              <button
                onClick={() => setLangMode('both')}
                className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                  langMode === 'both' ? 'bg-sky-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
                }`}
                title="Bilingüe (Español + Inglés)"
              >
                🇸🇻🇭🇳+🇺🇸 Dual
              </button>
              <button
                onClick={() => setLangMode('es')}
                className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                  langMode === 'es' ? 'bg-sky-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
                }`}
                title="Modo Explicación en Español"
              >
                🇸🇻 ES
              </button>
              <button
                onClick={() => setLangMode('en')}
                className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                  langMode === 'en' ? 'bg-sky-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
                }`}
                title="Immersion Mode (English only)"
              >
                🇺🇸 EN
              </button>
            </div>

            {/* Accent Selector */}
            <select
              value={accent}
              onChange={(e) => setAccent(e.target.value)}
              className="bg-slate-800 text-xs text-slate-300 border border-slate-700 rounded-lg px-2 py-1.5 focus:outline-none focus:border-sky-500 cursor-pointer"
              title="Acento de voz en inglés"
            >
              <option value="en-US">🇺🇸 Voz USA (Recomendado)</option>
              <option value="en-GB">🇬🇧 Voz Británica</option>
            </select>

            {/* Speed Toggle */}
            <button
              onClick={() => setAudioSpeed(prev => prev === 1.0 ? 0.75 : 1.0)}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition ${
                audioSpeed === 0.75
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
              }`}
              title="Velocidad de pronunciación"
            >
              <span>{audioSpeed === 0.75 ? '🐢 Lento (0.75x)' : '⚡ Normal (1.0x)'}</span>
            </button>

          </div>

        </div>
      </header>

      {}
      <nav className="bg-slate-950 border-b border-slate-800/80 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-start sm:justify-center overflow-x-auto py-2.5 space-x-2 scrollbar-none">
          
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              activeTab === 'roadmap'
                ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Roadmap 30 Días</span>
          </button>

          <button
            onClick={() => setActiveTab('lesson')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              activeTab === 'lesson'
                ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Día #{currentDay.day}: Lección y Micrófono</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('flashcards');
              setCurrentCardIndex(0);
              setIsCardFlipped(false);
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              activeTab === 'flashcards'
                ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Flashcards</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('quiz');
              setSelectedOption(null);
              setQuizSubmitted(false);
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              activeTab === 'quiz'
                ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Mini-Quiz Familiar</span>
          </button>

          <button
            onClick={() => setActiveTab('pronunciation')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              activeTab === 'pronunciation'
                ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Mic className="w-4 h-4 text-emerald-400" />
            <span>Secretos de Pronunciación</span>
          </button>

          <button
            onClick={() => setActiveTab('dictionary')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              activeTab === 'dictionary'
                ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Buscador Rápido</span>
          </button>

        </div>
      </nav>

      {}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 md:p-8">

        {/* =========================================================================
            TAB 1: 30-DAY MASTER ROADMAP OVERVIEW
           ========================================================================= */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            
            {/* Banner with Motivation & Family WhatsApp CTA */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-950/70 via-slate-850 to-emerald-950/60 border border-sky-500/30 p-6 sm:p-8 shadow-2xl">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center space-x-2 bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full text-xs font-bold border border-sky-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Método de Conversación Diaria 🇸🇻 El Salvador & 🇭🇳 Honduras</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Aprende y comparte 1 lección diaria con tu familia por WhatsApp
                </h1>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Solo necesitas 5 minutos al día. Escucha la pronunciación exacta, practica hablando con tu micrófono y <strong className="text-sky-300 font-semibold">envía el mensaje diario listo a tus seres queridos</strong> con un solo toque.
                </p>

                {/* Personalize Message Recipient Box */}
                <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-750 flex flex-wrap items-center gap-3 mt-4">
                  <div className="flex items-center space-x-2 text-xs text-slate-300">
                    <UserCheck className="w-4 h-4 text-sky-400" />
                    <span className="font-semibold">Destinatario WhatsApp:</span>
                  </div>
                  <input
                    type="text"
                    value={familyRecipient}
                    onChange={(e) => setFamilyRecipient(e.target.value)}
                    placeholder="Ej: Mamá, Papá, Mi amor, Hijos..."
                    className="bg-slate-800 border border-slate-700 text-white text-xs px-3 py-1.5 rounded-xl focus:outline-none focus:border-sky-400 w-44"
                  />
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-slate-400">Tono:</span>
                    <select
                      value={messageTone}
                      onChange={(e) => setMessageTone(e.target.value)}
                      className="bg-slate-800 border border-slate-700 text-white text-xs px-2 py-1.5 rounded-xl focus:outline-none"
                    >
                      <option value="cariñoso">💙 Cariñoso</option>
                      <option value="reto">🚨 Reto de Estudio</option>
                      <option value="directo">⚡ Directo y Breve</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setSelectedDayIndex(0);
                      setActiveTab('lesson');
                    }}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-sky-500/20"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Empezar Día 1: El Verbo GET</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('pronunciation')}
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-700 transition border border-slate-700"
                  >
                    <Mic className="w-4 h-4 text-emerald-400" />
                    <span>Ver Trucos de Pronunciación</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-slate-800/60 border border-slate-750 p-4 rounded-2xl">
                <span className="text-xs text-slate-400 font-medium">Progreso del Curso</span>
                <p className="text-2xl font-bold text-sky-400 mt-1">{selectedDayIndex + 1} / {ROADMAP_DATA.length}</p>
                <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-sky-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${((selectedDayIndex + 1) / ROADMAP_DATA.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-750 p-4 rounded-2xl">
                <span className="text-xs text-slate-400 font-medium">Fonética Acentuada</span>
                <p className="text-base font-bold text-white mt-1">Énfasis Sílaba</p>
                <p className="text-xs text-amber-300 mt-0.5">Ej: <code>[GUET TU]</code></p>
              </div>

              <div className="bg-slate-800/60 border border-slate-750 p-4 rounded-2xl">
                <span className="text-xs text-slate-400 font-medium">Compartir Rápido</span>
                <p className="text-base font-bold text-emerald-400 mt-1">1 Toque WhatsApp</p>
                <p className="text-xs text-slate-400 mt-0.5">🇸🇻 🇭🇳 Banderas listas</p>
              </div>

              <div className="bg-slate-800/60 border border-slate-750 p-4 rounded-2xl">
                <span className="text-xs text-slate-400 font-medium">Práctica de Voz</span>
                <p className="text-base font-bold text-sky-300 mt-1">Micrófono en Vivo</p>
                <p className="text-xs text-slate-400 mt-0.5">Evalúa tu acento</p>
              </div>
            </div>

            {/* List of Days organized by Weeks */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-sky-400" />
                  <span>Días de Entrenamiento Conversacional</span>
                </h2>
                <span className="text-xs text-slate-400">Toca para abrir la lección</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ROADMAP_DATA.map((dayItem, index) => {
                  const isCurrent = selectedDayIndex === index;
                  const isDone = completedDays[dayItem.day];

                  return (
                    <div
                      key={dayItem.day}
                      onClick={() => {
                        setSelectedDayIndex(index);
                        setActiveTab('lesson');
                      }}
                      className={`group cursor-pointer rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                        isCurrent
                          ? 'bg-slate-800/95 border-sky-500/70 shadow-lg shadow-sky-500/10 ring-1 ring-sky-500/50'
                          : 'bg-slate-800/50 border-slate-750 hover:bg-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div className="space-y-2.5">
                        
                        {/* Day & Badge Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-700 text-sky-300">
                              Día #{dayItem.day}
                            </span>
                            {isDone && (
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md font-bold flex items-center gap-1 border border-emerald-500/30">
                                <Check className="w-3 h-3" /> Completado
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] font-medium text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded-full border border-slate-700">
                            {dayItem.badge}
                          </span>
                        </div>

                        {/* Title Bilingual */}
                        <div>
                          <h3 className="font-bold text-slate-100 group-hover:text-sky-300 transition text-base">
                            {langMode === 'en' ? dayItem.titleEn : dayItem.titleEs}
                          </h3>
                          {langMode === 'both' && (
                            <p className="text-xs text-slate-400 font-mono mt-0.5">
                              {dayItem.titleEn}
                            </p>
                          )}
                        </div>

                        {/* Summary */}
                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {langMode === 'en' ? dayItem.summaryEn : dayItem.summaryEs}
                        </p>

                        {/* Mini Word Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {dayItem.words.map((w, wIdx) => (
                            <span
                              key={wIdx}
                              className="text-[11px] bg-slate-900/80 text-sky-300 px-2 py-0.5 rounded font-mono border border-slate-800"
                            >
                              {w.word}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer: Action & WhatsApp buttons */}
                      <div className="pt-4 mt-3 border-t border-slate-700/60 flex items-center justify-between gap-2">
                        <span className="text-xs text-sky-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                          Ver Lección →
                        </span>

                        <div className="flex items-center space-x-1.5" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => openWhatsAppDirect(dayItem)}
                            className="flex items-center space-x-1 text-xs px-2 py-1 rounded-lg bg-emerald-600/90 text-white font-bold hover:bg-emerald-500 transition shadow"
                            title="Abrir directamente en WhatsApp"
                          >
                            <Send className="w-3 h-3 fill-current" />
                            <span>Enviar</span>
                          </button>

                          <button
                            onClick={() => {
                              const message = generateFamilyMessage(dayItem);
                              copyToClipboard(message, dayItem.day);
                            }}
                            className={`flex items-center space-x-1 text-xs px-2 py-1 rounded-lg border transition ${
                              copiedDay === dayItem.day
                                ? 'bg-sky-500 text-slate-950 font-bold border-sky-400'
                                : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-600'
                            }`}
                            title="Copiar texto al portapapeles"
                          >
                            {copiedDay === dayItem.day ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* =========================================================================
            TAB 2: DAILY LESSON & INTERACTIVE AUDIO + SPEECH EVALUATOR
           ========================================================================= */}
        {activeTab === 'lesson' && (
          <div className="space-y-6">
            
            {/* Top Navigation Bar between Days */}
            <div className="flex items-center justify-between bg-slate-800/80 border border-slate-750 p-3 rounded-2xl">
              <button
                onClick={() => setSelectedDayIndex(prev => Math.max(0, prev - 1))}
                disabled={selectedDayIndex === 0}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-700 text-slate-200 text-xs font-semibold hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Día Anterior</span>
              </button>

              <div className="flex items-center space-x-2">
                <select
                  value={selectedDayIndex}
                  onChange={(e) => setSelectedDayIndex(Number(e.target.value))}
                  className="bg-slate-900 border border-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl px-3 py-1.5 focus:outline-none focus:border-sky-500"
                >
                  {ROADMAP_DATA.map((d, i) => (
                    <option key={d.day} value={i}>
                      Día #{d.day}: {d.titleEs}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setSelectedDayIndex(prev => Math.min(ROADMAP_DATA.length - 1, prev + 1))}
                disabled={selectedDayIndex === ROADMAP_DATA.length - 1}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-700 text-slate-200 text-xs font-semibold hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <span className="hidden sm:inline">Siguiente Día</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Day Title & Dual WhatsApp Sharing Header */}
            <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-850 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2.5">
                    <span className="px-3 py-1 bg-sky-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">
                      Día #{currentDay.day}
                    </span>
                    <span className="px-3 py-1 bg-slate-700/80 text-sky-300 font-medium text-xs rounded-full border border-slate-600">
                      {currentDay.badge}
                    </span>
                    <button
                      onClick={() => toggleDayCompleted(currentDay.day)}
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold border transition flex items-center space-x-1 ${
                        completedDays[currentDay.day]
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'bg-slate-700/50 text-slate-400 border-slate-600 hover:text-white'
                      }`}
                    >
                      <Check className="w-3 h-3" />
                      <span>{completedDays[currentDay.day] ? 'Completado' : 'Marcar como hecho'}</span>
                    </button>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-white">
                    {langMode === 'en' ? currentDay.titleEn : currentDay.titleEs}
                  </h1>
                  {langMode === 'both' && (
                    <p className="text-sm font-mono text-sky-400">
                      {currentDay.titleEn}
                    </p>
                  )}
                  <p className="text-slate-300 text-sm max-w-2xl leading-relaxed pt-1">
                    {langMode === 'en' ? currentDay.summaryEn : currentDay.summaryEs}
                  </p>
                </div>

                {/* Big WhatsApp Direct Buttons */}
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <button
                    onClick={() => openWhatsAppDirect(currentDay)}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl transition-all transform active:scale-95"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    <span>Enviar a {familyRecipient} (WhatsApp)</span>
                  </button>

                  <button
                    onClick={() => {
                      const msg = generateFamilyMessage(currentDay);
                      copyToClipboard(msg, currentDay.day);
                    }}
                    className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2.5 rounded-2xl font-semibold text-xs border transition ${
                      copiedDay === currentDay.day
                        ? 'bg-sky-400 text-slate-950 border-sky-300'
                        : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    {copiedDay === currentDay.day ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>¡Texto Copiado para WhatsApp!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-sky-400" />
                        <span>Copiar Mensaje Completo</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

              {/* Spanish Speaker's Critical Golden Tip */}
              <div className="mt-6 bg-slate-900/90 border-l-4 border-amber-400 rounded-r-2xl p-4 sm:p-5 flex items-start space-x-3.5">
                <Lightbulb className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                    Consejo Clave para Hispanohablantes (🇸🇻 El Salvador & 🇭🇳 Honduras)
                  </h4>
                  <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                    {langMode === 'en' ? currentDay.tipEn : currentDay.tipEs}
                  </p>
                </div>
              </div>

            </div>

            {/* Word Cards with Audio, Phonetic Stress & Microphone Evaluator */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-200 flex items-center space-x-2">
                  <Volume2 className="w-5 h-5 text-sky-400" />
                  <span>Vocabulario, Pronunciación y Práctica de Voz</span>
                </h3>
                <span className="text-xs text-slate-400">
                  Toca <Volume2 className="w-3.5 h-3.5 inline text-sky-400" /> para escuchar o <Mic className="w-3.5 h-3.5 inline text-emerald-400" /> para hablar
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {currentDay.words.map((item, idx) => {
                  const isWordPlaying = playingText === item.word;
                  const isExamplePlaying = playingText === item.exampleEn;
                  const isThisMicActive = activeMicWord === item.word && isListening;

                  return (
                    <div
                      key={idx}
                      className="bg-slate-800/70 border border-slate-750 hover:border-slate-600 rounded-2xl p-5 sm:p-6 transition shadow-md"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        
                        {/* Left: Word, IPA, Pronunciation guide, Part of speech */}
                        <div className="space-y-2 flex-1">
                          
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                              {item.word}
                            </span>
                            
                            <span className="text-xs text-sky-300 font-mono bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                              {item.ipa}
                            </span>

                            <span className="text-xs text-amber-300 font-mono font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20" title="Pronunciación con sílaba fuerte en mayúsculas">
                              🗣️ {item.pronunciationGuide}
                            </span>

                            <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                              {item.pos}
                            </span>
                          </div>

                          {/* Phonetic Tip */}
                          {item.phoneticTip && (
                            <p className="text-xs text-sky-200 bg-sky-950/40 border border-sky-500/20 px-3 py-1.5 rounded-xl">
                              🎙️ <strong>Sonido Clave:</strong> {item.phoneticTip}
                            </p>
                          )}

                          {/* Meaning */}
                          <div className="text-sm font-semibold text-slate-200">
                            {langMode === 'en' ? item.meaningEn : item.meaningEs}
                            {langMode === 'both' && (
                              <span className="text-xs font-normal text-slate-400 ml-2">
                                ({item.meaningEn})
                              </span>
                            )}
                          </div>

                          {/* Example Sentences */}
                          <div className="mt-3 bg-slate-900/60 rounded-xl p-3.5 border border-slate-750 space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm sm:text-base font-medium text-sky-200">
                                "{item.exampleEn}"
                              </p>
                              <button
                                onClick={() => speakText(item.exampleEn)}
                                className={`p-1.5 rounded-lg border transition flex-shrink-0 ${
                                  isExamplePlaying
                                    ? 'bg-sky-500 text-slate-950 border-sky-400 animate-pulse'
                                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                                }`}
                                title="Escuchar oración de ejemplo"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                            
                            {(langMode === 'both' || langMode === 'es') && (
                              <p className="text-xs text-slate-400 italic">
                                "{item.exampleEs}"
                              </p>
                            )}
                          </div>

                          {/* Nuance Note */}
                          {item.noteEs && (
                            <div className="flex items-center space-x-2 text-xs text-slate-400 pt-1">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                              <span>{item.noteEs}</span>
                            </div>
                          )}

                          {/* Microphone Feedback Box if active */}
                          {activeMicWord === item.word && speechFeedback && (
                            <div className={`mt-2 p-3 rounded-xl border text-xs font-semibold ${
                              speechFeedback.type === 'success'
                                ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                                : speechFeedback.type === 'retry'
                                ? 'bg-amber-950/60 border-amber-500/40 text-amber-300'
                                : 'bg-slate-900 border-slate-700 text-slate-300'
                            }`}>
                              {speechFeedback.text}
                            </div>
                          )}

                        </div>

                        {/* Right: Audio Play Buttons & Mic Speaking Test */}
                        <div className="flex items-center lg:flex-col gap-2 justify-end">
                          
                          {/* Normal Speed Audio */}
                          <button
                            onClick={() => speakText(item.word, 1.0)}
                            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition ${
                              isWordPlaying
                                ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-lg shadow-sky-500/20 animate-pulse'
                                : 'bg-slate-750 text-slate-100 border-slate-650 hover:bg-slate-700 hover:border-sky-500/50'
                            }`}
                          >
                            <Volume2 className="w-4 h-4 text-sky-400 fill-current" />
                            <span>Escuchar (1x)</span>
                          </button>

                          {/* Slow Speed Audio */}
                          <button
                            onClick={() => speakText(item.word, 0.7)}
                            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-300 border border-slate-750 hover:bg-slate-800 hover:text-white transition"
                            title="Escuchar en cámara lenta para captar cada fonema"
                          >
                            <span>🐢 Lento (0.7x)</span>
                          </button>

                          {/* Mic Speaking Practice */}
                          <button
                            onClick={() => startListening(item.word)}
                            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                              isThisMicActive
                                ? 'bg-red-500 text-white border-red-400 animate-pulse'
                                : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25'
                            }`}
                            title="Habla en tu micrófono para verificar tu pronunciación"
                          >
                            <Mic className="w-3.5 h-3.5" />
                            <span>{isThisMicActive ? 'Escuchando...' : 'Practicar Voz'}</span>
                          </button>

                          {/* Copy Single Word to clipboard */}
                          <button
                            onClick={() => {
                              const snippet = `🇺🇸 *${item.word}* (${item.pronunciationGuide})\n🎯 ${item.meaningEs}\n💬 "${item.exampleEn}" (${item.exampleEs})`;
                              copyToClipboard(snippet, item.word);
                            }}
                            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-750 hover:bg-slate-800 transition"
                            title="Copiar solo esta palabra con ejemplo"
                          >
                            {copiedWord === item.word ? (
                              <Check className="w-4 h-4 text-sky-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>

                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions to Practice Flashcards or Quiz */}
            <div className="bg-slate-800/40 border border-slate-750 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-300">
                ¿Listo para memorizar estas palabras con tu familia?
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setActiveTab('flashcards');
                    setCurrentCardIndex(0);
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-100 text-xs font-bold transition flex items-center space-x-1.5"
                >
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span>Practicar Flashcards</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('quiz');
                    setSelectedOption(null);
                    setQuizSubmitted(false);
                  }}
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Hacer Mini-Quiz</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* =========================================================================
            TAB 3: INTERACTIVE AUDIO FLASHCARDS
           ========================================================================= */}
        {activeTab === 'flashcards' && (
          <div className="max-w-2xl mx-auto space-y-6">
            
            {/* Flashcard Header */}
            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Entrenamiento de Memoria & Fonética
              </span>
              <h2 className="text-2xl font-black text-white">
                Flashcards: Día #{currentDay.day}
              </h2>
              <p className="text-xs text-slate-400">
                Tarjeta {currentCardIndex + 1} de {currentDay.words.length} • Haz clic en la tarjeta para voltearla
              </p>
            </div>

            {/* The 3D Interactive Flip Card */}
            {currentDay.words[currentCardIndex] && (
              (() => {
                const card = currentDay.words[currentCardIndex];
                const isMastered = !!masteredCards[card.word];

                return (
                  <div className="space-y-4">
                    
                    <div
                      onClick={() => setIsCardFlipped(!isCardFlipped)}
                      className={`relative w-full h-80 sm:h-96 rounded-3xl p-8 border cursor-pointer select-none transition-all duration-300 transform shadow-2xl flex flex-col justify-between ${
                        isCardFlipped
                          ? 'bg-gradient-to-br from-sky-950 via-slate-900 to-slate-900 border-sky-500/60 ring-2 ring-sky-500/20'
                          : 'bg-gradient-to-br from-slate-800 via-slate-800 to-slate-850 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      {/* Top Bar of Card */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-sky-400 border border-slate-750">
                          {isCardFlipped ? "🇸🇻 🇭🇳 ESPAÑOL" : "🇺🇸 ENGLISH"}
                        </span>
                        
                        <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => toggleMastered(card.word)}
                            className={`p-2 rounded-xl transition ${
                              isMastered
                                ? 'bg-sky-500 text-slate-950'
                                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-750'
                            }`}
                            title={isMastered ? "Marcado como dominado" : "Marcar como dominado"}
                          >
                            <Heart className={`w-4 h-4 ${isMastered ? 'fill-current' : ''}`} />
                          </button>
                          
                          <button
                            onClick={() => speakText(card.word)}
                            className="p-2 rounded-xl bg-slate-900/80 text-sky-400 hover:text-white border border-slate-750 hover:bg-slate-800 transition"
                            title="Escuchar palabra"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Center Content */}
                      <div className="text-center my-auto space-y-3">
                        {!isCardFlipped ? (
                          <>
                            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                              {card.word}
                            </h3>
                            <div className="inline-flex items-center space-x-2 bg-slate-900/70 px-3 py-1 rounded-full border border-slate-750">
                              <span className="text-xs font-mono text-sky-400">{card.ipa}</span>
                              <span className="text-xs font-mono text-amber-300 font-bold">🗣️ {card.pronunciationGuide}</span>
                            </div>
                            <p className="text-xs text-slate-400 italic">
                              "{card.exampleEn}"
                            </p>
                          </>
                        ) : (
                          <>
                            <h3 className="text-2xl sm:text-3xl font-bold text-sky-300">
                              {card.meaningEs}
                            </h3>
                            <p className="text-sm text-slate-300">
                              "{card.exampleEs}"
                            </p>
                            {card.noteEs && (
                              <p className="text-xs text-amber-300 bg-amber-500/10 p-2 rounded-xl border border-amber-500/20 max-w-sm mx-auto">
                                💡 {card.noteEs}
                              </p>
                            )}
                          </>
                        )}
                      </div>

                      {/* Bottom Footer hint */}
                      <div className="text-center text-xs text-slate-400 flex items-center justify-center space-x-1">
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Toca para ver {isCardFlipped ? "inglés" : "traducción"}</span>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between gap-4">
                      <button
                        onClick={prevFlashcard}
                        className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-2xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-sm font-bold transition"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Anterior</span>
                      </button>

                      <button
                        onClick={() => speakText(card.word)}
                        className="p-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition shadow-lg shadow-sky-500/20"
                        title="Escuchar pronunciación"
                      >
                        <Volume2 className="w-5 h-5 fill-current" />
                      </button>

                      <button
                        onClick={nextFlashcard}
                        className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-2xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-sm font-bold transition"
                      >
                        <span>Siguiente</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })()
            )}

          </div>
        )}

        {/* =========================================================================
            TAB 4: DAILY MINI QUIZ & CHALLENGE
           ========================================================================= */}
        {activeTab === 'quiz' && (
          <div className="max-w-2xl mx-auto space-y-6">
            
            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Comprobación de Comprensión
              </span>
              <h2 className="text-2xl font-black text-white">
                Reto Familiar: Día #{currentDay.day}
              </h2>
              <p className="text-xs text-slate-400">
                Pon a prueba lo aprendido hoy antes de compartirlo
              </p>
            </div>

            {currentDay.familyQuiz && (
              <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
                
                {/* Question Box */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase text-sky-400 tracking-wider">
                    Pregunta:
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {langMode === 'en' ? currentDay.familyQuiz.questionEn : currentDay.familyQuiz.questionEs}
                  </h3>
                </div>

                {/* Options List */}
                <div className="space-y-3">
                  {currentDay.familyQuiz.options.map((option, optIdx) => {
                    const isSelected = selectedOption === optIdx;
                    const isCorrect = optIdx === currentDay.familyQuiz.correct;

                    let btnStyle = "bg-slate-900 border-slate-750 text-slate-200 hover:bg-slate-750 hover:border-slate-600";
                    
                    if (quizSubmitted) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-500/20 border-emerald-400 text-emerald-200 ring-2 ring-emerald-500/40 font-bold";
                      } else if (isSelected && !isCorrect) {
                        btnStyle = "bg-red-500/20 border-red-500 text-red-200";
                      } else {
                        btnStyle = "bg-slate-900/50 border-slate-800 text-slate-500 opacity-60";
                      }
                    } else if (isSelected) {
                      btnStyle = "bg-sky-500/10 border-sky-500 text-white ring-2 ring-sky-500/30";
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={quizSubmitted}
                        onClick={() => setSelectedOption(optIdx)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start space-x-3.5 text-sm sm:text-base ${btnStyle}`}
                      >
                        <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1 leading-snug">{option}</span>
                        {quizSubmitted && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Submit / Reset Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  {!quizSubmitted ? (
                    <button
                      disabled={selectedOption === null}
                      onClick={() => setQuizSubmitted(true)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition shadow-lg shadow-sky-500/20"
                    >
                      Comprobar Respuesta
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedOption(null);
                        setQuizSubmitted(false);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold text-xs flex items-center justify-center space-x-2"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reintentar</span>
                    </button>
                  )}

                  <button
                    onClick={() => openWhatsAppDirect(currentDay)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center space-x-2"
                  >
                    <Send className="w-3.5 h-3.5 fill-current" />
                    <span>Enviar este Reto a WhatsApp</span>
                  </button>
                </div>

                {/* Explanation Box */}
                {quizSubmitted && (
                  <div className={`p-4 rounded-2xl border text-sm leading-relaxed ${
                    selectedOption === currentDay.familyQuiz.correct
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                      : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                  }`}>
                    <p className="font-bold flex items-center space-x-1.5 mb-1">
                      {selectedOption === currentDay.familyQuiz.correct ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>¡Excelente trabajo! Has acertado.</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-4 h-4 text-amber-400" />
                          <span>Respuesta incorrecta. Mira la explicación:</span>
                        </>
                      )}
                    </p>
                    <p className="text-xs sm:text-sm opacity-90">
                      {currentDay.familyQuiz.explanationEs}
                    </p>
                  </div>
                )}

              </div>
            )}

          </div>
        )}

        {/* =========================================================================
            TAB 5: PRONUNCIATION CHEAT SHEET SPECIFICALLY FOR SPANISH SPEAKERS
           ========================================================================= */}
        {activeTab === 'pronunciation' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Guía Especial de Fonética
              </span>
              <h2 className="text-2xl font-black text-white">
                Los 4 Secretos para Perder el Acento Fuerte
              </h2>
              <p className="text-xs text-slate-400">
                Ajustes sencillos en tu boca que harán que cualquier nativo te entienda a la primera
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SPANISH_PHONETIC_RULES.map((rule, idx) => (
                <div key={idx} className="bg-slate-800/80 border border-slate-750 p-5 rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-sky-300">
                    {rule.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {rule.desc}
                  </p>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-750 space-y-1 text-xs">
                    <p className="font-semibold text-slate-400">Ejemplo: <span className="text-white">{rule.example}</span></p>
                    <p className="text-red-400 font-mono">{rule.wrong}</p>
                    <p className="text-emerald-400 font-mono font-bold">{rule.correct}</p>
                  </div>
                  <button
                    onClick={() => speakText(rule.example)}
                    className="flex items-center space-x-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Escuchar ejemplos</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Speaking Confidence Card */}
            <div className="bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 p-6 rounded-3xl space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <span>Consejo de Oro para la Comunidad Hispana</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tener acento no es un error ni nada de qué avergonzarse: es la prueba de que hablas más de un idioma. Lo importante no es sonar 100% como un nativo, sino pronunciar los sonidos clave con claridad para comunicarte con seguridad en tu trabajo, la escuela y la vida diaria en los Estados Unidos.
              </p>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 6: SEARCHABLE DICTIONARY & DIRECTORY
           ========================================================================= */}
        {activeTab === 'dictionary' && (
          <div className="space-y-6">
            
            {/* Header & Search Bar */}
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-black text-white">
                    Directorio de Palabras Clave y Falsos Amigos
                  </h2>
                  <p className="text-xs text-slate-400">
                    Busca rápidamente cualquier palabra, significado en español o frase del curso
                  </p>
                </div>
                <span className="text-xs font-mono text-sky-400 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
                  {filteredWords.length} palabras disponibles
                </span>
              </div>

              {/* Input */}
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Escribe en inglés o español (ej: get, actually, embarazado, tener frío)..."
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-800 border border-slate-750 focus:border-sky-500 rounded-2xl text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-700 px-2 py-0.5 rounded"
                  >
                    Borrar
                  </button>
                )}
              </div>
            </div>

            {/* Words Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredWords.map((w, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/80 border border-slate-750 hover:border-slate-650 p-4 sm:p-5 rounded-2xl flex flex-col justify-between space-y-3 transition"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-white">{w.word}</span>
                        <span className="text-xs font-mono text-amber-300 font-bold">🗣️ {w.pronunciationGuide}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                        Día #{w.dayNumber}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-sky-300">
                      {w.meaningEs}
                    </p>

                    <p className="text-xs text-slate-300 italic">
                      "{w.exampleEn}"
                    </p>
                    <p className="text-xs text-slate-400">
                      "{w.exampleEs}"
                    </p>

                    {w.noteEs && (
                      <p className="text-[11px] text-amber-300/90 bg-amber-500/10 p-1.5 rounded-lg border border-amber-500/20">
                        ⚠️ {w.noteEs}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-750 flex items-center justify-between">
                    <button
                      onClick={() => speakText(w.word)}
                      className="flex items-center space-x-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Escuchar Audio</span>
                    </button>

                    <button
                      onClick={() => {
                        setSelectedDayIndex(w.dayNumber - 1);
                        setActiveTab('lesson');
                      }}
                      className="text-xs text-slate-400 hover:text-slate-200 underline"
                    >
                      Ir a Lección del Día #{w.dayNumber}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredWords.length === 0 && (
              <div className="text-center py-12 bg-slate-800/40 rounded-3xl border border-slate-800">
                <Search className="w-10 h-10 text-slate-600 mx-auto mb-2" />
                <p className="text-slate-300 font-semibold">No se encontraron resultados para "{searchQuery}"</p>
                <p className="text-xs text-slate-500 mt-1">Prueba buscando palabras como "get", "actually", "make", "food" o "amigos".</p>
              </div>
            )}

          </div>
        )}

      </main>

      {}
      <footer className="bg-slate-950 border-t border-slate-850 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="flex items-center justify-center gap-1.5">
            <span>🇸🇻</span>
            <span>🇭🇳</span>
            <strong className="text-slate-300">Inglés Fluido Familiar</strong> — Hecho con orgullo para las familias de El Salvador, Honduras y toda la comunidad hispanohablante.
          </p>
          <p className="text-slate-400">
            Consejo: Envía una lección cada mañana a las 8:00 AM para crear un hábito familiar duradero.
          </p>
        </div>
      </footer>

    </div>
  );
}