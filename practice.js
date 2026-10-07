'use strict';
// Versioned contextual expansions. Each item has a stable ID for spaced review.
const PRACTICE_EXPANSIONS={
  "nouns": [
    "判断名词类别（普通名词/专有名词）|Sevilla=专有名词;profesora=普通名词;Mediterráneo=专有名词;ventana=普通名词",
    "改正该名称的大小写|barcelona=Barcelona;PABLO=Pablo;españa=España;américa=América",
    "用西语写出括号里的名词（保持小写）|Mi hermana es (学生).=estudiante;Este (城市) es grande.=ciudad;Leo un (书).=libro;El (狗) duerme.=perro",
    "判断是否为专有名词（是/否）|Guadalquivir=是;médico=否;Argentina=是;escuela=否"
  ],
  "gender": [
    "填定冠词 el/la|____ problema es difícil.=el;____ mano está limpia.=la;____ foto es bonita.=la;____ mapa está aquí.=el",
    "填定冠词 el/la|____ día es largo.=el;____ noche es tranquila.=la;____ canción es famosa.=la;____ viaje es corto.=el",
    "根据括号补全形容词|El agua está (frío).=fría;El aula está (vacío).=vacía;La radio es (nuevo).=nueva;El idioma es (bonito).=bonito",
    "按提示填冠词|____ artista es mi madre.=la;____ estudiante es mi hermano.=el;____ águila blanca vuela.=el;____ hacha está afilada.=el"
  ],
  "plural": [
    "写出复数|árbol=árboles;lápiz=lápices;joven=jóvenes;reloj=relojes",
    "写出复数|café=cafés;canción=canciones;ciudad=ciudades;flor=flores",
    "写出复数|mes=meses;examen=exámenes;lunes=lunes;crisis=crisis",
    "写出复数|luz=luces;voz=voces;papel=papeles;rey=reyes"
  ],
  "personal": [
    "填主格代词|____ somos españolas.（我们，女性）=nosotras;____ sois profesores.（你们，西班牙非敬称）=vosotros;____ son mis primas.（她们）=ellas;____ habla japonés.（他）=él",
    "填介词后代词|Este regalo es para ____.（我）=mí;Estoy pensando en ____.（你）=ti;Hablan de ____.（她）=ella;Esto depende de ____.（我们，男女混合）=nosotros",
    "将括号合并为一个词|Ven (con mí).=conmigo;Voy (con ti).=contigo;Habla (con sí) mismo.=consigo;Lleva el libro (con sí).=consigo",
    "填主格代词|____ tengo una pregunta.（我）=yo;____ tienes razón.（你）=tú;____ trabajan aquí.（诸位，敬称）=ustedes;____ estudia medicina.（您）=usted"
  ],
  "articles": [
    "补冠词|____ agua limpia está aquí.=el;____ aguas del río están frías.=las;____ águilas vuelan alto.=las;____ aula grande está cerrada.=el",
    "用 a/de 与冠词的合写形式填空|Voy ____ mercado.=al;Vengo ____ teatro.=del;La puerta ____ museo está abierta.=del;Llegamos ____ aeropuerto.=al",
    "填不定冠词|Tengo ____ idea.=una;Hay ____ libros sobre la mesa.=unos;Veo ____ casas blancas.=unas;Necesito ____ bolígrafo.=un",
    "泛指整个种类，填定冠词|____ tigre es un mamífero.=el;____ ballena vive en el mar.=la;____ música me gusta.=la;____ español es una lengua.=el"
  ],
  "prep-basic": [
    "用 a/de/en 填空|El cuaderno es ____ Luis.=de;Vivimos ____ Valencia.=en;Vamos ____ la estación.=a;La mesa es ____ cristal.=de",
    "用 a/de/en 填空|Voy ____ bicicleta.=en;Soy ____ Granada.=de;Veo ____ mi profesora.=a;Estudio ____ la biblioteca.=en",
    "用 a/de/en 填空|Aprendo ____ cocinar.=a;Es un libro ____ historia.=de;Estamos ____ marzo.=en;Trabajo ____ ocho a tres.=de",
    "用 a/de/en 填空|Salimos ____ casa temprano.=de;Llegamos ____ las nueve.=a;Pienso ____ mi familia.=en;Escucho ____ mi abuela.=a"
  ],
  "adjectives": [
    "让括号中形容词与名词一致|unas flores (rojo)=rojas;dos chicos (alemán)=alemanes;una mesa (redondo)=redonda;unas alumnas (trabajador)=trabajadoras",
    "让括号中形容词与名词一致|un libro (interesante)=interesante;unas casas (grande)=grandes;una chica (español)=española;unos ejercicios (fácil)=fáciles",
    "写出括号里词在此位置的形式|un (bueno) amigo=buen;un (malo) día=mal;un (grande) escritor=gran;el (primero) capítulo=primer",
    "选择解释（老朋友/年老的朋友/穷人/可怜的人）|un viejo amigo=老朋友;un amigo viejo=年老的朋友;un hombre pobre=穷人;un pobre hombre=可怜的人"
  ],
  "possessives": [
    "填前置物主形容词|____ zapatos（我的）=mis;____ hermana（你的）=tu;____ casa（我们的）=nuestra;____ padres（你们的，vosotros）=vuestros",
    "填后置重读物主词|una amiga ____（我的）=mía;dos primos ____（你的）=tuyos;las llaves son ____（我们的）=nuestras;el coche es ____（他们的）=suyo",
    "填物主代词的核心词|Estas gafas son las ____.（我的）=mías;Ese perro es el ____.（你的）=tuyo;Aquellas maletas son las ____.（我们的）=nuestras;Los libros son los ____.（她的）=suyos",
    "根据括号填空|Es ____ madre.（他的）=su;Son ____ hijos.（您的）=sus;Es una idea ____.（你们的，vosotros）=vuestra;Son unos amigos ____.（我的）=míos"
  ],
  "demonstratives": [
    "近指：用 este 一组填空|____ mesa=esta;____ libros=estos;____ sillas=estas;____ coche=este",
    "中指：用 ese 一组填空|____ puerta=esa;____ cuadernos=esos;____ ventanas=esas;____ árbol=ese",
    "远指：用 aquel 一组填空|____ montaña=aquella;____ niños=aquellos;____ casas=aquellas;____ pueblo=aquel",
    "按提示填中性指示代词|¿Qué es ____?（手里的这个东西）=esto;____ que dices es verdad.（你说的那个）=eso;Recuerdo ____ que pasó entonces.（遥远的那件事）=aquello;No entiendo ____.（你刚说的那个）=eso"
  ],
  "questions": [
    "补疑问词|¿____ vives? — En Bilbao.=Dónde;¿____ cuesta? — Diez euros.=Cuánto;¿____ llega? — Mañana.=Cuándo;¿____ está? — Bien.=Cómo",
    "補疑问词|¿____ es ella? — Mi prima.=Quién;¿____ libros tienes? — Cinco.=Cuántos;¿____ hora es?=Qué;¿De ____ es la mochila? — De Ana.=quién",
    "按中文填疑问词|¿____ vienes?（为什么，两个词）=Por qué;¿____ prefieres de estos dos?（哪一个）=Cuál;¿____ estudias?（学什么）=Qué;¿____ son tus amigos?（哪些人）=Quiénes",
    "根据明确事实回答 Sí/No|¿No estudias? — ____, estudio todos los días.=Sí;¿No tienes coche? — ____, no tengo.=No;¿No viene Ana? — ____, viene ahora.=Sí;¿No has comido? — ____, todavía no.=No"
  ],
  "exclamation": [
    "补 Qué/Cuánto/Cuánta/Cuántos/Cuántas|¡____ calor hace!=Qué;¡____ libros tienes!=Cuántos;¡____ gente hay!=Cuánta;¡____ has trabajado!=Cuánto",
    "用 qué 加形容词补全（只填形容词）|¡Qué casa tan ____!（漂亮的，bonito）=bonita;¡Qué días tan ____!（冷的，frío）=fríos;¡Qué chica tan ____!（友好的，simpático）=simpática;¡Qué flores tan ____!（美丽的，hermoso）=hermosas",
    "写出正确带重音的感叹词|¡(Que) bien cantas!=Qué;¡(Cuanto) dinero!=Cuánto;¡(Como) llueve!=Cómo;¡(Quien) pudiera viajar!=Quién",
    "补感叹数量词 cuánto 并保持一致|¡____ paciencia tienes!=Cuánta;¡____ problemas!=Cuántos;¡____ ganas de verte!=Cuántas;¡____ tiempo sin verte!=Cuánto"
  ],
  "orthography": [
    "补写规范重音符号|telefono=teléfono;arbol=árbol;musica=música;cancion=canción",
    "按音节用短横线分开|casa=ca-sa;perro=pe-rro;calle=ca-lle;muchacho=mu-cha-cho",
    "选有/无：该词需要书写重音符吗？|examen=无;jóvenes=有;ciudad=无;lápiz=有",
    "保留原字母，仅加必要的重音符号|¿Donde vives?=¿Dónde vives?;El es mi amigo.=Él es mi amigo.;¿Que quieres?=¿Qué quieres?;Mi tio vive aqui.=Mi tío vive aquí."
  ],
  "ordinals": [
    "填序数词|la ____ semana（第三）=tercera;el ____ piso（第五）=quinto;la ____ fila（第六）=sexta;el ____ día（第七）=séptimo",
    "填序数词|la ____ puerta（第八）=octava;el ____ capítulo（第九）=noveno;la ____ vez（第十）=décima;el ____ puesto（第四）=cuarto",
    "集合数词填空|una ____ de huevos（十二个）=docena;un ____ de zapatos（一双）=par;un ____ de personas（约一百）=centenar;un ____ de árboles（约一千）=millar",
    "填正确形式|mi ____ viaje（primero）=primer;la ____ oportunidad（segundo）=segunda;su ____ hijo（tercero）=tercer;____ alumnas ganaron.（两位都，ambos）=ambas"
  ],
  "time-date": [
    "补钟点表达|Son las cinco y ____.（5:15）=cuarto;Son las seis y ____.（6:30）=media;Son las ocho menos ____.（7:45）=cuarto;Son las diez y ____.（10:10）=diez",
    "写出月份|一月=enero;二月=febrero;四月=abril;十二月=diciembre",
    "填冠词或介词|La clase empieza ____ las ocho.=a;Nos vemos ____ viernes.（这个星期五）=el;Trabajo ____ sábados.（每周六）=los;Nací ____ julio.=en",
    "写出星期名称|星期二=martes;星期三=miércoles;星期四=jueves;星期日=domingo"
  ],
  "objects": [
    "用宾格代词代替括号部分|Veo (la luna).=la;Compro (los tomates).=los;Escucho (las canciones).=las;Leo (el periódico).=lo",
    "用与格代词补空|Doy un regalo a Ana: ____ doy un regalo.=le;Escribo a mis padres: ____ escribo.=les;Te doy esto a ti: ____ doy esto.=te;Nos mandan cartas a nosotros: ____ mandan cartas.=nos",
    "填双代词（用空格隔开）|Doy el libro a Eva: ____ doy.=se lo;Envío las fotos a Luis: ____ envío.=se las;Doy los mapas a mis amigos: ____ doy.=se los;Presto la bici a Marta: ____ presto.=se la",
    "否定句填代词（给我的）|No ____ compres.（那本书）=me lo;No ____ traigas.（那些花）=me las;No ____ envíes.（那封信）=me la;No ____ vendas.（那些书）=me los"
  ],
  "pronominal": [
    "填与主语一致的代词|Yo ____ levanto temprano.=me;Tú ____ duchas por la noche.=te;Nosotros ____ acostamos tarde.=nos;Vosotros ____ laváis las manos.=os",
    "补代词|Ella ____ arrepiente de eso.=se;Ellos ____ quejan del ruido.=se;Yo ____ acuerdo de ti.=me;Tú ____ llamas Pedro.=te",
    "填代词并理解相互关系|Ana y Luis ____ escriben el uno al otro.=se;Nosotros ____ ayudamos mutuamente.=nos;Vosotros ____ miráis el uno al otro.=os;Las hermanas ____ abrazan mutuamente.=se",
    "填动词短语所需介词|Me acuerdo ____ su nombre.=de;Se arrepiente ____ mentir.=de;Nos quejamos ____ la comida.=de;Se atreve ____ hablar.=a"
  ],
  "serestar": [
    "用现在时 ser/estar 的适当形式|La reunión ____ en el aula 2.（举行地点）=es;Mis llaves ____ en la mesa.=están;La sopa ____ fría.（现在）=está;Ellas ____ ingenieras.=son",
    "填 hay/es/está|____ una farmacia cerca.=hay;La farmacia ____ cerca.=está;Madrid ____ la capital de España.=es;En la plaza ____ muchos niños.=hay",
    "填 hace/hacen|Me ____ falta tiempo.=hace;Nos ____ falta dos sillas.=hacen;Te ____ falta estudiar más.=hace;Le ____ falta unas gafas.=hacen",
    "用现在时 ser/estar|Esta silla ____ de madera.=es;Hoy nosotros ____ cansados.=estamos;Estos zapatos ____ míos.=son;La puerta ____ abierta.=está"
  ],
  "prep-purpose": [
    "用 por/para/con 填空|Estudio ____ aprender.=para;Corto pan ____ un cuchillo.=con;Gracias ____ venir.=por;Este regalo es ____ ti.=para",
    "用 por/para/con 填空|Paseamos ____ el parque.=por;Voy al cine ____ mi prima.=con;Salimos ____ Madrid.（目的地）=para;Lo envío ____ correo.=por",
    "用 por/para/con 填空|Pago veinte euros ____ el libro.=por;El informe es ____ mañana.（截止）=para;Café ____ leche, por favor.=con;Lo hice ____ miedo.（原因）=por",
    "用 por/para/con 填空|Trabajo ____ una empresa.（雇主）=para;Habla ____ tranquilidad.（方式）=con;Entró ____ la ventana.（经过）=por;____ mí, es fácil.（就我而言）=para"
  ],
  "prep-space": [
    "用 desde/en/hacia/sobre 填空|Vivo aquí ____ 2020.=desde;El gato está ____ la caja.（里面）=en;Caminamos ____ el norte.（方向）=hacia;El libro está ____ la mesa.（上面）=sobre",
    "用 desde/en/hacia/sobre 填空|Hablamos ____ música.（话题）=sobre;Trabajo ____ casa.=en;Se ve el mar ____ aquí.=desde;El tren va ____ el sur.=hacia",
    "填空间关系词|El banco está al ____ de la tienda.（旁边）=lado;El perro está ____ de la mesa.（下面）=debajo;La escuela está ____ del museo.（前面）=delante;El parque está ____ de casa.（附近）=cerca",
    "补介词|Trabajo desde las ocho ____ las tres.=hasta;La farmacia está enfrente ____ la plaza.=de;El gato está dentro ____ la caja.=de;Hay un jardín detrás ____ la casa.=de"
  ],
  "connectors": [
    "填 y/e|padres ____ hijos=e;agua ____ hielo=y;español ____ inglés=e;Ana ____ Marta=y",
    "填 o/u|siete ____ ocho=u;mujeres ____ hombres=u;café ____ té=o;uno ____ otro=u",
    "填 ni/porque|No tengo coche ____ moto.=ni;Me quedo ____ estoy enfermo.=porque;No canta ____ baila.=ni;Estudio ____ quiero aprender.=porque",
    "填 y/e/o/u|cobre ____ hierro=y;geografía ____ historia=e;minutos ____ horas=u;azul ____ verde（以及）=y"
  ],
  "negatives": [
    "填 nada/nadie|No veo a ____.（任何人）=nadie;No quiero ____.（任何东西）=nada;____ sabe la respuesta.（没有人）=nadie;____ es imposible.（没有什么）=nada",
    "填 tampoco/nunca|Yo ____ fumo.（从不）=nunca;Ella no viene y yo ____.（也不）=tampoco;No he estado allí ____.（从未）=nunca;No tengo perro. — Yo ____.=tampoco",
    "句后否定词，补句前否定词|____ he visto nada.=no;____ ha venido nadie.=no;____ salimos nunca.=no;____ quiero nada más.=no",
    "根据后文填 Sí/No|¿No eres médico? — ____, soy médico.=Sí;¿No vienes? — ____, no puedo.=No;¿No lo sabes? — ____, lo sé.=Sí;¿No tienes hermanos? — ____, soy hijo único.=No"
  ],
  "indefinite": [
    "填 alguno/ninguno 的适当形式|¿Tienes ____ libro de historia?（某一本）=algún;No tengo ____ problema.（任何）=ningún;Hay ____ personas aquí.（一些）=algunas;No queda ____ silla.（任何）=ninguna",
    "填 cualquier/cualquiera/cualesquiera|Elige ____ color.=cualquier;Puede venir ____.=cualquiera;Es una persona ____.=cualquiera;Sean ____ las razones, escucha.=cualesquiera",
    "用 todo 的适当形式|____ las casas son blancas.=todas;____ el día llueve.=todo;____ los alumnos estudian.=todos;____ la semana trabajo.=toda",
    "按提示填不定词|Hay ____ agua.（mucho）=mucha;Tengo ____ amigos.（poco）=pocos;Necesito ____ silla.（otra，不能加 una）=otra;____ niño tiene un libro.（每个）=cada"
  ],
  "comparison": [
    "补比较结构|Ana es más alta ____ yo.=que;Luis es tan amable ____ Eva.=como;Tengo tantos libros ____ tú.=como;Este piso es menos caro ____ aquel.=que",
    "用比较级替换括号|Este libro es (más bueno).=mejor;Mi resultado es (más malo).=peor;Mi hermana es (más grande，年长).=mayor;Mi hermano es (más pequeño，年幼).=menor",
    "按提示补比较结构|Corre ____ rápido como yo.（一样）=tan;Trabaja ____ que antes.（更好）=mejor;Hoy duermo ____ que ayer.（更少）=menos;Leo ____ libros que él.（更多）=más",
    "填 de/que/como|Hay más ____ cien personas.=de;Es menos difícil ____ parece.=de lo que;Es la más alta ____ la clase.=de;Gasta tanto ____ gana.=como"
  ],
  "nonfinite": [
    "写出副动词|leer=leyendo;dormir=durmiendo;pedir=pidiendo;decir=diciendo",
    "写出过去分词|abrir=abierto;escribir=escrito;romper=roto;volver=vuelto",
    "填括号里动词的合适非人称形式|Quiero (aprender).=aprender;Estoy (cocinar).=cocinando;He (hacer) la tarea.=hecho;Las puertas están (cerrar).=cerradas",
    "按要求填空|Salió (correr，方式).=corriendo;Antes de (comer)，lávate las manos.=comer;Los trabajos están (terminar).=terminados;Hemos (ver) la película.=visto"
  ],
  "periphrases": [
    "补动词短语中的连接词|Voy ____ estudiar.=a;Tengo ____ trabajar.=que;Vuelvo ____ leer el libro.=a;Empiezo ____ entender.=a",
    "填副动词|Sigo (estudiar).=estudiando;Lleva dos horas (esperar).=esperando;Seguimos (vivir) aquí.=viviendo;Llevan años (trabajar) juntos.=trabajando",
    "用括号中原形或副动词|Voy a (salir).=salir;Tengo que (volver).=volver;Vuelve a (llover).=llover;Sigue (llover).=lloviendo",
    "填现在时变位|Yo (seguir) estudiando.=sigo;Tú (tener) que venir.=tienes;Nosotros (ir) a cenar.=vamos;Ella (llevar) un mes aprendiendo.=lleva"
  ],
  "aspect": [
    "选简单过去时/过去未完成时|叙述去年完成的三次旅行=简单过去时;描写童年每天步行上学的习惯=过去未完成时;从外部概括昨晚看完的一场电影=简单过去时;交代某事发生时正在下雨的背景=过去未完成时",
    "填括号动词：背景或完整事件|Ayer (comprar, yo) dos libros.=compré;De niño (jugar, yo) aquí todos los días.=jugaba;Mientras Ana (leer), sonó el teléfono.=leía;El lunes (llegar, nosotros) a las ocho.=llegamos",
    "填过去时：注意提示|Entonces (ser, yo) estudiante.（背景）=era;La fiesta (terminar) a las diez.（结束事件）=terminó;Antes (vivir, nosotros) en Toledo.（背景）=vivíamos;Ayer (escribir, ella) la carta entera.=escribió",
    "填过去时|Cuando era pequeño, (ir, yo) al mar cada verano.=iba;Anoche (ver, yo) toda la película.=vi;En aquel momento (hacer) frío.=hacía;De pronto, alguien (abrir) la puerta.=abrió"
  ],
  "syntax": [
    "判断句子主语（填原词）|Los niños juegan.=Los niños;Mi hermana canta.=Mi hermana;Ha llegado el tren.=el tren;Nosotros estudiamos.=Nosotros",
    "判断简单句/复合句|Ana trabaja y Luis estudia.=复合句;Quiero un café.=简单句;Dice que está cansado.=复合句;Los niños juegan en el parque.=简单句",
    "填括号动词现在时，注意一致|Mis padres (vivir) aquí.=viven;La gente (hablar) mucho.=habla;Tú y yo (estudiar) español.=estudiamos;Vosotros (comer) pan.=coméis",
    "判断并列/从属关系|Leo y ella escribe.=并列;Voy porque me necesitas.=从属;Sé que tienes razón.=从属;Vienes o te quedas.=并列"
  ],
  "noun-clause": [
    "填 que/si|Creo ____ viene hoy.=que;No sé ____ vendrá o no.=si;Dice ____ está bien.=que;Pregunta ____ tenemos tiempo.=si",
    "填括号中动词的恰当语气|Quiero que (venir, tú).=vengas;Sé que (tener, tú) razón.=tienes;No creo que (ser) fácil.=sea;Espero que (estar, vosotros) bien.=estéis",
    "感知结构填原形|Veo a los niños (jugar).=jugar;Oigo a Ana (cantar).=cantar;Vi a Luis (salir).=salir;Escucho a Eva (hablar).=hablar",
    "同主语填原形，不同主语填从句动词|Quiero (viajar).=viajar;Deseo que tú (viajar).=viajes;Esperamos (aprobar).=aprobar;Prefiero que Ana (estudiar).=estudie"
  ],
  "relative": [
    "填 que|El libro ____ leo es nuevo.=que;La casa ____ compramos es grande.=que;El coche ____ ves es mío.=que;Las fotos ____ sacaste son bonitas.=que",
    "用 quien 的适当数|Ana, ____ vive aquí, es médica.=quien;Mis padres, ____ viven lejos, vienen mañana.=quienes;La persona con ____ hablo es Luis.=quien;Los amigos con ____ salgo son simpáticos.=quienes",
    "用 el/la/los/las que（介词已给出）|La mesa sobre ____ está el libro es nueva.=la que;Los temas de ____ hablamos son difíciles.=los que;El edificio en ____ vivo es antiguo.=el que;Las amigas con ____ estudio son italianas.=las que",
    "补关系结构|____ que dices es importante.（中性）=lo;La ciudad ____ nací es pequeña.（地点）=donde;El día ____ llegaste llovía.（用 que）=que;No conozco a ____ llamó.（用 quien）=quien"
  ],
  "adverb-clauses": [
    "填时间从句动词|Cuando (llegar, tú) mañana, llámame.=llegues;Cuando (llegar, yo) a casa cada día, descanso.=llego;En cuanto (poder, yo) mañana, iré.=pueda;Mientras (estudiar, yo) ahora, él cocina.=estudio",
    "补连词或介词|____ salir, cerró la puerta.（一……就，al）=al;Voy ____ tú quieras.（哪里）=donde;No salgo ____ llueve.（因为）=porque;____ hace frío, salimos.（虽然事实如此）=aunque",
    "填 aunque 从句：按已知/假设语境|Aunque (llover) ahora, salimos.（已知正在下雨）=llueve;Aunque mañana (llover), saldremos.（尚不确定）=llueva;Aunque (ser) caro, lo compraré.（即使，未知价格）=sea;Aunque (estar) cansado, trabaja.（已知他疲倦）=está",
    "al 后填原形|Al (entrar), saludó.=entrar;Al (ver) el precio, salió.=ver;Al (terminar), descansamos.=terminar;Al (oír) el ruido, miró.=oír"
  ],
  "sequence": [
    "真实条件用现在时|Si (tener, tú) tiempo, ven.=tienes;Si (llover), me quedo.=llueve;Si (poder, nosotros), iremos.=podemos;Si (querer, vosotros), salimos.=queréis",
    "假设条件：填虚拟式过去未完成时，-ra/-se 均可|Si (ser, yo) rico, viajaría.=fuera/fuese;Si (tener, tú) tiempo, vendrías.=tuvieras/tuvieses;Si (poder, ella), ayudaría.=pudiera/pudiese;Si (saber, nosotros), responderíamos.=supiéramos/supiésemos",
    "过去转述，按时间后移|Dijo: «Estoy cansado». → Dijo que (estar) cansado.=estaba;Dijo: «Vendré». → Dijo que (venir).=vendría;Dijo: «He terminado». → Dijo que (terminar).=había terminado;Dijo: «Vivo aquí». → Dijo que (vivir) allí.=vivía",
    "直接疑问改间接疑问，补连接词|«¿Vienes?» → Pregunta ____ vienes.=si;«¿Dónde vives?» → Pregunta ____ vives.=dónde;«¿Qué quieres?» → Pregunta ____ quieres.=qué;«¿Cuándo sales?» → Pregunta ____ sales.=cuándo"
  ],
  "benefactive": [
    "按提示填与格代词|____ duele la cabeza.（我）=me;____ lavó el coche a su padre.=le;____ compraron libros a los niños.=les;____ prepararon la cena a nosotros.=nos",
    "填形容词保持一致|Las niñas llegaron (cansado).=cansadas;Los chicos salieron (contento).=contentos;Encontré la puerta (abierto).=abierta;Dejaron las ventanas (cerrado).=cerradas",
    "自复被动与格，填 se 后的代词|Se ____ entregaron los premios a las ganadoras.=les;Se ____ devolvió el dinero a Ana.=le;Se ____ enviaron las cartas a ustedes.=les;Se ____ reparó la bicicleta a mí.=me",
    "填动词，注意真正的主语|Me (gustar，现在时) los libros.=gustan;Le (doler，现在时) los pies.=duelen;Se les (entregar，简单过去时) las llaves.=entregaron;Se le (devolver，简单过去时) la carta.=devolvió"
  ],
  "voice": [
    "自复被动填现在时|Se (vender) pisos.=venden;Se (alquilar) una habitación.=alquila;Se (necesitar) camareros.=necesitan;Se (hablar) español.=habla",
    "ser 被动分词一致|La carta fue (escribir).=escrita;Los coches fueron (vender).=vendidos;Las puertas fueron (abrir).=abiertas;El trabajo fue (terminar).=terminado",
    "用第三人称单数或复数现在时|Se (vivir) bien aquí.=vive;Se (buscar) a los culpables.=busca;Se (reparar) bicicletas.=reparan;Se (comer) bien en este bar.=come",
    "ir 的双重补语，填形容词/分词|Las niñas van (contento).=contentas;Los sobres van (cerrado).=cerrados;Los viajeros van (sentado).=sentados;La carta va (firmar).=firmada"
  ],
  "result-emphasis": [
    "填 tan/tanto/tanta/tantos/tantas|Hace ____ frío que tiemblo.=tanto;Es ____ alto que toca el techo.=tan;Hay ____ gente que no cabemos.=tanta;Tiene ____ libros que no sabe dónde ponerlos.=tantos",
    "填结果连接词|Estoy cansado, ____ que me voy.（así）=así;Llueve, ____ tanto no salimos.（por）=por;Habló tanto ____ se quedó sin voz.=que;Es tan fácil ____ todos lo entienden.=que",
    "补强调句的关系词|Fue Ana ____ llamó.（quien）=quien;Fue allí ____ nos conocimos.=donde;Fue ayer ____ llegó.=cuando;Fue así ____ lo hizo.=como",
    "填 tan/tanto/tanta/tantos/tantas|Corre ____ rápido que nadie lo alcanza.=tan;Compró ____ flores que llenó la casa.=tantas;Trabajó ____ que se agotó.=tanto;Había ____ ruido que no oía.=tanto"
  ],
  "diminutives": [
    "写常见 -ito 系列指小词|libro=librito;mesa=mesita;gato=gatito;perro=perrito",
    "写保持辅音读音的 -ito 系列形式|chico=chiquito;amiga=amiguita;barco=barquito;lago=laguito",
    "写常见指小词|momento=momentito;abuela=abuelita;hermana=hermanita;casa（复数）=casitas",
    "判断语用（亲昵/缓和请求/实际小尺寸/同情）|Mi abuelita me quiere mucho.=亲昵;Espera un momentito, por favor.=缓和请求;Una casita de solo diez metros cuadrados.=实际小尺寸;¡Pobrecito, se ha caído!=同情"
  ]
};
Object.entries(PRACTICE_EXPANSIONS).forEach(([lesson,groups])=>groups.forEach((line,g)=>{const split=line.indexOf('|'),hint=line.slice(0,split);line.slice(split+1).split(';').forEach((item,i)=>{const at=item.lastIndexOf('=');BANK.push({id:'v3-'+lesson+'-'+g+'-'+i,lesson,type:'input',prompt:hint+'：\n'+item.slice(0,at),answer:item.slice(at+1),explain:hint+'。正确形式：'+item.slice(at+1).replaceAll('/',' / ')+'。'});});}));
const PRACTICE_SETS={};
LESSONS.forEach(l=>{const curated=BANK.filter(q=>q.lesson===l.id&&(q.id.startsWith('v3-')||l.qs.some(x=>x.id===q.id))),drills=BANK.filter(q=>q.lesson===l.id&&!curated.includes(q));const pool=[...curated,...drills];const size=Math.min(8,Math.floor(pool.length/4));if(size<5)throw Error('Insufficient questions: '+l.id);PRACTICE_SETS[l.id]=Array.from({length:4},(_,set)=>Array.from({length:size},(_,i)=>pool[i*4+set]));});
