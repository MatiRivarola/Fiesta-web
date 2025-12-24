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
    "Profe que le tenías ganas.", "Tocaste la nariz con la lengua.", "Si tenés tatuajes berretas, tomá.", "Ese tema de mierda que te encanta.", "Fondo blanco si no hacés el próximo reto.",
    "Hablá como el Chavo del 8.", "Improvisate un rap villero.", "Hacé masajes al de la derecha, sin babosear.", "Si tenés Tinder, clavate un trago.", "Mostrá el fondo de pantalla, seguro es una bosta.",
    // NUEVAS FRASES AGREGADAS
    "Hacé la mímica de cómo te preparás un fernet.", "Explicá por qué el mate dulce es una poronga (o defendelo si sos raro).", "Imitá a tu vieja cuando se enoja.", "Contá la vez que pasaste más vergüenza en el bondi.", "¿Cuál fue el peor regalo que te hicieron?",
    "Si fueras un trago, ¿cuál serías y por qué?", "Hacé de cuenta que estás vendiendo medias en la peatonal.", "Cantá el Arroz con Leche versión cumbia.", "Decí un trabalenguas sin trabarte o fondo.", "Mostrá tu cara de orgasmo fingido.",
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
    "Chupón en el cuello al de la derecha.", "Sacate una prenda, hace calor culiau.", "¿Posición favorita para el delicioso?", "Baile hot a quien elijas.", "¿Hiciste un trío o te gustaría?",
    "Que te peguen un chirlo en la cola.", "¿Qué ropa interior tenés? Mostrá el elástico.", "Mordele el labio al de la izquierda.", "Lugar más rari donde pusistela.", "Simulá un pete con una botella.",
    "¿Garchaste en el laburo?", "Que te escriban algo en la panza.", "¿A quién le das de acá?", "Comé algo de la boca de otro, asqueroso.", "Gemí el nombre de alguien de la ronda.",
    "¿Tamaño o que se mueva bien?", "Decile una cochinada al oído al de al lado.", "¿Te pescaron acogotando la gallina?", "Masaje de hombros 1 min, ponele onda.", "¿Te grabaste cogiendo?",
    "Tomate un shot del ombligo de alguien.", "Tu fetiche más oscuro.", "Chapate a alguien.", "¿Pagaste por sexo, pirata?", "Mano abajo de la remera, un toque nomás.",
    "¿Le diste a alguien de esta pieza?", "¿Escupís o tragás?", "Sentate a upa de alguien 2 rondas.", "Juguete sexual favorito.", "Tu mejor polvo.",
    "Hielo en el escote/pantalo.", "¿Fuiste infiel? Tomá por gato.", "Cambiá remera con alguien.", "¿Qué te calienta más?", "Beso de esquimal, tierno.",
    "¿Mandaste nudes esta semana?", "Hacé ruidos de placer.", "¿Le tenés ganas a la pareja de un amigo?", "Lengüetazo en el cuello.", "¿Dudaste de tu sexualidad?",
    "Que te den un beso donde quieran.", "¿El 'sin esquinas' (anal)?", "Describí la ropa interior del de enfrente.", "Si no tenés ropa interior, fondo.", "¿Arriba o abajo?",
    "Twerkeá 15 segundos contra la pared.", "¿Luz prendida o a oscuras?", "¿Mañanero o de noche?", "Qué te gusta del cuerpo del de la derecha.", "Pico seco a alguien.",
    "Mostrá una foto hot tuya (censurada si querés).", "¿Fantasía que te falta cumplir?", "Besale la oreja a alguien.", "Chupale el dedo a alguien.", "Dejá que te huelan el cuello.",
    "¿Garchaste en la primera cita?", "¿En un lugar público?", "Beso de a 3.", "Si te comiste a más de 10, tomá.", "Decí de qué color es tu bombacha/calzón."
  ][i] || `Reto Caliente ${i}`
}));

const ROULETTE_TOXIC: RouletteTask[] = Array.from({ length: 60 }, (_, i) => ({
  id: id('r_tox', i), category: 'TOXIC', type: i % 2 === 0 ? 'truth' : 'dare',
  text: [
    "Buscá 'Amor' en WhatsApp, leé lo último en voz alta.", "Llamá a tu ex y cortale.", "Quién te cae para el orto acá.", "Foto #10 de la galería, sin filtro.", "Mandalé un audio ladrando al grupo de la familia.",
    "¿A quién borrarías de tu vida ya?", "Último mensaje de Instagram, mostrá.", "¿Quién se viste como el culo?", "Confesá algo que te choreaste.", "Historial de Google, mostrá las cochinadas.",
    "¿Quién es el más careta del grupo?", "No le darías ni con un palo a...", "Que el grupo te escriba un estado en Facebook/IG.", "¿Pelaste el cuero de alguien de acá?", "Celular desbloqueado 30s al de la derecha, cagaste.",
    "Llamá a tu vieja: 'Vas a ser abuela/o'.", "¿Quién va a terminar preso?", "La persona que más odiás.", "Escribile a tu ex 'Te extraño, volvé'.", "¿Quién es el más opa que conocés?",
    "Últimos 3 emojis, a ver si son berenjenas.", "Decile una verdad que duela a alguien.", "¿Le tenés ganas a la novia/o de un amigo?", "Mostrá cuánto tenés en MercadoPago.", "Leé la última nota de tu cel.",
    "¿Qué te da vergüenza de tu familia?", "¿Quién chapa peor?", "Mandá un mensaje jugado al que te gusta.", "Criticá el físico de alguien (con carpa).", "¿Te arrepentís de haberte comido a...?",
    "Si tenés que matar a uno de acá, ¿a quién?", "¿Quién es el más pollerudo?", "¿Deseaste que se muera alguien?", "Mostrá una foto donde salgas escracho.", "La mentira más grande a tu pareja.",
    "Pedí una pizza de condones por tel.", "Contá el secreto de alguien, traidor.", "¿Quién es re infiel acá?", "¿Te cae mal la pareja de tu amigo?", "Escupí en el vaso y tomatelo.",
    "Leé tu chat fijado.", "Decí algo que te moleste del dueño de casa.", "¿Quién sobra en este grupo?", "Mostrá la carpeta de ocultos.", "Ranking de facha del grupo, jugatelá.",
    "¿Te cae bien la suegra?", "Bloqueá a alguien en IG ahora.", "¿Quién tiene aliento a chivo?", "¿Le robaste guita a tus viejos?", "Tirate una mentira que todos se crean."
  ][i] || `Reto Tóxico ${i}`
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
    "Tomé fernet puro sin querer.", "Le tiré el trago encima a alguien.", "Me confundí de baño (hombre/mujer).", "Me dormí parado.", "Me comí las sobras de otra mesa.", "Me subí al escenario.", "Me hice amigo del patovica.", "Perdí un diente en la joda.", "Me desperté abrazado al inodoro.", "Tomé del pico de una botella ajena."
];

const NEVER_DIRTY_STRINGS = [
    "Mandé foto pija/teta.", "Lo hice en una plaza.", "Chapé con alguien de acá.", "Fingí que acabé.", "Garché en la primera cita.", "Usé esposas.", "Soñé cochinadas con un amigo.", "Hice un trío.", "Me filmé cogiendo.", "Lo hice en el auto (empañando vidrios).",
    "Lo hice en la playa (con arena en el culo).", "Usé comida en el sexo.", "Entregué el rosquete.", "Tuve ladillas.", "Mentí con cuántos estuve.", "Me pescaron mis viejos.", "Me comí a un viejo/a.", "Usé un consolador.", "Hice sexting.", "Fui a un puterío.",
    "Lo hice en la oficina.", "Me acosté con mi ex (recaída).", "Tuve un chongo fijo.", "Sexting en el bondi.", "Lo hice en la pileta.", "Me disfracé de enfermera/policía.", "Me gusta que me peguen.", "Lo hice en el baño del boliche.", "Me tragué la lechita.", "Lo hice con Andrés (la regla).",
    "Tuve orgasmos múltiples.", "Fui gorreador.", "Pagué por OnlyFans.", "Dudé si me gustaban los del mismo sexo.", "Gimo como actriz porno.", "Rompí la cama.", "Lo hice en el yuyo.", "No sabía el nombre del otro.", "Lo hice en un avión (cheto).", "Sexo tántrico (flasheando espiritualidad).",
    "Lo hice en carpa.", "Lo hice en el mar.", "En un ascensor.", "En el cine.", "En el Parque Sarmiento.", "Arriba de la mesada.", "Arriba del lavarropas.", "En un probador de ropa.", "En el bosque.", "En el balcón.",
    "Usé lubricante de sabores.", "Me depilé todo para nada.", "Tuve sexo telefónico.", "Me excita que me miren.", "Me gusta que me ahorquen (un poquito).", "Lo hice en la casa de mis suegros.", "Me olvidé el forro adentro.", "Me puse algo en el culo que no era sexual.", "Me excité viendo dibujitos.", "Tengo un video porno favorito.",
    "Me masturbé hoy.", "Me masturbé pensando en alguien de acá.", "Me gusta que me digan cosas sucias.", "Me grabaron sin darme cuenta (espero que no).", "Fui voyeur (mirón).", "Hice nudismo.", "Tuve sexo virtual.", "Usé una verdura para el placer.", "Me excitan los pies.", "Me gusta el spanking (nalgadas)."
];

const NEVER_GROSS_STRINGS = [
    "Me comí un moco.", "Usé el mismo calzoncillo 3 días.", "Meé adentro de la pileta.", "Olí mi propia ropa sucia.", "Cagué en un balde.", "Vomité y seguí escabiando.", "Comí algo vencido.", "Me frenó la palomita (caca) en el calzón.", "No me bañé por 3 días.", "Usé el cepillo de dientes de otro.",
    "Limpié una mancha con baba.", "Dejé el tereso flotando.", "Tuve un moco colgando y no me di cuenta.", "Meé en la ducha.", "Le escupí la comida a alguien.", "Tuve piojos de grande.", "Tuve hongos en las patas.", "Destapé el inodoro con la mano.", "Me olí el dedo después de rascarme.", "Saqué un pelo de la comida y seguí.",
    "Me corté las uñas y las dejé tiradas.", "Compartí chicle.", "Eructé en la cara de alguien.", "Tuve aliento a dragón.", "Tuve olor a chivo fuerte.", "Le reventé un grano a otro.", "Anduve en patas en baño público.", "Di vuelta el papel higiénico sucio.", "Me comí la cascarita de la lastimadura.", "Devolví comida después de probarla.",
    "Me tiré un pedo y salió con premio.", "Meé en una botella.", "Tengo hongos en la uña.", "Me saqué cera del oído con una llave.", "Me rasqué el culo y me olí.", "Encontré un bicho en la comida y lo aparté.", "Usé ropa interior con agujeros.", "Me lavé el pelo con jabón de manos.", "Tengo caspa.", "Tengo un uñero infectado.",
    "Me salió un grano en el culo.", "Me depilé y se me encarnó todo.", "Tengo mal aliento a la mañana.", "No me lavé las manos después de cagar.", "Me saqué comida de los dientes y me la comí.", "Me exploté un punto negro gigante.", "Tengo callos en los pies.", "Tengo pelos en la nariz.", "Me suda la raya del culo.", "Tengo sarro en los dientes."
];

const NEVER_COUPLES_STRINGS = [
    "Le revisé el celular a mi pareja.", "Mentí dónde estaba.", "Pensé en otro mientras garchaba.", "Coqueteé para dar celos.", "Me olvidé el aniversario.", "Fingí dolor de cabeza.", "Dije 'te amo' de mentira.", "Odié a mi suegra.", "Comparé con mi ex.", "Tuve Tinder estando de novio.",
    "Critiqué a mi pareja con los pibes.", "Pensé que era malo/a en la cama.", "Quise cortar y me dio paja.", "Perdoné unos cuernos.", "Fui infiel de mente.", "Gasté la guita del alquiler.", "Mentí con el precio de la ropa.", "Soñé que cortaba.", "Me dio vergüenza mi pareja.", "Espié al ex de mi pareja.",
    "Fingí que me gustó el regalo.", "Le dije el nombre de mi ex.", "Seguí de novio para no estar solo.", "Oculté que me hablaba con alguien.", "Borré chats.", "Garché para conseguir algo.", "Dije que sí a casarme cagado de las patas.", "Le tengo ganas a la novia de mi amigo.", "Fui re tóxico.", "Hice escena de celos en público.",
    "Revisé a quién le da like.", "Me hice un perfil trucho.", "Lo rastreé con el GPS.", "Odié lo que me regaló.", "Mentí que acabé.", "Garché por lástima.", "Fantaseé con el amigo de mi novio.", "Odié a los cuñados.", "Mentí en el laburo de mi pareja.", "Le robé comida.",
    "Me creé una cuenta falsa para stalkear.", "Le revisé los DMs de Instagram.", "Le pregunté a sus amigos dónde estaba.", "Me hice el dormido para no garchar.", "Le dije 'te quiero' por error.", "Me olvidé de su cumpleaños.", "Me cae mal su mejor amigo/a.", "Le revisé el historial de búsqueda.", "Le mentí sobre con cuántos estuve.", "Me da asco cómo come."
];

const NEVER_HARDCORE_STRINGS = [
    "Hice un beso negro (el anillo de cuero).", "Garché con la regla a full.", "Lluvia dorada.", "Mano entera (Fisting).", "Orgiola.", 
    "Tomé falopa.", "Estuve en cana.", "Robé mucha guita.", "Me llevaron los milicos.", "Casi me muero de sobredosis.",
    "Estuve en una partuza.", "Le di a un primo lejano (Santiagueño style).", "Hice porno.", "Tuve un sugar daddy/mommy.", "Pagué fortuna por sexo.",
    "Rompí una familia.", "Chantajeé a alguien.", "Fui acosador (turbio).", "Me desperté en el hospital sin saber qué onda.", "Me cagué a piñas mal.",
    "Usé un fierro.", "Vendí cosas ilegales.", "Me deportaron.", "Sexo con animales (turbina).", "Viví en la calle.",
    "Me cambié el nombre.", "Me escapé de la yuta.", "Sexo en el cementerio.", "Sexo en la iglesia.", "Hice macumba.",
    "Mentí al juez.", "Prendí fuego algo.", "Me pegaron un tiro/puntazo.", "Necrofilia (espero que no, enfermo).", "Hice algo que me da vergüenza decir acá.",
    "Me escapé de un control policial.", "Choqué el auto en pedo.", "Me metí en una pelea de bar.", "Me robaron todo y quedé en bolas.", "Estuve en un coma inducido.",
    "Consumí drogas raras.", "Me desperté en otro país.", "Fui testigo de un crimen.", "Me buscaron por captura.", "Falsifiqué documentos."
];

export const NEVER_EVER_QUESTIONS = [
  ...createNeverQuestions('PARTY', 'n_par', NEVER_PARTY_STRINGS),
  ...createNeverQuestions('DIRTY', 'n_dirt', NEVER_DIRTY_STRINGS),
  ...createNeverQuestions('GROSS', 'n_gross', NEVER_GROSS_STRINGS),
  ...createNeverQuestions('COUPLES', 'n_cpl', NEVER_COUPLES_STRINGS),
  ...createNeverQuestions('HARDCORE', 'n_hard', NEVER_HARDCORE_STRINGS),
];

/* --- EL TRIBUNAL (EDICIÓN CÓRDOBA) --- */

export const COURT_QUESTIONS: CourtQuestion[] = Array.from({ length: 80 }, (_, i) => ({
  id: id('ct', i),
  text: [
    "¿Quién va a caer en cana primero?", "¿Quién es el más mentiroso?", "¿Quién se metería en una secta?", "¿Quién tiene peor gusto para los chongos?", "¿Quién se muere primero en la peli de terror?",
    "¿Quién se hace millonario de pedo?", "¿Quién es el diablo en persona?", "¿Quién tiene un hijo no reconocido?", "¿Quién es mala copa?", "¿Quién se casa por interés?",
    "¿Quién tiene el historial más sucio?", "¿Quién vive con los padres hasta los 40?", "¿Quién no se baña nunca?", "¿Quién se patina el sueldo en un día?", "¿Quién se hace viral por boludo?",
    "¿Quién va a Gran Hermano?", "¿Quién es el más chusma?", "¿Quién chapa mejor?", "¿Quién te manipula?", "¿Quién llora por una multa?",
    "¿Quién es más cornudo?", "¿Quién no dura ni un día en la isla?", "¿Quién tiene la pieza que es un quilombo?", "¿Quién se tatúa una boludez?", "¿Quién quema hasta el agua?",
    "¿Quién tiene doble vida?", "¿Quién desaparece de la nada?", "¿Quién se ríe cuando no da?", "¿Quién sería peor presidente que De la Rúa?", "¿A quién llevan preso por mear en la calle?",
    "¿Quién es más drama queen?", "¿Quién llega tarde siempre?", "¿Quién es el rata que no paga?", "¿Quién se casa en pedo en Las Vegas?", "¿Quién escucha música de mierda?",
    "¿Quién se hace cura?", "¿Quién odia a la gente?", "¿Quién es el más pajero (vago)?", "¿Quién pierde el boleto ganador?", "¿Quién se cree mil?",
    "¿Quién habla a los gritos?", "¿Quién se vive cayendo?", "¿Quién te hace juicio por todo?", "¿Quién sería un dictador?", "¿Quién se come al jefe?",
    "¿Quién llora en la joda?", "¿Quién se pierde en su barrio?", "¿Quién se olvida el cumple de la vieja?", "¿Quién se opera todo?", "¿Quién chamuya a la cana?",
    "¿Quién es el más sucio?", "¿Quién tiene risa de chancho?", "¿Quién se queda pelado?", "¿Quién regala la guita?", "¿Quién tiene cuenta fake?",
    "¿Quién sale en Crónica TV?", "¿Quién rompe el celular siempre?", "¿Quién se duerme en el cine?", "¿Quién escribe su biografía?", "¿A quién lo llevan los ovnis?",
    "¿Quién se comería a los otros para vivir?", "¿Quién mata a alguien sin querer?", "¿Quién se casa 5 veces?", "¿Quién termina loca de los gatos?", "¿Quién finge su muerte?",
    "¿Quién tiene el fetiche más raro?", "¿Quién se enamora de ChatGPT?", "¿Quién vende fotos de patas?", "¿Quién es el más tacaño (codito de oro)?", "¿Quién muere primero en el apocalipsis zombie?"
  ][i] || `Tribunal ${i}`
}));