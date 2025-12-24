import { BombTopic, RouletteTask, NeverEverQuestion, CourtQuestion } from './types';

// Helper to generate IDs
const id = (prefix: string, index: number) => `${prefix}_${index}_${Date.now()}`;

/* --- RULETA TÓXICA (EXPANDIDA) --- */

const ROULETTE_ICEBREAKER: RouletteTask[] = Array.from({ length: 60 }, (_, i) => ({
  id: id('r_ice', i), category: 'ICEBREAKER', type: i % 2 === 0 ? 'truth' : 'dare',
  text: [
    "Di el nombre de la primera persona que besaste.", "Baila la Macarena sin música.", "Imita a alguien del grupo y que adivinen.", "Deja que el grupo te peine.", "Muestra tu última foto.",
    "¿Talento inútil?", "Canta tu canción favorita.", "Haz 10 sentadillas diciendo Pokémon.", "Habla con acento extranjero 2 rondas.", "¿Qué es lo más vergonzoso que hiciste por dinero?",
    "Di 3 virtudes de la persona a tu derecha.", "Haz una cara graciosa hasta tu turno.", "¿Quién te cae mejor?", "Intercambia una prenda con la izquierda.", "Bebe si mentiste para no salir.",
    "Muestra tu tiempo de pantalla.", "Amor platónico famoso.", "Lee el último mensaje a tu madre.", "Actúa como gato.", "¿Qué harías si fueras invisible?",
    "Piropo cursi al de enfrente.", "Lame tu codo.", "Alfabeto al revés.", "Muestra tu DNI.", "Cuenta un chiste malo.",
    "Peor cita de tu vida.", "Cosquillas por 10 seg.", "Bebe sin manos.", "Grita '¡Amo el alcohol!' por la ventana.", "Brindis por el anfitrión.",
    "¿Qué parte de tu cuerpo te gusta más?", "Verdad o mentira (el grupo adivina).", "Bebe si llevas ropa negra.", "Camina como modelo.", "Cambiar vida con alguien de aquí.",
    "Imita bebé llorando.", "¿Cuándo lloraste por última vez?", "Algo que nadie sepa de ti.", "Muestra calcetines.", "Bebe con el de enfrente.",
    "Selfie muecas a stories (borra en 5 min).", "5 marcas de condones.", "Peor comida que cocinaste.", "Imita orgasmo fingido.", "Abraza al que huela mejor.",
    "Profesor favorito.", "Nariz con lengua.", "Bebe si tienes tatuajes.", "Placer culposo musical.", "Fondo si no cumples el próximo.",
    "Habla como robot.", "Di un poema improvisado.", "Hazle un masaje al de la derecha.", "Bebe si tienes Tinder.", "Muestra tu fondo de pantalla."
  ][i] || `Reto Icebreaker ${i}`
}));

const ROULETTE_HOT: RouletteTask[] = Array.from({ length: 70 }, (_, i) => ({
  id: id('r_hot', i), category: 'HOT', type: i % 2 === 0 ? 'truth' : 'dare',
  text: [
    "Beso en el cuello al de la derecha.", "Quítate una prenda.", "¿Posición favorita?", "Baile sexy a quien elijas.", "¿Trío?",
    "Deja que te den una nalgada.", "¿Ropa interior? Muéstrala.", "Muerde el labio al de la izquierda.", "Lugar más extraño donde lo hiciste.", "Simula sexo oral con botella.",
    "Sexo en el trabajo.", "Que te escriban en el cuerpo.", "¿Quién te atrae más?", "Come de la boca de otro.", "Gime el nombre de alguien.",
    "¿Tamaño o técnica?", "Susurra algo sucio.", "¿Pillado masturbándote?", "Masaje de hombros 1 min.", "¿Te has grabado?",
    "Shot del ombligo de alguien.", "Mayor fetiche.", "Besa a alguien.", "¿Pagado por sexo?", "Mano bajo camiseta.",
    "Sexo con alguien de aquí.", "¿Escupir o tragar?", "Siéntate en el regazo 2 rondas.", "Juguete favorito.", "Mejor orgasmo.",
    "Hielo en zona sensible.", "¿Infiel? Bebe.", "Intercambia camiseta.", "¿Qué te pone?", "Beso esquimal.",
    "Nudes esta semana.", "Ruidos de placer.", "¿Pareja de amigo?", "Lame el cuello.", "¿Duda orientación sexual?",
    "Beso donde quieran.", "Sexo anal.", "Describe ropa interior del de enfrente.", "Bebe si comando.", "¿Arriba o abajo?",
    "Twerk 15 seg.", "Luz encendida/apagada.", "Mañanero o nocturno.", "Qué te gusta del cuerpo del de la derecha.", "Beso de pajarito.",
    "Muestra una foto sexy.", "¿Fantasía no cumplida?", "Besa la oreja de alguien.", "Chupa el dedo de alguien.", "Deja que te huelan el cuello.",
    "¿Sexo en la primera cita?", "¿Lugar público?", "Beso de 3.", "Bebe si te has liado con >10 personas.", "Di el color de tu ropa interior."
  ][i] || `Reto Hot ${i}`
}));

const ROULETTE_TOXIC: RouletteTask[] = Array.from({ length: 60 }, (_, i) => ({
  id: id('r_tox', i), category: 'TOXIC', type: i % 2 === 0 ? 'truth' : 'dare',
  text: [
    "Busca 'Amor' en WhatsApp, lee el último.", "Llama a tu ex y cuelga.", "Quién te cae peor.", "Foto #10 galería.", "Audio ladrando a familia.",
    "A quién eliminarías de tu vida.", "Último DM Instagram.", "Quién viste peor.", "Confiesa robo.", "Historial Google.",
    "Más falso del grupo.", "No tendrías sexo ni por 1M.", "Grupo escribe estado en tu red.", "Hablado mal de alguien presente.", "Móvil desbloqueado 30s al de la derecha.",
    "Llama a madre: 'Soy padre/madre'.", "Futuro más negro.", "Persona que más odias.", "Escribe a ex 'Te extraño'.", "Persona más tonta que conoces.",
    "Últimos 3 emojis.", "Verdad dolorosa a alguien.", "Pareja de amigo.", "Saldo bancario.", "Lee última nota móvil.",
    "Vergüenza familiar.", "Quién besa peor.", "Mensaje arriesgado.", "Critica físico.", "Arrepentido de acostarte con...",
    "Matar a uno de aquí.", "Más hipócrita.", "Deseado muerte.", "Foto horrible.", "Mentira a pareja actual.",
    "Pizza de condones.", "Secreto de alguien.", "Quién es infiel.", "Cae mal pareja de amigo.", "Escupe en vaso y bebe.",
    "Lee tu conversación más reciente.", "Di algo que te moleste del anfitrión.", "¿Quién sobra en este grupo?", "Muestra tus fotos ocultas.", "Ranking de belleza del grupo.",
    "¿Te cae bien la novia/o de tu mejor amigo?", "Bloquea a alguien en IG ahora.", "Di quién tiene peor aliento.", "¿Has robado dinero a tus padres?", "Di una mentira que todos crean."
  ][i] || `Reto Toxic ${i}`
}));

const ROULETTE_ABSURD: RouletteTask[] = Array.from({ length: 50 }, (_, i) => ({
  id: id('r_abs', i), category: 'ABSURD', type: 'dare',
  text: [
    "Habla con una pared 1 minuto.", "Lame el suelo.", "Ponte un zapato en la cabeza 2 turnos.", "Bebe agua de un plato como perro.", "Intenta morderte la oreja.",
    "Huele el pie del de tu izquierda.", "Declara tu amor a una lámpara.", "Grita 'Soy un unicornio' por la ventana.", "Come una cucharada de mostaza/ketchup sola.", "Dibuja un bigote en tu cara.",
    "Pide permiso para ir al baño.", "Camina hacia atrás hasta tu turno.", "Haz de narrador de lo que pasa en la fiesta.", "Finge ser un pollo 30 seg.", "Bebe con el codo pegado al cuerpo.",
    "Llama a un número al azar y canta cumpleaños feliz.", "Habla sin usar la letra 'A'.", "Baila sin música muy serio.", "Deja que te pinten las uñas con rotulador.", "Come algo sin usar las manos.",
    "Da vueltas sobre ti mismo 10 veces e intenta caminar recto.", "Haz gárgaras con tu bebida y traga.", "Intercambia un zapato con alguien.", "Usa tus calzoncillos/bragas por fuera (si te atreves).", "Finge ser estatua 1 minuto.",
    "Pide matrimonio al primero que entre por la puerta.", "Imita a un animal apareándose.", "Bebe del vaso de otro sin preguntar.", "Haz 20 flexiones o bebe.", "Gatea por la habitación.",
    "Habla susurrando 2 rondas.", "Grita cada vez que alguien beba.", "Ponte calcetines en las manos.", "Intenta lamer tu nariz.", "Haz bizcos hasta tu turno.",
    "Canta una canción de ópera.", "Hazte el muerto 1 minuto.", "Besa el suelo.", "Abraza una silla.", "Finge que estás en una montaña rusa."
  ][i] || `Reto Absurdo ${i}`
}));

export const ROULETTE_TASKS = [...ROULETTE_ICEBREAKER, ...ROULETTE_HOT, ...ROULETTE_TOXIC, ...ROULETTE_ABSURD];

/* --- LA BOMBA (EXPANDIDA) --- */

export const BOMB_DATA: BombTopic[] = [
  ...['PRO', 'CON', 'TER', 'CLA', 'VER', 'TRA', 'POR', 'CAR', 'SAL', 'MAN', 'FOR', 'RES', 'GRA', 'CAN', 'SOL', 'AL', 'EN', 'DIS', 'PRE', 'SUB', 'INT', 'COM'].map((s, i) => ({ id: id('b_syl', i), type: 'syllable' as const, content: s })),
  ...[
    'Marcas de Cigarrillos', 'Posiciones Sexuales', 'Insultos', 'Marcas de Cerveza', 'Partes del cuerpo', 
    'Cosas que vibran', 'Lugares para tener sexo', 'Excusas para no salir', 'Cosas pegajosas', 'Nombres de Ex',
    'Palabras que gimen', 'Partes íntimas (jerga)', 'Apps de citas', 'Fetiches', 'Cosas que se chupan',
    'Motivos de ruptura', 'Lugar público para ligar', 'Ropa interior', 'Drogas (nombres callejeros)', 'Bebidas alcohólicas',
    'Verbos en pasado', 'Animales nocturnos', 'Cosas largas y duras', 'Cosas húmedas', 'Palabras sucias',
    'Nombres de actrices/actores +18', 'Objetos de un sex shop', 'Zonas erógenas', 'Tipos de besos', 'Mentiras típicas',
    'Cosas que encuentras en el baño', 'Marcas de condones', 'Famosos odiados', 'Cosas que huelen mal', 'Palabras que terminan en ON',
    'Cosas que harías borracho', 'Insultos en otros idiomas', 'Partes del cuerpo que sudan', 'Cosas ilegales', 'Placeres culpables',
    'Comidas con forma fálica', 'Razones para ir a la cárcel', 'Cosas que no debes decir en una primera cita', 'Nombres de personas viejas', 'Palabras de 4 letras'
  ].map((t, i) => ({ id: id('b_top', i), type: 'topic' as const, content: t }))
];

/* --- YO NUNCA (EXPANDIDO) --- */

const NEVER_PARTY: NeverEverQuestion[] = Array.from({ length: 60 }, (_, i) => ({
  id: id('n_par', i), category: 'PARTY',
  text: [
    "Vomitado en público.", "Bailado en mesa.", "Colado en fiesta.", "Emborrachado solo.", "Perdido móvil.", "Robado vaso.", "ID falsa.", "Expulsado bar.", "Laguna mental.", "Karaoke borracho.",
    "Caído borracho.", "Llamado a ex.", "Dormido calle.", "Mezclado 5 alcoholes.", "Orinado calle.", "Trabajo resaca.", "Bebido antes mediodía.", "Sinpa.", "Besado desconocido.", "Bebido hasta desmayo.",
    "Robado señal.", "Comida en cama.", "Agua grifo baño bar.", "Equivocado casa.", "Perdido zapato.", "Ligado barman.", "Vomitado persona.", "Despertado otra ciudad.", "Bebido vaso otro.", "Audios ininteligibles.",
    "Llevado a casa.", "Dormido baño.", "Alcohol medicinal.", "Beber hasta vomitar.", "Roto algo valioso.", "Abrazado desconocido.", "Pelea objeto.", "Olvidado nombre ligue.", "Comida suelo.", "Tequila sin limón.",
    "Perdido llaves.", "Despertado desnudo.", "Dormido con ropa fiesta.", "Bebido agua florero.", "Robado botella.", "Besado amigo.", "Bailado sin música.", "Hablado en otro idioma borracho.", "Perdido cartera.", "Dormido en bus/metro."
  ][i] || `Yo nunca Party ${i}`
}));

const NEVER_DIRTY: NeverEverQuestion[] = Array.from({ length: 60 }, (_, i) => ({
  id: id('n_dirt', i), category: 'DIRTY',
  text: [
    "Mandado nude.", "Sexo público.", "Besado habitación.", "Fingido orgasmo.", "Sexo primera cita.", "Esposas.", "Sueño erótico amigo.", "Trío.", "Grabado sexo.", "Sexo coche.",
    "Sexo playa.", "Comida sexo.", "Sexo anal.", "ETS.", "Mentido parejas.", "Pillado padres.", "Sexo mayor.", "Juguete sexual.", "Cibersexo.", "Striptease.",
    "Sexo trabajo.", "Acostado ex.", "Amigo derechos.", "Sexting público.", "Sexo piscina.", "Disfrazado sexo.", "Sadomasoquismo.", "Baño discoteca.", "Tragado.", "Menstruación.",
    "Orgasmo múltiple.", "Infiel.", "Pagado porno.", "Dudado orientación.", "Gemidos ruidosos.", "Roto cama.", "Sexo aire libre.", "Sexo nombre desconocido.", "Sexo avión.", "Tántrico.",
    "Sexo tienda campaña.", "Sexo mar.", "Sexo ascensor.", "Sexo cine.", "Sexo parque.", "Sexo cocina.", "Sexo lavadora.", "Sexo probador.", "Sexo bosque.", "Sexo balcón."
  ][i] || `Yo nunca Dirty ${i}`
}));

const NEVER_GROSS: NeverEverQuestion[] = Array.from({ length: 40 }, (_, i) => ({
  id: id('n_gross', i), category: 'GROSS',
  text: [
    "Comido moco.", "Ropa interior 3 días.", "Orinado piscina.", "Olido ropa sucia.", "Defecado no baño.", "Vomitado y bebido.", "Comida caducada.", "Accidente marrón.", "No ducha 3 días.", "Cepillo ajeno.",
    "Limpiado saliva.", "No tirado cadena.", "Moco colgando.", "Orinado ducha.", "Escupido comida.", "Piojos adulto.", "Hongos.", "Destapado baño mano.", "Olido dedos.", "Pelo comida.",
    "Uñas suelo.", "Compartido chicle.", "Eructado cara.", "Mal aliento.", "Sudado olor.", "Reventado grano ajeno.", "Descalzo baño público.", "Papel higiénico vuelta.", "Comido costras.", "Devuelto comida probada.",
    "Orinado botella.", "Cera oídos.", "Mascota en boca.", "Comida basura.", "Moscas comida.", "Baño sin papel.", "Ropa sudada seca.", "Pelo desagüe.", "Moco ajeno.", "Vómito ajeno."
  ][i] || `Yo nunca Gross ${i}`
}));

const NEVER_COUPLES: NeverEverQuestion[] = Array.from({ length: 40 }, (_, i) => ({
  id: id('n_cpl', i), category: 'COUPLES',
  text: [
    "Revisado móvil.", "Mentido ubicación.", "Pensado otro sexo.", "Coqueteado celos.", "Olvidado aniversario.", "Fingido enfermo.", "Te amo falso.", "Odiado familia.", "Comparado ex.", "Perfil citas.",
    "Criticado amigos.", "Pensado mala cama.", "Querido terminar.", "Perdonado infidelidad.", "Infiel emocional.", "Gastado dinero.", "Mentido precio.", "Soñado romper.", "Vergüenza público.", "Espiado ex.",
    "Fingido regalo.", "Llamado nombre ex.", "Aguantado soledad.", "Ocultado amistad.", "Borrado mensajes.", "Sexo conseguir algo.", "Casarme duda.", "Pareja amigo atractiva.", "Tóxico.", "Escena celos.",
    "Revisado likes.", "Fake cuenta.", "Rastreado GPS.", "Odiado regalo.", "Mentido orgasmo pareja.", "Sexo por pena.", "Fantaseado amigo pareja.", "Odiado suegros.", "Mentido trabajo.", "Robado comida."
  ][i] || `Yo nunca Couples ${i}`
}));

const NEVER_HARDCORE: NeverEverQuestion[] = Array.from({ length: 40 }, (_, i) => ({
  id: id('n_hard', i), category: 'HARDCORE',
  text: [
    "Hecho un beso negro.", "Sexo con sangre.", "Golden shower.", "Fisting.", "Sexo con más de 2 personas a la vez.", 
    "Consumido drogas duras.", "Estado en la cárcel.", "Robado más de 500€.", "Sido arrestado.", "Tenido una sobredosis.",
    "Participado en una orgía.", "Sexo con un familiar lejano.", "Grabado porno profesional.", "Sido sugar baby.", "Pagado una gran suma por sexo.",
    "Destrozado un matrimonio.", "Chantajeado a alguien.", "Sido acosador.", "Despertado en el hospital sin memoria.", "Tenido una pelea a puñetazos.",
    "Usado un arma.", "Traficado.", "Sido deportado.", "Tenido sexo con un animal (espero que no).", "Sido vagabundo.",
    "Cambiado de identidad.", "Huido de la policía.", "Sexo en un cementerio.", "Sexo en una iglesia.", "Profanado algo sagrado.",
    "Mentido en un juicio.", "Provocado un incendio.", "Sido herido de bala/cuchillo.", "Tenido sexo necrófilo (broma... o no).", "Hecho algo que me avergüenza decir hasta aquí."
  ][i] || `Yo nunca Hardcore ${i}`
}));

export const NEVER_EVER_QUESTIONS = [...NEVER_PARTY, ...NEVER_DIRTY, ...NEVER_GROSS, ...NEVER_COUPLES, ...NEVER_HARDCORE];

/* --- EL TRIBUNAL (EXPANDIDO) --- */

export const COURT_QUESTIONS: CourtQuestion[] = Array.from({ length: 80 }, (_, i) => ({
  id: id('ct', i),
  text: [
    "¿Quién terminaría preso primero?", "¿Quién miente más?", "¿Unirse a secta?", "¿Peor gusto parejas?", "¿Morir primero terror?",
    "¿Rico accidente?", "¿Diablo disfrazado?", "¿Hijo secreto?", "¿Mala copa?", "¿Casarse dinero?",
    "¿Historial sucio?", "¿Vivir padres 40?", "¿Tardar ducha?", "¿Gastar todo?", "¿Viral estúpido?",
    "¿Reality show?", "¿Chismoso?", "¿Besa mejor?", "¿Manipulador?", "¿Llorar multa?",
    "¿Cuernos?", "¿Isla desierta?", "¿Cuarto desordenado?", "¿Tatuaje arrepentido?", "¿Cocina peor?",
    "¿Doble vida?", "¿Desaparecer?", "¿Risa inapropiada?", "¿Peor presidente?", "¿Arrestado orinar?",
    "¿Dramático?", "¿Llega tarde?", "¿Nunca paga?", "¿Boda Las Vegas?", "¿Peor música?",
    "¿Monje?", "¿Odia humanidad?", "¿Vago?", "¿Perder lotería?", "¿Presumido?",
    "¿Habla fuerte?", "¿Caerse público?", "¿Demandar?", "¿Dictador?", "¿Aventura jefe?",
    "¿Llorar fiesta?", "¿Sentido orientación?", "¿Olvidar cumple madre?", "¿Cirugía plástica?", "¿Ligar policía?",
    "¿Guarro?", "¿Risa rara?", "¿Calvo?", "¿Donar todo?", "¿Perfil falso?",
    "¿Noticias?", "¿Romper móvil?", "¿Dormirse cine?", "¿Libro vida?", "¿Aliens?",
    "¿Quién se comería a los demás para sobrevivir?", "¿Quién tiene más probabilidades de matar a alguien por accidente?", "¿Quién se casará y divorciará 5 veces?", "¿Quién será la loca de los gatos?", "¿Quién es más probable que finja su muerte?",
    "¿Quién tiene el fetiche más raro?", "¿Quién es más probable que se enamore de una IA?", "¿Quién vende fotos de pies?", "¿Quién es el más tacaño?", "¿Quién sería el primero en un apocalipsis zombie?"
  ][i] || `Tribunal ${i}`
}));