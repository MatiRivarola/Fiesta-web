import { BombTopic, RouletteTask, NeverEverQuestion, CourtQuestion, NeverEverCategory } from './types';

// Helper to generate IDs
const id = (prefix: string, index: number) => `${prefix}_${index}_${Date.now()}`;

// Helper para crear preguntas de Yo Nunca sin errores de índice
const createNeverQuestions = (category: NeverEverCategory, prefix: string, questions: string[]): NeverEverQuestion[] => {
  return questions.map((text, i) => ({
    id: id(prefix, i),
    category,
    text
  }));
};

/* --- RULETA TÓXICA (EDICIÓN CÓRDOBA) --- */

const ROULETTE_ICEBREAKER: RouletteTask[] = Array.from({ length: 100 }, (_, i) => ({
  id: id('r_ice', i), category: 'ICEBREAKER', type: i % 2 === 0 ? 'truth' : 'dare',
  text: [
    "Contá quién fue tu primer chape.", "Tirate un paso de Cuarteto (La Mona style).", "Imitá a un cheto de Nueva Córdoba.", "Dejá que te despeinen todo, culiau.", "Mostrá la última foto, no seas cagón.",
    "¿Qué talento al pedo tenés?", "Cantate un tema de Rodrigo a los gritos.", "Hacé 10 sentadillas nombrando marcas de Fernet.", "Hablá como porteño agrandado 2 rondas.", "¿Qué es lo más rata que hiciste por guita?",
    "Decí 3 cosas piolas del que tenés a la derecha.", "Poné cara de que te pegó mal el pritteado hasta tu turno.", "¿Quién de acá es más personaje?", "Cambiate una zapa con el de la izquierda.", "Tomate un trago si alguna vez chamuyaste para no salir.",
    "Mostrá cuánto usás el celular, adicto.", "Tu amor imposible famoso.", "Leé el último mensaje a tu vieja.", "Hacé de perro ladrando a un auto.", "¿Qué harías si fueras invisible en un boliche?",
    "Tirale un piropo de albañil al de enfrente.", "Lamete el codo si llegás, deforme.", "Decí el abecedario al revés o fondo.", "Mostrá el DNI, a ver esa cara de nabo.", "Contate un chiste de borrachos.",
    "La peor cita de tu vida, contala.", "Que te hagan cosquillas 10 seg, bancatela.", "Tomate un trago sin las manos.", "Gritá '¡AGUANTE TALLERES/BELGRANO!' por la ventana.", "Brindis por el dueño de casa, que se puso la diez.",
    "¿Qué parte de tu cuerpo te bancás más?", "Verdad o mentira (que la gilada adivine).", "Si tenés ropa negra, clavate un trago.", "Caminá como si te hubieras cagado encima.", "Si pudieras cambiar de vida con uno de acá, ¿con cuál?",
    "Llorá como novela mexicana.", "¿Cuándo fue la última vez que lloraste por un/a gil/a?", "Algo que nadie sepa, misterioso.", "Mostrá las medias, seguro tienen agujeros.", "Fondo con el de enfrente.",
    "Selfie haciendo cara de asco a Instagram (borrala en 5 min).", "5 marcas de vinos en caja.", "Lo peor que cocinaste (un asado quemado no vale).", "Gemí como si te gustara.", "Abraza al que tenga mejor perfume.",
    "Profe que le tenías ganas.", "Tocá la nariz con la lengua.", "Si tenés tatuajes berretas, tomá.", "Ese tema de mierda que te encanta.", "Fondo blanco si no hacés el próximo reto.",
    "Hablá como el Chavo del 8.", "Improvisate un rap villero.", "Hacé masajes al de la derecha, sin babosear.", "Si tenés Tinder, clavate un trago.", "Mostrá el fondo de pantalla, seguro es una bosta.",
    // NUEVAS FRASES AGREGADAS
    "Hacé la mímica de cómo te preparás un fernet.", "Explicá por qué el mate dulce es una poronga (o defendelo si sos raro).", "Imitá a tu vieja cuando se enoja.", "Contá la vez que pasaste más vergüenza en el bondi.", "¿Cuál fue el peor regalo que te hicieron?",
    "Si fueras un trago, ¿cuál serías y por qué?", "Hacé de cuenta que estás vendiendo medias en la peatonal.", "Cantá el Arroz con Leche versión cumbia.", "Decí un trabalenguas sin trabarte o fondo.", "Mostrá tu cara de placer.",
    "Elegí a alguien para que te peine como un logi.", "Contá una anécdota con la cana (policía).", "Si tu vida fuera una película, ¿cómo se llamaría?", "Hacé 30 segundos de 'aire guitarra' con el tema que elijan.", "Decile algo lindo al de la izquierda sin cagarte de risa.",
    "¿Qué harías si te ganás el Quini 6 hoy?", "Recreá tu foto de perfil de WhatsApp en vivo.", "Confesá: ¿alguna vez te hiciste pis encima de grande?", "Bailá lento con una silla.", "Hacé de mozo cheto atendiendo a la mesa.",
    "¿Quién de acá te cae mejor? (Sin mentir).", "Si fueras invisible por una hora, ¿qué harías?", "Imitá a un político cordobés robando votos.", "Contá la mentira más boluda que te creyeron.", "Hacé sonido de animales hasta que adivinen 3.",
    "¿A qué famoso te parecés (según tu abuela)?", "Mostrá tu talento oculto (si es que tenés).", "Hacé cara de que te tiraste un pedo y disimulá.", "Opiná sobre el corte de pelo del de enfrente.", "Decí 5 sinónimos de 'borracho' en cordobés.",
    "Explicá tu última búsqueda de Google.", "Hacé como si estuvieras en un comercial de dentífrico.", "Si tuvieras que comer una sola cosa el resto de tu vida, ¿qué sería?", "Chamuyate a una escoba.", "Hacé de comentarista de fútbol relatando lo que hace el de al lado."
  ][i] || `Reto Tranca ${i}`
}));

const ROULETTE_HOT: RouletteTask[] = Array.from({ length: 70 }, (_, i) => ({
  id: id('r_hot', i), category: 'HOT', type: i % 2 === 0 ? 'truth' : 'dare',
  text: [
    "Chupón en el cuello al de la derecha.", "Sacate una prenda, hace calor acá.", "¿Posición favorita y por qué? Contá.", "Baile sensual a quien elijas.", "¿Trío? ¿Lo hiciste o te re va?",
    "Que te peguen un chirlo fuerte en la cola.", "¿Qué ropa interior tenés? Mostrá el elástico.", "Mordele el labio al de la izquierda despacio.", "¿Dónde fue el polvo más loco? Contá.", "Chupale una banana/botella mirando a alguien.",
    "¿Garchaste en el laburo? Detalles.", "Que te escriban algo hot en la panza con fibra.", "¿A quién de acá le das sin pensarlo?", "Pasale comida boca a boca a alguien.", "Gemí el nombre de alguien de la ronda re fuerte.",
    "¿Qué preferís: tamaño o técnica? Defendelo.", "Susurrale algo re sucio al oído a alguien.", "¿Te chorearon pajeándote? Contá.", "Masaje sensual de hombros 2 min a alguien.", "¿Te filmaste cogiendo? ¿Lo guardás o borraste?",
    "Tomate un shot del ombligo de quien quieras.", "Contá tu fetiche más turbio sin vergüenza.", "Chapate a alguien de acá, elegí vos.", "¿Cuánto pagarías por un trío con famosos?", "Metele la mano abajo de la remera a alguien.",
    "¿Le metiste a alguien que está acá? Confiesa.", "¿Escupís o tragás? Justificá tu respuesta.", "Sentate a upa de alguien hasta que te toque.", "¿Usás juguetes? ¿Cuál es tu favorito?", "Describí tu mejor garche en detalle.",
    "Metete hielo en el pantalón/escote 30 seg.", "¿Cuerneaste? Si sí, tomá y contá por qué.", "Cambiá remera con alguien, sin sacártela antes.", "¿Qué te calienta más: dominante o sumiso?", "Beso esquimal mirándose a los ojos 30 seg.",
    "¿Mandaste nudes últimamente? A quién.", "Gemí re fuerte como si estuvieras cogiendo.", "¿Le tenés ganas al novio/novia de alguien acá?", "Dale un lengüetazo lento en el cuello a alguien.", "¿Alguna vez dudaste de tu sexualidad? Por quién.",
    "Que te besen donde se les cante (vos elegís quién).", "¿Probaste sexo anal? ¿Te gustó o nunca más?", "Adiviná qué ropa interior tiene el de enfrente.", "Si andás sin bombacha/bóxer, fondo doble.", "¿Preferís estar arriba o abajo? ¿Por qué?",
    "Perreale a alguien contra la pared 20 seg.", "¿Garchás con luz o a oscuras? Razones.", "¿Sos de hacerlo a la mañana o de noche?", "Decí qué parte del cuerpo te gusta más del de al lado.", "Chapá a alguien sin lengua, solo labios.",
    "Mostrá tu foto más caliente (tapá lo que quieras).", "¿Qué fantasía sexual te re gustaría cumplir?", "Mordele/Chupale la oreja a alguien.", "Chupale el dedo a alguien mirándolo a los ojos.", "Que te huelan el cuello y digan si les gusta.",
    "¿Te lo/la comiste en la primera cita? Siempre lo hacés.", "¿Garchaste en un lugar público? Dónde fue.", "Beso triple con otros dos, a ver cómo sale.", "Si te comiste más de 10, tomá sin culpa.", "De qué color es tu ropa interior hoy.",
    // NUEVAS PICANTES PERO GRACIOSAS
    "¿Gemís fuerte o sos silencioso? Demostrá.", "¿Te gusta el dirty talk? Decí un ejemplo acá.", "¿Chupaste en lugares turbios? Contá.", "¿Cuánto te dura? Seamos sinceros.", "¿Te gusta que te tironeen el pelo? Dejá que te lo hagan.",
    "Contá tu mejor anécdota sexual en 30 segundos.", "¿Qué tan freaky sos del 1 al 10? Justificá.", "¿Te gusta morder o que te muerdan?", "¿Sexo romántico o salvaje? No podés elegir los dos.", "Rankeá a 3 personas de acá: ¿a quién le das?"
  ][i] || `Reto Caliente ${i}`
}));

const ROULETTE_TOXIC: RouletteTask[] = Array.from({ length: 60 }, (_, i) => ({
  id: id('r_tox', i), category: 'TOXIC', type: i % 2 === 0 ? 'truth' : 'dare',
  text: [
    "Buscá 'Amor' en WhatsApp, leé lo último.", "Llamale a alguien que no hablás hace tiempo.", "¿Quién te cae medio mal de acá?", "Foto #10 de la galería, mostrá.", "Mandalé un audio gracioso al grupo familiar.",
    "¿A quién dejarías de seguir en redes?", "Último mensaje de Instagram, mostrá.", "¿Quién tiene el peor estilo de ropa?", "Confesá algo que te choreaste de chico.", "Mostrá tu último search de Google.",
    "¿Quién es el más careta del grupo?", "¿A quién no le darías bola?", "Que te escriban un estado gracioso.", "¿Hablaste mal de alguien de acá?", "Dejale el celular a alguien 30 segundos.",
    "Llamá a tu vieja y decile algo re random.", "¿Quién es el más quilombero?", "¿Quién te cae pesado a veces?", "Mandá un mensaje picante al que te gusta.", "¿Quién es el más pelotudo del grupo?",
    "Mostrá tus últimos 3 emojis.", "Decile una verdad sincera a alguien.", "¿Te gusta alguien comprometido?", "Mostrá cuánta plata tenés.", "Leé tus notas del celular.",
    "¿Qué te avergüenza de tu familia?", "¿Quién es malo chapando?", "Mandá un mensaje atrevido.", "Opiná sobre el look de alguien.", "¿Te arrepentís de haberte comido a alguien?",
    "¿A quién eliminarías del grupo?", "¿Quién es re celoso/pollerudo?", "¿Deseaste mal a alguien?", "Mostrá una foto tuya horrible.", "¿Cuál fue tu mentira más grande?",
    "Hacé una llamada graciosa a delivery.", "Contá un secretito.", "¿Quién ha sido infiel acá?", "¿Te cae mal la pareja de tu amigo/a?", "Tomate un shot asqueroso.",
    "Leé tu chat favorito.", "¿Qué te molesta del host?", "¿Quién sobra en esta juntada?", "Mostrá tu galería oculta.", "Rankeá a todos por facha.",
    "¿Te cae bien tu suegra?", "Silenciá a alguien de IG ahora.", "¿Quién tiene mal aliento?", "¿Le pediste plata a tus viejos mintiendo?", "Decí una mentira convincente.",
    // NUEVAS MÁS GRACIOSAS Y MENOS TÓXICAS
    "Mostrá tu foto más vergonzosa.", "¿Cuál es tu crush secreto?", "Imitá a alguien del grupo.", "¿Qué te parece feo de vos?", "Contá un momento vergonzoso.", "¿A quién le tenés envidia?", "Mostrá tu peor selfie.", "¿Qué mentira decís seguido?", "Rankeá por inteligencia.", "¿Quién está para bardo?"
  ][i] || `Reto Picante ${i}`
}));

const ROULETTE_ABSURD: RouletteTask[] = Array.from({ length: 50 }, (_, i) => ({
  id: id('r_abs', i), category: 'ABSURD', type: 'dare',
  text: [
    "Chamuyate a una pared 1 minuto.", "Lengüetazo al piso.", "Ponete una zapatilla en la cabeza 2 turnos.", "Tomá agua del plato como perro.", "Tratá de morderte la oreja.",
    "Olele la pata al de la izquierda (queso).", "Declarale tu amor a una lámpara.", "Gritá 'Soy un unicornio' por la ventana.", "Comé una cucharada de mayonesa sola.", "Dibujate un bigote con fibra.",
    "Pedí permiso para ir al baño como en la escuela.", "Caminá para atrás como los cangrejos.", "Relatá el partido (lo que pasa en la joda).", "Hacé de gallina 30 seg.", "Tomá con el codo pegado al cuerpo (tiranosaurio).",
    "Llamá a un número cualquiera y cantá el feliz cumple.", "Hablá sin usar la letra 'A'.", "Bailá sin música re serio.", "Que te pinten una uña con fibra.", "Comé un chizito sin manos.",
    "Date 10 vueltas y tratá de caminar derecho.", "Hacé gárgaras con fernet y tragá.", "Cambiate un zapato con otro.", "Ponete el calzón arriba del pantalón.", "Hacé de estatua 1 minuto.",
    "Pedile casamiento al primero que entre.", "Imitá a un perro alzándose.", "Tomá del vaso de otro sin preguntar.", "Hacé 20 flexiones o fondo.", "Gateá por toda la pieza.",
    "Hablá susurrando, re creepy.", "Gritá 'GOL' cada vez que alguien tome.", "Ponete medias en las manos.", "Tratá de lamerte la nariz.", "Hacé bizcos hasta tu turno.",
    "Cantá ópera, desafinado a full.", "Hacete el muerto 1 minuto.", "Dale un beso al piso.", "Abrazá una silla con pasión.", "Hacé como que estás en una montaña rusa."
  ][i] || `Reto Cualquiera ${i}`
}));

export const ROULETTE_TASKS = [...ROULETTE_ICEBREAKER, ...ROULETTE_HOT, ...ROULETTE_TOXIC, ...ROULETTE_ABSURD];

/* --- LA BOMBA (EDICIÓN CÓRDOBA) --- */

export const BOMB_DATA: BombTopic[] = [
  ...['PRO', 'CON', 'TER', 'CLA', 'VER', 'TRA', 'POR', 'CAR', 'SAL', 'MAN', 'FOR', 'RES', 'GRA', 'CAN', 'SOL', 'AL', 'EN', 'DIS', 'PRE', 'SUB', 'INT', 'COM', 'BER', 'GOL', 'CHA', 'FER', 'COR', 'BOL', 'TAR', 'MIS'].map((s, i) => ({ id: id('b_syl', i), type: 'syllable' as const, content: s })),
  ...[
    'Marcas de Cigarrillos', 'Posiciones Sexuales', 'Insultos Cordobeses', 'Marcas de Birra', 'Partes del cuerpo', 
    'Cosas que vibran', 'Telos conocidos', 'Excusas para no salir', 'Cosas pegajosas', 'Nombres de tus Ex',
    'Palabras que se gimen', 'Jerga tumbera', 'Apps de citas', 'Fetiches raros', 'Cosas que se chupan',
    'Motivos para cortar', 'Lugar para chapar', 'Ropa interior', 'Drogas (nombres villeros)', 'Tragos con alcohol',
    'Verbos en pasado', 'Bichos asquerosos', 'Cosas largas y duras', 'Cosas húmedas', 'Palabras sucias',
    'Actrices nopor', 'Cosas de sex shop', 'Zonas erógenas', 'Tipos de besos', 'Mentiras de chamuyero',
    'Cosas que hay en un baño público', 'Marcas de forros', 'Famosos que odiás', 'Cosas que tienen olor a pata', 'Palabras terminadas en ON',
    'Cagadas que te mandaste en pedo', 'Insultos en inglés', 'Partes que chivan', 'Cosas ilegales', 'Placeres culposos',
    'Comidas con forma de pito', 'Razones para ir en cana', 'Qué no decir en la primera cita', 'Nombres de viejos', 'Palabras de 4 letras',
    'Boliches de Córdoba', 'Temas de La Mona', 'Comidas de bajón', 'Frases de madre', 'Cosas de cheto',
    'Cosas que hacés en el baño', 'Objetos redondos', 'Cosas que se meten en agujeros', 'Nombres de perro', 'Países de mierda'
  ].map((t, i) => ({ id: id('b_top', i), type: 'topic' as const, content: t }))
];

/* --- YO NUNCA (EDICIÓN CÓRDOBA EXPANDIDA) --- */

const NEVER_PARTY_STRINGS = [
    "Vomité en el boliche.", "Bailé arriba de la mesa.", "Me colé en una fiesta.", "Me mamé solo en casa.", "Perdí el celular en la joda.", "Me choreé un vaso.", "Usé DNI trucho.", "Me echaron del bar.", "Tuve una laguna mental.", "Canté karaoke re en pedo.",
    "Me caí de borracho.", "Llamé a mi ex llorando.", "Dormí en la vereda.", "Mezclé vino con sandía.", "Meé en la calle.", "Fui a laburar con resaca.", "Escabié antes del mediodía.", "Hice un 'paga Dios' (irse sin pagar).", "Chapé con un desconocido.", "Quedé en coma etílico (casi).",
    "Me robé un cono de la calle.", "Comí polenta fría.", "Tomé agua del inodoro (espero que no).", "Me equivoqué de casa mamado.", "Perdí una zapatilla.", "Chamuyé al barman por escabio gratis.", "Le vomité a alguien.", "Me desperté en otra ciudad.", "Tomé del vaso de otro (baba).", "Mandé audios que no se entienden un choto.",
    "Me tuvieron que llevar a upa.", "Dormí en el inodoro.", "Tomé alcohol etílico rebajado.", "Jugué al 'quinito' y morí.", "Rompí algo caro en pedo.", "Abracé a un desconocido llorando.", "Pelié con un cartel.", "Me olvidé el nombre del que me comí.", "Comí del piso.", "Tomé tequila sin limón ni sal, a lo guapo.",
    "Perdí las llaves de casa.", "Me desperté en bolas.", "Dormí con la ropa de la joda.", "Tomé agua del florero.", "Me robé una botella del boliche.", "Chapé con un amigo/a.", "Bailé sin música re duro.", "Hablé en inglés borracho.", "Perdí la billetera.", "Me dormí en el bondi y terminé en la loma del orto.",
    "Tomé agua de la zanja.", "Me sacó la policía del boliche.", "Perdí la dignidad perreando.", "Me caí por la escalera del bar.", "Le robé un trago a un desconocido.", "Fui a una fiesta que no me invitaron.", "Me quedé dormido en la previa.", "Vomité en el Uber.", "Me hice el cheto sin un mango.", "Me puse en pedo con sidra.",
    "Tomé fernet puro sin querer.", "Le tiré el trago encima a alguien.", "Me confundí de baño (hombre/mujer).", "Me dormí parado.", "Me comí las sobras de otra mesa.", "Me subí al escenario.", "Me hice amigo del patovica.", "Perdí un diente en la joda.", "Me desperté abrazado al inodoro.", "Tomé del pico de una botella ajena.",
    // NUEVAS PREGUNTAS DE FIESTA
    "Hice un asado a las 3 de la mañana mamado.", "Me tiré de la piscina en pedo.", "Me saqué la remera en el boliche.", "Rompí algo del dueño de casa.", "Me peleé con el de seguridad.", "Me dormí en el patio/jardín.", "Bailé con una escoba/palo.", "Me robé un cenicero de bar.",
    "Le tiré onda al mozo/mesero.", "Me subí a un taxi equivocado.", "Perdí los lentes/anteojos en la joda.", "Escabié de la botella de fernet directamente.", "Hice un brindis y se me cayó el vaso.", "Me hice pis encima en la fiesta.", "Canté el himno nacional en pedo.", "Me dormí en el baño de un bar.",
    "Hice un speech en pedo que nadie entendió.", "Me saqué fotos con la poli en pedo.", "Hice amigos que nunca más vi.", "Me choreé un pancito del bar.", "Llegué al trabajo con el outfit de la joda.", "Mezclé cerveza con vino y fernet.", "Me tiré en pedos en el colectivo.",
    "Hice delivery a las 5 AM borracho.", "Bloqueé a mi ex y lo desbloqueé en pedo.", "Le declaré amor eterno a un desconocido.", "Me subí a cantar con la banda.", "Le pedí fuego a 10 personas.", "Perdí los documentos en el boliche.", "Bailé cumbia como loco."
];

const NEVER_DIRTY_STRINGS = [
    "Mandé foto caliente.", "Lo hice en una plaza.", "Chapé con alguien de acá.", "Fingí que acabé.", "Garché en la primera cita.", "Usé disfraces en el sexo.", "Soñé cochinadas con un amigo.", "Hice un trío.", "Me filmé con alguien.", "Lo hice en el auto (empañando vidrios).",
    "Lo hice en la playa (con arena en el culo).", "Usé comida en el sexo.", "Probé cosas nuevas.", "Mentí con cuántos estuve.", "Me pescaron mis viejos.", "Me comí a alguien mayor/menor.", "Usé juguetes.", "Hice sexting.", "Lo hice en un telo berreta.",
    "Lo hice en la oficina.", "Me acosté con mi ex (recaída).", "Tuve un chongo fijo.", "Sexting en lugares públicos.", "Lo hice en la pileta.", "Me disfracé.", "Me gusta el sexo intenso.", "Lo hice en el baño del boliche.", "Probé cosas raras.", "Lo hice con la regla.",
    "Tuve orgasmos múltiples.", "Fui infiel.", "Pagué por contenido hot.", "Dudé de mi sexualidad.", "Gimo fuerte.", "Rompí la cama.", "Lo hice al aire libre.", "No sabía el nombre del otro.", "Lo hice en un lugar cheto.", "Probé cosas espirituales en el sexo.",
    "Lo hice en carpa.", "Lo hice en el mar.", "En un ascensor.", "En el cine.", "En un parque.", "Arriba de la mesada.", "En lugares raros de la casa.", "En un probador de ropa.", "En el bosque.", "En el balcón.",
    "Usé lubricante.", "Me depilé todo para nada.", "Tuve sexo telefónico.", "Me excita que me miren.", "Me gustan cosas intensas.", "Lo hice en la casa de los suegros.", "Tuve un accidente con el forro.", "Usé objetos de forma creativa.", "Me excité con cosas raras.", "Tengo favoritos guardados.",
    "Me toqué hoy.", "Me masturbé pensando en alguien de acá.", "Me gusta el dirty talk.", "Me grabaron (o eso creo).", "Fui mirón.", "Hice nudismo.", "Tuve sexo virtual.", "Improvisé con lo que había.", "Me excitan los pies.", "Me gustan las nalgadas.",
    // NUEVAS PREGUNTAS DIRTY MÁS DIVERTIDAS
    "Lo hice en un lugar re público.", "Tuve sexo con gente cerca.", "Me calenté en el gimnasio.", "Fui a un telo re trucho.", "Participé en cosas grupales.", "Me gusta jugar roles.", "Lo hice con mis viejos en casa.", "Probé juguetes divertidos.",
    "Mandé audios calientes.", "Hice videollamada hot.", "Lo hice en un estacionamiento.", "Tuve un romance de verano.", "Me chapé a un compañero de trabajo.", "Fui a hoteles por hora.", "Probé diferentes cosas.", "Me toqué en lugares raros.",
    "Dejé las luces prendidas.", "Lo hice en un auto.", "Me calienta el morbo.", "Lo hice en la terraza.", "Tuve sexo en parques.", "Me compré ropa sexy.", "Puse música romántica.", "Me vendaron los ojos.",
    "Probé atarme/atar.", "Me metí con alguien comprometido.", "Lo hice en baños públicos.", "Mandé nudes por error.", "Tuve sexo virtual con desconocidos.", "Me excita la lencería.", "Lo hice en lugares inestables.", "Tuve sexo a la mañana temprano.",
    "Probé posiciones raras.", "Lo hice en la ducha.", "Tuve sexo espontáneo.", "Me gusta experimentar.", "Probé role-play.", "Hice cosas que nunca imaginé.", "Me animé a cosas nuevas.", "Tuve encuentros re locos."
];

const NEVER_GROSS_STRINGS = [
    "Usé el mismo calzoncillo/bombacha 3+ días seguidos.", "Meé en la pileta (o en el mar cerca de gente).", "Olí mi ropa a ver si zafaba otro día más.", "Vomité y seguí chupando como campeón.", "Comí algo re vencido y zafé.", "No me bañé por 4+ días (y salí igual).", "Usé el cepillo de dientes de otro sin decir nada.",
    "Dejé el inodoro sin tirar la cadena en lo de otro.", "Tuve un moco colgando en público sin darme cuenta.", "Meé en la ducha (siempre o seguido).", "Tuve piojos de grande y me dio re vergüenza.", "Tuve hongos en las patas y anduve descalzo igual.", "Me rasqué el culo/bolas y me olí la mano.", "Saqué un pelo de la comida y seguí comiendo tranqui.",
    "Me corté las uñas y las dejé tiradas (en cualquier lado).", "Compartí chicle mascado con alguien.", "Eructé en la cara de alguien (queriendo o sin querer).", "Tuve aliento a culo de mono toda la mañana.", "Tuve olor a chivo fuerte y no me di cuenta.", "Le reventé un grano a alguien (y me gustó).", "Anduve en patas en baño público asqueroso.", "Me comí la cascarita de una herida.", "Probé comida de otro plato y la devolví ahí.",
    "Me tiré un pedo en el ascensor/bondi y me hice el gil.", "Meé en una botella manejando o de noche.", "Tengo hongos en las uñas hace tiempo.", "Me saqué cera del oído con lo primero que encontré.", "Me rasqué las bolas/concha en público disimulando.", "Encontré un bicho en la comida y lo saqué nomás.", "Usé ropa interior re rota (con agujeros gigantes).", "Me lavé el pelo con jabón para las manos.", "Tengo caspa y se me ve en la ropa.",
    "Me depilé y se me encarnó todo (tengo pelos bajo la piel).", "Tengo aliento a perro muerto a la mañana.", "No me lavé las manos después de cagar.", "Me saqué comida de los dientes y me la comí.", "Me exploté un grano y salió banda de pus.", "Tengo callos re feos en los pies.", "Tengo pelos en la nariz que se ven.", "Tengo sarro en los dientes de no ir al dentista.",
    // NUEVAS PREGUNTAS RANCIAS PERO GRACIOSAS - MÁS TURBIAS
    "Me tiré un pedo y salió con sorpresa (me cagué un poquito).", "Escupí en la calle como viejo maleducado.", "Me soné los mocos con la mano y los tiré al piso.", "Tengo olor a sobaco que tumba gente.", "Me rascé la entrepierna en público sin disimular.", "Usé las mismas medias una semana.", "Me chupé el dedo después de rascar algo asqueroso.",
    "Me salió un grano en el culo y me lo reventé.", "Eructé después de tomar y salió con gusto.", "Me comí las uñas hasta hacerme sangre.", "Escarbé la nariz y me lo comí (cuando era chico o ahora).", "Me pica el culo seguido en público.", "Tengo olor a pata que mata moscas.", "Me fui a dormir sin lavarme los dientes (siempre).",
    "Tengo pelos en lugares que no debería tener.", "Me sangró la nariz y me la tragué.", "Me salió una ampolla y me la reventé con los dientes.", "Me saqué una costra y la olí.", "Me rasco la cabeza y me huelo los dedos.", "Tengo acné en la espalda y me lo exploto.", "Se me cayó comida al piso y la comí (regla de los 5 segundos).",
    "Tuve el pelo re grasoso y me puse gorra nomás.", "No me afeité las axilas/huevos en meses.", "Usé la misma toalla asquerosa por meses.", "Tengo manchas de transpiración amarillas en la ropa.", "No cambié las sábanas en más de un mes.", "Dejé ropa interior sucia tirada por todos lados.", "Comí milanesas frías arriba de la cama.", "Tomé leche/yogur vencido y no pasó nada.",
    "Olí la ropa interior a ver si zafaba.", "Me puse la misma remera chivada del día anterior.", "No me bañé después de hacer ejercicio (y salí así).", "Tuve mocos secos colgando de la nariz.", "Me salieron granos en la cola.", "Mis pies largan olor a queso podrido.", "No me corté las uñas en meses (parezco garra).", "Tuve mal aliento todo el día y ninguno me dijo.",
    // MÁS TURBINAS ARGENTAS
    "Me limpié el culo con papel mojado/diario.", "Dejé el sorete flotando en el baño de otro.", "Me tiré pedos todo el día sin parar.", "Tuve diarrea explosiva en público.", "Me salió pus de una herida y la dejé así.", "Tengo mugre en el ombligo que huele mal.", "Me saqué un moco gigante y lo pegué abajo de algo.", "Tuve hipo y eructo al mismo tiempo."
];

const NEVER_COUPLES_STRINGS = [
    "Le revisé el celular a mi pareja.", "Mentí dónde estaba.", "Pensé en otro mientras garchaba.", "Coqueteé para dar celos.", "Me olvidé el aniversario.", "Fingí dolor de cabeza.", "Dije 'te amo' de mentira.", "Odié a mi suegra.", "Comparé con mi ex.", "Tuve Tinder estando de novio.",
    "Critiqué a mi pareja con los pibes.", "Pensé que era malo/a en la cama.", "Quise cortar y me dio paja.", "Perdoné unos cuernos.", "Fui infiel de mente.", "Gasté la guita del alquiler.", "Mentí con el precio de la ropa.", "Soñé que cortaba.", "Me dio vergüenza mi pareja.", "Espié al ex de mi pareja.",
    "Fingí que me gustó el regalo.", "Le dije el nombre de mi ex.", "Seguí de novio para no estar solo.", "Oculté que me hablaba con alguien.", "Borré chats.", "Garché para conseguir algo.", "Dije que sí a casarme cagado de las patas.", "Le tengo ganas a la novia de mi amigo.", "Fui re tóxico.", "Hice escena de celos en público.",
    "Revisé a quién le da like.", "Me hice un perfil trucho.", "Lo rastreé con el GPS.", "Odié lo que me regaló.", "Mentí que acabé.", "Garché por lástima.", "Fantaseé con el amigo de mi novio.", "Odié a los cuñados.", "Mentí en el laburo de mi pareja.", "Le robé comida.",
    "Me creé una cuenta falsa para stalkear.", "Le revisé los DMs de Instagram.", "Le pregunté a sus amigos dónde estaba.", "Me hice el dormido para no garchar.", "Le dije 'te quiero' por error.", "Me olvidé de su cumpleaños.", "Me cae mal su mejor amigo/a.", "Le revisé el historial de búsqueda.", "Le mentí sobre con cuántos estuve.", "Me da asco cómo come.",
    // NUEVAS PREGUNTAS COUPLES
    "Le bloqueé las redes a mi ex por celos.", "Me puse celoso/a sin razón.", "Mandé indirectas en redes para mi pareja.", "Fingí que me gusta su familia.", "Hice ghosting a alguien con quien salía.", "Le mentí sobre mis sentimientos.", "Comparé su cuerpo con el de otro/a.", "Guardé mensajes de mi ex.",
    "Le oculté una amistad.", "Le prohibí salir con cierta gente.", "Levanté la voz en una discusión.", "Me arrepentí de estar en pareja.", "Le mentí para salir solo/a.", "Stalkeé a su ex.", "Le corté por mensaje.", "Fui insoportable con los celos.",
    "Le revisé el Facebook completo.", "Pedí la clave de sus redes.", "Comparé su familia con la mía.", "Me aburrí en una cita.", "Fingí interés en sus hobbies.", "Le mentí sobre dónde estaba.", "Le oculté una salida.", "Dejé en visto a propósito.",
    "Me molesté por una pavada.", "Le grité delante de otros.", "Le dije cosas hirientes en una pelea.", "Hice drama por nada.", "Le corté y volví varias veces.", "Me quedé por comodidad.", "Le oculté amistades del sexo opuesto.", "Le revisé los mensajes borrados."
];

const NEVER_HARDCORE_STRINGS = [
    "Tuve un trío.", "Me desperté sin saber dónde estaba.", "Hice porno amateur.", "Tuve un sugar daddy/mommy.", "Le tiré onda a alguien mayor.",
    "Me metí en quilombos.", "Me cagué a piñas en una fiesta.", "Me desperté en el hospital.", "Me escapé de una joda prohibida.", "Hice algo re impulsivo y me arrepentí.",
    "Estuve en una fiesta re loca.", "Lo hice en un lugar re turbio.", "Hice algo re flashero.", "Me mandé una locura.", "Tuve una aventura de una noche re loca.",
    "Rompí una amistad por cogerme a alguien.", "Me metí con alguien que no debía.", "Hice algo re polémico.", "Tuve una experiencia re flashera.", "Me mandé un re viaje.",
    "Me metí en bardo fuerte.", "Me peleé con alguien random.", "Hice algo que me da vergüenza contar.", "Me mandé una cagada importante.", "Tuve una noche que no recuerdo bien.",
    "Me metí donde no me llamaban.", "Hice algo re atrevido.", "Me arriesgué mal.", "Tuve una aventura re loca.", "Hice algo que mis viejos no saben.",
    "Me escapé de un control policial.", "Choqué el auto (de raspón).", "Me metí en una pelea de bar.", "Me robaron y quedé sin nada.", "Me pasé de vueltas mal.",
    "Me desperté en otro barrio sin saber cómo llegué.", "Fui testigo de algo turbio.", "Hice algo re zarpado.", "Me mandé una locura importante.",
    // NUEVAS PREGUNTAS MÁS GRACIOSAS Y MENOS TURBIAS
    "Me hice pasar por otra persona.", "Mentí re descaradamente.", "Me metí en un lío importante.", "Hice algo re imprudente.", "Tuve una cita desastrosa.", "Me mandé un papelón histórico.", "Hice una apuesta estúpida.",
    "Perdí una cantidad importante de guita apostando.", "Me escapé de una situación incómoda.", "Hice algo re vergonzoso en público.", "Me mandé una mentira gigante.", "Hice algo que todos criticaron.", "Tuve un plan que salió re mal.",
    "Me hice el enfermo para no ir a algo.", "Renuncié de forma dramática.", "Me peleé con medio grupo.", "Hice un gasto re innecesario.", "Me metí en un bardo familiar.", "Hice algo re infantil de grande.",
    "Lloré por algo re boludo.", "Hice un berrinche de adulto.", "Me porté re mal con alguien.", "Hice algo por calentura y me arrepentí.", "Tuve una reacción re exagerada.", "Me comí un garrón de los grandes.",
    "Hice quedar mal a alguien sin querer.", "Me mandé un chisme que explotó todo.", "Rompí algo re caro de otro.", "Hice trampa en algo serio.", "Me hice el boludo y me descubrieron.", "Fingí saber de algo que no tenía idea."
];

export const NEVER_EVER_QUESTIONS = [
  ...createNeverQuestions('PARTY', 'n_par', NEVER_PARTY_STRINGS),
  ...createNeverQuestions('DIRTY', 'n_dirt', NEVER_DIRTY_STRINGS),
  ...createNeverQuestions('GROSS', 'n_gross', NEVER_GROSS_STRINGS),
  ...createNeverQuestions('COUPLES', 'n_cpl', NEVER_COUPLES_STRINGS),
  ...createNeverQuestions('HARDCORE', 'n_hard', NEVER_HARDCORE_STRINGS),
];

/* --- EL TRIBUNAL (EDICIÓN CÓRDOBA) --- */

export const COURT_QUESTIONS: CourtQuestion[] = Array.from({ length: 100 }, (_, i) => ({
  id: id('ct', i),
  text: [
    "¿Quién va a caer en cana primero?", "¿Quién es el más mentiroso del grupo?", "¿Quién se metería en una secta sin darse cuenta?", "¿Quién tiene el peor gusto para elegir pareja?", "¿Quién se muere primero en la peli de terror?",
    "¿Quién se hace millonario de pedo y se lo patina todo?", "¿Quién es el diablo en persona?", "¿Quién tiene un hijo no reconocido por ahí?", "¿Quién es mala copa y se pone ortiva?", "¿Quién se casa por la plata?",
    "¿Quién tiene el historial de Google más turbio?", "¿Quién vive con los viejos hasta los 40?", "¿Quién no se baña nunca y zafa con perfume?", "¿Quién se patina el sueldo en un día?", "¿Quién se hace viral por boludo?",
    "¿Quién va a participar en Gran Hermano?", "¿Quién es el más chusma y cuenta todo?", "¿Quién chapa mejor de todos?", "¿Quién te manipula con carpa?", "¿Quién llora por una multa de tránsito?",
    "¿Quién es más cornudo y no se entera?", "¿Quién no dura ni un día en Survivor?", "¿Quién tiene la pieza como bombardeada?", "¿Quién se tatúa el nombre de alguien y después corta?", "¿Quién quema hasta el agua haciendo la comida?",
    "¿Quién tiene doble vida y nadie sabe?", "¿Quién desaparece del mapa cuando le deben plata?", "¿Quién se ríe en los velorios (inapropiado)?", "¿Quién sería peor presidente que Menem?", "¿A quién llevan preso por mear en vía pública?",
    "¿Quién es más drama queen y exagera todo?", "¿Quién llega tarde hasta a su propio entierro?", "¿Quién es el rata que nunca paga la cuenta?", "¿Quién se casa en pedo en Las Vegas?", "¿Quién escucha reguetón de mierda?",
    "¿Quién se hace cura o monja de viejo?", "¿Quién odia a la gente en secreto?", "¿Quién es el más pajero y vago?", "¿Quién pierde el boleto de Quini ganador?", "¿Quién se cree la gran cosa?",
    "¿Quién habla a los gritos en todos lados?", "¿Quién se vive cayendo de borracho?", "¿Quién te hace juicio por cualquier gilada?", "¿Quién sería dictador si pudiera?", "¿Quién se come al jefe/a para progresar?",
    "¿Quién llora en todas las jodas?", "¿Quién se pierde en su propio barrio?", "¿Quién se olvida el cumpleaños de la madre?", "¿Quién se opera todo por inseguro?", "¿Quién chamuya al policía para zafar?",
    "¿Quién es el más mugriento?", "¿Quién tiene risa de hiena?", "¿Quién se queda pelado antes de los 30?", "¿Quién regala la guita en boludeces?", "¿Quién tiene más cuentas fake?",
    "¿Quién sale en Crónica TV haciendo cagadas?", "¿Quién rompe el celular cada 2 meses?", "¿Quién se duerme en todos los cines?", "¿Quién escribe su autobiografía y nadie la lee?", "¿A quién secuestran los extraterrestres?",
    "¿Quién se come a los demás en una isla desierta?", "¿Quién mata a alguien sin querer manejando?", "¿Quién se casa y divorcia 5 veces?", "¿Quién termina solo con 40 gatos?", "¿Quién finge su propia muerte?",
    "¿Quién tiene el fetiche sexual más bizarro?", "¿Quién se enamora de una IA?", "¿Quién vende fotos de patas por OnlyFans?", "¿Quién es el más amarrete (codito de oro)?", "¿Quién muere primero en el apocalipsis zombie?",
    // NUEVAS PREGUNTAS ARGENTAS Y GRACIOSAS (70-99)
    "¿Quién termina vendiendo buzos en Once?", "¿Quién se hace trapero/cantante y fracasa?", "¿Quién vende humo profesionalmente?", "¿Quién se va a vivir a España de careta?", "¿Quién tiene más deudas en Mercado Libre?",
    "¿Quién es capaz de vender a la abuela por un choripán?", "¿Quién llora viendo Titanic cada vez?", "¿Quién se hace influencer y vive de canje?", "¿Quién se roba el papel higiénico del trabajo?", "¿Quién tiene más ex bloqueados?",
    "¿Quién sube fotos re editadas y se hace el lindo?", "¿Quién miente más en las redes sociales?", "¿Quién tiene olor a pata crónico?", "¿Quién termina en un reality berreta?", "¿Quién se compra cosas truchas y las vende como originales?",
    "¿Quién ghostea a todos por cobarde?", "¿Quién stalkeá al ex todos los días?", "¿Quién le roba la comida al compañero de laburo?", "¿Quién tiene el prontuario más largo?", "¿Quién termina viviendo del estado?",
    "¿Quién se viste en La Salada y dice que es importado?", "¿Quién come polenta toda la vida?", "¿Quién se hace político chorro?", "¿Quién sobrevive a base de delivery?", "¿Quién nunca aprendió a cocinar un huevo?",
    "¿Quién se queda sin batería siempre?", "¿Quién se olvida las contraseñas de todo?", "¿Quién tiene prohibida la entrada en algún boliche?", "¿Quién termina trabajando para el primo?", "¿Quién le debe plata a medio mundo?"
  ][i] || `¿Quién es el más quilombero de todos?`
}));