import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertCities1616954663702 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const sql = [];

        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (29,'alta-floresta-doeste',23,'ALTA FLORESTA D''OESTE',15,1100015,33),
            (30,'alto-alegre-dos-parecis',23,'ALTO ALEGRE DOS PARECIS',379,1100379,2),
            (31,'alto-paraiso',23,'ALTO PARAÍSO',403,1100403,675),
            (32,'alvorada-doeste',23,'ALVORADA D''OESTE',346,1100346,35),
            (33,'ariquemes',23,'ARIQUEMES',23,1100023,7),
            (34,'buritis',23,'BURITIS',452,1100452,4),
            (35,'cabixi',23,'CABIXI',31,1100031,37),
            (36,'cacaulandia',23,'CACAULÂNDIA',601,1100601,677),
            (37,'cacoal',23,'CACOAL',49,1100049,9),
            (38,'campo-novo-de-rondonia',23,'CAMPO NOVO DE RONDÔNIA',700,1100700,679)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (39,'candeias-do-jamari',23,'CANDEIAS DO JAMARI',809,1100809,681),
            (40,'castanheiras',23,'CASTANHEIRAS',908,1100908,691),
            (41,'cerejeiras',23,'CEREJEIRAS',56,1100056,27),
            (42,'chupinguaia',23,'CHUPINGUAIA',924,1100924,6),
            (43,'colorado-do-oeste',23,'COLORADO DO OESTE',64,1100064,23),
            (44,'corumbiara',23,'CORUMBIARA',72,1100072,981),
            (45,'costa-marques',23,'COSTA MARQUES',80,1100080,21),
            (46,'cujubim',23,'CUJUBIM',940,1100940,8),
            (47,'espigao-doeste',23,'ESPIGÃO D''OESTE',98,1100098,25),
            (48,'governador-jorge-teixeira',23,'GOVERNADOR JORGE TEIXEIRA',1005,1101005,693)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (49,'guajara-mirim',23,'GUAJARÁ-MIRIM',106,1100106,1),
            (50,'itapua-do-oeste',23,'ITAPUÃ DO OESTE',1104,1101104,683),
            (51,'jaru',23,'JARU',114,1100114,15),
            (52,'ji-parana',23,'JI-PARANÁ',122,1100122,5),
            (53,'machadinho-doeste',23,'MACHADINHO D''OESTE',130,1100130,39),
            (54,'ministro-andreazza',23,'MINISTRO ANDREAZZA',1203,1101203,695),
            (55,'mirante-da-serra',23,'MIRANTE DA SERRA',1302,1101302,697),
            (56,'monte-negro',23,'MONTE NEGRO',1401,1101401,685),
            (57,'nova-brasilandia-doeste',23,'NOVA BRASILÂNDIA D''OESTE',148,1100148,41),
            (58,'nova-mamore',23,'NOVA MAMORÉ',338,1100338,47)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (59,'nova-uniao',23,'NOVA UNIÃO',1435,1101435,10),
            (60,'novo-horizonte-do-oeste',23,'NOVO HORIZONTE DO OESTE',502,1100502,689),
            (61,'ouro-preto-do-oeste',23,'OURO PRETO DO OESTE',155,1100155,17),
            (62,'parecis',23,'PARECIS',1450,1101450,12),
            (63,'pimenta-bueno',23,'PIMENTA BUENO',189,1100189,11),
            (64,'pimenteiras-do-oeste',23,'PIMENTEIRAS DO OESTE',1468,1101468,14),
            (65,'porto-velho',23,'PORTO VELHO',205,1100205,3),
            (66,'presidente-medici',23,'PRESIDENTE MÉDICI',254,1100254,19),
            (67,'primavera-de-rondonia',23,'PRIMAVERA DE RONDÔNIA',1476,1101476,16),
            (68,'rio-crespo',23,'RIO CRESPO',262,1100262,687)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (69,'rolim-de-moura',23,'ROLIM DE MOURA',288,1100288,29),
            (70,'santa-luzia-doeste',23,'SANTA LUZIA D''OESTE',296,1100296,43),
            (71,'sao-felipe-doeste',23,'SÃO FELIPE D''OESTE',1484,1101484,18),
            (72,'sao-francisco-do-guapore',23,'SÃO FRANCISCO DO GUAPORÉ',1492,1101492,20),
            (73,'sao-miguel-do-guapore',23,'SÃO MIGUEL DO GUAPORÉ',320,1100320,45),
            (74,'seringueiras',23,'SERINGUEIRAS',1500,1101500,699),
            (75,'teixeiropolis',23,'TEIXEIRÓPOLIS',1559,1101559,22),
            (76,'theobroma',23,'THEOBROMA',1609,1101609,975),
            (77,'urupa',23,'URUPÁ',1708,1101708,977),
            (78,'vale-do-anari',23,'VALE DO ANARI',1757,1101757,24)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (79,'vale-do-paraiso',23,'VALE DO PARAÍSO',1807,1101807,979),
            (80,'vilhena',23,'VILHENA',304,1100304,13),
            (81,'acrelandia',2,'ACRELÂNDIA',13,1200013,643),
            (82,'assis-brasil',2,'ASSIS BRASIL',54,1200054,157),
            (83,'brasileia',2,'BRASILÉIA',104,1200104,105),
            (84,'bujari',2,'BUJARI',138,1200138,645),
            (85,'capixaba',2,'CAPIXABA',179,1200179,647),
            (86,'cruzeiro-do-sul',2,'CRUZEIRO DO SUL',203,1200203,107),
            (87,'epitaciolandia',2,'EPITACIOLÂNDIA',252,1200252,651),
            (88,'feijo',2,'FEIJÓ',302,1200302,113)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (89,'jordao',2,'JORDÃO',328,1200328,653),
            (90,'mancio-lima',2,'MÂNCIO LIMA',336,1200336,109),
            (91,'manoel-urbano',2,'MANOEL URBANO',344,1200344,155),
            (92,'marechal-thaumaturgo',2,'MARECHAL THAUMATURGO',351,1200351,655),
            (93,'placido-de-castro',2,'PLÁCIDO DE CASTRO',385,1200385,151),
            (94,'porto-acre',2,'PORTO ACRE',807,1200807,649),
            (95,'porto-walter',2,'PORTO WALTER',393,1200393,657),
            (96,'rio-branco',2,'RIO BRANCO',401,1200401,139),
            (97,'rodrigues-alves',2,'RODRIGUES ALVES',427,1200427,659),
            (98,'santa-rosa-do-purus',2,'SANTA ROSA DO PURUS',435,1200435,661)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (99,'sena-madureira',2,'SENA MADUREIRA',500,1200500,145),
            (100,'senador-guiomard',2,'SENADOR GUIOMARD',450,1200450,153),
            (101,'tarauaca',2,'TARAUACÁ',609,1200609,147),
            (102,'xapuri',2,'XAPURI',708,1200708,149),
            (103,'alvaraes',5,'ALVARÃES',29,1300029,289),
            (104,'amatura',5,'AMATURÁ',60,1300060,291),
            (105,'anama',5,'ANAMÃ',86,1300086,293),
            (106,'anori',5,'ANORI',102,1300102,203),
            (107,'apui',5,'APUÍ',144,1300144,969),
            (108,'atalaia-do-norte',5,'ATALAIA DO NORTE',201,1300201,205)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (109,'autazes',5,'AUTAZES',300,1300300,207),
            (110,'barcelos',5,'BARCELOS',409,1300409,209),
            (111,'barreirinha',5,'BARREIRINHA',508,1300508,211),
            (112,'benjamin-constant',5,'BENJAMIN CONSTANT',607,1300607,213),
            (113,'beruri',5,'BERURI',631,1300631,295),
            (114,'boa-vista-do-ramos',5,'BOA VISTA DO RAMOS',680,1300680,297),
            (115,'boca-do-acre',5,'BOCA DO ACRE',706,1300706,215),
            (116,'borba',5,'BORBA',805,1300805,217),
            (117,'caapiranga',5,'CAAPIRANGA',839,1300839,299),
            (118,'canutama',5,'CANUTAMA',904,1300904,219)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (119,'carauari',5,'CARAUARI',1001,1301001,221),
            (120,'careiro',5,'CAREIRO',1100,1301100,223),
            (121,'careiro-da-varzea',5,'CAREIRO DA VÁRZEA',1159,1301159,965),
            (122,'coari',5,'COARI',1209,1301209,225),
            (123,'codajas',5,'CODAJÁS',1308,1301308,227),
            (124,'eirunepe',5,'EIRUNEPÉ',1407,1301407,229),
            (125,'envira',5,'ENVIRA',1506,1301506,231),
            (126,'fonte-boa',5,'FONTE BOA',1605,1301605,233),
            (127,'guajara',5,'GUAJARÁ',1654,1301654,967),
            (128,'humaita',5,'HUMAITÁ',1704,1301704,235)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (129,'ipixuna',5,'IPIXUNA',1803,1301803,239),
            (130,'iranduba',5,'IRANDUBA',1852,1301852,9835),
            (131,'itacoatiara',5,'ITACOATIARA',1902,1301902,241),
            (132,'itamarati',5,'ITAMARATI',1951,1301951,9837),
            (133,'itapiranga',5,'ITAPIRANGA',2009,1302009,243),
            (134,'japura',5,'JAPURÁ',2108,1302108,245),
            (135,'jurua',5,'JURUÁ',2207,1302207,247),
            (136,'jutai',5,'JUTAÍ',2306,1302306,249),
            (137,'labrea',5,'LÁBREA',2405,1302405,251),
            (138,'manacapuru',5,'MANACAPURU',2504,1302504,253)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (139,'manaquiri',5,'MANAQUIRI',2553,1302553,9839),
            (140,'manaus',5,'MANAUS',2603,1302603,255),
            (141,'manicore',5,'MANICORÉ',2702,1302702,257),
            (142,'maraa',5,'MARAÃ',2801,1302801,259),
            (143,'maues',5,'MAUÉS',2900,1302900,261),
            (144,'nhamunda',5,'NHAMUNDÁ',3007,1303007,263),
            (145,'nova-olinda-do-norte',5,'NOVA OLINDA DO NORTE',3106,1303106,265),
            (146,'novo-airao',5,'NOVO AIRÃO',3205,1303205,201),
            (147,'novo-aripuana',5,'NOVO ARIPUANÃ',3304,1303304,267),
            (148,'parintins',5,'PARINTINS',3403,1303403,269)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (149,'pauini',5,'PAUINI',3502,1303502,271),
            (150,'presidente-figueiredo',5,'PRESIDENTE FIGUEIREDO',3536,1303536,9841),
            (151,'rio-preto-da-eva',5,'RIO PRETO DA EVA',3569,1303569,9843),
            (152,'santa-isabel-do-rio-negro',5,'SANTA ISABEL DO RIO NEGRO',3601,1303601,237),
            (153,'santo-antonio-do-ica',5,'SANTO ANTÔNIO DO IÇÁ',3700,1303700,273),
            (154,'sao-gabriel-da-cachoeira',5,'SÃO GABRIEL DA CACHOEIRA',3809,1303809,283),
            (155,'sao-paulo-de-olivenca',5,'SÃO PAULO DE OLIVENÇA',3908,1303908,275),
            (156,'sao-sebastiao-do-uatuma',5,'SÃO SEBASTIÃO DO UATUMÃ',3957,1303957,9845),
            (157,'silves',5,'SILVES',4005,1304005,277),
            (158,'tabatinga',5,'TABATINGA',4062,1304062,9847)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (159,'tapaua',5,'TAPAUÁ',4104,1304104,279),
            (160,'tefe',5,'TEFÉ',4203,1304203,281),
            (161,'tonantins',5,'TONANTINS',4237,1304237,9851),
            (162,'uarini',5,'UARINI',4260,1304260,9849),
            (163,'urucara',5,'URUCARÁ',4302,1304302,285),
            (164,'urucurituba',5,'URUCURITUBA',4401,1304401,287),
            (165,'alto-alegre',24,'ALTO ALEGRE',50,1400050,305),
            (166,'amajari',24,'AMAJARI',27,1400027,26),
            (167,'boa-vista',24,'BOA VISTA',100,1400100,301),
            (168,'bonfim',24,'BONFIM',159,1400159,307)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (169,'canta',24,'CANTÁ',175,1400175,28),
            (170,'caracarai',24,'CARACARAÍ',209,1400209,303),
            (171,'caroebe',24,'CAROEBE',233,1400233,30),
            (172,'iracema',24,'IRACEMA',282,1400282,32),
            (173,'mucajai',24,'MUCAJAÍ',308,1400308,309),
            (174,'normandia',24,'NORMANDIA',407,1400407,311),
            (175,'pacaraima',24,'PACARAIMA',456,1400456,34),
            (176,'rorainopolis',24,'RORAINÓPOLIS',472,1400472,36),
            (177,'sao-joao-da-baliza',24,'SÃO JOÃO DA BALIZA',506,1400506,313),
            (178,'sao-luiz',24,'SÃO LUIZ',605,1400605,315)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (179,'uiramuta',24,'UIRAMUTÃ',704,1400704,38),
            (180,'abaetetuba',15,'ABAETETUBA',107,1500107,401),
            (181,'abel-figueiredo',15,'ABEL FIGUEIREDO',131,1500131,375),
            (182,'acara',15,'ACARÁ',206,1500206,403),
            (183,'afua',15,'AFUÁ',305,1500305,405),
            (184,'agua-azul-do-norte',15,'ÁGUA AZUL DO NORTE',347,1500347,383),
            (185,'alenquer',15,'ALENQUER',404,1500404,407),
            (186,'almeirim',15,'ALMEIRIM',503,1500503,409),
            (187,'altamira',15,'ALTAMIRA',602,1500602,411),
            (188,'anajas',15,'ANAJÁS',701,1500701,413)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (189,'ananindeua',15,'ANANINDEUA',800,1500800,415),
            (190,'anapu',15,'ANAPU',859,1500859,40),
            (191,'augusto-correa',15,'AUGUSTO CORRÊA',909,1500909,417),
            (192,'aurora-do-para',15,'AURORA DO PARÁ',958,1500958,389),
            (193,'aveiro',15,'AVEIRO',1006,1501006,419),
            (194,'bagre',15,'BAGRE',1105,1501105,421),
            (195,'baiao',15,'BAIÃO',1204,1501204,423),
            (196,'bannach',15,'BANNACH',1253,1501253,42),
            (197,'barcarena',15,'BARCARENA',1303,1501303,425),
            (198,'belem',15,'BELÉM',1402,1501402,427)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (199,'belterra',15,'BELTERRA',1451,1501451,44),
            (200,'benevides',15,'BENEVIDES',1501,1501501,429),
            (201,'bom-jesus-do-tocantins',15,'BOM JESUS DO TOCANTINS',1576,1501576,575),
            (202,'bonito',15,'BONITO',1600,1501600,431),
            (203,'braganca',15,'BRAGANÇA',1709,1501709,433),
            (204,'brasil-novo',15,'BRASIL NOVO',1725,1501725,639),
            (205,'brejo-grande-do-araguaia',15,'BREJO GRANDE DO ARAGUAIA',1758,1501758,577),
            (206,'breu-branco',15,'BREU BRANCO',1782,1501782,625),
            (207,'breves',15,'BREVES',1808,1501808,435),
            (208,'bujaru',15,'BUJARU',1907,1501907,437)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (209,'cachoeira-do-arari',15,'CACHOEIRA DO ARARI',2004,1502004,439),
            (210,'cachoeira-do-piria',15,'CACHOEIRA DO PIRIÁ',1956,1501956,46),
            (211,'cameta',15,'CAMETÁ',2103,1502103,441),
            (212,'canaa-dos-carajas',15,'CANAÃ DOS CARAJÁS',2152,1502152,48),
            (213,'capanema',15,'CAPANEMA',2202,1502202,443),
            (214,'capitao-poco',15,'CAPITÃO POÇO',2301,1502301,445),
            (215,'castanhal',15,'CASTANHAL',2400,1502400,447),
            (216,'chaves',15,'CHAVES',2509,1502509,449),
            (217,'colares',15,'COLARES',2608,1502608,451),
            (218,'conceicao-do-araguaia',15,'CONCEIÇÃO DO ARAGUAIA',2707,1502707,453)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (219,'concordia-do-para',15,'CONCÓRDIA DO PARÁ',2756,1502756,579),
            (220,'cumaru-do-norte',15,'CUMARU DO NORTE',2764,1502764,385),
            (221,'curionopolis',15,'CURIONÓPOLIS',2772,1502772,581),
            (222,'curralinho',15,'CURRALINHO',2806,1502806,455),
            (223,'curua',15,'CURUÁ',2855,1502855,50),
            (224,'curuca',15,'CURUÇÁ',2905,1502905,457),
            (225,'dom-eliseu',15,'DOM ELISEU',2939,1502939,583),
            (226,'eldorado-do-carajas',15,'ELDORADO DO CARAJÁS',2954,1502954,377),
            (227,'faro',15,'FARO',3002,1503002,459),
            (228,'floresta-do-araguaia',15,'FLORESTA DO ARAGUAIA',3044,1503044,52)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (229,'garrafao-do-norte',15,'GARRAFÃO DO NORTE',3077,1503077,585),
            (230,'goianesia-do-para',15,'GOIANÉSIA DO PARÁ',3093,1503093,627),
            (231,'gurupa',15,'GURUPÁ',3101,1503101,461),
            (232,'igarape-acu',15,'IGARAPÉ-AÇU',3200,1503200,463),
            (233,'igarape-miri',15,'IGARAPÉ-MIRI',3309,1503309,465),
            (234,'inhangapi',15,'INHANGAPI',3408,1503408,467),
            (235,'ipixuna-do-para',15,'IPIXUNA DO PARÁ',3457,1503457,621),
            (236,'irituia',15,'IRITUIA',3507,1503507,469),
            (237,'itaituba',15,'ITAITUBA',3606,1503606,471),
            (238,'itupiranga',15,'ITUPIRANGA',3705,1503705,473)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (239,'jacareacanga',15,'JACAREACANGA',3754,1503754,631),
            (240,'jacunda',15,'JACUNDÁ',3804,1503804,475),
            (241,'juruti',15,'JURUTI',3903,1503903,477),
            (242,'limoeiro-do-ajuru',15,'LIMOEIRO DO AJURU',4000,1504000,479),
            (243,'mae-do-rio',15,'MÃE DO RIO',4059,1504059,587),
            (244,'magalhaes-barata',15,'MAGALHÃES BARATA',4109,1504109,481),
            (245,'maraba',15,'MARABÁ',4208,1504208,483),
            (246,'maracana',15,'MARACANÃ',4307,1504307,485),
            (247,'marapanim',15,'MARAPANIM',4406,1504406,487),
            (248,'marituba',15,'MARITUBA',4422,1504422,54)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (249,'medicilandia',15,'MEDICILÂNDIA',4455,1504455,589),
            (250,'melgaco',15,'MELGAÇO',4505,1504505,489),
            (251,'mocajuba',15,'MOCAJUBA',4604,1504604,491),
            (252,'moju',15,'MOJU',4703,1504703,493),
            (253,'mojui-dos-campos',15,'MOJUÍ DOS CAMPOS',4752,1504752,1190),
            (254,'monte-alegre',15,'MONTE ALEGRE',4802,1504802,495),
            (255,'muana',15,'MUANÁ',4901,1504901,497),
            (256,'nova-esperanca-do-piria',15,'NOVA ESPERANÇA DO PIRIÁ',4950,1504950,391),
            (257,'nova-ipixuna',15,'NOVA IPIXUNA',4976,1504976,56),
            (258,'nova-timboteua',15,'NOVA TIMBOTEUA',5007,1505007,499)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (259,'novo-progresso',15,'NOVO PROGRESSO',5031,1505031,633),
            (260,'novo-repartimento',15,'NOVO REPARTIMENTO',5064,1505064,629),
            (261,'obidos',15,'ÓBIDOS',5106,1505106,501),
            (262,'oeiras-do-para',15,'OEIRAS DO PARÁ',5205,1505205,503),
            (263,'oriximina',15,'ORIXIMINÁ',5304,1505304,505),
            (264,'ourem',15,'OURÉM',5403,1505403,507),
            (265,'ourilandia-do-norte',15,'OURILÂNDIA DO NORTE',5437,1505437,591),
            (266,'pacaja',15,'PACAJÁ',5486,1505486,593),
            (267,'palestina-do-para',15,'PALESTINA DO PARÁ',5494,1505494,379),
            (268,'paragominas',15,'PARAGOMINAS',5502,1505502,509)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (269,'parauapebas',15,'PARAUAPEBAS',5536,1505536,595),
            (270,'pau-darco',15,'PAU D''ARCO',5551,1505551,387),
            (271,'peixe-boi',15,'PEIXE-BOI',5601,1505601,511),
            (272,'picarra',15,'PIÇARRA',5635,1505635,58),
            (273,'placas',15,'PLACAS',5650,1505650,60),
            (274,'ponta-de-pedras',15,'PONTA DE PEDRAS',5700,1505700,513),
            (275,'portel',15,'PORTEL',5809,1505809,515),
            (276,'porto-de-moz',15,'PORTO DE MOZ',5908,1505908,517),
            (277,'prainha',15,'PRAINHA',6005,1506005,519),
            (278,'primavera',15,'PRIMAVERA',6104,1506104,521)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (279,'quatipuru',15,'QUATIPURU',6112,1506112,62),
            (280,'redencao',15,'REDENÇÃO',6138,1506138,567),
            (281,'rio-maria',15,'RIO MARIA',6161,1506161,569),
            (282,'rondon-do-para',15,'RONDON DO PARÁ',6187,1506187,573),
            (283,'ruropolis',15,'RURÓPOLIS',6195,1506195,597),
            (284,'salinopolis',15,'SALINÓPOLIS',6203,1506203,523),
            (285,'salvaterra',15,'SALVATERRA',6302,1506302,525),
            (286,'santa-barbara-do-para',15,'SANTA BÁRBARA DO PARÁ',6351,1506351,369),
            (287,'santa-cruz-do-arari',15,'SANTA CRUZ DO ARARI',6401,1506401,527),
            (288,'santa-izabel-do-para',15,'SANTA IZABEL DO PARÁ',6500,1506500,529)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (289,'santa-luzia-do-para',15,'SANTA LUZIA DO PARÁ',6559,1506559,371),
            (290,'santa-maria-das-barreiras',15,'SANTA MARIA DAS BARREIRAS',6583,1506583,599),
            (291,'santa-maria-do-para',15,'SANTA MARIA DO PARÁ',6609,1506609,531),
            (292,'santana-do-araguaia',15,'SANTANA DO ARAGUAIA',6708,1506708,533),
            (293,'santarem',15,'SANTARÉM',6807,1506807,535),
            (294,'santarem-novo',15,'SANTARÉM NOVO',6906,1506906,537),
            (295,'santo-antonio-do-taua',15,'SANTO ANTÔNIO DO TAUÁ',7003,1507003,539),
            (296,'sao-caetano-de-odivelas',15,'SÃO CAETANO DE ODIVELAS',7102,1507102,541),
            (297,'sao-domingos-do-araguaia',15,'SÃO DOMINGOS DO ARAGUAIA',7151,1507151,381),
            (298,'sao-domingos-do-capim',15,'SÃO DOMINGOS DO CAPIM',7201,1507201,543)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (299,'sao-felix-do-xingu',15,'SÃO FÉLIX DO XINGU',7300,1507300,545),
            (300,'sao-francisco-do-para',15,'SÃO FRANCISCO DO PARÁ',7409,1507409,547),
            (301,'sao-geraldo-do-araguaia',15,'SÃO GERALDO DO ARAGUAIA',7458,1507458,619),
            (302,'sao-joao-da-ponta',15,'SÃO JOÃO DA PONTA',7466,1507466,64),
            (303,'sao-joao-de-pirabas',15,'SÃO JOÃO DE PIRABAS',7474,1507474,393),
            (304,'sao-joao-do-araguaia',15,'SÃO JOÃO DO ARAGUAIA',7508,1507508,549),
            (305,'sao-miguel-do-guama',15,'SÃO MIGUEL DO GUAMÁ',7607,1507607,551),
            (306,'sao-sebastiao-da-boa-vista',15,'SÃO SEBASTIÃO DA BOA VISTA',7706,1507706,553),
            (307,'sapucaia',15,'SAPUCAIA',7755,1507755,66),
            (308,'senador-jose-porfirio',15,'SENADOR JOSÉ PORFÍRIO',7805,1507805,555)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (309,'soure',15,'SOURE',7904,1507904,557),
            (310,'tailandia',15,'TAILÂNDIA',7953,1507953,395),
            (311,'terra-alta',15,'TERRA ALTA',7961,1507961,373),
            (312,'terra-santa',15,'TERRA SANTA',7979,1507979,637),
            (313,'tome-acu',15,'TOMÉ-AÇU',8001,1508001,559),
            (314,'tracuateua',15,'TRACUATEUA',8035,1508035,68),
            (315,'trairao',15,'TRAIRÃO',8050,1508050,635),
            (316,'tucuma',15,'TUCUMÃ',8084,1508084,397),
            (317,'tucurui',15,'TUCURUÍ',8100,1508100,561),
            (318,'ulianopolis',15,'ULIANÓPOLIS',8126,1508126,623)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (319,'uruara',15,'URUARÁ',8159,1508159,399),
            (320,'vigia',15,'VIGIA',8209,1508209,563),
            (321,'viseu',15,'VISEU',8308,1508308,565),
            (322,'vitoria-do-xingu',15,'VITÓRIA DO XINGU',8357,1508357,641),
            (323,'xinguara',15,'XINGUARA',8407,1508407,571),
            (324,'amapa',4,'AMAPÁ',105,1600105,601),
            (325,'calcoene',4,'CALÇOENE',204,1600204,603),
            (326,'cutias',4,'CUTIAS',212,1600212,667),
            (327,'ferreira-gomes',4,'FERREIRA GOMES',238,1600238,611),
            (328,'itaubal',4,'ITAUBAL',253,1600253,669)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (329,'laranjal-do-jari',4,'LARANJAL DO JARI',279,1600279,613),
            (330,'macapa',4,'MACAPÁ',303,1600303,605),
            (331,'mazagao',4,'MAZAGÃO',402,1600402,607),
            (332,'oiapoque',4,'OIAPOQUE',501,1600501,609),
            (1016,'jati',7,'JATI',7205,2307205,1445),
            (333,'pedra-branca-do-amapari',4,'PEDRA BRANCA DO AMAPARI',154,1600154,663),
            (334,'porto-grande',4,'PORTO GRANDE',535,1600535,671),
            (335,'pracuuba',4,'PRACUÚBA',550,1600550,673),
            (336,'santana',4,'SANTANA',600,1600600,615),
            (337,'serra-do-navio',4,'SERRA DO NAVIO',55,1600055,665)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (338,'tartarugalzinho',4,'TARTARUGALZINHO',709,1600709,617),
            (339,'vitoria-do-jari',4,'VITÓRIA DO JARI',808,1600808,70),
            (340,'abreulandia',28,'ABREULÂNDIA',251,1700251,337),
            (341,'aguiarnopolis',28,'AGUIARNÓPOLIS',301,1700301,72),
            (342,'alianca-do-tocantins',28,'ALIANÇA DO TOCANTINS',350,1700350,9441),
            (343,'almas',28,'ALMAS',400,1700400,9207),
            (344,'alvorada',28,'ALVORADA',707,1700707,9213),
            (345,'ananas',28,'ANANÁS',1002,1701002,9219),
            (346,'angico',28,'ANGICO',1051,1701051,165),
            (347,'aparecida-do-rio-negro',28,'APARECIDA DO RIO NEGRO',1101,1701101,9713)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (348,'aragominas',28,'ARAGOMINAS',1309,1701309,167),
            (349,'araguacema',28,'ARAGUACEMA',1903,1701903,9237),
            (350,'araguacu',28,'ARAGUAÇU',2000,1702000,9239),
            (351,'araguaina',28,'ARAGUAÍNA',2109,1702109,9241),
            (352,'araguana',28,'ARAGUANÃ',2158,1702158,169),
            (353,'araguatins',28,'ARAGUATINS',2208,1702208,9243),
            (354,'arapoema',28,'ARAPOEMA',2307,1702307,9245),
            (355,'arraias',28,'ARRAIAS',2406,1702406,9247),
            (356,'augustinopolis',28,'AUGUSTINÓPOLIS',2554,1702554,9685),
            (357,'aurora-do-tocantins',28,'AURORA DO TOCANTINS',2703,1702703,9253)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (358,'axixa-do-tocantins',28,'AXIXÁ DO TOCANTINS',2901,1702901,9257),
            (359,'babaculandia',28,'BABAÇULÂNDIA',3008,1703008,9259),
            (360,'bandeirantes-do-tocantins',28,'BANDEIRANTES DO TOCANTINS',3057,1703057,74),
            (361,'barra-do-ouro',28,'BARRA DO OURO',3073,1703073,76),
            (362,'barrolandia',28,'BARROLÂNDIA',3107,1703107,9693),
            (363,'bernardo-sayao',28,'BERNARDO SAYÃO',3206,1703206,9695),
            (364,'bom-jesus-do-tocantins',28,'BOM JESUS DO TOCANTINS',3305,1703305,341),
            (365,'brasilandia-do-tocantins',28,'BRASILÂNDIA DO TOCANTINS',3602,1703602,339),
            (366,'brejinho-de-nazare',28,'BREJINHO DE NAZARÉ',3701,1703701,9273),
            (367,'buriti-do-tocantins',28,'BURITI DO TOCANTINS',3800,1703800,9715)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (368,'cachoeirinha',28,'CACHOEIRINHA',3826,1703826,171),
            (369,'campos-lindos',28,'CAMPOS LINDOS',3842,1703842,173),
            (370,'cariri-do-tocantins',28,'CARIRI DO TOCANTINS',3867,1703867,327),
            (371,'carmolandia',28,'CARMOLÂNDIA',3883,1703883,175),
            (372,'carrasco-bonito',28,'CARRASCO BONITO',3891,1703891,177),
            (373,'caseara',28,'CASEARA',3909,1703909,9717),
            (374,'centenario',28,'CENTENÁRIO',4105,1704105,343),
            (375,'chapada-da-natividade',28,'CHAPADA DA NATIVIDADE',5102,1705102,80),
            (376,'chapada-de-areia',28,'CHAPADA DE AREIA',4600,1704600,78),
            (377,'colinas-do-tocantins',28,'COLINAS DO TOCANTINS',5508,1705508,9311)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (378,'colmeia',28,'COLMÉIA',16703,1716703,9529),
            (379,'combinado',28,'COMBINADO',5557,1705557,9697),
            (380,'conceicao-do-tocantins',28,'CONCEIÇÃO DO TOCANTINS',5607,1705607,9313),
            (381,'couto-magalhaes',28,'COUTO MAGALHÃES',6001,1706001,9321),
            (382,'cristalandia',28,'CRISTALÂNDIA',6100,1706100,9323),
            (383,'crixas-do-tocantins',28,'CRIXÁS DO TOCANTINS',6258,1706258,82),
            (384,'darcinopolis',28,'DARCINÓPOLIS',6506,1706506,179),
            (385,'dianopolis',28,'DIANÓPOLIS',7009,1707009,9341),
            (386,'divinopolis-do-tocantins',28,'DIVINÓPOLIS DO TOCANTINS',7108,1707108,9719),
            (387,'dois-irmaos-do-tocantins',28,'DOIS IRMÃOS DO TOCANTINS',7207,1707207,9345)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (388,'duere',28,'DUERÉ',7306,1707306,9347),
            (389,'esperantina',28,'ESPERANTINA',7405,1707405,181),
            (390,'fatima',28,'FÁTIMA',7553,1707553,9683),
            (391,'figueiropolis',28,'FIGUEIRÓPOLIS',7652,1707652,9667),
            (392,'filadelfia',28,'FILADÉLFIA',7702,1707702,9355),
            (393,'formoso-do-araguaia',28,'FORMOSO DO ARAGUAIA',8205,1708205,9365),
            (394,'goianorte',28,'GOIANORTE',8304,1708304,9699),
            (395,'goiatins',28,'GOIATINS',9005,1709005,9533),
            (396,'guarai',28,'GUARAÍ',9302,1709302,9627),
            (397,'gurupi',28,'GURUPI',9500,1709500,9385)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (398,'ipueiras',28,'IPUEIRAS',9807,1709807,84),
            (399,'itacaja',28,'ITACAJÁ',10508,1710508,9405),
            (400,'itaguatins',28,'ITAGUATINS',10706,1710706,9409),
            (401,'itapiratins',28,'ITAPIRATINS',10904,1710904,347),
            (402,'itapora-do-tocantins',28,'ITAPORÃ DO TOCANTINS',11100,1711100,9417),
            (403,'jau-do-tocantins',28,'JAÚ DO TOCANTINS',11506,1711506,329),
            (404,'juarina',28,'JUARINA',11803,1711803,349),
            (405,'lagoa-da-confusao',28,'LAGOA DA CONFUSÃO',11902,1711902,367),
            (406,'lagoa-do-tocantins',28,'LAGOA DO TOCANTINS',11951,1711951,353),
            (407,'lajeado',28,'LAJEADO',12009,1712009,351)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (408,'lavandeira',28,'LAVANDEIRA',12157,1712157,86),
            (409,'lizarda',28,'LIZARDA',12405,1712405,9569),
            (410,'luzinopolis',28,'LUZINÓPOLIS',12454,1712454,88),
            (411,'marianopolis-do-tocantins',28,'MARIANÓPOLIS DO TOCANTINS',12504,1712504,9711),
            (412,'mateiros',28,'MATEIROS',12702,1712702,317),
            (413,'maurilandia-do-tocantins',28,'MAURILÂNDIA DO TOCANTINS',12801,1712801,183),
            (414,'miracema-do-tocantins',28,'MIRACEMA DO TOCANTINS',13205,1713205,9461),
            (415,'miranorte',28,'MIRANORTE',13304,1713304,9463),
            (416,'monte-do-carmo',28,'MONTE DO CARMO',13601,1713601,9469),
            (417,'monte-santo-do-tocantins',28,'MONTE SANTO DO TOCANTINS',13700,1713700,90)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (418,'muricilandia',28,'MURICILÂNDIA',13957,1713957,187),
            (419,'natividade',28,'NATIVIDADE',14203,1714203,9481),
            (420,'nazare',28,'NAZARÉ',14302,1714302,9483),
            (421,'nova-olinda',28,'NOVA OLINDA',14880,1714880,9663),
            (422,'nova-rosalandia',28,'NOVA ROSALÂNDIA',15002,1715002,9721),
            (423,'novo-acordo',28,'NOVO ACORDO',15101,1715101,9499),
            (424,'novo-alegre',28,'NOVO ALEGRE',15150,1715150,9703),
            (425,'novo-jardim',28,'NOVO JARDIM',15259,1715259,321),
            (426,'oliveira-de-fatima',28,'OLIVEIRA DE FÁTIMA',15507,1715507,92),
            (427,'palmas',28,'PALMAS',21000,1721000,9733)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (428,'palmeirante',28,'PALMEIRANTE',15705,1715705,189),
            (429,'palmeiras-do-tocantins',28,'PALMEIRAS DO TOCANTINS',13809,1713809,185),
            (430,'palmeiropolis',28,'PALMEIRÓPOLIS',15754,1715754,9649),
            (431,'paraiso-do-tocantins',28,'PARAÍSO DO TOCANTINS',16109,1716109,9519),
            (432,'parana',28,'PARANÃ',16208,1716208,9521),
            (433,'pau-darco',28,'PAU D''ARCO',16307,1716307,191),
            (434,'pedro-afonso',28,'PEDRO AFONSO',16505,1716505,9525),
            (435,'peixe',28,'PEIXE',16604,1716604,9527),
            (436,'pequizeiro',28,'PEQUIZEIRO',16653,1716653,9705),
            (437,'pindorama-do-tocantins',28,'PINDORAMA DO TOCANTINS',17008,1717008,9537)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (438,'piraque',28,'PIRAQUÊ',17206,1717206,355),
            (439,'pium',28,'PIUM',17503,1717503,9547),
            (440,'ponte-alta-do-bom-jesus',28,'PONTE ALTA DO BOM JESUS',17800,1717800,9551),
            (441,'ponte-alta-do-tocantins',28,'PONTE ALTA DO TOCANTINS',17909,1717909,9553),
            (442,'porto-alegre-do-tocantins',28,'PORTO ALEGRE DO TOCANTINS',18006,1718006,9723),
            (443,'porto-nacional',28,'PORTO NACIONAL',18204,1718204,9559),
            (444,'praia-norte',28,'PRAIA NORTE',18303,1718303,9725),
            (445,'presidente-kennedy',28,'PRESIDENTE KENNEDY',18402,1718402,9629),
            (446,'pugmil',28,'PUGMIL',18451,1718451,94),
            (447,'recursolandia',28,'RECURSOLÂNDIA',18501,1718501,357)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (448,'riachinho',28,'RIACHINHO',18550,1718550,193),
            (449,'rio-da-conceicao',28,'RIO DA CONCEIÇÃO',18659,1718659,323),
            (450,'rio-dos-bois',28,'RIO DOS BOIS',18709,1718709,359),
            (451,'rio-sono',28,'RIO SONO',18758,1718758,9679),
            (452,'sampaio',28,'SAMPAIO',18808,1718808,9727),
            (453,'sandolandia',28,'SANDOLÂNDIA',18840,1718840,331),
            (454,'santa-fe-do-araguaia',28,'SANTA FÉ DO ARAGUAIA',18865,1718865,195),
            (455,'santa-maria-do-tocantins',28,'SANTA MARIA DO TOCANTINS',18881,1718881,361),
            (456,'santa-rita-do-tocantins',28,'SANTA RITA DO TOCANTINS',18899,1718899,96),
            (457,'santa-rosa-do-tocantins',28,'SANTA ROSA DO TOCANTINS',18907,1718907,9729)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (458,'santa-tereza-do-tocantins',28,'SANTA TEREZA DO TOCANTINS',19004,1719004,9731),
            (459,'santa-terezinha-do-tocantins',28,'SANTA TEREZINHA DO TOCANTINS',20002,1720002,98),
            (460,'sao-bento-do-tocantins',28,'SÃO BENTO DO TOCANTINS',20101,1720101,197),
            (461,'sao-felix-do-tocantins',28,'SÃO FÉLIX DO TOCANTINS',20150,1720150,363),
            (462,'sao-miguel-do-tocantins',28,'SÃO MIGUEL DO TOCANTINS',20200,1720200,199),
            (463,'sao-salvador-do-tocantins',28,'SÃO SALVADOR DO TOCANTINS',20259,1720259,333),
            (464,'sao-sebastiao-do-tocantins',28,'SÃO SEBASTIÃO DO TOCANTINS',20309,1720309,9603),
            (465,'sao-valerio',28,'SÃO VALÉRIO',20499,1720499,9691),
            (466,'silvanopolis',28,'SILVANÓPOLIS',20655,1720655,9659),
            (467,'sitio-novo-do-tocantins',28,'SÍTIO NOVO DO TOCANTINS',20804,1720804,9613)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (468,'sucupira',28,'SUCUPIRA',20853,1720853,335),
            (469,'tabocao',28,'TABOCÃO',8254,1708254,345),
            (470,'taguatinga',28,'TAGUATINGA',20903,1720903,9615),
            (471,'taipas-do-tocantins',28,'TAIPAS DO TOCANTINS',20937,1720937,325),
            (472,'talisma',28,'TALISMÃ',20978,1720978,100),
            (473,'tocantinia',28,'TOCANTÍNIA',21109,1721109,9619),
            (474,'tocantinopolis',28,'TOCANTINÓPOLIS',21208,1721208,9621),
            (475,'tupirama',28,'TUPIRAMA',21257,1721257,102),
            (476,'tupiratins',28,'TUPIRATINS',21307,1721307,365),
            (477,'wanderlandia',28,'WANDERLÂNDIA',22081,1722081,9665)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (478,'xambioa',28,'XAMBIOÁ',22107,1722107,9643),
            (479,'acailandia',11,'AÇAILÂNDIA',55,2100055,961),
            (480,'afonso-cunha',11,'AFONSO CUNHA',105,2100105,701),
            (481,'agua-doce-do-maranhao',11,'ÁGUA DOCE DO MARANHÃO',154,2100154,104),
            (482,'alcantara',11,'ALCÂNTARA',204,2100204,703),
            (483,'aldeias-altas',11,'ALDEIAS ALTAS',303,2100303,705),
            (484,'altamira-do-maranhao',11,'ALTAMIRA DO MARANHÃO',402,2100402,707),
            (485,'alto-alegre-do-maranhao',11,'ALTO ALEGRE DO MARANHÃO',436,2100436,106),
            (486,'alto-alegre-do-pindare',11,'ALTO ALEGRE DO PINDARÉ',477,2100477,108),
            (487,'alto-parnaiba',11,'ALTO PARNAÍBA',501,2100501,709)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (488,'amapa-do-maranhao',11,'AMAPÁ DO MARANHÃO',550,2100550,110),
            (489,'amarante-do-maranhao',11,'AMARANTE DO MARANHÃO',600,2100600,711),
            (490,'anajatuba',11,'ANAJATUBA',709,2100709,713),
            (491,'anapurus',11,'ANAPURUS',808,2100808,715),
            (492,'apicum-acu',11,'APICUM-AÇU',832,2100832,112),
            (493,'araguana',11,'ARAGUANÃ',873,2100873,114),
            (494,'araioses',11,'ARAIOSES',907,2100907,717),
            (495,'arame',11,'ARAME',956,2100956,1281),
            (496,'arari',11,'ARARI',1004,2101004,719),
            (497,'axixa',11,'AXIXÁ',1103,2101103,721)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (498,'bacabal',11,'BACABAL',1202,2101202,723),
            (499,'bacabeira',11,'BACABEIRA',1251,2101251,116),
            (500,'bacuri',11,'BACURI',1301,2101301,725),
            (501,'bacurituba',11,'BACURITUBA',1350,2101350,118),
            (502,'balsas',11,'BALSAS',1400,2101400,727),
            (503,'barao-de-grajau',11,'BARÃO DE GRAJAÚ',1509,2101509,729),
            (504,'barra-do-corda',11,'BARRA DO CORDA',1608,2101608,731),
            (505,'barreirinhas',11,'BARREIRINHAS',1707,2101707,733),
            (506,'bela-vista-do-maranhao',11,'BELA VISTA DO MARANHÃO',1772,2101772,122),
            (507,'belagua',11,'BELÁGUA',1731,2101731,120)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (508,'benedito-leite',11,'BENEDITO LEITE',1806,2101806,735),
            (509,'bequimao',11,'BEQUIMÃO',1905,2101905,737),
            (510,'bernardo-do-mearim',11,'BERNARDO DO MEARIM',1939,2101939,124),
            (511,'boa-vista-do-gurupi',11,'BOA VISTA DO GURUPI',1970,2101970,126),
            (512,'bom-jardim',11,'BOM JARDIM',2002,2102002,955),
            (513,'bom-jesus-das-selvas',11,'BOM JESUS DAS SELVAS',2036,2102036,128),
            (514,'bom-lugar',11,'BOM LUGAR',2077,2102077,130),
            (515,'brejo',11,'BREJO',2101,2102101,739),
            (516,'brejo-de-areia',11,'BREJO DE AREIA',2150,2102150,132),
            (517,'buriti',11,'BURITI',2200,2102200,741)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (518,'buriti-bravo',11,'BURITI BRAVO',2309,2102309,743),
            (519,'buriticupu',11,'BURITICUPU',2325,2102325,134),
            (520,'buritirana',11,'BURITIRANA',2358,2102358,136),
            (521,'cachoeira-grande',11,'CACHOEIRA GRANDE',2374,2102374,138),
            (522,'cajapio',11,'CAJAPIÓ',2408,2102408,745),
            (523,'cajari',11,'CAJARI',2507,2102507,747),
            (524,'campestre-do-maranhao',11,'CAMPESTRE DO MARANHÃO',2556,2102556,140),
            (525,'candido-mendes',11,'CÂNDIDO MENDES',2606,2102606,749),
            (526,'cantanhede',11,'CANTANHEDE',2705,2102705,751),
            (527,'capinzal-do-norte',11,'CAPINZAL DO NORTE',2754,2102754,142)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (528,'carolina',11,'CAROLINA',2804,2102804,753),
            (529,'carutapera',11,'CARUTAPERA',2903,2102903,755),
            (530,'caxias',11,'CAXIAS',3000,2103000,757),
            (531,'cedral',11,'CEDRAL',3109,2103109,759),
            (532,'central-do-maranhao',11,'CENTRAL DO MARANHÃO',3125,2103125,144),
            (533,'centro-do-guilherme',11,'CENTRO DO GUILHERME',3158,2103158,146),
            (534,'centro-novo-do-maranhao',11,'CENTRO NOVO DO MARANHÃO',3174,2103174,148),
            (535,'chapadinha',11,'CHAPADINHA',3208,2103208,761),
            (536,'cidelandia',11,'CIDELÂNDIA',3257,2103257,150),
            (537,'codo',11,'CODÓ',3307,2103307,763)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (538,'coelho-neto',11,'COELHO NETO',3406,2103406,765),
            (539,'colinas',11,'COLINAS',3505,2103505,767),
            (540,'conceicao-do-lago-acu',11,'CONCEIÇÃO DO LAGO-AÇU',3554,2103554,152),
            (541,'coroata',11,'COROATÁ',3604,2103604,769),
            (542,'cururupu',11,'CURURUPU',3703,2103703,771),
            (543,'davinopolis',11,'DAVINÓPOLIS',3752,2103752,154),
            (544,'dom-pedro',11,'DOM PEDRO',3802,2103802,773),
            (545,'duque-bacelar',11,'DUQUE BACELAR',3901,2103901,775),
            (546,'esperantinopolis',11,'ESPERANTINÓPOLIS',4008,2104008,777),
            (547,'estreito',11,'ESTREITO',4057,2104057,963)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (548,'feira-nova-do-maranhao',11,'FEIRA NOVA DO MARANHÃO',4073,2104073,156),
            (549,'fernando-falcao',11,'FERNANDO FALCÃO',4081,2104081,158),
            (550,'formosa-da-serra-negra',11,'FORMOSA DA SERRA NEGRA',4099,2104099,160),
            (551,'fortaleza-dos-nogueiras',11,'FORTALEZA DOS NOGUEIRAS',4107,2104107,779),
            (552,'fortuna',11,'FORTUNA',4206,2104206,781),
            (553,'godofredo-viana',11,'GODOFREDO VIANA',4305,2104305,783),
            (554,'goncalves-dias',11,'GONÇALVES DIAS',4404,2104404,785),
            (555,'governador-archer',11,'GOVERNADOR ARCHER',4503,2104503,787),
            (556,'governador-edison-lobao',11,'GOVERNADOR EDISON LOBÃO',4552,2104552,162),
            (557,'governador-eugenio-barros',11,'GOVERNADOR EUGÊNIO BARROS',4602,2104602,789)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (558,'governador-luiz-rocha',11,'GOVERNADOR LUIZ ROCHA',4628,2104628,164),
            (559,'governador-newton-bello',11,'GOVERNADOR NEWTON BELLO',4651,2104651,166),
            (560,'governador-nunes-freire',11,'GOVERNADOR NUNES FREIRE',4677,2104677,168),
            (561,'graca-aranha',11,'GRAÇA ARANHA',4701,2104701,791),
            (562,'grajau',11,'GRAJAÚ',4800,2104800,793),
            (563,'guimaraes',11,'GUIMARÃES',4909,2104909,795),
            (564,'humberto-de-campos',11,'HUMBERTO DE CAMPOS',5005,2105005,797),
            (565,'icatu',11,'ICATU',5104,2105104,799),
            (566,'igarape-do-meio',11,'IGARAPÉ DO MEIO',5153,2105153,170),
            (567,'igarape-grande',11,'IGARAPÉ GRANDE',5203,2105203,801)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (568,'imperatriz',11,'IMPERATRIZ',5302,2105302,803),
            (569,'itaipava-do-grajau',11,'ITAIPAVA DO GRAJAÚ',5351,2105351,172),
            (570,'itapecuru-mirim',11,'ITAPECURU MIRIM',5401,2105401,807),
            (571,'itinga-do-maranhao',11,'ITINGA DO MARANHÃO',5427,2105427,174),
            (572,'jatoba',11,'JATOBÁ',5450,2105450,176),
            (573,'jenipapo-dos-vieiras',11,'JENIPAPO DOS VIEIRAS',5476,2105476,178),
            (574,'joao-lisboa',11,'JOÃO LISBOA',5500,2105500,809),
            (575,'joselandia',11,'JOSELÂNDIA',5609,2105609,811),
            (576,'junco-do-maranhao',11,'JUNCO DO MARANHÃO',5658,2105658,180),
            (577,'lago-da-pedra',11,'LAGO DA PEDRA',5708,2105708,813)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (578,'lago-do-junco',11,'LAGO DO JUNCO',5807,2105807,815),
            (579,'lago-dos-rodrigues',11,'LAGO DOS RODRIGUES',5948,2105948,184),
            (580,'lago-verde',11,'LAGO VERDE',5906,2105906,817),
            (581,'lagoa-do-mato',11,'LAGOA DO MATO',5922,2105922,182),
            (582,'lagoa-grande-do-maranhao',11,'LAGOA GRANDE DO MARANHÃO',5963,2105963,186),
            (583,'lajeado-novo',11,'LAJEADO NOVO',5989,2105989,188),
            (584,'lima-campos',11,'LIMA CAMPOS',6003,2106003,819),
            (585,'loreto',11,'LORETO',6102,2106102,821),
            (586,'luis-domingues',11,'LUÍS DOMINGUES',6201,2106201,823),
            (587,'magalhaes-de-almeida',11,'MAGALHÃES DE ALMEIDA',6300,2106300,825)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (588,'maracacume',11,'MARACAÇUMÉ',6326,2106326,190),
            (589,'maraja-do-sena',11,'MARAJÁ DO SENA',6359,2106359,192),
            (590,'maranhaozinho',11,'MARANHÃOZINHO',6375,2106375,194),
            (591,'mata-roma',11,'MATA ROMA',6409,2106409,827),
            (592,'matinha',11,'MATINHA',6508,2106508,829),
            (593,'matoes',11,'MATÕES',6607,2106607,831),
            (594,'matoes-do-norte',11,'MATÕES DO NORTE',6631,2106631,196),
            (595,'milagres-do-maranhao',11,'MILAGRES DO MARANHÃO',6672,2106672,198),
            (596,'mirador',11,'MIRADOR',6706,2106706,833),
            (597,'miranda-do-norte',11,'MIRANDA DO NORTE',6755,2106755,1283)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (598,'mirinzal',11,'MIRINZAL',6805,2106805,835),
            (599,'moncao',11,'MONÇÃO',6904,2106904,837),
            (600,'montes-altos',11,'MONTES ALTOS',7001,2107001,839),
            (601,'morros',11,'MORROS',7100,2107100,841),
            (602,'nina-rodrigues',11,'NINA RODRIGUES',7209,2107209,843),
            (603,'nova-colinas',11,'NOVA COLINAS',7258,2107258,200),
            (604,'nova-iorque',11,'NOVA IORQUE',7308,2107308,845),
            (605,'nova-olinda-do-maranhao',11,'NOVA OLINDA DO MARANHÃO',7357,2107357,202),
            (606,'olho-dagua-das-cunhas',11,'OLHO D''ÁGUA DAS CUNHÃS',7407,2107407,847),
            (607,'olinda-nova-do-maranhao',11,'OLINDA NOVA DO MARANHÃO',7456,2107456,204)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (608,'paco-do-lumiar',11,'PAÇO DO LUMIAR',7506,2107506,849),
            (609,'palmeirandia',11,'PALMEIRÂNDIA',7605,2107605,851),
            (610,'paraibano',11,'PARAIBANO',7704,2107704,853),
            (611,'parnarama',11,'PARNARAMA',7803,2107803,855),
            (612,'passagem-franca',11,'PASSAGEM FRANCA',7902,2107902,857),
            (613,'pastos-bons',11,'PASTOS BONS',8009,2108009,859),
            (614,'paulino-neves',11,'PAULINO NEVES',8058,2108058,206),
            (615,'paulo-ramos',11,'PAULO RAMOS',8108,2108108,959),
            (616,'pedreiras',11,'PEDREIRAS',8207,2108207,861),
            (617,'pedro-do-rosario',11,'PEDRO DO ROSÁRIO',8256,2108256,208)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (618,'penalva',11,'PENALVA',8306,2108306,863),
            (619,'peri-mirim',11,'PERI MIRIM',8405,2108405,865),
            (620,'peritoro',11,'PERITORÓ',8454,2108454,210),
            (621,'pindare-mirim',11,'PINDARÉ-MIRIM',8504,2108504,867),
            (622,'pinheiro',11,'PINHEIRO',8603,2108603,869),
            (623,'pio-xii',11,'PIO XII',8702,2108702,871),
            (624,'pirapemas',11,'PIRAPEMAS',8801,2108801,873),
            (625,'pocao-de-pedras',11,'POÇÃO DE PEDRAS',8900,2108900,875),
            (626,'porto-franco',11,'PORTO FRANCO',9007,2109007,877),
            (627,'porto-rico-do-maranhao',11,'PORTO RICO DO MARANHÃO',9056,2109056,212)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (628,'presidente-dutra',11,'PRESIDENTE DUTRA',9106,2109106,879),
            (629,'presidente-juscelino',11,'PRESIDENTE JUSCELINO',9205,2109205,881),
            (630,'presidente-medici',11,'PRESIDENTE MÉDICI',9239,2109239,214),
            (631,'presidente-sarney',11,'PRESIDENTE SARNEY',9270,2109270,216),
            (632,'presidente-vargas',11,'PRESIDENTE VARGAS',9304,2109304,883),
            (633,'primeira-cruz',11,'PRIMEIRA CRUZ',9403,2109403,885),
            (634,'raposa',11,'RAPOSA',9452,2109452,218),
            (635,'riachao',11,'RIACHÃO',9502,2109502,887),
            (636,'ribamar-fiquene',11,'RIBAMAR FIQUENE',9551,2109551,220),
            (637,'rosario',11,'ROSÁRIO',9601,2109601,891)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (638,'sambaiba',11,'SAMBAÍBA',9700,2109700,893),
            (639,'santa-filomena-do-maranhao',11,'SANTA FILOMENA DO MARANHÃO',9759,2109759,222),
            (640,'santa-helena',11,'SANTA HELENA',9809,2109809,895),
            (641,'santa-ines',11,'SANTA INÊS',9908,2109908,957),
            (642,'santa-luzia',11,'SANTA LUZIA',10005,2110005,897),
            (643,'santa-luzia-do-parua',11,'SANTA LUZIA DO PARUÁ',10039,2110039,1285),
            (644,'santa-quiteria-do-maranhao',11,'SANTA QUITÉRIA DO MARANHÃO',10104,2110104,899),
            (645,'santa-rita',11,'SANTA RITA',10203,2110203,901),
            (646,'santana-do-maranhao',11,'SANTANA DO MARANHÃO',10237,2110237,224),
            (647,'santo-amaro-do-maranhao',11,'SANTO AMARO DO MARANHÃO',10278,2110278,226)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (648,'santo-antonio-dos-lopes',11,'SANTO ANTÔNIO DOS LOPES',10302,2110302,903),
            (649,'sao-benedito-do-rio-preto',11,'SÃO BENEDITO DO RIO PRETO',10401,2110401,905),
            (650,'sao-bento',11,'SÃO BENTO',10500,2110500,907),
            (651,'sao-bernardo',11,'SÃO BERNARDO',10609,2110609,909),
            (652,'sao-domingos-do-azeitao',11,'SÃO DOMINGOS DO AZEITÃO',10658,2110658,228),
            (653,'sao-domingos-do-maranhao',11,'SÃO DOMINGOS DO MARANHÃO',10708,2110708,911),
            (654,'sao-felix-de-balsas',11,'SÃO FÉLIX DE BALSAS',10807,2110807,913),
            (655,'sao-francisco-do-brejao',11,'SÃO FRANCISCO DO BREJÃO',10856,2110856,230),
            (656,'sao-francisco-do-maranhao',11,'SÃO FRANCISCO DO MARANHÃO',10906,2110906,915),
            (657,'sao-joao-batista',11,'SÃO JOÃO BATISTA',11003,2111003,917)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (658,'sao-joao-do-caru',11,'SÃO JOÃO DO CARÚ',11029,2111029,232),
            (659,'sao-joao-do-paraiso',11,'SÃO JOÃO DO PARAÍSO',11052,2111052,234),
            (660,'sao-joao-do-soter',11,'SÃO JOÃO DO SOTER',11078,2111078,236),
            (661,'sao-joao-dos-patos',11,'SÃO JOÃO DOS PATOS',11102,2111102,919),
            (662,'sao-jose-de-ribamar',11,'SÃO JOSÉ DE RIBAMAR',11201,2111201,889),
            (663,'sao-jose-dos-basilios',11,'SÃO JOSÉ DOS BASÍLIOS',11250,2111250,238),
            (664,'sao-luis',11,'SÃO LUÍS',11300,2111300,921),
            (665,'sao-luis-gonzaga-do-maranhao',11,'SÃO LUÍS GONZAGA DO MARANHÃO',11409,2111409,805),
            (666,'sao-mateus-do-maranhao',11,'SÃO MATEUS DO MARANHÃO',11508,2111508,923),
            (667,'sao-pedro-da-agua-branca',11,'SÃO PEDRO DA ÁGUA BRANCA',11532,2111532,240)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (668,'sao-pedro-dos-crentes',11,'SÃO PEDRO DOS CRENTES',11573,2111573,242),
            (669,'sao-raimundo-das-mangabeiras',11,'SÃO RAIMUNDO DAS MANGABEIRAS',11607,2111607,925),
            (670,'sao-raimundo-do-doca-bezerra',11,'SÃO RAIMUNDO DO DOCA BEZERRA',11631,2111631,244),
            (671,'sao-roberto',11,'SÃO ROBERTO',11672,2111672,246),
            (672,'sao-vicente-ferrer',11,'SÃO VICENTE FERRER',11706,2111706,927),
            (673,'satubinha',11,'SATUBINHA',11722,2111722,248),
            (674,'senador-alexandre-costa',11,'SENADOR ALEXANDRE COSTA',11748,2111748,250),
            (675,'senador-la-rocque',11,'SENADOR LA ROCQUE',11763,2111763,252),
            (676,'serrano-do-maranhao',11,'SERRANO DO MARANHÃO',11789,2111789,254),
            (677,'sitio-novo',11,'SÍTIO NOVO',11805,2111805,929)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (678,'sucupira-do-norte',11,'SUCUPIRA DO NORTE',11904,2111904,931),
            (679,'sucupira-do-riachao',11,'SUCUPIRA DO RIACHÃO',11953,2111953,256),
            (680,'tasso-fragoso',11,'TASSO FRAGOSO',12001,2112001,933),
            (681,'timbiras',11,'TIMBIRAS',12100,2112100,935),
            (682,'timon',11,'TIMON',12209,2112209,937),
            (683,'trizidela-do-vale',11,'TRIZIDELA DO VALE',12233,2112233,258),
            (684,'tufilandia',11,'TUFILÂNDIA',12274,2112274,260),
            (685,'tuntum',11,'TUNTUM',12308,2112308,939),
            (686,'turiacu',11,'TURIAÇU',12407,2112407,941),
            (687,'turilandia',11,'TURILÂNDIA',12456,2112456,262)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (688,'tutoia',11,'TUTÓIA',12506,2112506,943),
            (689,'urbano-santos',11,'URBANO SANTOS',12605,2112605,945),
            (690,'vargem-grande',11,'VARGEM GRANDE',12704,2112704,947),
            (691,'viana',11,'VIANA',12803,2112803,949),
            (692,'vila-nova-dos-martirios',11,'VILA NOVA DOS MARTÍRIOS',12852,2112852,264),
            (693,'vitoria-do-mearim',11,'VITÓRIA DO MEARIM',12902,2112902,951),
            (694,'vitorino-freire',11,'VITORINO FREIRE',13009,2113009,953),
            (695,'ze-doca',11,'ZÉ DOCA',14007,2114007,1287),
            (696,'acaua',19,'ACAUÃ',53,2200053,266),
            (697,'agricolandia',19,'AGRICOLÂNDIA',103,2200103,1001)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (698,'agua-branca',19,'ÁGUA BRANCA',202,2200202,1003),
            (699,'alagoinha-do-piaui',19,'ALAGOINHA DO PIAUÍ',251,2200251,9767),
            (700,'alegrete-do-piaui',19,'ALEGRETE DO PIAUÍ',277,2200277,2269),
            (701,'alto-longa',19,'ALTO LONGÁ',301,2200301,1005),
            (702,'altos',19,'ALTOS',400,2200400,1007),
            (703,'alvorada-do-gurgueia',19,'ALVORADA DO GURGUÉIA',459,2200459,268),
            (704,'amarante',19,'AMARANTE',509,2200509,1009),
            (705,'angical-do-piaui',19,'ANGICAL DO PIAUÍ',608,2200608,1011),
            (706,'anisio-de-abreu',19,'ANÍSIO DE ABREU',707,2200707,1013),
            (707,'antonio-almeida',19,'ANTÔNIO ALMEIDA',806,2200806,1015)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (708,'aroazes',19,'AROAZES',905,2200905,1017),
            (709,'aroeiras-do-itaim',19,'AROEIRAS DO ITAIM',954,2200954,1188),
            (710,'arraial',19,'ARRAIAL',1002,2201002,1019),
            (711,'assuncao-do-piaui',19,'ASSUNÇÃO DO PIAUÍ',1051,2201051,270),
            (712,'avelino-lopes',19,'AVELINO LOPES',1101,2201101,1021),
            (713,'baixa-grande-do-ribeiro',19,'BAIXA GRANDE DO RIBEIRO',1150,2201150,2245),
            (714,'barra-dalcantara',19,'BARRA D''ALCÂNTARA',1176,2201176,272),
            (715,'barras',19,'BARRAS',1200,2201200,1023),
            (716,'barreiras-do-piaui',19,'BARREIRAS DO PIAUÍ',1309,2201309,1025),
            (717,'barro-duro',19,'BARRO DURO',1408,2201408,1027)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (718,'batalha',19,'BATALHA',1507,2201507,1029),
            (719,'bela-vista-do-piaui',19,'BELA VISTA DO PIAUÍ',1556,2201556,274),
            (720,'belem-do-piaui',19,'BELÉM DO PIAUÍ',1572,2201572,276),
            (721,'beneditinos',19,'BENEDITINOS',1606,2201606,1031),
            (722,'bertolinia',19,'BERTOLÍNIA',1705,2201705,1033),
            (723,'betania-do-piaui',19,'BETÂNIA DO PIAUÍ',1739,2201739,278),
            (724,'boa-hora',19,'BOA HORA',1770,2201770,280),
            (725,'bocaina',19,'BOCAINA',1804,2201804,1035),
            (726,'bom-jesus',19,'BOM JESUS',1903,2201903,1037),
            (727,'bom-principio-do-piaui',19,'BOM PRINCÍPIO DO PIAUÍ',1919,2201919,2287)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (728,'bonfim-do-piaui',19,'BONFIM DO PIAUÍ',1929,2201929,2251),
            (729,'boqueirao-do-piaui',19,'BOQUEIRÃO DO PIAUÍ',1945,2201945,282),
            (730,'brasileira',19,'BRASILEIRA',1960,2201960,2283),
            (731,'brejo-do-piaui',19,'BREJO DO PIAUÍ',1988,2201988,284),
            (732,'buriti-dos-lopes',19,'BURITI DOS LOPES',2000,2202000,1039),
            (733,'buriti-dos-montes',19,'BURITI DOS MONTES',2026,2202026,1297),
            (734,'cabeceiras-do-piaui',19,'CABECEIRAS DO PIAUÍ',2059,2202059,1299),
            (735,'cajazeiras-do-piaui',19,'CAJAZEIRAS DO PIAUÍ',2075,2202075,286),
            (736,'cajueiro-da-praia',19,'CAJUEIRO DA PRAIA',2083,2202083,288),
            (737,'caldeirao-grande-do-piaui',19,'CALDEIRÃO GRANDE DO PIAUÍ',2091,2202091,2271)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (738,'campinas-do-piaui',19,'CAMPINAS DO PIAUÍ',2109,2202109,1041),
            (739,'campo-alegre-do-fidalgo',19,'CAMPO ALEGRE DO FIDALGO',2117,2202117,290),
            (740,'campo-grande-do-piaui',19,'CAMPO GRANDE DO PIAUÍ',2133,2202133,292),
            (741,'campo-largo-do-piaui',19,'CAMPO LARGO DO PIAUÍ',2174,2202174,294),
            (742,'campo-maior',19,'CAMPO MAIOR',2208,2202208,1043),
            (743,'canavieira',19,'CANAVIEIRA',2251,2202251,2247),
            (744,'canto-do-buriti',19,'CANTO DO BURITI',2307,2202307,1045),
            (745,'capitao-de-campos',19,'CAPITÃO DE CAMPOS',2406,2202406,1047),
            (746,'capitao-gervasio-oliveira',19,'CAPITÃO GERVÁSIO OLIVEIRA',2455,2202455,296),
            (747,'caracol',19,'CARACOL',2505,2202505,1049)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (748,'caraubas-do-piaui',19,'CARAÚBAS DO PIAUÍ',2539,2202539,298),
            (749,'caridade-do-piaui',19,'CARIDADE DO PIAUÍ',2554,2202554,300),
            (750,'castelo-do-piaui',19,'CASTELO DO PIAUÍ',2604,2202604,1051),
            (751,'caxingo',19,'CAXINGÓ',2653,2202653,302),
            (752,'cocal',19,'COCAL',2703,2202703,1053),
            (753,'cocal-de-telha',19,'COCAL DE TELHA',2711,2202711,304),
            (754,'cocal-dos-alves',19,'COCAL DOS ALVES',2729,2202729,306),
            (755,'coivaras',19,'COIVARAS',2737,2202737,995),
            (756,'colonia-do-gurgueia',19,'COLÔNIA DO GURGUÉIA',2752,2202752,2249),
            (757,'colonia-do-piaui',19,'COLÔNIA DO PIAUÍ',2778,2202778,2253)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (758,'conceicao-do-caninde',19,'CONCEIÇÃO DO CANINDÉ',2802,2202802,1055),
            (759,'coronel-jose-dias',19,'CORONEL JOSÉ DIAS',2851,2202851,2255),
            (760,'corrente',19,'CORRENTE',2901,2202901,1057),
            (761,'cristalandia-do-piaui',19,'CRISTALÂNDIA DO PIAUÍ',3008,2203008,1059),
            (762,'cristino-castro',19,'CRISTINO CASTRO',3107,2203107,1061),
            (763,'curimata',19,'CURIMATÁ',3206,2203206,1063),
            (764,'currais',19,'CURRAIS',3230,2203230,308),
            (765,'curral-novo-do-piaui',19,'CURRAL NOVO DO PIAUÍ',3271,2203271,312),
            (766,'curralinhos',19,'CURRALINHOS',3255,2203255,310),
            (767,'demerval-lobao',19,'DEMERVAL LOBÃO',3305,2203305,1065)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (768,'dirceu-arcoverde',19,'DIRCEU ARCOVERDE',3354,2203354,1229),
            (769,'dom-expedito-lopes',19,'DOM EXPEDITO LOPES',3404,2203404,1067),
            (770,'dom-inocencio',19,'DOM INOCÊNCIO',3453,2203453,1289),
            (771,'domingos-mourao',19,'DOMINGOS MOURÃO',3420,2203420,1141),
            (772,'elesbao-veloso',19,'ELESBÃO VELOSO',3503,2203503,1069),
            (773,'eliseu-martins',19,'ELISEU MARTINS',3602,2203602,1071),
            (774,'esperantina',19,'ESPERANTINA',3701,2203701,1073),
            (775,'fartura-do-piaui',19,'FARTURA DO PIAUÍ',3750,2203750,2257),
            (776,'flores-do-piaui',19,'FLORES DO PIAUÍ',3800,2203800,1075),
            (777,'floresta-do-piaui',19,'FLORESTA DO PIAUÍ',3859,2203859,314)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (778,'floriano',19,'FLORIANO',3909,2203909,1077),
            (779,'francinopolis',19,'FRANCINÓPOLIS',4006,2204006,1079),
            (780,'francisco-ayres',19,'FRANCISCO AYRES',4105,2204105,1081),
            (781,'francisco-macedo',19,'FRANCISCO MACEDO',4154,2204154,316),
            (782,'francisco-santos',19,'FRANCISCO SANTOS',4204,2204204,1083),
            (783,'fronteiras',19,'FRONTEIRAS',4303,2204303,1085),
            (784,'geminiano',19,'GEMINIANO',4352,2204352,318),
            (785,'gilbues',19,'GILBUÉS',4402,2204402,1087),
            (786,'guadalupe',19,'GUADALUPE',4501,2204501,1089),
            (787,'guaribas',19,'GUARIBAS',4550,2204550,320)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (788,'hugo-napoleao',19,'HUGO NAPOLEÃO',4600,2204600,1091),
            (789,'ilha-grande',19,'ILHA GRANDE',4659,2204659,322),
            (790,'inhuma',19,'INHUMA',4709,2204709,1093),
            (791,'ipiranga-do-piaui',19,'IPIRANGA DO PIAUÍ',4808,2204808,1095),
            (792,'isaias-coelho',19,'ISAÍAS COELHO',4907,2204907,1097),
            (793,'itainopolis',19,'ITAINÓPOLIS',5003,2205003,1099),
            (794,'itaueira',19,'ITAUEIRA',5102,2205102,1101),
            (795,'jacobina-do-piaui',19,'JACOBINA DO PIAUÍ',5151,2205151,2273),
            (796,'jaicos',19,'JAICÓS',5201,2205201,1103),
            (797,'jardim-do-mulato',19,'JARDIM DO MULATO',5250,2205250,997)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (798,'jatoba-do-piaui',19,'JATOBÁ DO PIAUÍ',5276,2205276,324),
            (799,'jerumenha',19,'JERUMENHA',5300,2205300,1105),
            (800,'joao-costa',19,'JOÃO COSTA',5359,2205359,326),
            (801,'joaquim-pires',19,'JOAQUIM PIRES',5409,2205409,1107),
            (802,'joca-marques',19,'JOCA MARQUES',5458,2205458,328),
            (803,'jose-de-freitas',19,'JOSÉ DE FREITAS',5508,2205508,1109),
            (804,'juazeiro-do-piaui',19,'JUAZEIRO DO PIAUÍ',5516,2205516,330),
            (805,'julio-borges',19,'JÚLIO BORGES',5524,2205524,332),
            (806,'jurema',19,'JUREMA',5532,2205532,334),
            (807,'lagoa-alegre',19,'LAGOA ALEGRE',5557,2205557,999)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (808,'lagoa-de-sao-francisco',19,'LAGOA DE SÃO FRANCISCO',5573,2205573,338),
            (809,'lagoa-do-barro-do-piaui',19,'LAGOA DO BARRO DO PIAUÍ',5565,2205565,2259),
            (810,'lagoa-do-piaui',19,'LAGOA DO PIAUÍ',5581,2205581,340),
            (811,'lagoa-do-sitio',19,'LAGOA DO SÍTIO',5599,2205599,342),
            (812,'lagoinha-do-piaui',19,'LAGOINHA DO PIAUÍ',5540,2205540,336),
            (813,'landri-sales',19,'LANDRI SALES',5607,2205607,1111),
            (814,'luis-correia',19,'LUÍS CORREIA',5706,2205706,1113),
            (815,'luzilandia',19,'LUZILÂNDIA',5805,2205805,1115),
            (816,'madeiro',19,'MADEIRO',5854,2205854,344),
            (817,'manoel-emidio',19,'MANOEL EMÍDIO',5904,2205904,1117)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (818,'marcolandia',19,'MARCOLÂNDIA',5953,2205953,2275),
            (819,'marcos-parente',19,'MARCOS PARENTE',6001,2206001,1119),
            (820,'massape-do-piaui',19,'MASSAPÊ DO PIAUÍ',6050,2206050,346),
            (821,'matias-olimpio',19,'MATIAS OLÍMPIO',6100,2206100,1121),
            (822,'miguel-alves',19,'MIGUEL ALVES',6209,2206209,1123),
            (823,'miguel-leao',19,'MIGUEL LEÃO',6308,2206308,1125),
            (824,'milton-brandao',19,'MILTON BRANDÃO',6357,2206357,348),
            (825,'monsenhor-gil',19,'MONSENHOR GIL',6407,2206407,1127),
            (826,'monsenhor-hipolito',19,'MONSENHOR HIPÓLITO',6506,2206506,1129),
            (827,'monte-alegre-do-piaui',19,'MONTE ALEGRE DO PIAUÍ',6605,2206605,1131)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (828,'morro-cabeca-no-tempo',19,'MORRO CABEÇA NO TEMPO',6654,2206654,350),
            (829,'morro-do-chapeu-do-piaui',19,'MORRO DO CHAPÉU DO PIAUÍ',6670,2206670,352),
            (830,'murici-dos-portelas',19,'MURICI DOS PORTELAS',6696,2206696,354),
            (831,'nazare-do-piaui',19,'NAZARÉ DO PIAUÍ',6704,2206704,1133),
            (832,'nazaria',19,'NAZÁRIA',6720,2206720,1180),
            (833,'nossa-senhora-de-nazare',19,'NOSSA SENHORA DE NAZARÉ',6753,2206753,356),
            (834,'nossa-senhora-dos-remedios',19,'NOSSA SENHORA DOS REMÉDIOS',6803,2206803,1135),
            (835,'nova-santa-rita',19,'NOVA SANTA RITA',7959,2207959,370),
            (836,'novo-oriente-do-piaui',19,'NOVO ORIENTE DO PIAUÍ',6902,2206902,1137),
            (837,'novo-santo-antonio',19,'NOVO SANTO ANTÔNIO',6951,2206951,358)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (838,'oeiras',19,'OEIRAS',7009,2207009,1139),
            (839,'olho-dagua-do-piaui',19,'OLHO D''ÁGUA DO PIAUÍ',7108,2207108,360),
            (840,'padre-marcos',19,'PADRE MARCOS',7207,2207207,1143),
            (841,'paes-landim',19,'PAES LANDIM',7306,2207306,1145),
            (842,'pajeu-do-piaui',19,'PAJEÚ DO PIAUÍ',7355,2207355,362),
            (843,'palmeira-do-piaui',19,'PALMEIRA DO PIAUÍ',7405,2207405,1147),
            (844,'palmeirais',19,'PALMEIRAIS',7504,2207504,1149),
            (845,'paqueta',19,'PAQUETÁ',7553,2207553,364),
            (846,'parnagua',19,'PARNAGUÁ',7603,2207603,1151),
            (847,'parnaiba',19,'PARNAÍBA',7702,2207702,1153)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (848,'passagem-franca-do-piaui',19,'PASSAGEM FRANCA DO PIAUÍ',7751,2207751,1293),
            (849,'patos-do-piaui',19,'PATOS DO PIAUÍ',7777,2207777,2277),
            (850,'pau-darco-do-piaui',19,'PAU D''ARCO DO PIAUÍ',7793,2207793,1104),
            (851,'paulistana',19,'PAULISTANA',7801,2207801,1155),
            (852,'pavussu',19,'PAVUSSU',7850,2207850,366),
            (853,'pedro-ii',19,'PEDRO II',7900,2207900,1157),
            (854,'pedro-laurentino',19,'PEDRO LAURENTINO',7934,2207934,368),
            (855,'picos',19,'PICOS',8007,2208007,1159),
            (856,'pimenteiras',19,'PIMENTEIRAS',8106,2208106,1161),
            (857,'pio-ix',19,'PIO IX',8205,2208205,1163)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (858,'piracuruca',19,'PIRACURUCA',8304,2208304,1165),
            (859,'piripiri',19,'PIRIPIRI',8403,2208403,1167),
            (860,'porto',19,'PORTO',8502,2208502,1169),
            (861,'porto-alegre-do-piaui',19,'PORTO ALEGRE DO PIAUÍ',8551,2208551,372),
            (862,'prata-do-piaui',19,'PRATA DO PIAUÍ',8601,2208601,1171),
            (863,'queimada-nova',19,'QUEIMADA NOVA',8650,2208650,2279),
            (864,'redencao-do-gurgueia',19,'REDENÇÃO DO GURGUÉIA',8700,2208700,1173),
            (865,'regeneracao',19,'REGENERAÇÃO',8809,2208809,1175),
            (866,'riacho-frio',19,'RIACHO FRIO',8858,2208858,374),
            (867,'ribeira-do-piaui',19,'RIBEIRA DO PIAUÍ',8874,2208874,376)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (868,'ribeiro-goncalves',19,'RIBEIRO GONÇALVES',8908,2208908,1177),
            (869,'rio-grande-do-piaui',19,'RIO GRANDE DO PIAUÍ',9005,2209005,1179),
            (870,'santa-cruz-do-piaui',19,'SANTA CRUZ DO PIAUÍ',9104,2209104,1181),
            (871,'santa-cruz-dos-milagres',19,'SANTA CRUZ DOS MILAGRES',9153,2209153,1295),
            (872,'santa-filomena',19,'SANTA FILOMENA',9203,2209203,1183),
            (873,'santa-luz',19,'SANTA LUZ',9302,2209302,1185),
            (874,'santa-rosa-do-piaui',19,'SANTA ROSA DO PIAUÍ',9377,2209377,2261),
            (875,'santana-do-piaui',19,'SANTANA DO PIAUÍ',9351,2209351,2281),
            (876,'santo-antonio-de-lisboa',19,'SANTO ANTÔNIO DE LISBOA',9401,2209401,1187),
            (877,'santo-antonio-dos-milagres',19,'SANTO ANTÔNIO DOS MILAGRES',9450,2209450,378)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (878,'santo-inacio-do-piaui',19,'SANTO INÁCIO DO PIAUÍ',9500,2209500,1189),
            (879,'sao-braz-do-piaui',19,'SÃO BRAZ DO PIAUÍ',9559,2209559,2263),
            (880,'sao-felix-do-piaui',19,'SÃO FÉLIX DO PIAUÍ',9609,2209609,1191),
            (881,'sao-francisco-de-assis-do-piaui',19,'SÃO FRANCISCO DE ASSIS DO PIAUÍ',9658,2209658,380),
            (882,'sao-francisco-do-piaui',19,'SÃO FRANCISCO DO PIAUÍ',9708,2209708,1193),
            (883,'sao-goncalo-do-gurgueia',19,'SÃO GONÇALO DO GURGUÉIA',9757,2209757,382),
            (884,'sao-goncalo-do-piaui',19,'SÃO GONÇALO DO PIAUÍ',9807,2209807,1195),
            (885,'sao-joao-da-canabrava',19,'SÃO JOÃO DA CANABRAVA',9856,2209856,1291),
            (886,'sao-joao-da-fronteira',19,'SÃO JOÃO DA FRONTEIRA',9872,2209872,384),
            (887,'sao-joao-da-serra',19,'SÃO JOÃO DA SERRA',9906,2209906,1197)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (888,'sao-joao-da-varjota',19,'SÃO JOÃO DA VARJOTA',9955,2209955,386),
            (889,'sao-joao-do-arraial',19,'SÃO JOÃO DO ARRAIAL',9971,2209971,388),
            (890,'sao-joao-do-piaui',19,'SÃO JOÃO DO PIAUÍ',10003,2210003,1199),
            (891,'sao-jose-do-divino',19,'SÃO JOSÉ DO DIVINO',10052,2210052,2285),
            (892,'sao-jose-do-peixe',19,'SÃO JOSÉ DO PEIXE',10102,2210102,1201),
            (893,'sao-jose-do-piaui',19,'SÃO JOSÉ DO PIAUÍ',10201,2210201,1203),
            (894,'sao-juliao',19,'SÃO JULIÃO',10300,2210300,1205),
            (895,'sao-lourenco-do-piaui',19,'SÃO LOURENÇO DO PIAUÍ',10359,2210359,2265),
            (896,'sao-luis-do-piaui',19,'SÃO LUIS DO PIAUÍ',10375,2210375,390),
            (897,'sao-miguel-da-baixa-grande',19,'SÃO MIGUEL DA BAIXA GRANDE',10383,2210383,392)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (898,'sao-miguel-do-fidalgo',19,'SÃO MIGUEL DO FIDALGO',10391,2210391,394),
            (899,'sao-miguel-do-tapuio',19,'SÃO MIGUEL DO TAPUIO',10409,2210409,1207),
            (900,'sao-pedro-do-piaui',19,'SÃO PEDRO DO PIAUÍ',10508,2210508,1209),
            (901,'sao-raimundo-nonato',19,'SÃO RAIMUNDO NONATO',10607,2210607,1211),
            (902,'sebastiao-barros',19,'SEBASTIÃO BARROS',10623,2210623,396),
            (903,'sebastiao-leal',19,'SEBASTIÃO LEAL',10631,2210631,398),
            (904,'sigefredo-pacheco',19,'SIGEFREDO PACHECO',10656,2210656,1379),
            (905,'simoes',19,'SIMÕES',10706,2210706,1213),
            (906,'simplicio-mendes',19,'SIMPLÍCIO MENDES',10805,2210805,1215),
            (907,'socorro-do-piaui',19,'SOCORRO DO PIAUÍ',10904,2210904,1217)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (908,'sussuapara',19,'SUSSUAPARA',10938,2210938,400),
            (909,'tamboril-do-piaui',19,'TAMBORIL DO PIAUÍ',10953,2210953,402),
            (910,'tanque-do-piaui',19,'TANQUE DO PIAUÍ',10979,2210979,404),
            (911,'teresina',19,'TERESINA',11001,2211001,1219),
            (912,'uniao',19,'UNIÃO',11100,2211100,1221),
            (913,'urucui',19,'URUÇUÍ',11209,2211209,1223),
            (914,'valenca-do-piaui',19,'VALENÇA DO PIAUÍ',11308,2211308,1225),
            (915,'varzea-branca',19,'VÁRZEA BRANCA',11357,2211357,2267),
            (916,'varzea-grande',19,'VÁRZEA GRANDE',11407,2211407,1227),
            (917,'vera-mendes',19,'VERA MENDES',11506,2211506,406)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (918,'vila-nova-do-piaui',19,'VILA NOVA DO PIAUÍ',11605,2211605,408),
            (919,'wall-ferraz',19,'WALL FERRAZ',11704,2211704,410),
            (920,'abaiara',7,'ABAIARA',101,2300101,1301),
            (921,'acarape',7,'ACARAPE',150,2300150,1231),
            (922,'acarau',7,'ACARAÚ',200,2300200,1303),
            (923,'acopiara',7,'ACOPIARA',309,2300309,1305),
            (924,'aiuaba',7,'AIUABA',408,2300408,1307),
            (925,'alcantaras',7,'ALCÂNTARAS',507,2300507,1309),
            (926,'altaneira',7,'ALTANEIRA',606,2300606,1311),
            (927,'alto-santo',7,'ALTO SANTO',705,2300705,1313)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (928,'amontada',7,'AMONTADA',754,2300754,1587),
            (929,'antonina-do-norte',7,'ANTONINA DO NORTE',804,2300804,1315),
            (930,'apuiares',7,'APUIARÉS',903,2300903,1317),
            (931,'aquiraz',7,'AQUIRAZ',1000,2301000,1319),
            (932,'aracati',7,'ARACATI',1109,2301109,1321),
            (933,'aracoiaba',7,'ARACOIABA',1208,2301208,1323),
            (934,'ararenda',7,'ARARENDÁ',1257,2301257,989),
            (935,'araripe',7,'ARARIPE',1307,2301307,1325),
            (936,'aratuba',7,'ARATUBA',1406,2301406,1327),
            (937,'arneiroz',7,'ARNEIROZ',1505,2301505,1329)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (938,'assare',7,'ASSARÉ',1604,2301604,1331),
            (939,'aurora',7,'AURORA',1703,2301703,1333),
            (940,'baixio',7,'BAIXIO',1802,2301802,1335),
            (941,'banabuiu',7,'BANABUIÚ',1851,2301851,1233),
            (942,'barbalha',7,'BARBALHA',1901,2301901,1337),
            (943,'barreira',7,'BARREIRA',1950,2301950,1235),
            (944,'barro',7,'BARRO',2008,2302008,1339),
            (945,'barroquinha',7,'BARROQUINHA',2057,2302057,1237),
            (946,'baturite',7,'BATURITÉ',2107,2302107,1341),
            (947,'beberibe',7,'BEBERIBE',2206,2302206,1343)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (948,'bela-cruz',7,'BELA CRUZ',2305,2302305,1345),
            (949,'boa-viagem',7,'BOA VIAGEM',2404,2302404,1347),
            (950,'brejo-santo',7,'BREJO SANTO',2503,2302503,1349),
            (951,'camocim',7,'CAMOCIM',2602,2302602,1351),
            (952,'campos-sales',7,'CAMPOS SALES',2701,2302701,1353),
            (953,'caninde',7,'CANINDÉ',2800,2302800,1355),
            (954,'capistrano',7,'CAPISTRANO',2909,2302909,1357),
            (955,'caridade',7,'CARIDADE',3006,2303006,1359),
            (956,'carire',7,'CARIRÉ',3105,2303105,1361),
            (957,'caririacu',7,'CARIRIAÇU',3204,2303204,1363)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (958,'carius',7,'CARIÚS',3303,2303303,1365),
            (959,'carnaubal',7,'CARNAUBAL',3402,2303402,1367),
            (960,'cascavel',7,'CASCAVEL',3501,2303501,1369),
            (961,'catarina',7,'CATARINA',3600,2303600,1371),
            (962,'catunda',7,'CATUNDA',3659,2303659,983),
            (963,'caucaia',7,'CAUCAIA',3709,2303709,1373),
            (964,'cedro',7,'CEDRO',3808,2303808,1375),
            (965,'chaval',7,'CHAVAL',3907,2303907,1377),
            (966,'choro',7,'CHORÓ',3931,2303931,993),
            (967,'chorozinho',7,'CHOROZINHO',3956,2303956,1239)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (968,'coreau',7,'COREAÚ',4004,2304004,1381),
            (969,'crateus',7,'CRATEÚS',4103,2304103,1383),
            (970,'crato',7,'CRATO',4202,2304202,1385),
            (971,'croata',7,'CROATÁ',4236,2304236,1241),
            (972,'cruz',7,'CRUZ',4251,2304251,1589),
            (973,'deputado-irapuan-pinheiro',7,'DEPUTADO IRAPUAN PINHEIRO',4269,2304269,1243),
            (974,'erere',7,'ERERÉ',4277,2304277,1245),
            (975,'eusebio',7,'EUSÉBIO',4285,2304285,1247),
            (976,'farias-brito',7,'FARIAS BRITO',4301,2304301,1387),
            (977,'forquilha',7,'FORQUILHA',4350,2304350,1591)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (978,'fortaleza',7,'FORTALEZA',4400,2304400,1389),
            (979,'fortim',7,'FORTIM',4459,2304459,987),
            (980,'frecheirinha',7,'FRECHEIRINHA',4509,2304509,1391),
            (981,'general-sampaio',7,'GENERAL SAMPAIO',4608,2304608,1393),
            (982,'graca',7,'GRAÇA',4657,2304657,1249),
            (983,'granja',7,'GRANJA',4707,2304707,1395),
            (984,'granjeiro',7,'GRANJEIRO',4806,2304806,1397),
            (985,'groairas',7,'GROAÍRAS',4905,2304905,1399),
            (986,'guaiuba',7,'GUAIÚBA',4954,2304954,1251),
            (987,'guaraciaba-do-norte',7,'GUARACIABA DO NORTE',5001,2305001,1401)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (988,'guaramiranga',7,'GUARAMIRANGA',5100,2305100,1403),
            (989,'hidrolandia',7,'HIDROLÂNDIA',5209,2305209,1405),
            (990,'horizonte',7,'HORIZONTE',5233,2305233,1253),
            (991,'ibaretama',7,'IBARETAMA',5266,2305266,1255),
            (992,'ibiapina',7,'IBIAPINA',5308,2305308,1407),
            (993,'ibicuitinga',7,'IBICUITINGA',5332,2305332,1257),
            (994,'icapui',7,'ICAPUÍ',5357,2305357,1593),
            (995,'ico',7,'ICÓ',5407,2305407,1409),
            (996,'iguatu',7,'IGUATU',5506,2305506,1411),
            (997,'independencia',7,'INDEPENDÊNCIA',5605,2305605,1413)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (998,'ipaporanga',7,'IPAPORANGA',5654,2305654,1259),
            (999,'ipaumirim',7,'IPAUMIRIM',5704,2305704,1415),
            (1000,'ipu',7,'IPU',5803,2305803,1417),
            (1001,'ipueiras',7,'IPUEIRAS',5902,2305902,1419),
            (1002,'iracema',7,'IRACEMA',6009,2306009,1421),
            (1003,'iraucuba',7,'IRAUÇUBA',6108,2306108,1423),
            (1004,'itaicaba',7,'ITAIÇABA',6207,2306207,1425),
            (1005,'itaitinga',7,'ITAITINGA',6256,2306256,991),
            (1006,'itapaje',7,'ITAPAJÉ',6306,2306306,1427),
            (1007,'itapipoca',7,'ITAPIPOCA',6405,2306405,1429)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1008,'itapiuna',7,'ITAPIÚNA',6504,2306504,1431),
            (1009,'itarema',7,'ITAREMA',6553,2306553,1595),
            (1010,'itatira',7,'ITATIRA',6603,2306603,1433),
            (1011,'jaguaretama',7,'JAGUARETAMA',6702,2306702,1435),
            (1012,'jaguaribara',7,'JAGUARIBARA',6801,2306801,1437),
            (1013,'jaguaribe',7,'JAGUARIBE',6900,2306900,1439),
            (1014,'jaguaruana',7,'JAGUARUANA',7007,2307007,1441),
            (1015,'jardim',7,'JARDIM',7106,2307106,1443),
            (1017,'jijoca-de-jericoacoara',7,'JIJOCA DE JERICOACOARA',7254,2307254,985),
            (1018,'juazeiro-do-norte',7,'JUAZEIRO DO NORTE',7304,2307304,1447)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1019,'jucas',7,'JUCÁS',7403,2307403,1449),
            (1020,'lavras-da-mangabeira',7,'LAVRAS DA MANGABEIRA',7502,2307502,1451),
            (1021,'limoeiro-do-norte',7,'LIMOEIRO DO NORTE',7601,2307601,1453),
            (1022,'madalena',7,'MADALENA',7635,2307635,1261),
            (1023,'maracanau',7,'MARACANAÚ',7650,2307650,1585),
            (1024,'maranguape',7,'MARANGUAPE',7700,2307700,1455),
            (1025,'marco',7,'MARCO',7809,2307809,1457),
            (1026,'martinopole',7,'MARTINÓPOLE',7908,2307908,1459),
            (1027,'massape',7,'MASSAPÊ',8005,2308005,1461),
            (1028,'mauriti',7,'MAURITI',8104,2308104,1463)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1029,'meruoca',7,'MERUOCA',8203,2308203,1465),
            (1030,'milagres',7,'MILAGRES',8302,2308302,1467),
            (1031,'milha',7,'MILHÃ',8351,2308351,1597),
            (1032,'miraima',7,'MIRAÍMA',8377,2308377,1263),
            (1033,'missao-velha',7,'MISSÃO VELHA',8401,2308401,1469),
            (1034,'mombaca',7,'MOMBAÇA',8500,2308500,1471),
            (1035,'monsenhor-tabosa',7,'MONSENHOR TABOSA',8609,2308609,1473),
            (1036,'morada-nova',7,'MORADA NOVA',8708,2308708,1475),
            (1037,'moraujo',7,'MORAÚJO',8807,2308807,1477),
            (1038,'morrinhos',7,'MORRINHOS',8906,2308906,1479)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1039,'mucambo',7,'MUCAMBO',9003,2309003,1481),
            (1040,'mulungu',7,'MULUNGU',9102,2309102,1483),
            (1041,'nova-olinda',7,'NOVA OLINDA',9201,2309201,1485),
            (1042,'nova-russas',7,'NOVA RUSSAS',9300,2309300,1487),
            (1043,'novo-oriente',7,'NOVO ORIENTE',9409,2309409,1489),
            (1044,'ocara',7,'OCARA',9458,2309458,1265),
            (1045,'oros',7,'ORÓS',9508,2309508,1491),
            (1046,'pacajus',7,'PACAJUS',9607,2309607,1493),
            (1047,'pacatuba',7,'PACATUBA',9706,2309706,1495),
            (1048,'pacoti',7,'PACOTI',9805,2309805,1497)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1049,'pacuja',7,'PACUJÁ',9904,2309904,1499),
            (1050,'palhano',7,'PALHANO',10001,2310001,1501),
            (1051,'palmacia',7,'PALMÁCIA',10100,2310100,1503),
            (1052,'paracuru',7,'PARACURU',10209,2310209,1505),
            (1053,'paraipaba',7,'PARAIPABA',10258,2310258,1599),
            (1054,'parambu',7,'PARAMBU',10308,2310308,1507),
            (1055,'paramoti',7,'PARAMOTI',10407,2310407,1509),
            (1056,'pedra-branca',7,'PEDRA BRANCA',10506,2310506,1511),
            (1057,'penaforte',7,'PENAFORTE',10605,2310605,1513),
            (1058,'pentecoste',7,'PENTECOSTE',10704,2310704,1515)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1059,'pereiro',7,'PEREIRO',10803,2310803,1517),
            (1060,'pindoretama',7,'PINDORETAMA',10852,2310852,1267),
            (1061,'piquet-carneiro',7,'PIQUET CARNEIRO',10902,2310902,1519),
            (1062,'pires-ferreira',7,'PIRES FERREIRA',10951,2310951,1269),
            (1063,'poranga',7,'PORANGA',11009,2311009,1521),
            (1064,'porteiras',7,'PORTEIRAS',11108,2311108,1523),
            (1065,'potengi',7,'POTENGI',11207,2311207,1525),
            (1066,'potiretama',7,'POTIRETAMA',11231,2311231,1271),
            (1067,'quiterianopolis',7,'QUITERIANÓPOLIS',11264,2311264,9917),
            (1068,'quixada',7,'QUIXADÁ',11306,2311306,1527)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1069,'quixelo',7,'QUIXELÔ',11355,2311355,9853),
            (1070,'quixeramobim',7,'QUIXERAMOBIM',11405,2311405,1529),
            (1071,'quixere',7,'QUIXERÉ',11504,2311504,1531),
            (1072,'redencao',7,'REDENÇÃO',11603,2311603,1533),
            (1073,'reriutaba',7,'RERIUTABA',11702,2311702,1535),
            (1074,'russas',7,'RUSSAS',11801,2311801,1537),
            (1075,'saboeiro',7,'SABOEIRO',11900,2311900,1539),
            (1076,'salitre',7,'SALITRE',11959,2311959,1273),
            (1077,'santa-quiteria',7,'SANTA QUITÉRIA',12205,2312205,1545),
            (1078,'santana-do-acarau',7,'SANTANA DO ACARAÚ',12007,2312007,1541)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1079,'santana-do-cariri',7,'SANTANA DO CARIRI',12106,2312106,1543),
            (1080,'sao-benedito',7,'SÃO BENEDITO',12304,2312304,1547),
            (1081,'sao-goncalo-do-amarante',7,'SÃO GONÇALO DO AMARANTE',12403,2312403,1549),
            (1082,'sao-joao-do-jaguaribe',7,'SÃO JOÃO DO JAGUARIBE',12502,2312502,1551),
            (1083,'sao-luis-do-curu',7,'SÃO LUÍS DO CURU',12601,2312601,1553),
            (1084,'senador-pompeu',7,'SENADOR POMPEU',12700,2312700,1555),
            (1085,'senador-sa',7,'SENADOR SÁ',12809,2312809,1557),
            (1086,'sobral',7,'SOBRAL',12908,2312908,1559),
            (1087,'solonopole',7,'SOLONÓPOLE',13005,2313005,1561),
            (1088,'tabuleiro-do-norte',7,'TABULEIRO DO NORTE',13104,2313104,1563)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1089,'tamboril',7,'TAMBORIL',13203,2313203,1565),
            (1090,'tarrafas',7,'TARRAFAS',13252,2313252,1275),
            (1091,'taua',7,'TAUÁ',13302,2313302,1567),
            (1092,'tejucuoca',7,'TEJUÇUOCA',13351,2313351,1277),
            (1093,'tiangua',7,'TIANGUÁ',13401,2313401,1569),
            (1094,'trairi',7,'TRAIRI',13500,2313500,1571),
            (1095,'tururu',7,'TURURU',13559,2313559,1279),
            (1096,'ubajara',7,'UBAJARA',13609,2313609,1573),
            (1097,'umari',7,'UMARI',13708,2313708,1575),
            (1098,'umirim',7,'UMIRIM',13757,2313757,9855)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1099,'uruburetama',7,'URUBURETAMA',13807,2313807,1577),
            (1100,'uruoca',7,'URUOCA',13906,2313906,1579),
            (1101,'varjota',7,'VARJOTA',13955,2313955,9857),
            (1102,'varzea-alegre',7,'VÁRZEA ALEGRE',14003,2314003,1581),
            (1103,'vicosa-do-ceara',7,'VIÇOSA DO CEARÁ',14102,2314102,1583),
            (1104,'acari',21,'ACARI',109,2400109,1601),
            (1105,'acu',21,'AÇU',208,2400208,1603),
            (1106,'afonso-bezerra',21,'AFONSO BEZERRA',307,2400307,1605),
            (1107,'agua-nova',21,'ÁGUA NOVA',406,2400406,1607),
            (1108,'alexandria',21,'ALEXANDRIA',505,2400505,1609)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1109,'almino-afonso',21,'ALMINO AFONSO',604,2400604,1611),
            (1110,'alto-do-rodrigues',21,'ALTO DO RODRIGUES',703,2400703,1613),
            (1111,'angicos',21,'ANGICOS',802,2400802,1615),
            (1112,'antonio-martins',21,'ANTÔNIO MARTINS',901,2400901,1617),
            (1113,'apodi',21,'APODI',1008,2401008,1619),
            (1114,'areia-branca',21,'AREIA BRANCA',1107,2401107,1621),
            (1115,'ares',21,'ARÊS',1206,2401206,1623),
            (1116,'baia-formosa',21,'BAÍA FORMOSA',1404,2401404,1627),
            (1117,'barauna',21,'BARAÚNA',1453,2401453,3003),
            (1118,'barcelona',21,'BARCELONA',1503,2401503,1629)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1119,'bento-fernandes',21,'BENTO FERNANDES',1602,2401602,1631),
            (1120,'bodo',21,'BODÓ',1651,2401651,412),
            (1121,'bom-jesus',21,'BOM JESUS',1701,2401701,1633),
            (1122,'brejinho',21,'BREJINHO',1800,2401800,1635),
            (1123,'caicara-do-norte',21,'CAIÇARA DO NORTE',1859,2401859,414),
            (1124,'caicara-do-rio-do-vento',21,'CAIÇARA DO RIO DO VENTO',1909,2401909,1637),
            (1125,'caico',21,'CAICÓ',2006,2402006,1639),
            (1126,'campo-grande',21,'CAMPO GRANDE',1305,2401305,1625),
            (1127,'campo-redondo',21,'CAMPO REDONDO',2105,2402105,1641),
            (1128,'canguaretama',21,'CANGUARETAMA',2204,2402204,1643)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1129,'caraubas',21,'CARAÚBAS',2303,2402303,1645),
            (1130,'carnauba-dos-dantas',21,'CARNAÚBA DOS DANTAS',2402,2402402,1647),
            (1131,'carnaubais',21,'CARNAUBAIS',2501,2402501,1649),
            (1132,'ceara-mirim',21,'CEARÁ-MIRIM',2600,2402600,1651),
            (1133,'cerro-cora',21,'CERRO CORÁ',2709,2402709,1653),
            (1134,'coronel-ezequiel',21,'CORONEL EZEQUIEL',2808,2402808,1655),
            (1135,'coronel-joao-pessoa',21,'CORONEL JOÃO PESSOA',2907,2402907,1657),
            (1136,'cruzeta',21,'CRUZETA',3004,2403004,1659),
            (1137,'currais-novos',21,'CURRAIS NOVOS',3103,2403103,1661),
            (1138,'doutor-severiano',21,'DOUTOR SEVERIANO',3202,2403202,1663)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1139,'encanto',21,'ENCANTO',3301,2403301,1665),
            (1140,'equador',21,'EQUADOR',3400,2403400,1667),
            (1141,'espirito-santo',21,'ESPÍRITO SANTO',3509,2403509,1669),
            (1142,'extremoz',21,'EXTREMOZ',3608,2403608,1671),
            (1143,'felipe-guerra',21,'FELIPE GUERRA',3707,2403707,1673),
            (1144,'fernando-pedroza',21,'FERNANDO PEDROZA',3756,2403756,416),
            (1145,'florania',21,'FLORÂNIA',3806,2403806,1675),
            (1146,'francisco-dantas',21,'FRANCISCO DANTAS',3905,2403905,1677),
            (1147,'frutuoso-gomes',21,'FRUTUOSO GOMES',4002,2404002,1751),
            (1148,'galinhos',21,'GALINHOS',4101,2404101,1679)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1149,'goianinha',21,'GOIANINHA',4200,2404200,1681),
            (1150,'governador-dix-sept-rosado',21,'GOVERNADOR DIX-SEPT ROSADO',4309,2404309,1683),
            (1151,'grossos',21,'GROSSOS',4408,2404408,1685),
            (1152,'guamare',21,'GUAMARÉ',4507,2404507,1687),
            (1153,'ielmo-marinho',21,'IELMO MARINHO',4606,2404606,1689),
            (1154,'ipanguacu',21,'IPANGUAÇU',4705,2404705,1691),
            (1155,'ipueira',21,'IPUEIRA',4804,2404804,1693),
            (1156,'itaja',21,'ITAJÁ',4853,2404853,418),
            (1157,'itau',21,'ITAÚ',4903,2404903,1695),
            (1158,'jacana',21,'JAÇANÃ',5009,2405009,1697)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1159,'jandaira',21,'JANDAÍRA',5108,2405108,1699),
            (1160,'janduis',21,'JANDUÍS',5207,2405207,1701),
            (1161,'januario-cicco',21,'JANUÁRIO CICCO',5306,2405306,1703),
            (1162,'japi',21,'JAPI',5405,2405405,1705),
            (1163,'jardim-de-angicos',21,'JARDIM DE ANGICOS',5504,2405504,1707),
            (1164,'jardim-de-piranhas',21,'JARDIM DE PIRANHAS',5603,2405603,1709),
            (1165,'jardim-do-serido',21,'JARDIM DO SERIDÓ',5702,2405702,1711),
            (1166,'joao-camara',21,'JOÃO CÂMARA',5801,2405801,1713),
            (1167,'joao-dias',21,'JOÃO DIAS',5900,2405900,1715),
            (1168,'jose-da-penha',21,'JOSÉ DA PENHA',6007,2406007,1717)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1169,'jucurutu',21,'JUCURUTU',6106,2406106,1719),
            (1170,'jundia',21,'JUNDIÁ',6155,2406155,1108),
            (1171,'lagoa-danta',21,'LAGOA D''ANTA',6205,2406205,1723),
            (1172,'lagoa-de-pedras',21,'LAGOA DE PEDRAS',6304,2406304,1725),
            (1173,'lagoa-de-velhos',21,'LAGOA DE VELHOS',6403,2406403,1727),
            (1174,'lagoa-nova',21,'LAGOA NOVA',6502,2406502,1729),
            (1175,'lagoa-salgada',21,'LAGOA SALGADA',6601,2406601,1731),
            (1176,'lajes',21,'LAJES',6700,2406700,1733),
            (1177,'lajes-pintadas',21,'LAJES PINTADAS',6809,2406809,1735),
            (1178,'lucrecia',21,'LUCRÉCIA',6908,2406908,1737)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1179,'luis-gomes',21,'LUÍS GOMES',7005,2407005,1739),
            (1180,'macaiba',21,'MACAÍBA',7104,2407104,1741),
            (1181,'macau',21,'MACAU',7203,2407203,1743),
            (1182,'major-sales',21,'MAJOR SALES',7252,2407252,420),
            (1183,'marcelino-vieira',21,'MARCELINO VIEIRA',7302,2407302,1745),
            (1184,'martins',21,'MARTINS',7401,2407401,1747),
            (1185,'maxaranguape',21,'MAXARANGUAPE',7500,2407500,1749),
            (1186,'messias-targino',21,'MESSIAS TARGINO',7609,2407609,1721),
            (1187,'montanhas',21,'MONTANHAS',7708,2407708,1753),
            (1188,'monte-alegre',21,'MONTE ALEGRE',7807,2407807,1755)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1189,'monte-das-gameleiras',21,'MONTE DAS GAMELEIRAS',7906,2407906,1757),
            (1190,'mossoro',21,'MOSSORÓ',8003,2408003,1759),
            (1191,'natal',21,'NATAL',8102,2408102,1761),
            (1192,'nisia-floresta',21,'NÍSIA FLORESTA',8201,2408201,1763),
            (1193,'nova-cruz',21,'NOVA CRUZ',8300,2408300,1765),
            (1194,'olho-dagua-do-borges',21,'OLHO D''ÁGUA DO BORGES',8409,2408409,1767),
            (1195,'ouro-branco',21,'OURO BRANCO',8508,2408508,1769),
            (1196,'parana',21,'PARANÁ',8607,2408607,1771),
            (1197,'parau',21,'PARAÚ',8706,2408706,1773),
            (1198,'parazinho',21,'PARAZINHO',8805,2408805,1775)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1199,'parelhas',21,'PARELHAS',8904,2408904,1777),
            (1200,'parnamirim',21,'PARNAMIRIM',3251,2403251,1779),
            (1201,'passa-e-fica',21,'PASSA E FICA',9100,2409100,1781),
            (1202,'passagem',21,'PASSAGEM',9209,2409209,1783),
            (1203,'patu',21,'PATU',9308,2409308,1785),
            (1204,'pau-dos-ferros',21,'PAU DOS FERROS',9407,2409407,1787),
            (1205,'pedra-grande',21,'PEDRA GRANDE',9506,2409506,1789),
            (1206,'pedra-preta',21,'PEDRA PRETA',9605,2409605,1791),
            (1207,'pedro-avelino',21,'PEDRO AVELINO',9704,2409704,1793),
            (1208,'pedro-velho',21,'PEDRO VELHO',9803,2409803,1795)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1209,'pendencias',21,'PENDÊNCIAS',9902,2409902,1797),
            (1210,'piloes',21,'PILÕES',10009,2410009,1799),
            (1211,'poco-branco',21,'POÇO BRANCO',10108,2410108,1801),
            (1212,'portalegre',21,'PORTALEGRE',10207,2410207,1803),
            (1213,'porto-do-mangue',21,'PORTO DO MANGUE',10256,2410256,426),
            (1214,'pureza',21,'PUREZA',10405,2410405,1807),
            (1215,'rafael-fernandes',21,'RAFAEL FERNANDES',10504,2410504,1809),
            (1216,'rafael-godeiro',21,'RAFAEL GODEIRO',10603,2410603,1893),
            (1217,'riacho-da-cruz',21,'RIACHO DA CRUZ',10702,2410702,1811),
            (1218,'riacho-de-santana',21,'RIACHO DE SANTANA',10801,2410801,1813)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1219,'riachuelo',21,'RIACHUELO',10900,2410900,1815),
            (1220,'rio-do-fogo',21,'RIO DO FOGO',8953,2408953,422),
            (1221,'rodolfo-fernandes',21,'RODOLFO FERNANDES',11007,2411007,1817),
            (1222,'ruy-barbosa',21,'RUY BARBOSA',11106,2411106,1819),
            (1223,'santa-cruz',21,'SANTA CRUZ',11205,2411205,1823),
            (1224,'santa-maria',21,'SANTA MARIA',9332,2409332,424),
            (1225,'santana-do-matos',21,'SANTANA DO MATOS',11403,2411403,1827),
            (2257,'urandi',6,'URANDI',32606,2932606,3951),
            (1226,'santana-do-serido',21,'SANTANA DO SERIDÓ',11429,2411429,1825),
            (1227,'santo-antonio',21,'SANTO ANTÔNIO',11502,2411502,1829)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1228,'sao-bento-do-norte',21,'SÃO BENTO DO NORTE',11601,2411601,1831),
            (1229,'sao-bento-do-trairi',21,'SÃO BENTO DO TRAIRÍ',11700,2411700,1833),
            (1230,'sao-fernando',21,'SÃO FERNANDO',11809,2411809,1835),
            (1231,'sao-francisco-do-oeste',21,'SÃO FRANCISCO DO OESTE',11908,2411908,1821),
            (1232,'sao-goncalo-do-amarante',21,'SÃO GONÇALO DO AMARANTE',12005,2412005,1837),
            (1233,'sao-joao-do-sabugi',21,'SÃO JOÃO DO SABUGI',12104,2412104,1839),
            (1234,'sao-jose-de-mipibu',21,'SÃO JOSÉ DE MIPIBU',12203,2412203,1841),
            (1235,'sao-jose-do-campestre',21,'SÃO JOSÉ DO CAMPESTRE',12302,2412302,1843),
            (1236,'sao-jose-do-serido',21,'SÃO JOSÉ DO SERIDÓ',12401,2412401,1845),
            (1237,'sao-miguel',21,'SÃO MIGUEL',12500,2412500,1847)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1238,'sao-miguel-do-gostoso',21,'SÃO MIGUEL DO GOSTOSO',12559,2412559,430),
            (1239,'sao-paulo-do-potengi',21,'SÃO PAULO DO POTENGI',12609,2412609,1849),
            (1240,'sao-pedro',21,'SÃO PEDRO',12708,2412708,1851),
            (1241,'sao-rafael',21,'SÃO RAFAEL',12807,2412807,1853),
            (1242,'sao-tome',21,'SÃO TOMÉ',12906,2412906,1855),
            (1243,'sao-vicente',21,'SÃO VICENTE',13003,2413003,1857),
            (1244,'senador-eloi-de-souza',21,'SENADOR ELÓI DE SOUZA',13102,2413102,1859),
            (1245,'senador-georgino-avelino',21,'SENADOR GEORGINO AVELINO',13201,2413201,1861),
            (1246,'serra-caiada',21,'SERRA CAIADA',10306,2410306,1805),
            (1247,'serra-de-sao-bento',21,'SERRA DE SÃO BENTO',13300,2413300,1863)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1248,'serra-do-mel',21,'SERRA DO MEL',13359,2413359,1927),
            (1249,'serra-negra-do-norte',21,'SERRA NEGRA DO NORTE',13409,2413409,1865),
            (1250,'serrinha',21,'SERRINHA',13508,2413508,1867),
            (1251,'serrinha-dos-pintos',21,'SERRINHA DOS PINTOS',13557,2413557,432),
            (1252,'severiano-melo',21,'SEVERIANO MELO',13607,2413607,1869),
            (1253,'sitio-novo',21,'SÍTIO NOVO',13706,2413706,1871),
            (1254,'taboleiro-grande',21,'TABOLEIRO GRANDE',13805,2413805,1873),
            (1255,'taipu',21,'TAIPU',13904,2413904,1875),
            (1256,'tangara',21,'TANGARÁ',14001,2414001,1877),
            (1257,'tenente-ananias',21,'TENENTE ANANIAS',14100,2414100,1879)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1258,'tenente-laurentino-cruz',21,'TENENTE LAURENTINO CRUZ',14159,2414159,434),
            (1259,'tibau',21,'TIBAU',11056,2411056,428),
            (1260,'tibau-do-sul',21,'TIBAU DO SUL',14209,2414209,1881),
            (1261,'timbauba-dos-batistas',21,'TIMBAÚBA DOS BATISTAS',14308,2414308,1883),
            (1262,'touros',21,'TOUROS',14407,2414407,1885),
            (1263,'triunfo-potiguar',21,'TRIUNFO POTIGUAR',14456,2414456,436),
            (1264,'umarizal',21,'UMARIZAL',14506,2414506,1887),
            (1265,'upanema',21,'UPANEMA',14605,2414605,1889),
            (1266,'varzea',21,'VÁRZEA',14704,2414704,1891),
            (1267,'venha-ver',21,'VENHA-VER',14753,2414753,438)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1268,'vera-cruz',21,'VERA CRUZ',14803,2414803,1895),
            (1269,'vicosa',21,'VIÇOSA',14902,2414902,1897),
            (1270,'vila-flor',21,'VILA FLOR',15008,2415008,1899),
            (1271,'agua-branca',16,'ÁGUA BRANCA',106,2500106,1901),
            (1272,'aguiar',16,'AGUIAR',205,2500205,1903),
            (1273,'alagoa-grande',16,'ALAGOA GRANDE',304,2500304,1905),
            (1274,'alagoa-nova',16,'ALAGOA NOVA',403,2500403,1907),
            (1275,'alagoinha',16,'ALAGOINHA',502,2500502,1909),
            (1276,'alcantil',16,'ALCANTIL',536,2500536,440),
            (1277,'algodao-de-jandaira',16,'ALGODÃO DE JANDAÍRA',577,2500577,442)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1278,'alhandra',16,'ALHANDRA',601,2500601,1911),
            (1279,'amparo',16,'AMPARO',734,2500734,444),
            (1280,'aparecida',16,'APARECIDA',775,2500775,446),
            (1281,'aracagi',16,'ARAÇAGI',809,2500809,1915),
            (1282,'arara',16,'ARARA',908,2500908,1917),
            (1283,'araruna',16,'ARARUNA',1005,2501005,1919),
            (1284,'areia',16,'AREIA',1104,2501104,1921),
            (1285,'areia-de-baraunas',16,'AREIA DE BARAÚNAS',1153,2501153,448),
            (1286,'areial',16,'AREIAL',1203,2501203,1923),
            (1287,'aroeiras',16,'AROEIRAS',1302,2501302,1925)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1288,'assuncao',16,'ASSUNÇÃO',1351,2501351,450),
            (1289,'baia-da-traicao',16,'BAÍA DA TRAIÇÃO',1401,2501401,1929),
            (1290,'bananeiras',16,'BANANEIRAS',1500,2501500,1931),
            (1291,'barauna',16,'BARAÚNA',1534,2501534,452),
            (1292,'barra-de-santa-rosa',16,'BARRA DE SANTA ROSA',1609,2501609,1933),
            (1293,'barra-de-santana',16,'BARRA DE SANTANA',1575,2501575,454),
            (1294,'barra-de-sao-miguel',16,'BARRA DE SÃO MIGUEL',1708,2501708,1935),
            (1295,'bayeux',16,'BAYEUX',1807,2501807,1937),
            (1296,'belem',16,'BELÉM',1906,2501906,1939),
            (1297,'belem-do-brejo-do-cruz',16,'BELÉM DO BREJO DO CRUZ',2003,2502003,1941)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1298,'bernardino-batista',16,'BERNARDINO BATISTA',2052,2502052,456),
            (1299,'boa-ventura',16,'BOA VENTURA',2102,2502102,1943),
            (1300,'boa-vista',16,'BOA VISTA',2151,2502151,458),
            (1301,'bom-jesus',16,'BOM JESUS',2201,2502201,1945),
            (1302,'bom-sucesso',16,'BOM SUCESSO',2300,2502300,1947),
            (1303,'bonito-de-santa-fe',16,'BONITO DE SANTA FÉ',2409,2502409,1949),
            (1304,'boqueirao',16,'BOQUEIRÃO',2508,2502508,1951),
            (1305,'borborema',16,'BORBOREMA',2706,2502706,1955),
            (1306,'brejo-do-cruz',16,'BREJO DO CRUZ',2805,2502805,1957),
            (1307,'brejo-dos-santos',16,'BREJO DOS SANTOS',2904,2502904,1959)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1308,'caapora',16,'CAAPORÃ',3001,2503001,1961),
            (1309,'cabaceiras',16,'CABACEIRAS',3100,2503100,1963),
            (1310,'cabedelo',16,'CABEDELO',3209,2503209,1965),
            (1311,'cachoeira-dos-indios',16,'CACHOEIRA DOS ÍNDIOS',3308,2503308,1967),
            (1312,'cacimba-de-areia',16,'CACIMBA DE AREIA',3407,2503407,1969),
            (1313,'cacimba-de-dentro',16,'CACIMBA DE DENTRO',3506,2503506,1971),
            (1314,'cacimbas',16,'CACIMBAS',3555,2503555,460),
            (1315,'caicara',16,'CAIÇARA',3605,2503605,1973),
            (1316,'cajazeiras',16,'CAJAZEIRAS',3704,2503704,1975),
            (1317,'cajazeirinhas',16,'CAJAZEIRINHAS',3753,2503753,462)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1318,'caldas-brandao',16,'CALDAS BRANDÃO',3803,2503803,1977),
            (1319,'camalau',16,'CAMALAÚ',3902,2503902,1979),
            (1320,'campina-grande',16,'CAMPINA GRANDE',4009,2504009,1981),
            (1321,'capim',16,'CAPIM',4033,2504033,464),
            (1322,'caraubas',16,'CARAÚBAS',4074,2504074,466),
            (1323,'carrapateira',16,'CARRAPATEIRA',4108,2504108,1983),
            (1324,'casserengue',16,'CASSERENGUE',4157,2504157,468),
            (1325,'catingueira',16,'CATINGUEIRA',4207,2504207,1985),
            (1326,'catole-do-rocha',16,'CATOLÉ DO ROCHA',4306,2504306,1987),
            (1327,'caturite',16,'CATURITÉ',4355,2504355,470)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1328,'conceicao',16,'CONCEIÇÃO',4405,2504405,1989),
            (1329,'condado',16,'CONDADO',4504,2504504,1991),
            (1330,'conde',16,'CONDE',4603,2504603,1993),
            (1331,'congo',16,'CONGO',4702,2504702,1995),
            (1332,'coremas',16,'COREMAS',4801,2504801,1997),
            (1333,'coxixola',16,'COXIXOLA',4850,2504850,472),
            (1334,'cruz-do-espirito-santo',16,'CRUZ DO ESPÍRITO SANTO',4900,2504900,1999),
            (1335,'cubati',16,'CUBATI',5006,2505006,2001),
            (1336,'cuite',16,'CUITÉ',5105,2505105,2003),
            (1337,'cuite-de-mamanguape',16,'CUITÉ DE MAMANGUAPE',5238,2505238,474)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1338,'cuitegi',16,'CUITEGI',5204,2505204,2005),
            (1339,'curral-de-cima',16,'CURRAL DE CIMA',5279,2505279,476),
            (1340,'curral-velho',16,'CURRAL VELHO',5303,2505303,2007),
            (1341,'damiao',16,'DAMIÃO',5352,2505352,478),
            (1342,'desterro',16,'DESTERRO',5402,2505402,2009),
            (1343,'diamante',16,'DIAMANTE',5600,2505600,2013),
            (1344,'dona-ines',16,'DONA INÊS',5709,2505709,2015),
            (1345,'duas-estradas',16,'DUAS ESTRADAS',5808,2505808,2017),
            (1346,'emas',16,'EMAS',5907,2505907,2019),
            (1347,'esperanca',16,'ESPERANÇA',6004,2506004,2021)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1348,'fagundes',16,'FAGUNDES',6103,2506103,2023),
            (1349,'frei-martinho',16,'FREI MARTINHO',6202,2506202,2025),
            (1350,'gado-bravo',16,'GADO BRAVO',6251,2506251,480),
            (1351,'guarabira',16,'GUARABIRA',6301,2506301,2027),
            (1352,'gurinhem',16,'GURINHÉM',6400,2506400,2029),
            (1353,'gurjao',16,'GURJÃO',6509,2506509,2031),
            (1354,'ibiara',16,'IBIARA',6608,2506608,2033),
            (1355,'igaracy',16,'IGARACY',2607,2502607,1953),
            (1356,'imaculada',16,'IMACULADA',6707,2506707,2035),
            (1357,'inga',16,'INGÁ',6806,2506806,2037)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1358,'itabaiana',16,'ITABAIANA',6905,2506905,2039),
            (1359,'itaporanga',16,'ITAPORANGA',7002,2507002,2041),
            (1360,'itapororoca',16,'ITAPOROROCA',7101,2507101,2043),
            (1361,'itatuba',16,'ITATUBA',7200,2507200,2045),
            (1362,'jacarau',16,'JACARAÚ',7309,2507309,2047),
            (1363,'jerico',16,'JERICÓ',7408,2507408,2049),
            (1364,'joao-pessoa',16,'JOÃO PESSOA',7507,2507507,2051),
            (1365,'joca-claudino',16,'JOCA CLAUDINO',13653,2513653,514),
            (1366,'juarez-tavora',16,'JUAREZ TÁVORA',7606,2507606,2053),
            (1367,'juazeirinho',16,'JUAZEIRINHO',7705,2507705,2055)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1368,'junco-do-serido',16,'JUNCO DO SERIDÓ',7804,2507804,2057),
            (1369,'juripiranga',16,'JURIPIRANGA',7903,2507903,2059),
            (1370,'juru',16,'JURU',8000,2508000,2061),
            (1371,'lagoa',16,'LAGOA',8109,2508109,2063),
            (1372,'lagoa-de-dentro',16,'LAGOA DE DENTRO',8208,2508208,2065),
            (1373,'lagoa-seca',16,'LAGOA SECA',8307,2508307,2067),
            (1374,'lastro',16,'LASTRO',8406,2508406,2069),
            (1375,'livramento',16,'LIVRAMENTO',8505,2508505,2071),
            (1376,'logradouro',16,'LOGRADOURO',8554,2508554,482),
            (1377,'lucena',16,'LUCENA',8604,2508604,2073)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1378,'mae-dagua',16,'MÃE D''ÁGUA',8703,2508703,2075),
            (1379,'malta',16,'MALTA',8802,2508802,2077),
            (1380,'mamanguape',16,'MAMANGUAPE',8901,2508901,2079),
            (1381,'manaira',16,'MANAÍRA',9008,2509008,2081),
            (1382,'marcacao',16,'MARCAÇÃO',9057,2509057,484),
            (1383,'mari',16,'MARI',9107,2509107,2083),
            (1384,'marizopolis',16,'MARIZÓPOLIS',9156,2509156,486),
            (1385,'massaranduba',16,'MASSARANDUBA',9206,2509206,2085),
            (1386,'mataraca',16,'MATARACA',9305,2509305,2087),
            (1387,'matinhas',16,'MATINHAS',9339,2509339,488)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1388,'mato-grosso',16,'MATO GROSSO',9370,2509370,490),
            (1389,'matureia',16,'MATURÉIA',9396,2509396,492),
            (1390,'mogeiro',16,'MOGEIRO',9404,2509404,2089),
            (1391,'montadas',16,'MONTADAS',9503,2509503,2091),
            (1392,'monte-horebe',16,'MONTE HOREBE',9602,2509602,2093),
            (1393,'monteiro',16,'MONTEIRO',9701,2509701,2095),
            (1394,'mulungu',16,'MULUNGU',9800,2509800,2097),
            (1395,'natuba',16,'NATUBA',9909,2509909,2099),
            (1396,'nazarezinho',16,'NAZAREZINHO',10006,2510006,2101),
            (1397,'nova-floresta',16,'NOVA FLORESTA',10105,2510105,2103)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1398,'nova-olinda',16,'NOVA OLINDA',10204,2510204,2105),
            (1399,'nova-palmeira',16,'NOVA PALMEIRA',10303,2510303,2107),
            (1400,'olho-dagua',16,'OLHO D''ÁGUA',10402,2510402,2109),
            (1401,'olivedos',16,'OLIVEDOS',10501,2510501,2111),
            (1402,'ouro-velho',16,'OURO VELHO',10600,2510600,2113),
            (1403,'parari',16,'PARARI',10659,2510659,494),
            (1404,'passagem',16,'PASSAGEM',10709,2510709,2115),
            (1405,'patos',16,'PATOS',10808,2510808,2117),
            (1406,'paulista',16,'PAULISTA',10907,2510907,2119),
            (1407,'pedra-branca',16,'PEDRA BRANCA',11004,2511004,2121)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1408,'pedra-lavrada',16,'PEDRA LAVRADA',11103,2511103,2123),
            (1409,'pedras-de-fogo',16,'PEDRAS DE FOGO',11202,2511202,2125),
            (1410,'pedro-regis',16,'PEDRO RÉGIS',12721,2512721,500),
            (1411,'pianco',16,'PIANCÓ',11301,2511301,2127),
            (1412,'picui',16,'PICUÍ',11400,2511400,2129),
            (1413,'pilar',16,'PILAR',11509,2511509,2131),
            (1414,'piloes',16,'PILÕES',11608,2511608,2133),
            (1415,'piloezinhos',16,'PILÕEZINHOS',11707,2511707,2135),
            (1416,'pirpirituba',16,'PIRPIRITUBA',11806,2511806,2137),
            (1417,'pitimbu',16,'PITIMBU',11905,2511905,2139)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1418,'pocinhos',16,'POCINHOS',12002,2512002,2141),
            (1419,'poco-dantas',16,'POÇO DANTAS',12036,2512036,496),
            (1420,'poco-de-jose-de-moura',16,'POÇO DE JOSÉ DE MOURA',12077,2512077,498),
            (1421,'pombal',16,'POMBAL',12101,2512101,2143),
            (1422,'prata',16,'PRATA',12200,2512200,2145),
            (1423,'princesa-isabel',16,'PRINCESA ISABEL',12309,2512309,2147),
            (1424,'puxinana',16,'PUXINANÃ',12408,2512408,2149),
            (1425,'queimadas',16,'QUEIMADAS',12507,2512507,2151),
            (1426,'quixaba',16,'QUIXABA',12606,2512606,2153),
            (1427,'remigio',16,'REMÍGIO',12705,2512705,2155)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1428,'riachao',16,'RIACHÃO',12747,2512747,502),
            (1429,'riachao-do-bacamarte',16,'RIACHÃO DO BACAMARTE',12754,2512754,504),
            (1430,'riachao-do-poco',16,'RIACHÃO DO POÇO',12762,2512762,506),
            (1431,'riacho-de-santo-antonio',16,'RIACHO DE SANTO ANTÔNIO',12788,2512788,508),
            (1432,'riacho-dos-cavalos',16,'RIACHO DOS CAVALOS',12804,2512804,2157),
            (2258,'urucuca',6,'URUÇUCA',32705,2932705,3953),
            (1433,'rio-tinto',16,'RIO TINTO',12903,2512903,2159),
            (1434,'salgadinho',16,'SALGADINHO',13000,2513000,2161),
            (1435,'salgado-de-sao-felix',16,'SALGADO DE SÃO FÉLIX',13109,2513109,2163),
            (1436,'santa-cecilia',16,'SANTA CECÍLIA',13158,2513158,510)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1437,'santa-cruz',16,'SANTA CRUZ',13208,2513208,2165),
            (1438,'santa-helena',16,'SANTA HELENA',13307,2513307,2167),
            (1439,'santa-ines',16,'SANTA INÊS',13356,2513356,512),
            (1440,'santa-luzia',16,'SANTA LUZIA',13406,2513406,2169),
            (1441,'santa-rita',16,'SANTA RITA',13703,2513703,2175),
            (1442,'santa-teresinha',16,'SANTA TERESINHA',13802,2513802,2177),
            (1443,'santana-de-mangueira',16,'SANTANA DE MANGUEIRA',13505,2513505,2171),
            (1444,'santana-dos-garrotes',16,'SANTANA DOS GARROTES',13604,2513604,2173),
            (1445,'santo-andre',16,'SANTO ANDRÉ',13851,2513851,516),
            (1446,'sao-bentinho',16,'SÃO BENTINHO',13927,2513927,518)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1447,'sao-bento',16,'SÃO BENTO',13901,2513901,2179),
            (1448,'sao-domingos',16,'SÃO DOMINGOS',13968,2513968,522),
            (1449,'sao-domingos-do-cariri',16,'SÃO DOMINGOS DO CARIRI',13943,2513943,520),
            (1450,'sao-francisco',16,'SÃO FRANCISCO',13984,2513984,524),
            (1451,'sao-joao-do-cariri',16,'SÃO JOÃO DO CARIRI',14008,2514008,2181),
            (1452,'sao-joao-do-rio-do-peixe',16,'SÃO JOÃO DO RIO DO PEIXE',700,2500700,1913),
            (1453,'sao-joao-do-tigre',16,'SÃO JOÃO DO TIGRE',14107,2514107,2183),
            (1454,'sao-jose-da-lagoa-tapada',16,'SÃO JOSÉ DA LAGOA TAPADA',14206,2514206,2185),
            (1455,'sao-jose-de-caiana',16,'SÃO JOSÉ DE CAIANA',14305,2514305,2187),
            (1456,'sao-jose-de-espinharas',16,'SÃO JOSÉ DE ESPINHARAS',14404,2514404,2189)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1457,'sao-jose-de-piranhas',16,'SÃO JOSÉ DE PIRANHAS',14503,2514503,2191),
            (1458,'sao-jose-de-princesa',16,'SÃO JOSÉ DE PRINCESA',14552,2514552,528),
            (1459,'sao-jose-do-bonfim',16,'SÃO JOSÉ DO BONFIM',14602,2514602,2193),
            (1460,'sao-jose-do-brejo-do-cruz',16,'SÃO JOSÉ DO BREJO DO CRUZ',14651,2514651,530),
            (1461,'sao-jose-do-sabugi',16,'SÃO JOSÉ DO SABUGI',14701,2514701,2195),
            (1462,'sao-jose-dos-cordeiros',16,'SÃO JOSÉ DOS CORDEIROS',14800,2514800,2197),
            (1463,'sao-jose-dos-ramos',16,'SÃO JOSÉ DOS RAMOS',14453,2514453,526),
            (1464,'sao-mamede',16,'SÃO MAMEDE',14909,2514909,2199),
            (1465,'sao-miguel-de-taipu',16,'SÃO MIGUEL DE TAIPU',15005,2515005,2201),
            (1466,'sao-sebastiao-de-lagoa-de-roca',16,'SÃO SEBASTIÃO DE LAGOA DE ROÇA',15104,2515104,2203)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1467,'sao-sebastiao-do-umbuzeiro',16,'SÃO SEBASTIÃO DO UMBUZEIRO',15203,2515203,2205),
            (1468,'sao-vicente-do-serido',16,'SÃO VICENTE DO SERIDÓ',15401,2515401,2209),
            (1469,'sape',16,'SAPÉ',15302,2515302,2207),
            (1470,'serra-branca',16,'SERRA BRANCA',15500,2515500,2211),
            (1471,'serra-da-raiz',16,'SERRA DA RAIZ',15609,2515609,2213),
            (1472,'serra-grande',16,'SERRA GRANDE',15708,2515708,2215),
            (1473,'serra-redonda',16,'SERRA REDONDA',15807,2515807,2217),
            (1474,'serraria',16,'SERRARIA',15906,2515906,2219),
            (1475,'sertaozinho',16,'SERTÃOZINHO',15930,2515930,532),
            (1476,'sobrado',16,'SOBRADO',15971,2515971,534)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1477,'solanea',16,'SOLÂNEA',16003,2516003,2221),
            (1478,'soledade',16,'SOLEDADE',16102,2516102,2223),
            (1479,'sossego',16,'SOSSÊGO',16151,2516151,536),
            (1480,'sousa',16,'SOUSA',16201,2516201,2225),
            (1481,'sume',16,'SUMÉ',16300,2516300,2227),
            (1482,'tacima',16,'TACIMA',16409,2516409,2229),
            (1483,'taperoa',16,'TAPEROÁ',16508,2516508,2231),
            (1484,'tavares',16,'TAVARES',16607,2516607,2233),
            (1485,'teixeira',16,'TEIXEIRA',16706,2516706,2235),
            (1486,'tenorio',16,'TENÓRIO',16755,2516755,538)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1487,'triunfo',16,'TRIUNFO',16805,2516805,2237),
            (1488,'uirauna',16,'UIRAÚNA',16904,2516904,2239),
            (1489,'umbuzeiro',16,'UMBUZEIRO',17001,2517001,2241),
            (1490,'varzea',16,'VÁRZEA',17100,2517100,2243),
            (1491,'vieiropolis',16,'VIEIRÓPOLIS',17209,2517209,540),
            (1492,'vista-serrana',16,'VISTA SERRANA',5501,2505501,2011),
            (1493,'zabele',16,'ZABELÊ',17407,2517407,542),
            (1494,'abreu-e-lima',18,'ABREU E LIMA',54,2600054,2631),
            (1495,'afogados-da-ingazeira',18,'AFOGADOS DA INGAZEIRA',104,2600104,2301),
            (1496,'afranio',18,'AFRÂNIO',203,2600203,2303)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1497,'agrestina',18,'AGRESTINA',302,2600302,2305),
            (1498,'agua-preta',18,'ÁGUA PRETA',401,2600401,2307),
            (1499,'aguas-belas',18,'ÁGUAS BELAS',500,2600500,2309),
            (1500,'alagoinha',18,'ALAGOINHA',609,2600609,2311),
            (1501,'alianca',18,'ALIANÇA',708,2600708,2313),
            (1502,'altinho',18,'ALTINHO',807,2600807,2315),
            (1503,'amaraji',18,'AMARAJI',906,2600906,2317),
            (1504,'angelim',18,'ANGELIM',1003,2601003,2319),
            (1505,'aracoiaba',18,'ARAÇOIABA',1052,2601052,544),
            (1506,'araripina',18,'ARARIPINA',1102,2601102,2321)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1507,'arcoverde',18,'ARCOVERDE',1201,2601201,2323),
            (1508,'barra-de-guabiraba',18,'BARRA DE GUABIRABA',1300,2601300,2325),
            (1509,'barreiros',18,'BARREIROS',1409,2601409,2327),
            (1510,'belem-de-maria',18,'BELÉM DE MARIA',1508,2601508,2329),
            (1511,'belem-do-sao-francisco',18,'BELÉM DO SÃO FRANCISCO',1607,2601607,2331),
            (1512,'belo-jardim',18,'BELO JARDIM',1706,2601706,2333),
            (1513,'betania',18,'BETÂNIA',1805,2601805,2335),
            (1514,'bezerros',18,'BEZERROS',1904,2601904,2337),
            (1515,'bodoco',18,'BODOCÓ',2001,2602001,2339),
            (1516,'bom-conselho',18,'BOM CONSELHO',2100,2602100,2341)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1517,'bom-jardim',18,'BOM JARDIM',2209,2602209,2343),
            (1518,'bonito',18,'BONITO',2308,2602308,2345),
            (1519,'brejao',18,'BREJÃO',2407,2602407,2347),
            (1520,'brejinho',18,'BREJINHO',2506,2602506,2349),
            (1521,'brejo-da-madre-de-deus',18,'BREJO DA MADRE DE DEUS',2605,2602605,2351),
            (1522,'buenos-aires',18,'BUENOS AIRES',2704,2602704,2353),
            (1523,'buique',18,'BUÍQUE',2803,2602803,2355),
            (1524,'cabo-de-santo-agostinho',18,'CABO DE SANTO AGOSTINHO',2902,2602902,2357),
            (1525,'cabrobo',18,'CABROBÓ',3009,2603009,2359),
            (1526,'cachoeirinha',18,'CACHOEIRINHA',3108,2603108,2361)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1527,'caetes',18,'CAETÉS',3207,2603207,2363),
            (1528,'calcado',18,'CALÇADO',3306,2603306,2365),
            (1529,'calumbi',18,'CALUMBI',3405,2603405,2367),
            (1530,'camaragibe',18,'CAMARAGIBE',3454,2603454,2629),
            (1531,'camocim-de-sao-felix',18,'CAMOCIM DE SÃO FÉLIX',3504,2603504,2369),
            (1532,'camutanga',18,'CAMUTANGA',3603,2603603,2371),
            (1533,'canhotinho',18,'CANHOTINHO',3702,2603702,2373),
            (1534,'capoeiras',18,'CAPOEIRAS',3801,2603801,2375),
            (1535,'carnaiba',18,'CARNAÍBA',3900,2603900,2377),
            (1536,'carnaubeira-da-penha',18,'CARNAUBEIRA DA PENHA',3926,2603926,2635)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1537,'carpina',18,'CARPINA',4007,2604007,2379),
            (1538,'caruaru',18,'CARUARU',4106,2604106,2381),
            (1539,'casinhas',18,'CASINHAS',4155,2604155,546),
            (1540,'catende',18,'CATENDE',4205,2604205,2383),
            (1541,'cedro',18,'CEDRO',4304,2604304,2385),
            (1542,'cha-de-alegria',18,'CHÃ DE ALEGRIA',4403,2604403,2387),
            (1543,'cha-grande',18,'CHÃ GRANDE',4502,2604502,2389),
            (1544,'condado',18,'CONDADO',4601,2604601,2391),
            (1545,'correntes',18,'CORRENTES',4700,2604700,2393),
            (1546,'cortes',18,'CORTÊS',4809,2604809,2395)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1547,'cumaru',18,'CUMARU',4908,2604908,2397),
            (1548,'cupira',18,'CUPIRA',5004,2605004,2399),
            (1549,'custodia',18,'CUSTÓDIA',5103,2605103,2401),
            (1550,'dormentes',18,'DORMENTES',5152,2605152,2299),
            (1551,'escada',18,'ESCADA',5202,2605202,2403),
            (1552,'exu',18,'EXU',5301,2605301,2405),
            (1553,'feira-nova',18,'FEIRA NOVA',5400,2605400,2407),
            (1554,'fernando-de-noronha',18,'FERNANDO DE NORONHA',5459,2605459,3001),
            (1555,'ferreiros',18,'FERREIROS',5509,2605509,2409),
            (1556,'flores',18,'FLORES',5608,2605608,2411)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1557,'floresta',18,'FLORESTA',5707,2605707,2413),
            (1558,'frei-miguelinho',18,'FREI MIGUELINHO',5806,2605806,2415),
            (1559,'gameleira',18,'GAMELEIRA',5905,2605905,2417),
            (1560,'garanhuns',18,'GARANHUNS',6002,2606002,2419),
            (1561,'gloria-do-goita',18,'GLÓRIA DO GOITÁ',6101,2606101,2421),
            (1562,'goiana',18,'GOIANA',6200,2606200,2423),
            (1563,'granito',18,'GRANITO',6309,2606309,2425),
            (1564,'gravata',18,'GRAVATÁ',6408,2606408,2427),
            (1565,'iati',18,'IATI',6507,2606507,2429),
            (1566,'ibimirim',18,'IBIMIRIM',6606,2606606,2431)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1567,'ibirajuba',18,'IBIRAJUBA',6705,2606705,2433),
            (1568,'igarassu',18,'IGARASSU',6804,2606804,2435),
            (1569,'iguaracy',18,'IGUARACY',6903,2606903,2437),
            (1570,'ilha-de-itamaraca',18,'ILHA DE ITAMARACÁ',7604,2607604,2451),
            (1571,'inaja',18,'INAJÁ',7000,2607000,2439),
            (1572,'ingazeira',18,'INGAZEIRA',7109,2607109,2441),
            (1573,'ipojuca',18,'IPOJUCA',7208,2607208,2443),
            (1574,'ipubi',18,'IPUBI',7307,2607307,2445),
            (1575,'itacuruba',18,'ITACURUBA',7406,2607406,2447),
            (1576,'itaiba',18,'ITAÍBA',7505,2607505,2449)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1577,'itambe',18,'ITAMBÉ',7653,2607653,2597),
            (1578,'itapetim',18,'ITAPETIM',7703,2607703,2453),
            (1579,'itapissuma',18,'ITAPISSUMA',7752,2607752,2633),
            (1580,'itaquitinga',18,'ITAQUITINGA',7802,2607802,2455),
            (1581,'jaboatao-dos-guararapes',18,'JABOATÃO DOS GUARARAPES',7901,2607901,2457),
            (1582,'jaqueira',18,'JAQUEIRA',7950,2607950,548),
            (1583,'jatauba',18,'JATAÚBA',8008,2608008,2459),
            (1584,'jatoba',18,'JATOBÁ',8057,2608057,550),
            (1585,'joao-alfredo',18,'JOÃO ALFREDO',8107,2608107,2461),
            (1586,'joaquim-nabuco',18,'JOAQUIM NABUCO',8206,2608206,2463)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1587,'jucati',18,'JUCATI',8255,2608255,2295),
            (1588,'jupi',18,'JUPI',8305,2608305,2465),
            (1589,'jurema',18,'JUREMA',8404,2608404,2467),
            (1590,'lagoa-de-itaenga',18,'LAGOA DE ITAENGA',8503,2608503,2469),
            (1591,'lagoa-do-carro',18,'LAGOA DO CARRO',8453,2608453,2289),
            (1592,'lagoa-do-ouro',18,'LAGOA DO OURO',8602,2608602,2471),
            (1593,'lagoa-dos-gatos',18,'LAGOA DOS GATOS',8701,2608701,2473),
            (1594,'lagoa-grande',18,'LAGOA GRANDE',8750,2608750,552),
            (1595,'lajedo',18,'LAJEDO',8800,2608800,2475),
            (1596,'limoeiro',18,'LIMOEIRO',8909,2608909,2477)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1597,'macaparana',18,'MACAPARANA',9006,2609006,2479),
            (1598,'machados',18,'MACHADOS',9105,2609105,2481),
            (1599,'manari',18,'MANARI',9154,2609154,554),
            (1600,'maraial',18,'MARAIAL',9204,2609204,2483),
            (1601,'mirandiba',18,'MIRANDIBA',9303,2609303,2485),
            (1602,'moreilandia',18,'MOREILÂNDIA',14303,2614303,2585),
            (1603,'moreno',18,'MORENO',9402,2609402,2487),
            (1604,'nazare-da-mata',18,'NAZARÉ DA MATA',9501,2609501,2489),
            (1605,'olinda',18,'OLINDA',9600,2609600,2491),
            (1606,'orobo',18,'OROBÓ',9709,2609709,2493)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1607,'oroco',18,'OROCÓ',9808,2609808,2495),
            (1608,'ouricuri',18,'OURICURI',9907,2609907,2497),
            (1609,'palmares',18,'PALMARES',10004,2610004,2499),
            (1610,'palmeirina',18,'PALMEIRINA',10103,2610103,2501),
            (1611,'panelas',18,'PANELAS',10202,2610202,2503),
            (1612,'paranatama',18,'PARANATAMA',10301,2610301,2505),
            (1613,'parnamirim',18,'PARNAMIRIM',10400,2610400,2507),
            (1614,'passira',18,'PASSIRA',10509,2610509,2509),
            (1615,'paudalho',18,'PAUDALHO',10608,2610608,2511),
            (1616,'paulista',18,'PAULISTA',10707,2610707,2513)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1617,'pedra',18,'PEDRA',10806,2610806,2515),
            (1618,'pesqueira',18,'PESQUEIRA',10905,2610905,2517),
            (1619,'petrolandia',18,'PETROLÂNDIA',11002,2611002,2519),
            (1620,'petrolina',18,'PETROLINA',11101,2611101,2521),
            (1621,'pocao',18,'POÇÃO',11200,2611200,2523),
            (1622,'pombos',18,'POMBOS',11309,2611309,2525),
            (1623,'primavera',18,'PRIMAVERA',11408,2611408,2527),
            (1624,'quipapa',18,'QUIPAPÁ',11507,2611507,2529),
            (1625,'quixaba',18,'QUIXABA',11533,2611533,2637),
            (1626,'recife',18,'RECIFE',11606,2611606,2531)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1627,'riacho-das-almas',18,'RIACHO DAS ALMAS',11705,2611705,2533),
            (1628,'ribeirao',18,'RIBEIRÃO',11804,2611804,2535),
            (1629,'rio-formoso',18,'RIO FORMOSO',11903,2611903,2537),
            (1630,'saire',18,'SAIRÉ',12000,2612000,2539),
            (1631,'salgadinho',18,'SALGADINHO',12109,2612109,2541),
            (1632,'salgueiro',18,'SALGUEIRO',12208,2612208,2543),
            (1633,'saloa',18,'SALOÁ',12307,2612307,2545),
            (1634,'sanharo',18,'SANHARÓ',12406,2612406,2547),
            (1635,'santa-cruz',18,'SANTA CRUZ',12455,2612455,2297),
            (1636,'santa-cruz-da-baixa-verde',18,'SANTA CRUZ DA BAIXA VERDE',12471,2612471,2639)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1637,'santa-cruz-do-capibaribe',18,'SANTA CRUZ DO CAPIBARIBE',12505,2612505,2549),
            (1638,'santa-filomena',18,'SANTA FILOMENA',12554,2612554,556),
            (1639,'santa-maria-da-boa-vista',18,'SANTA MARIA DA BOA VISTA',12604,2612604,2551),
            (2259,'utinga',6,'UTINGA',32804,2932804,3955),
            (1640,'santa-maria-do-cambuca',18,'SANTA MARIA DO CAMBUCÁ',12703,2612703,2553),
            (1641,'santa-terezinha',18,'SANTA TEREZINHA',12802,2612802,2555),
            (1642,'sao-benedito-do-sul',18,'SÃO BENEDITO DO SUL',12901,2612901,2557),
            (1643,'sao-bento-do-una',18,'SÃO BENTO DO UNA',13008,2613008,2559),
            (1644,'sao-caitano',18,'SÃO CAITANO',13107,2613107,2561),
            (1645,'sao-joao',18,'SÃO JOÃO',13206,2613206,2563)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1646,'sao-joaquim-do-monte',18,'SÃO JOAQUIM DO MONTE',13305,2613305,2565),
            (1647,'sao-jose-da-coroa-grande',18,'SÃO JOSÉ DA COROA GRANDE',13404,2613404,2567),
            (1648,'sao-jose-do-belmonte',18,'SÃO JOSÉ DO BELMONTE',13503,2613503,2569),
            (1649,'sao-jose-do-egito',18,'SÃO JOSÉ DO EGITO',13602,2613602,2571),
            (1650,'sao-lourenco-da-mata',18,'SÃO LOURENÇO DA MATA',13701,2613701,2573),
            (1651,'sao-vicente-ferrer',18,'SÃO VICENTE FÉRRER',13800,2613800,2575),
            (1652,'serra-talhada',18,'SERRA TALHADA',13909,2613909,2577),
            (1653,'serrita',18,'SERRITA',14006,2614006,2579),
            (1654,'sertania',18,'SERTÂNIA',14105,2614105,2581),
            (1655,'sirinhaem',18,'SIRINHAÉM',14204,2614204,2583)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1656,'solidao',18,'SOLIDÃO',14402,2614402,2587),
            (1657,'surubim',18,'SURUBIM',14501,2614501,2589),
            (1658,'tabira',18,'TABIRA',14600,2614600,2591),
            (1659,'tacaimbo',18,'TACAIMBÓ',14709,2614709,2593),
            (1660,'tacaratu',18,'TACARATU',14808,2614808,2595),
            (1661,'tamandare',18,'TAMANDARÉ',14857,2614857,558),
            (1662,'taquaritinga-do-norte',18,'TAQUARITINGA DO NORTE',15003,2615003,2599),
            (1663,'terezinha',18,'TEREZINHA',15102,2615102,2601),
            (1664,'terra-nova',18,'TERRA NOVA',15201,2615201,2603),
            (1665,'timbauba',18,'TIMBAÚBA',15300,2615300,2605)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1666,'toritama',18,'TORITAMA',15409,2615409,2607),
            (1667,'tracunhaem',18,'TRACUNHAÉM',15508,2615508,2609),
            (1668,'trindade',18,'TRINDADE',15607,2615607,2611),
            (1669,'triunfo',18,'TRIUNFO',15706,2615706,2613),
            (1670,'tupanatinga',18,'TUPANATINGA',15805,2615805,2615),
            (1671,'tuparetama',18,'TUPARETAMA',15904,2615904,2617),
            (1672,'venturosa',18,'VENTUROSA',16001,2616001,2619),
            (1673,'verdejante',18,'VERDEJANTE',16100,2616100,2621),
            (1674,'vertente-do-lerio',18,'VERTENTE DO LÉRIO',16183,2616183,2291),
            (1675,'vertentes',18,'VERTENTES',16209,2616209,2623)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1676,'vicencia',18,'VICÊNCIA',16308,2616308,2625),
            (1677,'vitoria-de-santo-antao',18,'VITÓRIA DE SANTO ANTÃO',16407,2616407,2627),
            (1678,'xexeu',18,'XEXÉU',16506,2616506,2293),
            (1679,'agua-branca',3,'ÁGUA BRANCA',102,2700102,2701),
            (1680,'anadia',3,'ANADIA',201,2700201,2703),
            (1681,'arapiraca',3,'ARAPIRACA',300,2700300,2705),
            (1682,'atalaia',3,'ATALAIA',409,2700409,2707),
            (1683,'barra-de-santo-antonio',3,'BARRA DE SANTO ANTÔNIO',508,2700508,2709),
            (1684,'barra-de-sao-miguel',3,'BARRA DE SÃO MIGUEL',607,2700607,2711),
            (1685,'batalha',3,'BATALHA',706,2700706,2713)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1686,'belem',3,'BELÉM',805,2700805,2715),
            (1687,'belo-monte',3,'BELO MONTE',904,2700904,2717),
            (1688,'boca-da-mata',3,'BOCA DA MATA',1001,2701001,2719),
            (1689,'branquinha',3,'BRANQUINHA',1100,2701100,2721),
            (1690,'cacimbinhas',3,'CACIMBINHAS',1209,2701209,2723),
            (1691,'cajueiro',3,'CAJUEIRO',1308,2701308,2725),
            (1692,'campestre',3,'CAMPESTRE',1357,2701357,560),
            (1693,'campo-alegre',3,'CAMPO ALEGRE',1407,2701407,2727),
            (1694,'campo-grande',3,'CAMPO GRANDE',1506,2701506,2729),
            (1695,'canapi',3,'CANAPI',1605,2701605,2731)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1696,'capela',3,'CAPELA',1704,2701704,2733),
            (1697,'carneiros',3,'CARNEIROS',1803,2701803,2735),
            (1698,'cha-preta',3,'CHÃ PRETA',1902,2701902,2737),
            (1699,'coite-do-noia',3,'COITÉ DO NÓIA',2009,2702009,2739),
            (1700,'colonia-leopoldina',3,'COLÔNIA LEOPOLDINA',2108,2702108,2741),
            (1701,'coqueiro-seco',3,'COQUEIRO SECO',2207,2702207,2743),
            (1702,'coruripe',3,'CORURIPE',2306,2702306,2745),
            (1703,'craibas',3,'CRAÍBAS',2355,2702355,2889),
            (1704,'delmiro-gouveia',3,'DELMIRO GOUVEIA',2405,2702405,2747),
            (1705,'dois-riachos',3,'DOIS RIACHOS',2504,2702504,2749)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1706,'estrela-de-alagoas',3,'ESTRELA DE ALAGOAS',2553,2702553,2643),
            (1707,'feira-grande',3,'FEIRA GRANDE',2603,2702603,2751),
            (1708,'feliz-deserto',3,'FELIZ DESERTO',2702,2702702,2753),
            (1709,'flexeiras',3,'FLEXEIRAS',2801,2702801,2755),
            (1710,'girau-do-ponciano',3,'GIRAU DO PONCIANO',2900,2702900,2757),
            (1711,'ibateguara',3,'IBATEGUARA',3007,2703007,2759),
            (1712,'igaci',3,'IGACI',3106,2703106,2761),
            (1713,'igreja-nova',3,'IGREJA NOVA',3205,2703205,2763),
            (1714,'inhapi',3,'INHAPI',3304,2703304,2765),
            (1715,'jacare-dos-homens',3,'JACARÉ DOS HOMENS',3403,2703403,2767)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1716,'jacuipe',3,'JACUÍPE',3502,2703502,2769),
            (1717,'japaratinga',3,'JAPARATINGA',3601,2703601,2771),
            (1718,'jaramataia',3,'JARAMATAIA',3700,2703700,2773),
            (1719,'jequia-da-praia',3,'JEQUIÁ DA PRAIA',3759,2703759,562),
            (1720,'joaquim-gomes',3,'JOAQUIM GOMES',3809,2703809,2775),
            (1721,'jundia',3,'JUNDIÁ',3908,2703908,2777),
            (1722,'junqueiro',3,'JUNQUEIRO',4005,2704005,2779),
            (1723,'lagoa-da-canoa',3,'LAGOA DA CANOA',4104,2704104,2781),
            (1724,'limoeiro-de-anadia',3,'LIMOEIRO DE ANADIA',4203,2704203,2783),
            (1725,'maceio',3,'MACEIÓ',4302,2704302,2785)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1726,'major-isidoro',3,'MAJOR ISIDORO',4401,2704401,2787),
            (1727,'mar-vermelho',3,'MAR VERMELHO',4906,2704906,2797),
            (1728,'maragogi',3,'MARAGOGI',4500,2704500,2789),
            (1729,'maravilha',3,'MARAVILHA',4609,2704609,2791),
            (1730,'marechal-deodoro',3,'MARECHAL DEODORO',4708,2704708,2793),
            (1731,'maribondo',3,'MARIBONDO',4807,2704807,2795),
            (1732,'mata-grande',3,'MATA GRANDE',5002,2705002,2799),
            (1733,'matriz-de-camaragibe',3,'MATRIZ DE CAMARAGIBE',5101,2705101,2801),
            (1734,'messias',3,'MESSIAS',5200,2705200,2803),
            (1735,'minador-do-negrao',3,'MINADOR DO NEGRÃO',5309,2705309,2805)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1736,'monteiropolis',3,'MONTEIRÓPOLIS',5408,2705408,2807),
            (1737,'murici',3,'MURICI',5507,2705507,2809),
            (1738,'novo-lino',3,'NOVO LINO',5606,2705606,2811),
            (1739,'olho-dagua-das-flores',3,'OLHO D''ÁGUA DAS FLORES',5705,2705705,2813),
            (1740,'olho-dagua-do-casado',3,'OLHO D''ÁGUA DO CASADO',5804,2705804,2815),
            (1741,'olho-dagua-grande',3,'OLHO D''ÁGUA GRANDE',5903,2705903,2817),
            (1742,'olivenca',3,'OLIVENÇA',6000,2706000,2819),
            (1743,'ouro-branco',3,'OURO BRANCO',6109,2706109,2821),
            (1744,'palestina',3,'PALESTINA',6208,2706208,2823),
            (1745,'palmeira-dos-indios',3,'PALMEIRA DOS ÍNDIOS',6307,2706307,2825)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1746,'pao-de-acucar',3,'PÃO DE AÇÚCAR',6406,2706406,2827),
            (1747,'pariconha',3,'PARICONHA',6422,2706422,2645),
            (1748,'paripueira',3,'PARIPUEIRA',6448,2706448,2641),
            (1749,'passo-de-camaragibe',3,'PASSO DE CAMARAGIBE',6505,2706505,2829),
            (1750,'paulo-jacinto',3,'PAULO JACINTO',6604,2706604,2831),
            (1751,'penedo',3,'PENEDO',6703,2706703,2833),
            (1752,'piacabucu',3,'PIAÇABUÇU',6802,2706802,2835),
            (1753,'pilar',3,'PILAR',6901,2706901,2837),
            (1754,'pindoba',3,'PINDOBA',7008,2707008,2839),
            (1755,'piranhas',3,'PIRANHAS',7107,2707107,2841)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1756,'poco-das-trincheiras',3,'POÇO DAS TRINCHEIRAS',7206,2707206,2843),
            (1757,'porto-calvo',3,'PORTO CALVO',7305,2707305,2845),
            (1758,'porto-de-pedras',3,'PORTO DE PEDRAS',7404,2707404,2847),
            (1759,'porto-real-do-colegio',3,'PORTO REAL DO COLÉGIO',7503,2707503,2849),
            (1760,'quebrangulo',3,'QUEBRANGULO',7602,2707602,2851),
            (1761,'rio-largo',3,'RIO LARGO',7701,2707701,2853),
            (1762,'roteiro',3,'ROTEIRO',7800,2707800,2855),
            (1763,'santa-luzia-do-norte',3,'SANTA LUZIA DO NORTE',7909,2707909,2857),
            (1764,'santana-do-ipanema',3,'SANTANA DO IPANEMA',8006,2708006,2859),
            (1765,'santana-do-mundau',3,'SANTANA DO MUNDAÚ',8105,2708105,2861)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1766,'sao-bras',3,'SÃO BRÁS',8204,2708204,2863),
            (1767,'sao-jose-da-laje',3,'SÃO JOSÉ DA LAJE',8303,2708303,2865),
            (1768,'sao-jose-da-tapera',3,'SÃO JOSÉ DA TAPERA',8402,2708402,2867),
            (1769,'sao-luis-do-quitunde',3,'SÃO LUÍS DO QUITUNDE',8501,2708501,2869),
            (1770,'sao-miguel-dos-campos',3,'SÃO MIGUEL DOS CAMPOS',8600,2708600,2871),
            (1771,'sao-miguel-dos-milagres',3,'SÃO MIGUEL DOS MILAGRES',8709,2708709,2873),
            (1772,'sao-sebastiao',3,'SÃO SEBASTIÃO',8808,2708808,2875),
            (1773,'satuba',3,'SATUBA',8907,2708907,2877),
            (1774,'senador-rui-palmeira',3,'SENADOR RUI PALMEIRA',8956,2708956,2891),
            (1775,'tanque-darca',3,'TANQUE D''ARCA',9004,2709004,2879)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1776,'taquarana',3,'TAQUARANA',9103,2709103,2881),
            (1777,'teotonio-vilela',3,'TEOTÔNIO VILELA',9152,2709152,971),
            (1778,'traipu',3,'TRAIPU',9202,2709202,2883),
            (1779,'uniao-dos-palmares',3,'UNIÃO DOS PALMARES',9301,2709301,2885),
            (1780,'vicosa',3,'VIÇOSA',9400,2709400,2887),
            (1781,'amparo-do-sao-francisco',27,'AMPARO DO SÃO FRANCISCO',100,2800100,3101),
            (1782,'aquidaba',27,'AQUIDABÃ',209,2800209,3103),
            (1783,'aracaju',27,'ARACAJU',308,2800308,3105),
            (1784,'araua',27,'ARAUÁ',407,2800407,3107),
            (1785,'areia-branca',27,'AREIA BRANCA',506,2800506,3109)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1786,'barra-dos-coqueiros',27,'BARRA DOS COQUEIROS',605,2800605,3111),
            (1787,'boquim',27,'BOQUIM',670,2800670,3115),
            (1788,'brejo-grande',27,'BREJO GRANDE',704,2800704,3113),
            (1789,'campo-do-brito',27,'CAMPO DO BRITO',1009,2801009,3119),
            (1790,'canhoba',27,'CANHOBA',1108,2801108,3121),
            (1791,'caninde-de-sao-francisco',27,'CANINDÉ DE SÃO FRANCISCO',1207,2801207,3123),
            (1792,'capela',27,'CAPELA',1306,2801306,3125),
            (1793,'carira',27,'CARIRA',1405,2801405,3127),
            (1794,'carmopolis',27,'CARMÓPOLIS',1504,2801504,3129),
            (1795,'cedro-de-sao-joao',27,'CEDRO DE SÃO JOÃO',1603,2801603,3131)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1796,'cristinapolis',27,'CRISTINÁPOLIS',1702,2801702,3133),
            (1797,'cumbe',27,'CUMBE',1900,2801900,3137),
            (1798,'divina-pastora',27,'DIVINA PASTORA',2007,2802007,3139),
            (1799,'estancia',27,'ESTÂNCIA',2106,2802106,3141),
            (1800,'feira-nova',27,'FEIRA NOVA',2205,2802205,3143),
            (1801,'frei-paulo',27,'FREI PAULO',2304,2802304,3145),
            (1802,'gararu',27,'GARARU',2403,2802403,3149),
            (1803,'general-maynard',27,'GENERAL MAYNARD',2502,2802502,3147),
            (1804,'gracho-cardoso',27,'GRACHO CARDOSO',2601,2802601,3151),
            (1805,'ilha-das-flores',27,'ILHA DAS FLORES',2700,2802700,3153)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1806,'indiaroba',27,'INDIAROBA',2809,2802809,3155),
            (1807,'itabaiana',27,'ITABAIANA',2908,2802908,3157),
            (1808,'itabaianinha',27,'ITABAIANINHA',3005,2803005,3159),
            (1809,'itabi',27,'ITABI',3104,2803104,3161),
            (1810,'itaporanga-dajuda',27,'ITAPORANGA D''AJUDA',3203,2803203,3163),
            (1811,'japaratuba',27,'JAPARATUBA',3302,2803302,3165),
            (1812,'japoata',27,'JAPOATÃ',3401,2803401,3167),
            (1813,'lagarto',27,'LAGARTO',3500,2803500,3169),
            (1814,'laranjeiras',27,'LARANJEIRAS',3609,2803609,3171),
            (1815,'macambira',27,'MACAMBIRA',3708,2803708,3173)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1816,'malhada-dos-bois',27,'MALHADA DOS BOIS',3807,2803807,3175),
            (1817,'malhador',27,'MALHADOR',3906,2803906,3177),
            (1818,'maruim',27,'MARUIM',4003,2804003,3179),
            (1819,'moita-bonita',27,'MOITA BONITA',4102,2804102,3181),
            (1820,'monte-alegre-de-sergipe',27,'MONTE ALEGRE DE SERGIPE',4201,2804201,3183),
            (1821,'muribeca',27,'MURIBECA',4300,2804300,3185),
            (1822,'neopolis',27,'NEÓPOLIS',4409,2804409,3187),
            (1823,'nossa-senhora-aparecida',27,'NOSSA SENHORA APARECIDA',4458,2804458,3135),
            (1824,'nossa-senhora-da-gloria',27,'NOSSA SENHORA DA GLÓRIA',4508,2804508,3189),
            (1825,'nossa-senhora-das-dores',27,'NOSSA SENHORA DAS DORES',4607,2804607,3191)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1826,'nossa-senhora-de-lourdes',27,'NOSSA SENHORA DE LOURDES',4706,2804706,3193),
            (1827,'nossa-senhora-do-socorro',27,'NOSSA SENHORA DO SOCORRO',4805,2804805,3195),
            (1828,'pacatuba',27,'PACATUBA',4904,2804904,3197),
            (1829,'pedra-mole',27,'PEDRA MOLE',5000,2805000,3199),
            (1830,'pedrinhas',27,'PEDRINHAS',5109,2805109,3201),
            (1831,'pinhao',27,'PINHÃO',5208,2805208,3203),
            (1832,'pirambu',27,'PIRAMBU',5307,2805307,3205),
            (1833,'poco-redondo',27,'POÇO REDONDO',5406,2805406,3207),
            (1834,'poco-verde',27,'POÇO VERDE',5505,2805505,3209),
            (1835,'porto-da-folha',27,'PORTO DA FOLHA',5604,2805604,3211)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1836,'propria',27,'PROPRIÁ',5703,2805703,3213),
            (1837,'riachao-do-dantas',27,'RIACHÃO DO DANTAS',5802,2805802,3215),
            (1838,'riachuelo',27,'RIACHUELO',5901,2805901,3217),
            (1839,'ribeiropolis',27,'RIBEIRÓPOLIS',6008,2806008,3219),
            (2260,'valenca',6,'VALENÇA',32903,2932903,3957),
            (1840,'rosario-do-catete',27,'ROSÁRIO DO CATETE',6107,2806107,3221),
            (1841,'salgado',27,'SALGADO',6206,2806206,3223),
            (1842,'santa-luzia-do-itanhy',27,'SANTA LUZIA DO ITANHY',6305,2806305,3225),
            (1843,'santa-rosa-de-lima',27,'SANTA ROSA DE LIMA',6503,2806503,3229),
            (1844,'santana-do-sao-francisco',27,'SANTANA DO SÃO FRANCISCO',6404,2806404,2647)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1845,'santo-amaro-das-brotas',27,'SANTO AMARO DAS BROTAS',6602,2806602,3231),
            (1846,'sao-cristovao',27,'SÃO CRISTÓVÃO',6701,2806701,3233),
            (1847,'sao-domingos',27,'SÃO DOMINGOS',6800,2806800,3235),
            (1848,'sao-francisco',27,'SÃO FRANCISCO',6909,2806909,3237),
            (1849,'sao-miguel-do-aleixo',27,'SÃO MIGUEL DO ALEIXO',7006,2807006,3239),
            (1850,'simao-dias',27,'SIMÃO DIAS',7105,2807105,3241),
            (1851,'siriri',27,'SIRIRI',7204,2807204,3243),
            (1852,'telha',27,'TELHA',7303,2807303,3245),
            (1853,'tobias-barreto',27,'TOBIAS BARRETO',7402,2807402,3247),
            (1854,'tomar-do-geru',27,'TOMAR DO GERU',7501,2807501,3249)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1855,'umbauba',27,'UMBAÚBA',7600,2807600,3251),
            (1856,'abaira',6,'ABAÍRA',108,2900108,3301),
            (1857,'abare',6,'ABARÉ',207,2900207,3303),
            (1858,'acajutiba',6,'ACAJUTIBA',306,2900306,3305),
            (1859,'adustina',6,'ADUSTINA',355,2900355,3253),
            (1860,'agua-fria',6,'ÁGUA FRIA',405,2900405,3307),
            (1861,'aiquara',6,'AIQUARA',603,2900603,3311),
            (1862,'alagoinhas',6,'ALAGOINHAS',702,2900702,3313),
            (1863,'alcobaca',6,'ALCOBAÇA',801,2900801,3315),
            (1864,'almadina',6,'ALMADINA',900,2900900,3317)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1865,'amargosa',6,'AMARGOSA',1007,2901007,3319),
            (1866,'amelia-rodrigues',6,'AMÉLIA RODRIGUES',1106,2901106,3321),
            (1867,'america-dourada',6,'AMÉRICA DOURADA',1155,2901155,3071),
            (1868,'anage',6,'ANAGÉ',1205,2901205,3323),
            (1869,'andarai',6,'ANDARAÍ',1304,2901304,3325),
            (1870,'andorinha',6,'ANDORINHA',1353,2901353,3255),
            (1871,'angical',6,'ANGICAL',1403,2901403,3327),
            (1872,'anguera',6,'ANGUERA',1502,2901502,3329),
            (1873,'antas',6,'ANTAS',1601,2901601,3331),
            (1874,'antonio-cardoso',6,'ANTÔNIO CARDOSO',1700,2901700,3333)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1875,'antonio-goncalves',6,'ANTÔNIO GONÇALVES',1809,2901809,3335),
            (1876,'apora',6,'APORÁ',1908,2901908,3337),
            (1877,'apuarema',6,'APUAREMA',1957,2901957,3257),
            (1878,'aracas',6,'ARAÇÁS',2054,2902054,3259),
            (1879,'aracatu',6,'ARACATU',2005,2902005,3339),
            (1880,'araci',6,'ARACI',2104,2902104,3341),
            (1881,'aramari',6,'ARAMARI',2203,2902203,3343),
            (1882,'arataca',6,'ARATACA',2252,2902252,3073),
            (1883,'aratuipe',6,'ARATUÍPE',2302,2902302,3345),
            (1884,'aurelino-leal',6,'AURELINO LEAL',2401,2902401,3347)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1885,'baianopolis',6,'BAIANÓPOLIS',2500,2902500,3349),
            (1886,'baixa-grande',6,'BAIXA GRANDE',2609,2902609,3351),
            (1887,'banzae',6,'BANZAÊ',2658,2902658,3261),
            (1888,'barra',6,'BARRA',2708,2902708,3353),
            (1889,'barra-da-estiva',6,'BARRA DA ESTIVA',2807,2902807,3355),
            (1890,'barra-do-choca',6,'BARRA DO CHOÇA',2906,2902906,3357),
            (1891,'barra-do-mendes',6,'BARRA DO MENDES',3003,2903003,3359),
            (1892,'barra-do-rocha',6,'BARRA DO ROCHA',3102,2903102,3361),
            (1893,'barreiras',6,'BARREIRAS',3201,2903201,3363),
            (1894,'barro-alto',6,'BARRO ALTO',3235,2903235,3075)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1895,'barro-preto',6,'BARRO PRETO',3300,2903300,3365),
            (1896,'barrocas',6,'BARROCAS',3276,2903276,1110),
            (1897,'belmonte',6,'BELMONTE',3409,2903409,3367),
            (1898,'belo-campo',6,'BELO CAMPO',3508,2903508,3369),
            (1899,'biritinga',6,'BIRITINGA',3607,2903607,3371),
            (1900,'boa-nova',6,'BOA NOVA',3706,2903706,3373),
            (1901,'boa-vista-do-tupim',6,'BOA VISTA DO TUPIM',3805,2903805,3375),
            (1902,'bom-jesus-da-lapa',6,'BOM JESUS DA LAPA',3904,2903904,3377),
            (1903,'bom-jesus-da-serra',6,'BOM JESUS DA SERRA',3953,2903953,3263),
            (1904,'boninal',6,'BONINAL',4001,2904001,3379)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1905,'bonito',6,'BONITO',4050,2904050,3265),
            (1906,'boquira',6,'BOQUIRA',4100,2904100,3381),
            (1907,'botupora',6,'BOTUPORÃ',4209,2904209,3383),
            (1908,'brejoes',6,'BREJÕES',4308,2904308,3385),
            (1909,'brejolandia',6,'BREJOLÂNDIA',4407,2904407,3387),
            (1910,'brotas-de-macaubas',6,'BROTAS DE MACAÚBAS',4506,2904506,3389),
            (1911,'brumado',6,'BRUMADO',4605,2904605,3391),
            (1912,'buerarema',6,'BUERAREMA',4704,2904704,3393),
            (1913,'buritirama',6,'BURITIRAMA',4753,2904753,3079),
            (1914,'caatiba',6,'CAATIBA',4803,2904803,3395)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1915,'cabaceiras-do-paraguacu',6,'CABACEIRAS DO PARAGUAÇU',4852,2904852,3267),
            (1916,'cachoeira',6,'CACHOEIRA',4902,2904902,3397),
            (1917,'cacule',6,'CACULÉ',5008,2905008,3399),
            (1918,'caem',6,'CAÉM',5107,2905107,3401),
            (1919,'caetanos',6,'CAETANOS',5156,2905156,3269),
            (1920,'caetite',6,'CAETITÉ',5206,2905206,3403),
            (1921,'cafarnaum',6,'CAFARNAUM',5305,2905305,3405),
            (1922,'cairu',6,'CAIRU',5404,2905404,3407),
            (1923,'caldeirao-grande',6,'CALDEIRÃO GRANDE',5503,2905503,3409),
            (1924,'camacan',6,'CAMACAN',5602,2905602,3411)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1925,'camacari',6,'CAMAÇARI',5701,2905701,3413),
            (1926,'camamu',6,'CAMAMU',5800,2905800,3415),
            (1927,'campo-alegre-de-lourdes',6,'CAMPO ALEGRE DE LOURDES',5909,2905909,3417),
            (1928,'campo-formoso',6,'CAMPO FORMOSO',6006,2906006,3419),
            (1929,'canapolis',6,'CANÁPOLIS',6105,2906105,3421),
            (1930,'canarana',6,'CANARANA',6204,2906204,3423),
            (1931,'canavieiras',6,'CANAVIEIRAS',6303,2906303,3425),
            (1932,'candeal',6,'CANDEAL',6402,2906402,3427),
            (1933,'candeias',6,'CANDEIAS',6501,2906501,3429),
            (1934,'candiba',6,'CANDIBA',6600,2906600,3431)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1935,'candido-sales',6,'CÂNDIDO SALES',6709,2906709,3433),
            (1936,'cansancao',6,'CANSANÇÃO',6808,2906808,3435),
            (1937,'canudos',6,'CANUDOS',6824,2906824,3085),
            (1938,'capela-do-alto-alegre',6,'CAPELA DO ALTO ALEGRE',6857,2906857,3081),
            (1939,'capim-grosso',6,'CAPIM GROSSO',6873,2906873,3083),
            (1940,'caraibas',6,'CARAÍBAS',6899,2906899,3271),
            (1941,'caravelas',6,'CARAVELAS',6907,2906907,3437),
            (1942,'cardeal-da-silva',6,'CARDEAL DA SILVA',7004,2907004,3439),
            (1943,'carinhanha',6,'CARINHANHA',7103,2907103,3441),
            (1944,'casa-nova',6,'CASA NOVA',7202,2907202,3443)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1945,'castro-alves',6,'CASTRO ALVES',7301,2907301,3445),
            (1946,'catolandia',6,'CATOLÂNDIA',7400,2907400,3447),
            (1947,'catu',6,'CATU',7509,2907509,3449),
            (1948,'caturama',6,'CATURAMA',7558,2907558,3273),
            (1949,'central',6,'CENTRAL',7608,2907608,3451),
            (1950,'chorrocho',6,'CHORROCHÓ',7707,2907707,3453),
            (1951,'cicero-dantas',6,'CÍCERO DANTAS',7806,2907806,3455),
            (1952,'cipo',6,'CIPÓ',7905,2907905,3457),
            (1953,'coaraci',6,'COARACI',8002,2908002,3459),
            (1954,'cocos',6,'COCOS',8101,2908101,3461)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1955,'conceicao-da-feira',6,'CONCEIÇÃO DA FEIRA',8200,2908200,3463),
            (1956,'conceicao-do-almeida',6,'CONCEIÇÃO DO ALMEIDA',8309,2908309,3465),
            (1957,'conceicao-do-coite',6,'CONCEIÇÃO DO COITÉ',8408,2908408,3467),
            (1958,'conceicao-do-jacuipe',6,'CONCEIÇÃO DO JACUÍPE',8507,2908507,3469),
            (1959,'conde',6,'CONDE',8606,2908606,3471),
            (1960,'condeuba',6,'CONDEÚBA',8705,2908705,3473),
            (1961,'contendas-do-sincora',6,'CONTENDAS DO SINCORÁ',8804,2908804,3475),
            (1962,'coracao-de-maria',6,'CORAÇÃO DE MARIA',8903,2908903,3477),
            (1963,'cordeiros',6,'CORDEIROS',9000,2909000,3479),
            (1964,'coribe',6,'CORIBE',9109,2909109,3481)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1965,'coronel-joao-sa',6,'CORONEL JOÃO SÁ',9208,2909208,3483),
            (1966,'correntina',6,'CORRENTINA',9307,2909307,3485),
            (1967,'cotegipe',6,'COTEGIPE',9406,2909406,3487),
            (1968,'cravolandia',6,'CRAVOLÂNDIA',9505,2909505,3489),
            (1969,'crisopolis',6,'CRISÓPOLIS',9604,2909604,3491),
            (1970,'cristopolis',6,'CRISTÓPOLIS',9703,2909703,3493),
            (1971,'cruz-das-almas',6,'CRUZ DAS ALMAS',9802,2909802,3495),
            (1972,'curaca',6,'CURAÇÁ',9901,2909901,3497),
            (1973,'dario-meira',6,'DÁRIO MEIRA',10008,2910008,3499),
            (1974,'dias-davila',6,'DIAS D''ÁVILA',10057,2910057,3087)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1975,'dom-basilio',6,'DOM BASÍLIO',10107,2910107,3501),
            (1976,'dom-macedo-costa',6,'DOM MACEDO COSTA',10206,2910206,3503),
            (1977,'elisio-medrado',6,'ELÍSIO MEDRADO',10305,2910305,3505),
            (1978,'encruzilhada',6,'ENCRUZILHADA',10404,2910404,3507),
            (1979,'entre-rios',6,'ENTRE RIOS',10503,2910503,3509),
            (1980,'erico-cardoso',6,'ÉRICO CARDOSO',504,2900504,3309),
            (1981,'esplanada',6,'ESPLANADA',10602,2910602,3511),
            (1982,'euclides-da-cunha',6,'EUCLIDES DA CUNHA',10701,2910701,3513),
            (1983,'eunapolis',6,'EUNÁPOLIS',10727,2910727,3117),
            (1984,'fatima',6,'FÁTIMA',10750,2910750,3089)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1985,'feira-da-mata',6,'FEIRA DA MATA',10776,2910776,3275),
            (1986,'feira-de-santana',6,'FEIRA DE SANTANA',10800,2910800,3515),
            (1987,'filadelfia',6,'FILADÉLFIA',10859,2910859,3091),
            (1988,'firmino-alves',6,'FIRMINO ALVES',10909,2910909,3517),
            (1989,'floresta-azul',6,'FLORESTA AZUL',11006,2911006,3519),
            (1990,'formosa-do-rio-preto',6,'FORMOSA DO RIO PRETO',11105,2911105,3521),
            (1991,'gandu',6,'GANDU',11204,2911204,3523),
            (1992,'gaviao',6,'GAVIÃO',11253,2911253,3093),
            (1993,'gentio-do-ouro',6,'GENTIO DO OURO',11303,2911303,3525),
            (1994,'gloria',6,'GLÓRIA',11402,2911402,3527)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (1995,'gongogi',6,'GONGOGI',11501,2911501,3529),
            (1996,'governador-mangabeira',6,'GOVERNADOR MANGABEIRA',11600,2911600,3531),
            (1997,'guajeru',6,'GUAJERU',11659,2911659,3095),
            (1998,'guanambi',6,'GUANAMBI',11709,2911709,3533),
            (1999,'guaratinga',6,'GUARATINGA',11808,2911808,3535),
            (2000,'heliopolis',6,'HELIÓPOLIS',11857,2911857,3097),
            (2001,'iacu',6,'IAÇU',11907,2911907,3537),
            (2002,'ibiassuce',6,'IBIASSUCÊ',12004,2912004,3539),
            (2003,'ibicarai',6,'IBICARAÍ',12103,2912103,3541),
            (2004,'ibicoara',6,'IBICOARA',12202,2912202,3543)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2005,'ibicui',6,'IBICUÍ',12301,2912301,3545),
            (2006,'ibipeba',6,'IBIPEBA',12400,2912400,3547),
            (2007,'ibipitanga',6,'IBIPITANGA',12509,2912509,3551),
            (2008,'ibiquera',6,'IBIQUERA',12608,2912608,3553),
            (2009,'ibirapitanga',6,'IBIRAPITANGA',12707,2912707,3555),
            (2010,'ibirapua',6,'IBIRAPUÃ',12806,2912806,3557),
            (2011,'ibirataia',6,'IBIRATAIA',12905,2912905,3559),
            (2012,'ibitiara',6,'IBITIARA',13002,2913002,3561),
            (2013,'ibitita',6,'IBITITÁ',13101,2913101,3563),
            (2014,'ibotirama',6,'IBOTIRAMA',13200,2913200,3565)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2015,'ichu',6,'ICHU',13309,2913309,3567),
            (2016,'igapora',6,'IGAPORÃ',13408,2913408,3569),
            (2017,'igrapiuna',6,'IGRAPIÚNA',13457,2913457,3277),
            (2018,'iguai',6,'IGUAÍ',13507,2913507,3571),
            (2019,'ilheus',6,'ILHÉUS',13606,2913606,3573),
            (2020,'inhambupe',6,'INHAMBUPE',13705,2913705,3575),
            (2021,'ipecaeta',6,'IPECAETÁ',13804,2913804,3577),
            (2022,'ipiau',6,'IPIAÚ',13903,2913903,3579),
            (2023,'ipira',6,'IPIRÁ',14000,2914000,3581),
            (2024,'ipupiara',6,'IPUPIARA',14109,2914109,3583)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2025,'irajuba',6,'IRAJUBA',14208,2914208,3585),
            (2026,'iramaia',6,'IRAMAIA',14307,2914307,3587),
            (2027,'iraquara',6,'IRAQUARA',14406,2914406,3589),
            (2028,'irara',6,'IRARÁ',14505,2914505,3591),
            (2029,'irece',6,'IRECÊ',14604,2914604,3593),
            (2030,'itabela',6,'ITABELA',14653,2914653,3279),
            (2031,'itaberaba',6,'ITABERABA',14703,2914703,3595),
            (2032,'itabuna',6,'ITABUNA',14802,2914802,3597),
            (2033,'itacare',6,'ITACARÉ',14901,2914901,3599),
            (2034,'itaete',6,'ITAETÉ',15007,2915007,3601)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2035,'itagi',6,'ITAGI',15106,2915106,3603),
            (2036,'itagiba',6,'ITAGIBÁ',15205,2915205,3605),
            (2037,'itagimirim',6,'ITAGIMIRIM',15304,2915304,3607),
            (2038,'itaguacu-da-bahia',6,'ITAGUAÇU DA BAHIA',15353,2915353,3281),
            (2039,'itaju-do-colonia',6,'ITAJU DO COLÔNIA',15403,2915403,3609),
            (2040,'itajuipe',6,'ITAJUÍPE',15502,2915502,3611),
            (2041,'itamaraju',6,'ITAMARAJU',15601,2915601,3613),
            (2042,'itamari',6,'ITAMARI',15700,2915700,3615),
            (2043,'itambe',6,'ITAMBÉ',15809,2915809,3617),
            (2044,'itanagra',6,'ITANAGRA',15908,2915908,3619)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2045,'itanhem',6,'ITANHÉM',16005,2916005,3621),
            (2046,'itaparica',6,'ITAPARICA',16104,2916104,3623),
            (2047,'itape',6,'ITAPÉ',16203,2916203,3625),
            (2048,'itapebi',6,'ITAPEBI',16302,2916302,3627),
            (2049,'itapetinga',6,'ITAPETINGA',16401,2916401,3629),
            (2050,'itapicuru',6,'ITAPICURU',16500,2916500,3631),
            (2051,'itapitanga',6,'ITAPITANGA',16609,2916609,3633),
            (2052,'itaquara',6,'ITAQUARA',16708,2916708,3635),
            (2053,'itarantim',6,'ITARANTIM',16807,2916807,3637),
            (2054,'itatim',6,'ITATIM',16856,2916856,3283)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2055,'itirucu',6,'ITIRUÇU',16906,2916906,3639),
            (2056,'itiuba',6,'ITIÚBA',17003,2917003,3641),
            (2057,'itororo',6,'ITORORÓ',17102,2917102,3643),
            (2058,'ituacu',6,'ITUAÇU',17201,2917201,3645),
            (2059,'itubera',6,'ITUBERÁ',17300,2917300,3647),
            (2060,'iuiu',6,'IUIU',17334,2917334,3285),
            (2061,'jaborandi',6,'JABORANDI',17359,2917359,9859),
            (2062,'jacaraci',6,'JACARACI',17409,2917409,3649),
            (2063,'jacobina',6,'JACOBINA',17508,2917508,3651),
            (2064,'jaguaquara',6,'JAGUAQUARA',17607,2917607,3653)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2065,'jaguarari',6,'JAGUARARI',17706,2917706,3655),
            (2066,'jaguaripe',6,'JAGUARIPE',17805,2917805,3657),
            (2067,'jandaira',6,'JANDAÍRA',17904,2917904,3659),
            (2068,'jequie',6,'JEQUIÉ',18001,2918001,3661),
            (2069,'jeremoabo',6,'JEREMOABO',18100,2918100,3663),
            (2070,'jiquirica',6,'JIQUIRIÇÁ',18209,2918209,3665),
            (2071,'jitauna',6,'JITAÚNA',18308,2918308,3667),
            (2072,'joao-dourado',6,'JOÃO DOURADO',18357,2918357,3099),
            (2073,'juazeiro',6,'JUAZEIRO',18407,2918407,3669),
            (2074,'jucurucu',6,'JUCURUÇU',18456,2918456,3287)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2075,'jussara',6,'JUSSARA',18506,2918506,3671),
            (2076,'jussari',6,'JUSSARI',18555,2918555,3069),
            (2077,'jussiape',6,'JUSSIAPE',18605,2918605,3673),
            (2078,'lafaiete-coutinho',6,'LAFAIETE COUTINHO',18704,2918704,3675),
            (2079,'lagoa-real',6,'LAGOA REAL',18753,2918753,3289),
            (2080,'laje',6,'LAJE',18803,2918803,3677),
            (2081,'lajedao',6,'LAJEDÃO',18902,2918902,3679),
            (2082,'lajedinho',6,'LAJEDINHO',19009,2919009,3681),
            (2083,'lajedo-do-tabocal',6,'LAJEDO DO TABOCAL',19058,2919058,3291),
            (2084,'lamarao',6,'LAMARÃO',19108,2919108,3683)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2085,'lapao',6,'LAPÃO',19157,2919157,3973),
            (2086,'lauro-de-freitas',6,'LAURO DE FREITAS',19207,2919207,3685),
            (2087,'lencois',6,'LENÇÓIS',19306,2919306,3687),
            (2088,'licinio-de-almeida',6,'LICÍNIO DE ALMEIDA',19405,2919405,3689),
            (2089,'livramento-de-nossa-senhora',6,'LIVRAMENTO DE NOSSA SENHORA',19504,2919504,3691),
            (2090,'luis-eduardo-magalhaes',6,'LUÍS EDUARDO MAGALHÃES',19553,2919553,1112),
            (2091,'macajuba',6,'MACAJUBA',19603,2919603,3693),
            (2092,'macarani',6,'MACARANI',19702,2919702,3695),
            (2093,'macaubas',6,'MACAÚBAS',19801,2919801,3697),
            (2094,'macurure',6,'MACURURÉ',19900,2919900,3699)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2095,'madre-de-deus',6,'MADRE DE DEUS',19926,2919926,3293),
            (2096,'maetinga',6,'MAETINGA',19959,2919959,3975),
            (2097,'maiquinique',6,'MAIQUINIQUE',20007,2920007,3701),
            (2098,'mairi',6,'MAIRI',20106,2920106,3703),
            (2099,'malhada',6,'MALHADA',20205,2920205,3705),
            (2100,'malhada-de-pedras',6,'MALHADA DE PEDRAS',20304,2920304,3707),
            (2101,'manoel-vitorino',6,'MANOEL VITORINO',20403,2920403,3709),
            (2102,'mansidao',6,'MANSIDÃO',20452,2920452,3977),
            (2103,'maracas',6,'MARACÁS',20502,2920502,3711),
            (2104,'maragogipe',6,'MARAGOGIPE',20601,2920601,3713)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2105,'marau',6,'MARAÚ',20700,2920700,3715),
            (2106,'marcionilio-souza',6,'MARCIONÍLIO SOUZA',20809,2920809,3717),
            (2107,'mascote',6,'MASCOTE',20908,2920908,3719),
            (2108,'mata-de-sao-joao',6,'MATA DE SÃO JOÃO',21005,2921005,3721),
            (2109,'matina',6,'MATINA',21054,2921054,3295),
            (2110,'medeiros-neto',6,'MEDEIROS NETO',21104,2921104,3723),
            (2111,'miguel-calmon',6,'MIGUEL CALMON',21203,2921203,3725),
            (2112,'milagres',6,'MILAGRES',21302,2921302,3727),
            (2113,'mirangaba',6,'MIRANGABA',21401,2921401,3729),
            (2114,'mirante',6,'MIRANTE',21450,2921450,3297)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2115,'monte-santo',6,'MONTE SANTO',21500,2921500,3731),
            (2116,'morpara',6,'MORPARÁ',21609,2921609,3733),
            (2117,'morro-do-chapeu',6,'MORRO DO CHAPÉU',21708,2921708,3735),
            (2118,'mortugaba',6,'MORTUGABA',21807,2921807,3737),
            (2119,'mucuge',6,'MUCUGÊ',21906,2921906,3739),
            (2120,'mucuri',6,'MUCURI',22003,2922003,3741),
            (2121,'mulungu-do-morro',6,'MULUNGU DO MORRO',22052,2922052,3299),
            (2122,'mundo-novo',6,'MUNDO NOVO',22102,2922102,3743),
            (2123,'muniz-ferreira',6,'MUNIZ FERREIRA',22201,2922201,3745),
            (2124,'muquem-do-sao-francisco',6,'MUQUÉM DO SÃO FRANCISCO',22250,2922250,3005)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2125,'muritiba',6,'MURITIBA',22300,2922300,3747),
            (2126,'mutuipe',6,'MUTUÍPE',22409,2922409,3749),
            (2127,'nazare',6,'NAZARÉ',22508,2922508,3751),
            (2128,'nilo-pecanha',6,'NILO PEÇANHA',22607,2922607,3753),
            (2129,'nordestina',6,'NORDESTINA',22656,2922656,3979),
            (2130,'nova-canaa',6,'NOVA CANAÃ',22706,2922706,3755),
            (2131,'nova-fatima',6,'NOVA FÁTIMA',22730,2922730,3007),
            (2132,'nova-ibia',6,'NOVA IBIÁ',22755,2922755,3009),
            (2133,'nova-itarana',6,'NOVA ITARANA',22805,2922805,3757),
            (2134,'nova-redencao',6,'NOVA REDENÇÃO',22854,2922854,3011)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2135,'nova-soure',6,'NOVA SOURE',22904,2922904,3759),
            (2136,'nova-vicosa',6,'NOVA VIÇOSA',23001,2923001,3761),
            (2137,'novo-horizonte',6,'NOVO HORIZONTE',23035,2923035,3013),
            (2138,'novo-triunfo',6,'NOVO TRIUNFO',23050,2923050,3015),
            (2139,'olindina',6,'OLINDINA',23100,2923100,3763),
            (2140,'oliveira-dos-brejinhos',6,'OLIVEIRA DOS BREJINHOS',23209,2923209,3765),
            (2141,'ouricangas',6,'OURIÇANGAS',23308,2923308,3767),
            (2142,'ourolandia',6,'OUROLÂNDIA',23357,2923357,3017),
            (2143,'palmas-de-monte-alto',6,'PALMAS DE MONTE ALTO',23407,2923407,3769),
            (2144,'palmeiras',6,'PALMEIRAS',23506,2923506,3771)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2145,'paramirim',6,'PARAMIRIM',23605,2923605,3773),
            (2146,'paratinga',6,'PARATINGA',23704,2923704,3775),
            (2147,'paripiranga',6,'PARIPIRANGA',23803,2923803,3777),
            (2148,'pau-brasil',6,'PAU BRASIL',23902,2923902,3779),
            (2149,'paulo-afonso',6,'PAULO AFONSO',24009,2924009,3781),
            (2150,'pe-de-serra',6,'PÉ DE SERRA',24058,2924058,3981),
            (2151,'pedrao',6,'PEDRÃO',24108,2924108,3783),
            (2152,'pedro-alexandre',6,'PEDRO ALEXANDRE',24207,2924207,3785),
            (2153,'piata',6,'PIATÃ',24306,2924306,3787),
            (2154,'pilao-arcado',6,'PILÃO ARCADO',24405,2924405,3789)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2155,'pindai',6,'PINDAÍ',24504,2924504,3791),
            (2156,'pindobacu',6,'PINDOBAÇU',24603,2924603,3793),
            (2157,'pintadas',6,'PINTADAS',24652,2924652,3983),
            (2158,'pirai-do-norte',6,'PIRAÍ DO NORTE',24678,2924678,3019),
            (2159,'piripa',6,'PIRIPÁ',24702,2924702,3795),
            (2160,'piritiba',6,'PIRITIBA',24801,2924801,3797),
            (2161,'planaltino',6,'PLANALTINO',24900,2924900,3799),
            (2162,'planalto',6,'PLANALTO',25006,2925006,3801),
            (2163,'pocoes',6,'POÇÕES',25105,2925105,3803),
            (2164,'pojuca',6,'POJUCA',25204,2925204,3805)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2165,'ponto-novo',6,'PONTO NOVO',25253,2925253,3021),
            (2166,'porto-seguro',6,'PORTO SEGURO',25303,2925303,3807),
            (2167,'potiragua',6,'POTIRAGUÁ',25402,2925402,3809),
            (2168,'prado',6,'PRADO',25501,2925501,3811),
            (2169,'presidente-dutra',6,'PRESIDENTE DUTRA',25600,2925600,3813),
            (2170,'presidente-janio-quadros',6,'PRESIDENTE JÂNIO QUADROS',25709,2925709,3815),
            (2171,'presidente-tancredo-neves',6,'PRESIDENTE TANCREDO NEVES',25758,2925758,3023),
            (2172,'queimadas',6,'QUEIMADAS',25808,2925808,3817),
            (2173,'quijingue',6,'QUIJINGUE',25907,2925907,3819),
            (2174,'quixabeira',6,'QUIXABEIRA',25931,2925931,3025)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2175,'rafael-jambeiro',6,'RAFAEL JAMBEIRO',25956,2925956,3985),
            (2176,'remanso',6,'REMANSO',26004,2926004,3821),
            (2177,'retirolandia',6,'RETIROLÂNDIA',26103,2926103,3823),
            (2178,'riachao-das-neves',6,'RIACHÃO DAS NEVES',26202,2926202,3825),
            (2179,'riachao-do-jacuipe',6,'RIACHÃO DO JACUÍPE',26301,2926301,3827),
            (2180,'riacho-de-santana',6,'RIACHO DE SANTANA',26400,2926400,3829),
            (2181,'ribeira-do-amparo',6,'RIBEIRA DO AMPARO',26509,2926509,3831),
            (2182,'ribeira-do-pombal',6,'RIBEIRA DO POMBAL',26608,2926608,3833),
            (2183,'ribeirao-do-largo',6,'RIBEIRÃO DO LARGO',26657,2926657,3027),
            (2184,'rio-de-contas',6,'RIO DE CONTAS',26707,2926707,3835)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2185,'rio-do-antonio',6,'RIO DO ANTÔNIO',26806,2926806,3837),
            (2186,'rio-do-pires',6,'RIO DO PIRES',26905,2926905,3839),
            (2187,'rio-real',6,'RIO REAL',27002,2927002,3841),
            (2188,'rodelas',6,'RODELAS',27101,2927101,3843),
            (2189,'ruy-barbosa',6,'RUY BARBOSA',27200,2927200,3845),
            (2190,'salinas-da-margarida',6,'SALINAS DA MARGARIDA',27309,2927309,3847),
            (2191,'salvador',6,'SALVADOR',27408,2927408,3849),
            (2192,'santa-barbara',6,'SANTA BÁRBARA',27507,2927507,3851),
            (2193,'santa-brigida',6,'SANTA BRÍGIDA',27606,2927606,3853),
            (2194,'santa-cruz-cabralia',6,'SANTA CRUZ CABRÁLIA',27705,2927705,3855)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2195,'santa-cruz-da-vitoria',6,'SANTA CRUZ DA VITÓRIA',27804,2927804,3857),
            (2196,'santa-ines',6,'SANTA INÊS',27903,2927903,3859),
            (2197,'santa-luzia',6,'SANTA LUZIA',28059,2928059,3987),
            (2198,'santa-maria-da-vitoria',6,'SANTA MARIA DA VITÓRIA',28109,2928109,3863),
            (2199,'santa-rita-de-cassia',6,'SANTA RITA DE CÁSSIA',28406,2928406,3549),
            (2200,'santa-terezinha',6,'SANTA TEREZINHA',28505,2928505,3869),
            (2201,'santaluz',6,'SANTALUZ',28000,2928000,3861),
            (2202,'santana',6,'SANTANA',28208,2928208,3865),
            (2203,'santanopolis',6,'SANTANÓPOLIS',28307,2928307,3867),
            (2204,'santo-amaro',6,'SANTO AMARO',28604,2928604,3871)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2205,'santo-antonio-de-jesus',6,'SANTO ANTÔNIO DE JESUS',28703,2928703,3873),
            (2206,'santo-estevao',6,'SANTO ESTÊVÃO',28802,2928802,3875),
            (2207,'sao-desiderio',6,'SÃO DESIDÉRIO',28901,2928901,3877),
            (2208,'sao-domingos',6,'SÃO DOMINGOS',28950,2928950,3029),
            (2209,'sao-felipe',6,'SÃO FELIPE',29107,2929107,3881),
            (2210,'sao-felix',6,'SÃO FÉLIX',29008,2929008,3879),
            (2211,'sao-felix-do-coribe',6,'SÃO FÉLIX DO CORIBE',29057,2929057,3031),
            (2212,'sao-francisco-do-conde',6,'SÃO FRANCISCO DO CONDE',29206,2929206,3883),
            (2213,'sao-gabriel',6,'SÃO GABRIEL',29255,2929255,3989),
            (2214,'sao-goncalo-dos-campos',6,'SÃO GONÇALO DOS CAMPOS',29305,2929305,3885)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2215,'sao-jose-da-vitoria',6,'SÃO JOSÉ DA VITÓRIA',29354,2929354,3035),
            (2216,'sao-jose-do-jacuipe',6,'SÃO JOSÉ DO JACUÍPE',29370,2929370,3033),
            (2217,'sao-miguel-das-matas',6,'SÃO MIGUEL DAS MATAS',29404,2929404,3887),
            (2218,'sao-sebastiao-do-passe',6,'SÃO SEBASTIÃO DO PASSÉ',29503,2929503,3889),
            (2219,'sapeacu',6,'SAPEAÇU',29602,2929602,3891),
            (2220,'satiro-dias',6,'SÁTIRO DIAS',29701,2929701,3893),
            (2221,'saubara',6,'SAUBARA',29750,2929750,3037),
            (2222,'saude',6,'SAÚDE',29800,2929800,3895),
            (2223,'seabra',6,'SEABRA',29909,2929909,3897),
            (2224,'sebastiao-laranjeiras',6,'SEBASTIÃO LARANJEIRAS',30006,2930006,3899)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2225,'senhor-do-bonfim',6,'SENHOR DO BONFIM',30105,2930105,3901),
            (2226,'sento-se',6,'SENTO SÉ',30204,2930204,3903),
            (2227,'serra-do-ramalho',6,'SERRA DO RAMALHO',30154,2930154,3039),
            (2228,'serra-dourada',6,'SERRA DOURADA',30303,2930303,3905),
            (2229,'serra-preta',6,'SERRA PRETA',30402,2930402,3907),
            (2230,'serrinha',6,'SERRINHA',30501,2930501,3909),
            (2231,'serrolandia',6,'SERROLÂNDIA',30600,2930600,3911),
            (2232,'simoes-filho',6,'SIMÕES FILHO',30709,2930709,3913),
            (2233,'sitio-do-mato',6,'SÍTIO DO MATO',30758,2930758,3041),
            (2234,'sitio-do-quinto',6,'SÍTIO DO QUINTO',30766,2930766,3043)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2235,'sobradinho',6,'SOBRADINHO',30774,2930774,3045),
            (2236,'souto-soares',6,'SOUTO SOARES',30808,2930808,3915),
            (2237,'tabocas-do-brejo-velho',6,'TABOCAS DO BREJO VELHO',30907,2930907,3917),
            (2238,'tanhacu',6,'TANHAÇU',31004,2931004,3919),
            (2239,'tanque-novo',6,'TANQUE NOVO',31053,2931053,3991),
            (2240,'tanquinho',6,'TANQUINHO',31103,2931103,3921),
            (2241,'taperoa',6,'TAPEROÁ',31202,2931202,3923),
            (2242,'tapiramuta',6,'TAPIRAMUTÁ',31301,2931301,3925),
            (2243,'teixeira-de-freitas',6,'TEIXEIRA DE FREITAS',31350,2931350,3993),
            (2244,'teodoro-sampaio',6,'TEODORO SAMPAIO',31400,2931400,3927)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2245,'teofilandia',6,'TEOFILÂNDIA',31509,2931509,3929),
            (2246,'teolandia',6,'TEOLÂNDIA',31608,2931608,3931),
            (2247,'terra-nova',6,'TERRA NOVA',31707,2931707,3933),
            (2248,'tremedal',6,'TREMEDAL',31806,2931806,3935),
            (2249,'tucano',6,'TUCANO',31905,2931905,3937),
            (2250,'uaua',6,'UAUÁ',32002,2932002,3939),
            (2251,'ubaira',6,'UBAÍRA',32101,2932101,3941),
            (2252,'ubaitaba',6,'UBAITABA',32200,2932200,3943),
            (2253,'ubata',6,'UBATÃ',32309,2932309,3945),
            (2254,'uibai',6,'UIBAÍ',32408,2932408,3947)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2255,'umburanas',6,'UMBURANAS',32457,2932457,3047),
            (2256,'una',6,'UNA',32507,2932507,3949),
            (2261,'valente',6,'VALENTE',33000,2933000,3959),
            (2262,'varzea-da-roca',6,'VÁRZEA DA ROÇA',33059,2933059,3997),
            (2263,'varzea-do-poco',6,'VÁRZEA DO POÇO',33109,2933109,3961),
            (2264,'varzea-nova',6,'VÁRZEA NOVA',33158,2933158,3995),
            (2265,'varzedo',6,'VARZEDO',33174,2933174,3049),
            (2266,'vera-cruz',6,'VERA CRUZ',33208,2933208,3963),
            (2267,'vereda',6,'VEREDA',33257,2933257,3051),
            (2268,'vitoria-da-conquista',6,'VITÓRIA DA CONQUISTA',33307,2933307,3965)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2269,'wagner',6,'WAGNER',33406,2933406,3967),
            (2270,'wanderley',6,'WANDERLEY',33455,2933455,3999),
            (2271,'wenceslau-guimaraes',6,'WENCESLAU GUIMARÃES',33505,2933505,3969),
            (2272,'xique-xique',6,'XIQUE-XIQUE',33604,2933604,3971),
            (2273,'abadia-dos-dourados',14,'ABADIA DOS DOURADOS',104,3100104,4001),
            (2274,'abaete',14,'ABAETÉ',203,3100203,4003),
            (2275,'abre-campo',14,'ABRE CAMPO',302,3100302,4005),
            (2276,'acaiaca',14,'ACAIACA',401,3100401,4007),
            (2277,'acucena',14,'AÇUCENA',500,3100500,4009),
            (2278,'agua-boa',14,'ÁGUA BOA',609,3100609,4011)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2279,'agua-comprida',14,'ÁGUA COMPRIDA',708,3100708,4013),
            (2280,'aguanil',14,'AGUANIL',807,3100807,4015),
            (2281,'aguas-formosas',14,'ÁGUAS FORMOSAS',906,3100906,4017),
            (2282,'aguas-vermelhas',14,'ÁGUAS VERMELHAS',1003,3101003,4019),
            (2283,'aimores',14,'AIMORÉS',1102,3101102,4021),
            (2284,'aiuruoca',14,'AIURUOCA',1201,3101201,4023),
            (2285,'alagoa',14,'ALAGOA',1300,3101300,4025),
            (2286,'albertina',14,'ALBERTINA',1409,3101409,4027),
            (2287,'alem-paraiba',14,'ALÉM PARAÍBA',1508,3101508,4029),
            (2288,'alfenas',14,'ALFENAS',1607,3101607,4031)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2289,'alfredo-vasconcelos',14,'ALFREDO VASCONCELOS',1631,3101631,2681),
            (2290,'almenara',14,'ALMENARA',1706,3101706,4033),
            (2291,'alpercata',14,'ALPERCATA',1805,3101805,4035),
            (2292,'alpinopolis',14,'ALPINÓPOLIS',1904,3101904,4037),
            (2293,'alterosa',14,'ALTEROSA',2001,3102001,4039),
            (2294,'alto-caparao',14,'ALTO CAPARAÓ',2050,3102050,564),
            (2295,'alto-jequitiba',14,'ALTO JEQUITIBÁ',53509,3153509,5069),
            (2296,'alto-rio-doce',14,'ALTO RIO DOCE',2100,3102100,4041),
            (2297,'alvarenga',14,'ALVARENGA',2209,3102209,4043),
            (2298,'alvinopolis',14,'ALVINÓPOLIS',2308,3102308,4045)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2299,'alvorada-de-minas',14,'ALVORADA DE MINAS',2407,3102407,4047),
            (2300,'amparo-do-serra',14,'AMPARO DO SERRA',2506,3102506,4049),
            (2301,'andradas',14,'ANDRADAS',2605,3102605,4051),
            (2302,'andrelandia',14,'ANDRELÂNDIA',2803,3102803,4055),
            (2303,'angelandia',14,'ANGELÂNDIA',2852,3102852,566),
            (2304,'antonio-carlos',14,'ANTÔNIO CARLOS',2902,3102902,4057),
            (2305,'antonio-dias',14,'ANTÔNIO DIAS',3009,3103009,4059),
            (2306,'antonio-prado-de-minas',14,'ANTÔNIO PRADO DE MINAS',3108,3103108,4061),
            (2307,'aracai',14,'ARAÇAÍ',3207,3103207,4063),
            (2308,'aracitaba',14,'ARACITABA',3306,3103306,4065)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2309,'aracuai',14,'ARAÇUAÍ',3405,3103405,4067),
            (2310,'araguari',14,'ARAGUARI',3504,3103504,4069),
            (2311,'arantina',14,'ARANTINA',3603,3103603,4071),
            (2312,'araponga',14,'ARAPONGA',3702,3103702,4073),
            (2313,'arapora',14,'ARAPORÃ',3751,3103751,2903),
            (2314,'arapua',14,'ARAPUÁ',3801,3103801,4075),
            (2315,'araujos',14,'ARAÚJOS',3900,3103900,4077),
            (2316,'araxa',14,'ARAXÁ',4007,3104007,4079),
            (2317,'arceburgo',14,'ARCEBURGO',4106,3104106,4081),
            (2318,'arcos',14,'ARCOS',4205,3104205,4083)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2319,'areado',14,'AREADO',4304,3104304,4085),
            (2320,'argirita',14,'ARGIRITA',4403,3104403,4087),
            (2321,'aricanduva',14,'ARICANDUVA',4452,3104452,568),
            (2322,'arinos',14,'ARINOS',4502,3104502,4089),
            (2323,'astolfo-dutra',14,'ASTOLFO DUTRA',4601,3104601,4091),
            (2324,'ataleia',14,'ATALÉIA',4700,3104700,4093),
            (2325,'augusto-de-lima',14,'AUGUSTO DE LIMA',4809,3104809,4095),
            (2326,'baependi',14,'BAEPENDI',4908,3104908,4097),
            (2327,'baldim',14,'BALDIM',5004,3105004,4099),
            (2328,'bambui',14,'BAMBUÍ',5103,3105103,4101)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2329,'bandeira',14,'BANDEIRA',5202,3105202,4103),
            (2330,'bandeira-do-sul',14,'BANDEIRA DO SUL',5301,3105301,4105),
            (2331,'barao-de-cocais',14,'BARÃO DE COCAIS',5400,3105400,4107),
            (2332,'barao-de-monte-alto',14,'BARÃO DE MONTE ALTO',5509,3105509,4109),
            (2333,'barbacena',14,'BARBACENA',5608,3105608,4111),
            (2334,'barra-longa',14,'BARRA LONGA',5707,3105707,4113),
            (2335,'barroso',14,'BARROSO',5905,3105905,4117),
            (2336,'bela-vista-de-minas',14,'BELA VISTA DE MINAS',6002,3106002,4119),
            (2337,'belmiro-braga',14,'BELMIRO BRAGA',6101,3106101,4121),
            (2338,'belo-horizonte',14,'BELO HORIZONTE',6200,3106200,4123)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2339,'belo-oriente',14,'BELO ORIENTE',6309,3106309,4125),
            (2340,'belo-vale',14,'BELO VALE',6408,3106408,4127),
            (2341,'berilo',14,'BERILO',6507,3106507,4129),
            (2342,'berizal',14,'BERIZAL',6655,3106655,570),
            (2343,'bertopolis',14,'BERTÓPOLIS',6606,3106606,4131),
            (2344,'betim',14,'BETIM',6705,3106705,4133),
            (2345,'bias-fortes',14,'BIAS FORTES',6804,3106804,4135),
            (2346,'bicas',14,'BICAS',6903,3106903,4137),
            (2347,'biquinhas',14,'BIQUINHAS',7000,3107000,4139),
            (2348,'boa-esperanca',14,'BOA ESPERANÇA',7109,3107109,4141)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2349,'bocaina-de-minas',14,'BOCAINA DE MINAS',7208,3107208,4143),
            (2350,'bocaiuva',14,'BOCAIÚVA',7307,3107307,4145),
            (2351,'bom-despacho',14,'BOM DESPACHO',7406,3107406,4147),
            (2352,'bom-jardim-de-minas',14,'BOM JARDIM DE MINAS',7505,3107505,4149),
            (2353,'bom-jesus-da-penha',14,'BOM JESUS DA PENHA',7604,3107604,4151),
            (2354,'bom-jesus-do-amparo',14,'BOM JESUS DO AMPARO',7703,3107703,4153),
            (2355,'bom-jesus-do-galho',14,'BOM JESUS DO GALHO',7802,3107802,4155),
            (2356,'bom-repouso',14,'BOM REPOUSO',7901,3107901,4157),
            (2357,'bom-sucesso',14,'BOM SUCESSO',8008,3108008,4159),
            (2358,'bonfim',14,'BONFIM',8107,3108107,4161)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2359,'bonfinopolis-de-minas',14,'BONFINÓPOLIS DE MINAS',8206,3108206,4163),
            (2360,'bonito-de-minas',14,'BONITO DE MINAS',8255,3108255,572),
            (2361,'borda-da-mata',14,'BORDA DA MATA',8305,3108305,4165),
            (2362,'botelhos',14,'BOTELHOS',8404,3108404,4167),
            (2363,'botumirim',14,'BOTUMIRIM',8503,3108503,4169),
            (2364,'bras-pires',14,'BRÁS PIRES',8701,3108701,4173),
            (2365,'brasilandia-de-minas',14,'BRASILÂNDIA DE MINAS',8552,3108552,574),
            (2366,'brasilia-de-minas',14,'BRASÍLIA DE MINAS',8602,3108602,4171),
            (2367,'braunas',14,'BRAÚNAS',8800,3108800,4175),
            (2368,'brazopolis',14,'BRAZÓPOLIS',8909,3108909,4177)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2369,'brumadinho',14,'BRUMADINHO',9006,3109006,4179),
            (2370,'bueno-brandao',14,'BUENO BRANDÃO',9105,3109105,4181),
            (2371,'buenopolis',14,'BUENÓPOLIS',9204,3109204,4183),
            (2372,'bugre',14,'BUGRE',9253,3109253,576),
            (2373,'buritis',14,'BURITIS',9303,3109303,4185),
            (2374,'buritizeiro',14,'BURITIZEIRO',9402,3109402,4187),
            (2375,'cabeceira-grande',14,'CABECEIRA GRANDE',9451,3109451,578),
            (2376,'cabo-verde',14,'CABO VERDE',9501,3109501,4189),
            (2377,'cachoeira-da-prata',14,'CACHOEIRA DA PRATA',9600,3109600,4191),
            (2378,'cachoeira-de-minas',14,'CACHOEIRA DE MINAS',9709,3109709,4193)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2379,'cachoeira-de-pajeu',14,'CACHOEIRA DE PAJEÚ',2704,3102704,4053),
            (2380,'cachoeira-dourada',14,'CACHOEIRA DOURADA',9808,3109808,4195),
            (2381,'caetanopolis',14,'CAETANÓPOLIS',9907,3109907,4197),
            (2382,'caete',14,'CAETÉ',10004,3110004,4199),
            (2383,'caiana',14,'CAIANA',10103,3110103,4201),
            (2384,'cajuri',14,'CAJURI',10202,3110202,4203),
            (2385,'caldas',14,'CALDAS',10301,3110301,4205),
            (2386,'camacho',14,'CAMACHO',10400,3110400,4207),
            (2387,'camanducaia',14,'CAMANDUCAIA',10509,3110509,4209),
            (2388,'cambui',14,'CAMBUÍ',10608,3110608,4211)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2389,'cambuquira',14,'CAMBUQUIRA',10707,3110707,4213),
            (2390,'campanario',14,'CAMPANÁRIO',10806,3110806,4215),
            (2391,'campanha',14,'CAMPANHA',10905,3110905,4217),
            (2392,'campestre',14,'CAMPESTRE',11002,3111002,4219),
            (2393,'campina-verde',14,'CAMPINA VERDE',11101,3111101,4221),
            (2394,'campo-azul',14,'CAMPO AZUL',11150,3111150,580),
            (2395,'campo-belo',14,'CAMPO BELO',11200,3111200,4223),
            (2396,'campo-do-meio',14,'CAMPO DO MEIO',11309,3111309,4225),
            (2397,'campo-florido',14,'CAMPO FLORIDO',11408,3111408,4227),
            (2398,'campos-altos',14,'CAMPOS ALTOS',11507,3111507,4229)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2399,'campos-gerais',14,'CAMPOS GERAIS',11606,3111606,4231),
            (2400,'cana-verde',14,'CANA VERDE',11903,3111903,4237),
            (2401,'canaa',14,'CANAÃ',11705,3111705,4233),
            (2402,'canapolis',14,'CANÁPOLIS',11804,3111804,4235),
            (2403,'candeias',14,'CANDEIAS',12000,3112000,4239),
            (2404,'cantagalo',14,'CANTAGALO',12059,3112059,582),
            (2405,'caparao',14,'CAPARAÓ',12109,3112109,4241),
            (2406,'capela-nova',14,'CAPELA NOVA',12208,3112208,4243),
            (2407,'capelinha',14,'CAPELINHA',12307,3112307,4245),
            (2408,'capetinga',14,'CAPETINGA',12406,3112406,4247)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2409,'capim-branco',14,'CAPIM BRANCO',12505,3112505,4249),
            (2410,'capinopolis',14,'CAPINÓPOLIS',12604,3112604,4251),
            (2411,'capitao-andrade',14,'CAPITÃO ANDRADE',12653,3112653,2651),
            (2412,'capitao-eneas',14,'CAPITÃO ENÉAS',12703,3112703,4253),
            (2413,'capitolio',14,'CAPITÓLIO',12802,3112802,4255),
            (2414,'caputira',14,'CAPUTIRA',12901,3112901,4257),
            (2415,'carai',14,'CARAÍ',13008,3113008,4259),
            (2416,'caranaiba',14,'CARANAÍBA',13107,3113107,4261),
            (2417,'carandai',14,'CARANDAÍ',13206,3113206,4263),
            (2418,'carangola',14,'CARANGOLA',13305,3113305,4265)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2419,'caratinga',14,'CARATINGA',13404,3113404,4267),
            (2420,'carbonita',14,'CARBONITA',13503,3113503,4269),
            (2421,'careacu',14,'CAREAÇU',13602,3113602,4271),
            (2422,'carlos-chagas',14,'CARLOS CHAGAS',13701,3113701,4273),
            (2423,'carmesia',14,'CARMÉSIA',13800,3113800,4275),
            (2424,'carmo-da-cachoeira',14,'CARMO DA CACHOEIRA',13909,3113909,4277),
            (2425,'carmo-da-mata',14,'CARMO DA MATA',14006,3114006,4279),
            (2426,'carmo-de-minas',14,'CARMO DE MINAS',14105,3114105,4281),
            (2427,'carmo-do-cajuru',14,'CARMO DO CAJURU',14204,3114204,4283),
            (2428,'carmo-do-paranaiba',14,'CARMO DO PARANAÍBA',14303,3114303,4285)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2429,'carmo-do-rio-claro',14,'CARMO DO RIO CLARO',14402,3114402,4287),
            (2430,'carmopolis-de-minas',14,'CARMÓPOLIS DE MINAS',14501,3114501,4289),
            (2431,'carneirinho',14,'CARNEIRINHO',14550,3114550,2685),
            (2432,'carrancas',14,'CARRANCAS',14600,3114600,4291),
            (2433,'carvalhopolis',14,'CARVALHÓPOLIS',14709,3114709,4293),
            (2434,'carvalhos',14,'CARVALHOS',14808,3114808,4295),
            (2435,'casa-grande',14,'CASA GRANDE',14907,3114907,4297),
            (2436,'cascalho-rico',14,'CASCALHO RICO',15003,3115003,4299),
            (2437,'cassia',14,'CÁSSIA',15102,3115102,4301),
            (2438,'cataguases',14,'CATAGUASES',15300,3115300,4305)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2439,'catas-altas',14,'CATAS ALTAS',15359,3115359,584),
            (2440,'catas-altas-da-noruega',14,'CATAS ALTAS DA NORUEGA',15409,3115409,4307),
            (2441,'catuji',14,'CATUJI',15458,3115458,2653),
            (2442,'catuti',14,'CATUTI',15474,3115474,586),
            (2443,'caxambu',14,'CAXAMBU',15508,3115508,4309),
            (2444,'cedro-do-abaete',14,'CEDRO DO ABAETÉ',15607,3115607,4311),
            (2445,'central-de-minas',14,'CENTRAL DE MINAS',15706,3115706,4313),
            (2446,'centralina',14,'CENTRALINA',15805,3115805,4315),
            (2447,'chacara',14,'CHÁCARA',15904,3115904,4317),
            (2448,'chale',14,'CHALÉ',16001,3116001,4319)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2449,'chapada-do-norte',14,'CHAPADA DO NORTE',16100,3116100,4321),
            (2450,'chapada-gaucha',14,'CHAPADA GAÚCHA',16159,3116159,588),
            (2451,'chiador',14,'CHIADOR',16209,3116209,4323),
            (2452,'cipotanea',14,'CIPOTÂNEA',16308,3116308,4325),
            (2453,'claraval',14,'CLARAVAL',16407,3116407,4327),
            (2454,'claro-dos-pocoes',14,'CLARO DOS POÇÕES',16506,3116506,4329),
            (2455,'claudio',14,'CLÁUDIO',16605,3116605,4331),
            (2456,'coimbra',14,'COIMBRA',16704,3116704,4333),
            (2457,'coluna',14,'COLUNA',16803,3116803,4335),
            (2458,'comendador-gomes',14,'COMENDADOR GOMES',16902,3116902,4337)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2459,'comercinho',14,'COMERCINHO',17009,3117009,4339),
            (2460,'conceicao-da-aparecida',14,'CONCEIÇÃO DA APARECIDA',17108,3117108,4341),
            (2461,'conceicao-da-barra-de-minas',14,'CONCEIÇÃO DA BARRA DE MINAS',15201,3115201,4303),
            (2462,'conceicao-das-alagoas',14,'CONCEIÇÃO DAS ALAGOAS',17306,3117306,4345),
            (2463,'conceicao-das-pedras',14,'CONCEIÇÃO DAS PEDRAS',17207,3117207,4343),
            (2464,'conceicao-de-ipanema',14,'CONCEIÇÃO DE IPANEMA',17405,3117405,4347),
            (2465,'conceicao-do-mato-dentro',14,'CONCEIÇÃO DO MATO DENTRO',17504,3117504,4349),
            (2466,'conceicao-do-para',14,'CONCEIÇÃO DO PARÁ',17603,3117603,4351),
            (2467,'conceicao-do-rio-verde',14,'CONCEIÇÃO DO RIO VERDE',17702,3117702,4353),
            (2468,'conceicao-dos-ouros',14,'CONCEIÇÃO DOS OUROS',17801,3117801,4355)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2469,'conego-marinho',14,'CÔNEGO MARINHO',17836,3117836,590),
            (2470,'confins',14,'CONFINS',17876,3117876,592),
            (2471,'congonhal',14,'CONGONHAL',17900,3117900,4357),
            (2472,'congonhas',14,'CONGONHAS',18007,3118007,4359),
            (2473,'congonhas-do-norte',14,'CONGONHAS DO NORTE',18106,3118106,4361),
            (2474,'conquista',14,'CONQUISTA',18205,3118205,4363),
            (2475,'conselheiro-lafaiete',14,'CONSELHEIRO LAFAIETE',18304,3118304,4365),
            (2476,'conselheiro-pena',14,'CONSELHEIRO PENA',18403,3118403,4367),
            (2477,'consolacao',14,'CONSOLAÇÃO',18502,3118502,4369),
            (2478,'contagem',14,'CONTAGEM',18601,3118601,4371)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2479,'coqueiral',14,'COQUEIRAL',18700,3118700,4373),
            (2480,'coracao-de-jesus',14,'CORAÇÃO DE JESUS',18809,3118809,4375),
            (2481,'cordisburgo',14,'CORDISBURGO',18908,3118908,4377),
            (2482,'cordislandia',14,'CORDISLÂNDIA',19005,3119005,4379),
            (2483,'corinto',14,'CORINTO',19104,3119104,4381),
            (2484,'coroaci',14,'COROACI',19203,3119203,4383),
            (2485,'coromandel',14,'COROMANDEL',19302,3119302,4385),
            (2486,'coronel-fabriciano',14,'CORONEL FABRICIANO',19401,3119401,4387),
            (2487,'coronel-murta',14,'CORONEL MURTA',19500,3119500,4389),
            (2488,'coronel-pacheco',14,'CORONEL PACHECO',19609,3119609,4391)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2489,'coronel-xavier-chaves',14,'CORONEL XAVIER CHAVES',19708,3119708,4393),
            (2490,'corrego-danta',14,'CÓRREGO DANTA',19807,3119807,4395),
            (2491,'corrego-do-bom-jesus',14,'CÓRREGO DO BOM JESUS',19906,3119906,4397),
            (2492,'corrego-fundo',14,'CÓRREGO FUNDO',19955,3119955,594),
            (2493,'corrego-novo',14,'CÓRREGO NOVO',20003,3120003,4399),
            (2494,'couto-de-magalhaes-de-minas',14,'COUTO DE MAGALHÃES DE MINAS',20102,3120102,4401),
            (2495,'crisolita',14,'CRISÓLITA',20151,3120151,596),
            (2496,'cristais',14,'CRISTAIS',20201,3120201,4403),
            (2497,'cristalia',14,'CRISTÁLIA',20300,3120300,4405),
            (2498,'cristiano-otoni',14,'CRISTIANO OTONI',20409,3120409,4407)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2499,'cristina',14,'CRISTINA',20508,3120508,4409),
            (2500,'crucilandia',14,'CRUCILÂNDIA',20607,3120607,4411),
            (2501,'cruzeiro-da-fortaleza',14,'CRUZEIRO DA FORTALEZA',20706,3120706,4413),
            (2502,'cruzilia',14,'CRUZÍLIA',20805,3120805,4415),
            (2503,'cuparaque',14,'CUPARAQUE',20839,3120839,598),
            (2504,'curral-de-dentro',14,'CURRAL DE DENTRO',20870,3120870,600),
            (2505,'curvelo',14,'CURVELO',20904,3120904,4417),
            (2506,'datas',14,'DATAS',21001,3121001,4419),
            (2507,'delfim-moreira',14,'DELFIM MOREIRA',21100,3121100,4421),
            (2508,'delfinopolis',14,'DELFINÓPOLIS',21209,3121209,4423)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2509,'delta',14,'DELTA',21258,3121258,602),
            (2510,'descoberto',14,'DESCOBERTO',21308,3121308,4425),
            (2511,'desterro-de-entre-rios',14,'DESTERRO DE ENTRE RIOS',21407,3121407,4427),
            (2512,'desterro-do-melo',14,'DESTERRO DO MELO',21506,3121506,4429),
            (2513,'diamantina',14,'DIAMANTINA',21605,3121605,4431),
            (2514,'diogo-de-vasconcelos',14,'DIOGO DE VASCONCELOS',21704,3121704,4433),
            (2515,'dionisio',14,'DIONÍSIO',21803,3121803,4435),
            (2516,'divinesia',14,'DIVINÉSIA',21902,3121902,4437),
            (2517,'divino',14,'DIVINO',22009,3122009,4439),
            (2518,'divino-das-laranjeiras',14,'DIVINO DAS LARANJEIRAS',22108,3122108,4441)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2519,'divinolandia-de-minas',14,'DIVINOLÂNDIA DE MINAS',22207,3122207,4443),
            (2520,'divinopolis',14,'DIVINÓPOLIS',22306,3122306,4445),
            (2521,'divisa-alegre',14,'DIVISA ALEGRE',22355,3122355,604),
            (2522,'divisa-nova',14,'DIVISA NOVA',22405,3122405,4447),
            (2523,'divisopolis',14,'DIVISÓPOLIS',22454,3122454,2657),
            (2524,'dom-bosco',14,'DOM BOSCO',22470,3122470,606),
            (2525,'dom-cavati',14,'DOM CAVATI',22504,3122504,4449),
            (2526,'dom-joaquim',14,'DOM JOAQUIM',22603,3122603,4451),
            (2527,'dom-silverio',14,'DOM SILVÉRIO',22702,3122702,4453),
            (2528,'dom-vicoso',14,'DOM VIÇOSO',22801,3122801,4455)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2529,'dona-euzebia',14,'DONA EUZÉBIA',22900,3122900,4457),
            (2530,'dores-de-campos',14,'DORES DE CAMPOS',23007,3123007,4459),
            (2531,'dores-de-guanhaes',14,'DORES DE GUANHÃES',23106,3123106,4461),
            (2532,'dores-do-indaia',14,'DORES DO INDAIÁ',23205,3123205,4463),
            (2533,'dores-do-turvo',14,'DORES DO TURVO',23304,3123304,4465),
            (2534,'doresopolis',14,'DORESÓPOLIS',23403,3123403,4467),
            (2535,'douradoquara',14,'DOURADOQUARA',23502,3123502,4469),
            (2536,'durande',14,'DURANDÉ',23528,3123528,2675),
            (2537,'eloi-mendes',14,'ELÓI MENDES',23601,3123601,4471),
            (2538,'engenheiro-caldas',14,'ENGENHEIRO CALDAS',23700,3123700,4473)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2539,'engenheiro-navarro',14,'ENGENHEIRO NAVARRO',23809,3123809,4475),
            (2540,'entre-folhas',14,'ENTRE FOLHAS',23858,3123858,2663),
            (2541,'entre-rios-de-minas',14,'ENTRE RIOS DE MINAS',23908,3123908,4477),
            (2542,'ervalia',14,'ERVÁLIA',24005,3124005,4479),
            (2543,'esmeraldas',14,'ESMERALDAS',24104,3124104,4481),
            (2544,'espera-feliz',14,'ESPERA FELIZ',24203,3124203,4483),
            (2545,'espinosa',14,'ESPINOSA',24302,3124302,4485),
            (2546,'espirito-santo-do-dourado',14,'ESPÍRITO SANTO DO DOURADO',24401,3124401,4487),
            (2547,'estiva',14,'ESTIVA',24500,3124500,4489),
            (2548,'estrela-dalva',14,'ESTRELA DALVA',24609,3124609,4491)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2549,'estrela-do-indaia',14,'ESTRELA DO INDAIÁ',24708,3124708,4493),
            (2550,'estrela-do-sul',14,'ESTRELA DO SUL',24807,3124807,4495),
            (2551,'eugenopolis',14,'EUGENÓPOLIS',24906,3124906,4497),
            (2552,'ewbank-da-camara',14,'EWBANK DA CÂMARA',25002,3125002,4499),
            (2553,'extrema',14,'EXTREMA',25101,3125101,4501),
            (2554,'fama',14,'FAMA',25200,3125200,4503),
            (2555,'faria-lemos',14,'FARIA LEMOS',25309,3125309,4505),
            (2556,'felicio-dos-santos',14,'FELÍCIO DOS SANTOS',25408,3125408,4507),
            (2557,'felisburgo',14,'FELISBURGO',25606,3125606,4511),
            (2558,'felixlandia',14,'FELIXLÂNDIA',25705,3125705,4513)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2559,'fernandes-tourinho',14,'FERNANDES TOURINHO',25804,3125804,4515),
            (2560,'ferros',14,'FERROS',25903,3125903,4517),
            (2561,'fervedouro',14,'FERVEDOURO',25952,3125952,2683),
            (2562,'florestal',14,'FLORESTAL',26000,3126000,4519),
            (2563,'formiga',14,'FORMIGA',26109,3126109,4521),
            (2564,'formoso',14,'FORMOSO',26208,3126208,4523),
            (2565,'fortaleza-de-minas',14,'FORTALEZA DE MINAS',26307,3126307,4525),
            (2566,'fortuna-de-minas',14,'FORTUNA DE MINAS',26406,3126406,4527),
            (2567,'francisco-badaro',14,'FRANCISCO BADARÓ',26505,3126505,4529),
            (2568,'francisco-dumont',14,'FRANCISCO DUMONT',26604,3126604,4531)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2569,'francisco-sa',14,'FRANCISCO SÁ',26703,3126703,4533),
            (2570,'franciscopolis',14,'FRANCISCÓPOLIS',26752,3126752,608),
            (2571,'frei-gaspar',14,'FREI GASPAR',26802,3126802,4535),
            (2572,'frei-inocencio',14,'FREI INOCÊNCIO',26901,3126901,4537),
            (2573,'frei-lagonegro',14,'FREI LAGONEGRO',26950,3126950,610),
            (2574,'fronteira',14,'FRONTEIRA',27008,3127008,4539),
            (2575,'fronteira-dos-vales',14,'FRONTEIRA DOS VALES',27057,3127057,4935),
            (2576,'fruta-de-leite',14,'FRUTA DE LEITE',27073,3127073,612),
            (2577,'frutal',14,'FRUTAL',27107,3127107,4541),
            (2578,'funilandia',14,'FUNILÂNDIA',27206,3127206,4543)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2579,'galileia',14,'GALILÉIA',27305,3127305,4545),
            (2580,'gameleiras',14,'GAMELEIRAS',27339,3127339,614),
            (2581,'glaucilandia',14,'GLAUCILÂNDIA',27354,3127354,616),
            (2582,'goiabeira',14,'GOIABEIRA',27370,3127370,618),
            (2583,'goiana',14,'GOIANÁ',27388,3127388,620),
            (2584,'goncalves',14,'GONÇALVES',27404,3127404,4547),
            (2585,'gonzaga',14,'GONZAGA',27503,3127503,4549),
            (2586,'gouveia',14,'GOUVEIA',27602,3127602,4551),
            (2587,'governador-valadares',14,'GOVERNADOR VALADARES',27701,3127701,4553),
            (2588,'grao-mogol',14,'GRÃO MOGOL',27800,3127800,4555)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2589,'grupiara',14,'GRUPIARA',27909,3127909,4557),
            (2590,'guanhaes',14,'GUANHÃES',28006,3128006,4559),
            (2591,'guape',14,'GUAPÉ',28105,3128105,4561),
            (2592,'guaraciaba',14,'GUARACIABA',28204,3128204,4563),
            (2593,'guaraciama',14,'GUARACIAMA',28253,3128253,622),
            (2594,'guaranesia',14,'GUARANÉSIA',28303,3128303,4565),
            (2595,'guarani',14,'GUARANI',28402,3128402,4567),
            (2596,'guarara',14,'GUARARÁ',28501,3128501,4569),
            (2597,'guarda-mor',14,'GUARDA-MOR',28600,3128600,4571),
            (2598,'guaxupe',14,'GUAXUPÉ',28709,3128709,4573)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2599,'guidoval',14,'GUIDOVAL',28808,3128808,4575),
            (2600,'guimarania',14,'GUIMARÂNIA',28907,3128907,4577),
            (2601,'guiricema',14,'GUIRICEMA',29004,3129004,4579),
            (2602,'gurinhata',14,'GURINHATÃ',29103,3129103,4581),
            (2603,'heliodora',14,'HELIODORA',29202,3129202,4583),
            (2604,'iapu',14,'IAPU',29301,3129301,4585),
            (2605,'ibertioga',14,'IBERTIOGA',29400,3129400,4587),
            (2606,'ibia',14,'IBIÁ',29509,3129509,4589),
            (2607,'ibiai',14,'IBIAÍ',29608,3129608,4591),
            (2608,'ibiracatu',14,'IBIRACATU',29657,3129657,624)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2609,'ibiraci',14,'IBIRACI',29707,3129707,4593),
            (2610,'ibirite',14,'IBIRITÉ',29806,3129806,4595),
            (2611,'ibitiura-de-minas',14,'IBITIÚRA DE MINAS',29905,3129905,4597),
            (2612,'ibituruna',14,'IBITURUNA',30002,3130002,4599),
            (2613,'icarai-de-minas',14,'ICARAÍ DE MINAS',30051,3130051,2693),
            (2614,'igarape',14,'IGARAPÉ',30101,3130101,4601),
            (2615,'igaratinga',14,'IGARATINGA',30200,3130200,4603),
            (2616,'iguatama',14,'IGUATAMA',30309,3130309,4605),
            (2617,'ijaci',14,'IJACI',30408,3130408,4607),
            (2618,'ilicinea',14,'ILICÍNEA',30507,3130507,4609)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2619,'imbe-de-minas',14,'IMBÉ DE MINAS',30556,3130556,626),
            (2620,'inconfidentes',14,'INCONFIDENTES',30606,3130606,4611),
            (2621,'indaiabira',14,'INDAIABIRA',30655,3130655,628),
            (2622,'indianopolis',14,'INDIANÓPOLIS',30705,3130705,4613),
            (2623,'ingai',14,'INGAÍ',30804,3130804,4615),
            (2624,'inhapim',14,'INHAPIM',30903,3130903,4617),
            (2625,'inhauma',14,'INHAÚMA',31000,3131000,4619),
            (2626,'inimutaba',14,'INIMUTABA',31109,3131109,4621),
            (2627,'ipaba',14,'IPABA',31158,3131158,2665),
            (2628,'ipanema',14,'IPANEMA',31208,3131208,4623)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2629,'ipatinga',14,'IPATINGA',31307,3131307,4625),
            (2630,'ipiacu',14,'IPIAÇU',31406,3131406,4627),
            (2631,'ipuiuna',14,'IPUIÚNA',31505,3131505,4629),
            (2632,'irai-de-minas',14,'IRAÍ DE MINAS',31604,3131604,4631),
            (2633,'itabira',14,'ITABIRA',31703,3131703,4633),
            (2634,'itabirinha',14,'ITABIRINHA',31802,3131802,4635),
            (2635,'itabirito',14,'ITABIRITO',31901,3131901,4637),
            (2636,'itacambira',14,'ITACAMBIRA',32008,3132008,4639),
            (2637,'itacarambi',14,'ITACARAMBI',32107,3132107,4641),
            (2638,'itaguara',14,'ITAGUARA',32206,3132206,4643)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2639,'itaipe',14,'ITAIPÉ',32305,3132305,4645),
            (2640,'itajuba',14,'ITAJUBÁ',32404,3132404,4647),
            (2641,'itamarandiba',14,'ITAMARANDIBA',32503,3132503,4649),
            (2642,'itamarati-de-minas',14,'ITAMARATI DE MINAS',32602,3132602,4651),
            (2643,'itambacuri',14,'ITAMBACURI',32701,3132701,4653),
            (2644,'itambe-do-mato-dentro',14,'ITAMBÉ DO MATO DENTRO',32800,3132800,4655),
            (2645,'itamogi',14,'ITAMOGI',32909,3132909,4657),
            (2646,'itamonte',14,'ITAMONTE',33006,3133006,4659),
            (2647,'itanhandu',14,'ITANHANDU',33105,3133105,4661),
            (2648,'itanhomi',14,'ITANHOMI',33204,3133204,4663)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2649,'itaobim',14,'ITAOBIM',33303,3133303,4665),
            (2650,'itapagipe',14,'ITAPAGIPE',33402,3133402,4667),
            (2651,'itapecerica',14,'ITAPECERICA',33501,3133501,4669),
            (2652,'itapeva',14,'ITAPEVA',33600,3133600,4671),
            (2653,'itatiaiucu',14,'ITATIAIUÇU',33709,3133709,4673),
            (2654,'itau-de-minas',14,'ITAÚ DE MINAS',33758,3133758,5731),
            (2655,'itauna',14,'ITAÚNA',33808,3133808,4675),
            (2656,'itaverava',14,'ITAVERAVA',33907,3133907,4677),
            (2657,'itinga',14,'ITINGA',34004,3134004,4679),
            (2658,'itueta',14,'ITUETA',34103,3134103,4681)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2659,'ituiutaba',14,'ITUIUTABA',34202,3134202,4683),
            (2660,'itumirim',14,'ITUMIRIM',34301,3134301,4685),
            (2661,'iturama',14,'ITURAMA',34400,3134400,4687),
            (2662,'itutinga',14,'ITUTINGA',34509,3134509,4689),
            (2663,'jaboticatubas',14,'JABOTICATUBAS',34608,3134608,4691),
            (2664,'jacinto',14,'JACINTO',34707,3134707,4693),
            (2665,'jacui',14,'JACUÍ',34806,3134806,4695),
            (2666,'jacutinga',14,'JACUTINGA',34905,3134905,4697),
            (2667,'jaguaracu',14,'JAGUARAÇU',35001,3135001,4699),
            (2668,'jaiba',14,'JAÍBA',35050,3135050,2893)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2669,'jampruca',14,'JAMPRUCA',35076,3135076,2655),
            (2670,'janauba',14,'JANAÚBA',35100,3135100,4701),
            (2671,'januaria',14,'JANUÁRIA',35209,3135209,4703),
            (2672,'japaraiba',14,'JAPARAÍBA',35308,3135308,4705),
            (2778,'munhoz',14,'MUNHOZ',43807,3143807,4875),
            (2673,'japonvar',14,'JAPONVAR',35357,3135357,630),
            (2674,'jeceaba',14,'JECEABA',35407,3135407,4707),
            (2675,'jenipapo-de-minas',14,'JENIPAPO DE MINAS',35456,3135456,632),
            (2676,'jequeri',14,'JEQUERI',35506,3135506,4709),
            (2677,'jequitai',14,'JEQUITAÍ',35605,3135605,4711)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2678,'jequitiba',14,'JEQUITIBÁ',35704,3135704,4713),
            (2679,'jequitinhonha',14,'JEQUITINHONHA',35803,3135803,4715),
            (2680,'jesuania',14,'JESUÂNIA',35902,3135902,4717),
            (2681,'joaima',14,'JOAÍMA',36009,3136009,4719),
            (2682,'joanesia',14,'JOANÉSIA',36108,3136108,4721),
            (2683,'joao-monlevade',14,'JOÃO MONLEVADE',36207,3136207,4723),
            (2684,'joao-pinheiro',14,'JOÃO PINHEIRO',36306,3136306,4725),
            (2685,'joaquim-felicio',14,'JOAQUIM FELÍCIO',36405,3136405,4727),
            (2686,'jordania',14,'JORDÂNIA',36504,3136504,4729),
            (2687,'jose-goncalves-de-minas',14,'JOSÉ GONÇALVES DE MINAS',36520,3136520,634)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2688,'jose-raydan',14,'JOSÉ RAYDAN',36553,3136553,636),
            (2689,'josenopolis',14,'JOSENÓPOLIS',36579,3136579,638),
            (2690,'juatuba',14,'JUATUBA',36652,3136652,2691),
            (2691,'juiz-de-fora',14,'JUIZ DE FORA',36702,3136702,4733),
            (2692,'juramento',14,'JURAMENTO',36801,3136801,4735),
            (2693,'juruaia',14,'JURUAIA',36900,3136900,4737),
            (2694,'juvenilia',14,'JUVENÍLIA',36959,3136959,640),
            (2695,'ladainha',14,'LADAINHA',37007,3137007,4739),
            (2696,'lagamar',14,'LAGAMAR',37106,3137106,4741),
            (2697,'lagoa-da-prata',14,'LAGOA DA PRATA',37205,3137205,4743)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2698,'lagoa-dos-patos',14,'LAGOA DOS PATOS',37304,3137304,4745),
            (2699,'lagoa-dourada',14,'LAGOA DOURADA',37403,3137403,4747),
            (2700,'lagoa-formosa',14,'LAGOA FORMOSA',37502,3137502,4749),
            (2701,'lagoa-grande',14,'LAGOA GRANDE',37536,3137536,2905),
            (2702,'lagoa-santa',14,'LAGOA SANTA',37601,3137601,4751),
            (2703,'lajinha',14,'LAJINHA',37700,3137700,4753),
            (2704,'lambari',14,'LAMBARI',37809,3137809,4755),
            (2705,'lamim',14,'LAMIM',37908,3137908,4757),
            (2706,'laranjal',14,'LARANJAL',38005,3138005,4759),
            (2707,'lassance',14,'LASSANCE',38104,3138104,4761)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2708,'lavras',14,'LAVRAS',38203,3138203,4763),
            (2709,'leandro-ferreira',14,'LEANDRO FERREIRA',38302,3138302,4765),
            (2710,'leme-do-prado',14,'LEME DO PRADO',38351,3138351,642),
            (2711,'leopoldina',14,'LEOPOLDINA',38401,3138401,4767),
            (2712,'liberdade',14,'LIBERDADE',38500,3138500,4769),
            (2713,'lima-duarte',14,'LIMA DUARTE',38609,3138609,4771),
            (2714,'limeira-do-oeste',14,'LIMEIRA DO OESTE',38625,3138625,2687),
            (2715,'lontra',14,'LONTRA',38658,3138658,2695),
            (2716,'luisburgo',14,'LUISBURGO',38674,3138674,644),
            (2717,'luislandia',14,'LUISLÂNDIA',38682,3138682,646)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2718,'luminarias',14,'LUMINÁRIAS',38708,3138708,4773),
            (2719,'luz',14,'LUZ',38807,3138807,4775),
            (2720,'machacalis',14,'MACHACALIS',38906,3138906,4777),
            (2721,'machado',14,'MACHADO',39003,3139003,4779),
            (2722,'madre-de-deus-de-minas',14,'MADRE DE DEUS DE MINAS',39102,3139102,4781),
            (2723,'malacacheta',14,'MALACACHETA',39201,3139201,4783),
            (2724,'mamonas',14,'MAMONAS',39250,3139250,2895),
            (2725,'manga',14,'MANGA',39300,3139300,4785),
            (2726,'manhuacu',14,'MANHUAÇU',39409,3139409,4787),
            (2727,'manhumirim',14,'MANHUMIRIM',39508,3139508,4789)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2728,'mantena',14,'MANTENA',39607,3139607,4791),
            (2729,'mar-de-espanha',14,'MAR DE ESPANHA',39805,3139805,4795),
            (2730,'maravilhas',14,'MARAVILHAS',39706,3139706,4793),
            (2731,'maria-da-fe',14,'MARIA DA FÉ',39904,3139904,4797),
            (2732,'mariana',14,'MARIANA',40001,3140001,4799),
            (2733,'marilac',14,'MARILAC',40100,3140100,4801),
            (2734,'mario-campos',14,'MÁRIO CAMPOS',40159,3140159,648),
            (2735,'maripa-de-minas',14,'MARIPÁ DE MINAS',40209,3140209,4803),
            (2736,'marlieria',14,'MARLIÉRIA',40308,3140308,4805),
            (2737,'marmelopolis',14,'MARMELÓPOLIS',40407,3140407,4807)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2738,'martinho-campos',14,'MARTINHO CAMPOS',40506,3140506,4809),
            (2739,'martins-soares',14,'MARTINS SOARES',40530,3140530,650),
            (2740,'mata-verde',14,'MATA VERDE',40555,3140555,2659),
            (2741,'materlandia',14,'MATERLÂNDIA',40605,3140605,4811),
            (2742,'mateus-leme',14,'MATEUS LEME',40704,3140704,4813),
            (2743,'mathias-lobato',14,'MATHIAS LOBATO',71501,3171501,5431),
            (2744,'matias-barbosa',14,'MATIAS BARBOSA',40803,3140803,4815),
            (2745,'matias-cardoso',14,'MATIAS CARDOSO',40852,3140852,2897),
            (2746,'matipo',14,'MATIPÓ',40902,3140902,4817),
            (2747,'mato-verde',14,'MATO VERDE',41009,3141009,4819)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2748,'matozinhos',14,'MATOZINHOS',41108,3141108,4821),
            (2749,'matutina',14,'MATUTINA',41207,3141207,4823),
            (2750,'medeiros',14,'MEDEIROS',41306,3141306,4825),
            (2751,'medina',14,'MEDINA',41405,3141405,4827),
            (2752,'mendes-pimentel',14,'MENDES PIMENTEL',41504,3141504,4829),
            (2753,'merces',14,'MERCÊS',41603,3141603,4831),
            (2754,'mesquita',14,'MESQUITA',41702,3141702,4833),
            (2755,'minas-novas',14,'MINAS NOVAS',41801,3141801,4835),
            (2756,'minduri',14,'MINDURI',41900,3141900,4837),
            (2757,'mirabela',14,'MIRABELA',42007,3142007,4839)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2758,'miradouro',14,'MIRADOURO',42106,3142106,4841),
            (2759,'mirai',14,'MIRAÍ',42205,3142205,4843),
            (2760,'miravania',14,'MIRAVÂNIA',42254,3142254,652),
            (2761,'moeda',14,'MOEDA',42304,3142304,4845),
            (2762,'moema',14,'MOEMA',42403,3142403,4847),
            (2763,'monjolos',14,'MONJOLOS',42502,3142502,4849),
            (2764,'monsenhor-paulo',14,'MONSENHOR PAULO',42601,3142601,4851),
            (2765,'montalvania',14,'MONTALVÂNIA',42700,3142700,4853),
            (2766,'monte-alegre-de-minas',14,'MONTE ALEGRE DE MINAS',42809,3142809,4855),
            (2767,'monte-azul',14,'MONTE AZUL',42908,3142908,4857)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2768,'monte-belo',14,'MONTE BELO',43005,3143005,4859),
            (2769,'monte-carmelo',14,'MONTE CARMELO',43104,3143104,4861),
            (2770,'monte-formoso',14,'MONTE FORMOSO',43153,3143153,654),
            (2771,'monte-santo-de-minas',14,'MONTE SANTO DE MINAS',43203,3143203,4863),
            (2772,'monte-siao',14,'MONTE SIÃO',43401,3143401,4867),
            (2773,'montes-claros',14,'MONTES CLAROS',43302,3143302,4865),
            (2774,'montezuma',14,'MONTEZUMA',43450,3143450,2697),
            (2775,'morada-nova-de-minas',14,'MORADA NOVA DE MINAS',43500,3143500,4869),
            (2776,'morro-da-garca',14,'MORRO DA GARÇA',43609,3143609,4871),
            (2777,'morro-do-pilar',14,'MORRO DO PILAR',43708,3143708,4873)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2779,'muriae',14,'MURIAÉ',43906,3143906,4877),
            (2780,'mutum',14,'MUTUM',44003,3144003,4879),
            (2781,'muzambinho',14,'MUZAMBINHO',44102,3144102,4881),
            (2782,'nacip-raydan',14,'NACIP RAYDAN',44201,3144201,4883),
            (2783,'nanuque',14,'NANUQUE',44300,3144300,4885),
            (2784,'naque',14,'NAQUE',44359,3144359,656),
            (2785,'natalandia',14,'NATALÂNDIA',44375,3144375,658),
            (2786,'natercia',14,'NATÉRCIA',44409,3144409,4887),
            (2787,'nazareno',14,'NAZARENO',44508,3144508,4889),
            (2788,'nepomuceno',14,'NEPOMUCENO',44607,3144607,4891)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2789,'ninheira',14,'NINHEIRA',44656,3144656,660),
            (2790,'nova-belem',14,'NOVA BELÉM',44672,3144672,662),
            (2791,'nova-era',14,'NOVA ERA',44706,3144706,4893),
            (2792,'nova-lima',14,'NOVA LIMA',44805,3144805,4895),
            (2793,'nova-modica',14,'NOVA MÓDICA',44904,3144904,4897),
            (2794,'nova-ponte',14,'NOVA PONTE',45000,3145000,4899),
            (2795,'nova-porteirinha',14,'NOVA PORTEIRINHA',45059,3145059,664),
            (2796,'nova-resende',14,'NOVA RESENDE',45109,3145109,4901),
            (2797,'nova-serrana',14,'NOVA SERRANA',45208,3145208,4903),
            (2798,'nova-uniao',14,'NOVA UNIÃO',36603,3136603,4731)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2799,'novo-cruzeiro',14,'NOVO CRUZEIRO',45307,3145307,4905),
            (2800,'novo-oriente-de-minas',14,'NOVO ORIENTE DE MINAS',45356,3145356,666),
            (2801,'novorizonte',14,'NOVORIZONTE',45372,3145372,668),
            (2802,'olaria',14,'OLARIA',45406,3145406,4907),
            (2803,'olhos-dagua',14,'OLHOS-D''ÁGUA',45455,3145455,670),
            (2804,'olimpio-noronha',14,'OLÍMPIO NORONHA',45505,3145505,4909),
            (2805,'oliveira',14,'OLIVEIRA',45604,3145604,4911),
            (2806,'oliveira-fortes',14,'OLIVEIRA FORTES',45703,3145703,4913),
            (2807,'onca-de-pitangui',14,'ONÇA DE PITANGUI',45802,3145802,4915),
            (2808,'oratorios',14,'ORATÓRIOS',45851,3145851,672)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2809,'orizania',14,'ORIZÂNIA',45877,3145877,674),
            (2810,'ouro-branco',14,'OURO BRANCO',45901,3145901,4917),
            (2811,'ouro-fino',14,'OURO FINO',46008,3146008,4919),
            (2812,'ouro-preto',14,'OURO PRETO',46107,3146107,4921),
            (2813,'ouro-verde-de-minas',14,'OURO VERDE DE MINAS',46206,3146206,4923),
            (2814,'padre-carvalho',14,'PADRE CARVALHO',46255,3146255,676),
            (2815,'padre-paraiso',14,'PADRE PARAÍSO',46305,3146305,4925),
            (2816,'pai-pedro',14,'PAI PEDRO',46552,3146552,678),
            (2817,'paineiras',14,'PAINEIRAS',46404,3146404,4927),
            (2818,'pains',14,'PAINS',46503,3146503,4929)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2819,'paiva',14,'PAIVA',46602,3146602,4931),
            (2820,'palma',14,'PALMA',46701,3146701,4933),
            (2821,'palmopolis',14,'PALMÓPOLIS',46750,3146750,2661),
            (2822,'papagaios',14,'PAPAGAIOS',46909,3146909,4937),
            (2823,'para-de-minas',14,'PARÁ DE MINAS',47105,3147105,4941),
            (2824,'paracatu',14,'PARACATU',47006,3147006,4939),
            (2825,'paraguacu',14,'PARAGUAÇU',47204,3147204,4943),
            (2826,'paraisopolis',14,'PARAISÓPOLIS',47303,3147303,4945),
            (2827,'paraopeba',14,'PARAOPEBA',47402,3147402,4947),
            (2828,'passa-quatro',14,'PASSA QUATRO',47600,3147600,4951)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2829,'passa-tempo',14,'PASSA TEMPO',47709,3147709,4953),
            (2830,'passa-vinte',14,'PASSA VINTE',47808,3147808,4955),
            (2831,'passabem',14,'PASSABÉM',47501,3147501,4949),
            (2832,'passos',14,'PASSOS',47907,3147907,4957),
            (2833,'patis',14,'PATIS',47956,3147956,680),
            (2834,'patos-de-minas',14,'PATOS DE MINAS',48004,3148004,4959),
            (2835,'patrocinio',14,'PATROCÍNIO',48103,3148103,4961),
            (2836,'patrocinio-do-muriae',14,'PATROCÍNIO DO MURIAÉ',48202,3148202,4963),
            (2837,'paula-candido',14,'PAULA CÂNDIDO',48301,3148301,4965),
            (2838,'paulistas',14,'PAULISTAS',48400,3148400,4967)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2839,'pavao',14,'PAVÃO',48509,3148509,4969),
            (2840,'pecanha',14,'PEÇANHA',48608,3148608,4971),
            (2841,'pedra-azul',14,'PEDRA AZUL',48707,3148707,4973),
            (2842,'pedra-bonita',14,'PEDRA BONITA',48756,3148756,682),
            (2843,'pedra-do-anta',14,'PEDRA DO ANTA',48806,3148806,4975),
            (2844,'pedra-do-indaia',14,'PEDRA DO INDAIÁ',48905,3148905,4977),
            (2845,'pedra-dourada',14,'PEDRA DOURADA',49002,3149002,4979),
            (2846,'pedralva',14,'PEDRALVA',49101,3149101,4981),
            (2847,'pedras-de-maria-da-cruz',14,'PEDRAS DE MARIA DA CRUZ',49150,3149150,2899),
            (2848,'pedrinopolis',14,'PEDRINÓPOLIS',49200,3149200,4983)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2849,'pedro-leopoldo',14,'PEDRO LEOPOLDO',49309,3149309,4985),
            (2850,'pedro-teixeira',14,'PEDRO TEIXEIRA',49408,3149408,4987),
            (2851,'pequeri',14,'PEQUERI',49507,3149507,4989),
            (2852,'pequi',14,'PEQUI',49606,3149606,4991),
            (2853,'perdigao',14,'PERDIGÃO',49705,3149705,4993),
            (2854,'perdizes',14,'PERDIZES',49804,3149804,4995),
            (2855,'perdoes',14,'PERDÕES',49903,3149903,4997),
            (2856,'periquito',14,'PERIQUITO',49952,3149952,684),
            (2857,'pescador',14,'PESCADOR',50000,3150000,4999),
            (2858,'piau',14,'PIAU',50109,3150109,5001)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2859,'piedade-de-caratinga',14,'PIEDADE DE CARATINGA',50158,3150158,686),
            (2860,'piedade-de-ponte-nova',14,'PIEDADE DE PONTE NOVA',50208,3150208,5003),
            (2861,'piedade-do-rio-grande',14,'PIEDADE DO RIO GRANDE',50307,3150307,5005),
            (2862,'piedade-dos-gerais',14,'PIEDADE DOS GERAIS',50406,3150406,5007),
            (2863,'pimenta',14,'PIMENTA',50505,3150505,5009),
            (2864,'pingo-dagua',14,'PINGO-D''ÁGUA',50539,3150539,688),
            (2865,'pintopolis',14,'PINTÓPOLIS',50570,3150570,690),
            (2866,'piracema',14,'PIRACEMA',50604,3150604,5011),
            (2867,'pirajuba',14,'PIRAJUBA',50703,3150703,5013),
            (2868,'piranga',14,'PIRANGA',50802,3150802,5015)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2869,'pirangucu',14,'PIRANGUÇU',50901,3150901,5017),
            (2870,'piranguinho',14,'PIRANGUINHO',51008,3151008,5019),
            (2871,'pirapetinga',14,'PIRAPETINGA',51107,3151107,5021),
            (2872,'pirapora',14,'PIRAPORA',51206,3151206,5023),
            (2873,'pirauba',14,'PIRAÚBA',51305,3151305,5025),
            (2874,'pitangui',14,'PITANGUI',51404,3151404,5027),
            (2875,'piumhi',14,'PIUMHI',51503,3151503,5029),
            (2876,'planura',14,'PLANURA',51602,3151602,5031),
            (2877,'poco-fundo',14,'POÇO FUNDO',51701,3151701,5033),
            (2878,'pocos-de-caldas',14,'POÇOS DE CALDAS',51800,3151800,5035)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2879,'pocrane',14,'POCRANE',51909,3151909,5037),
            (2880,'pompeu',14,'POMPÉU',52006,3152006,5039),
            (2881,'ponte-nova',14,'PONTE NOVA',52105,3152105,5041),
            (2882,'ponto-chique',14,'PONTO CHIQUE',52131,3152131,692),
            (2883,'ponto-dos-volantes',14,'PONTO DOS VOLANTES',52170,3152170,694),
            (2884,'porteirinha',14,'PORTEIRINHA',52204,3152204,5043),
            (2885,'porto-firme',14,'PORTO FIRME',52303,3152303,5045),
            (2886,'pote',14,'POTÉ',52402,3152402,5047),
            (2887,'pouso-alegre',14,'POUSO ALEGRE',52501,3152501,5049),
            (2888,'pouso-alto',14,'POUSO ALTO',52600,3152600,5051)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2889,'prados',14,'PRADOS',52709,3152709,5053),
            (2890,'prata',14,'PRATA',52808,3152808,5055),
            (2891,'pratapolis',14,'PRATÁPOLIS',52907,3152907,5057),
            (2892,'pratinha',14,'PRATINHA',53004,3153004,5059),
            (2893,'presidente-bernardes',14,'PRESIDENTE BERNARDES',53103,3153103,5061),
            (2894,'presidente-juscelino',14,'PRESIDENTE JUSCELINO',53202,3153202,5063),
            (2895,'presidente-kubitschek',14,'PRESIDENTE KUBITSCHEK',53301,3153301,5065),
            (2896,'presidente-olegario',14,'PRESIDENTE OLEGÁRIO',53400,3153400,5067),
            (2897,'prudente-de-morais',14,'PRUDENTE DE MORAIS',53608,3153608,5071),
            (2898,'quartel-geral',14,'QUARTEL GERAL',53707,3153707,5073)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2899,'queluzito',14,'QUELUZITO',53806,3153806,5075),
            (2900,'raposos',14,'RAPOSOS',53905,3153905,5077),
            (2901,'raul-soares',14,'RAUL SOARES',54002,3154002,5079),
            (2902,'recreio',14,'RECREIO',54101,3154101,5081),
            (2903,'reduto',14,'REDUTO',54150,3154150,696),
            (2904,'resende-costa',14,'RESENDE COSTA',54200,3154200,5083),
            (2905,'resplendor',14,'RESPLENDOR',54309,3154309,5085),
            (2906,'ressaquinha',14,'RESSAQUINHA',54408,3154408,5087),
            (2907,'riachinho',14,'RIACHINHO',54457,3154457,2901),
            (2908,'riacho-dos-machados',14,'RIACHO DOS MACHADOS',54507,3154507,5089)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2909,'ribeirao-das-neves',14,'RIBEIRÃO DAS NEVES',54606,3154606,5091),
            (2910,'ribeirao-vermelho',14,'RIBEIRÃO VERMELHO',54705,3154705,5093),
            (2911,'rio-acima',14,'RIO ACIMA',54804,3154804,5095),
            (2912,'rio-casca',14,'RIO CASCA',54903,3154903,5097),
            (2913,'rio-do-prado',14,'RIO DO PRADO',55108,3155108,5101),
            (2914,'rio-doce',14,'RIO DOCE',55009,3155009,5099),
            (2915,'rio-espera',14,'RIO ESPERA',55207,3155207,5103),
            (2916,'rio-manso',14,'RIO MANSO',55306,3155306,5105),
            (2917,'rio-novo',14,'RIO NOVO',55405,3155405,5107),
            (2918,'rio-paranaiba',14,'RIO PARANAÍBA',55504,3155504,5109)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2919,'rio-pardo-de-minas',14,'RIO PARDO DE MINAS',55603,3155603,5111),
            (2920,'rio-piracicaba',14,'RIO PIRACICABA',55702,3155702,5113),
            (2921,'rio-pomba',14,'RIO POMBA',55801,3155801,5115),
            (2922,'rio-preto',14,'RIO PRETO',55900,3155900,5117),
            (2923,'rio-vermelho',14,'RIO VERMELHO',56007,3156007,5119),
            (2924,'ritapolis',14,'RITÁPOLIS',56106,3156106,5121),
            (2925,'rochedo-de-minas',14,'ROCHEDO DE MINAS',56205,3156205,5123),
            (2926,'rodeiro',14,'RODEIRO',56304,3156304,5125),
            (2927,'romaria',14,'ROMARIA',56403,3156403,5127),
            (2928,'rosario-da-limeira',14,'ROSÁRIO DA LIMEIRA',56452,3156452,698)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2929,'rubelita',14,'RUBELITA',56502,3156502,5129),
            (2930,'rubim',14,'RUBIM',56601,3156601,5131),
            (2931,'sabara',14,'SABARÁ',56700,3156700,5133),
            (2932,'sabinopolis',14,'SABINÓPOLIS',56809,3156809,5135),
            (2933,'sacramento',14,'SACRAMENTO',56908,3156908,5137),
            (2934,'salinas',14,'SALINAS',57005,3157005,5139),
            (2935,'salto-da-divisa',14,'SALTO DA DIVISA',57104,3157104,5141),
            (2936,'santa-barbara',14,'SANTA BÁRBARA',57203,3157203,5143),
            (2937,'santa-barbara-do-leste',14,'SANTA BÁRBARA DO LESTE',57252,3157252,2667),
            (2938,'santa-barbara-do-monte-verde',14,'SANTA BÁRBARA DO MONTE VERDE',57278,3157278,700)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2939,'santa-barbara-do-tugurio',14,'SANTA BÁRBARA DO TUGÚRIO',57302,3157302,5145),
            (2940,'santa-cruz-de-minas',14,'SANTA CRUZ DE MINAS',57336,3157336,702),
            (2941,'santa-cruz-de-salinas',14,'SANTA CRUZ DE SALINAS',57377,3157377,704),
            (2942,'santa-cruz-do-escalvado',14,'SANTA CRUZ DO ESCALVADO',57401,3157401,5147),
            (2943,'santa-efigenia-de-minas',14,'SANTA EFIGÊNIA DE MINAS',57500,3157500,5149),
            (2944,'santa-fe-de-minas',14,'SANTA FÉ DE MINAS',57609,3157609,5151),
            (2945,'santa-helena-de-minas',14,'SANTA HELENA DE MINAS',57658,3157658,706),
            (2946,'santa-juliana',14,'SANTA JULIANA',57708,3157708,5153),
            (2947,'santa-luzia',14,'SANTA LUZIA',57807,3157807,5155),
            (2948,'santa-margarida',14,'SANTA MARGARIDA',57906,3157906,5157)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2949,'santa-maria-de-itabira',14,'SANTA MARIA DE ITABIRA',58003,3158003,5159),
            (2950,'santa-maria-do-salto',14,'SANTA MARIA DO SALTO',58102,3158102,5161),
            (2951,'santa-maria-do-suacui',14,'SANTA MARIA DO SUAÇUÍ',58201,3158201,5163),
            (2952,'santa-rita-de-caldas',14,'SANTA RITA DE CALDAS',59209,3159209,5183),
            (2953,'santa-rita-de-ibitipoca',14,'SANTA RITA DE IBITIPOCA',59407,3159407,5187),
            (2954,'santa-rita-de-jacutinga',14,'SANTA RITA DE JACUTINGA',59308,3159308,5185),
            (2955,'santa-rita-de-minas',14,'SANTA RITA DE MINAS',59357,3159357,2669),
            (2956,'santa-rita-do-itueto',14,'SANTA RITA DO ITUETO',59506,3159506,5189),
            (2957,'santa-rita-do-sapucai',14,'SANTA RITA DO SAPUCAÍ',59605,3159605,5191),
            (2958,'santa-rosa-da-serra',14,'SANTA ROSA DA SERRA',59704,3159704,5193)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2959,'santa-vitoria',14,'SANTA VITÓRIA',59803,3159803,5195),
            (2960,'santana-da-vargem',14,'SANTANA DA VARGEM',58300,3158300,5165),
            (2961,'santana-de-cataguases',14,'SANTANA DE CATAGUASES',58409,3158409,5167),
            (2962,'santana-de-pirapama',14,'SANTANA DE PIRAPAMA',58508,3158508,5169),
            (2963,'santana-do-deserto',14,'SANTANA DO DESERTO',58607,3158607,5171),
            (2964,'santana-do-garambeu',14,'SANTANA DO GARAMBÉU',58706,3158706,5173),
            (2965,'santana-do-jacare',14,'SANTANA DO JACARÉ',58805,3158805,5175),
            (2966,'santana-do-manhuacu',14,'SANTANA DO MANHUAÇU',58904,3158904,5177),
            (2967,'santana-do-paraiso',14,'SANTANA DO PARAÍSO',58953,3158953,2673),
            (2968,'santana-do-riacho',14,'SANTANA DO RIACHO',59001,3159001,5179)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2969,'santana-dos-montes',14,'SANTANA DOS MONTES',59100,3159100,5181),
            (2970,'santo-antonio-do-amparo',14,'SANTO ANTÔNIO DO AMPARO',59902,3159902,5197),
            (2971,'santo-antonio-do-aventureiro',14,'SANTO ANTÔNIO DO AVENTUREIRO',60009,3160009,5199),
            (2972,'santo-antonio-do-grama',14,'SANTO ANTÔNIO DO GRAMA',60108,3160108,5201),
            (2973,'santo-antonio-do-itambe',14,'SANTO ANTÔNIO DO ITAMBÉ',60207,3160207,5203),
            (2974,'santo-antonio-do-jacinto',14,'SANTO ANTÔNIO DO JACINTO',60306,3160306,5205),
            (2975,'santo-antonio-do-monte',14,'SANTO ANTÔNIO DO MONTE',60405,3160405,5207),
            (3372,'bocaina',26,'BOCAINA',6805,3506805,6235),
            (2976,'santo-antonio-do-retiro',14,'SANTO ANTÔNIO DO RETIRO',60454,3160454,708),
            (2977,'santo-antonio-do-rio-abaixo',14,'SANTO ANTÔNIO DO RIO ABAIXO',60504,3160504,5209)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2978,'santo-hipolito',14,'SANTO HIPÓLITO',60603,3160603,5211),
            (2979,'santos-dumont',14,'SANTOS DUMONT',60702,3160702,5213),
            (2980,'sao-bento-abade',14,'SÃO BENTO ABADE',60801,3160801,5215),
            (2981,'sao-bras-do-suacui',14,'SÃO BRÁS DO SUAÇUÍ',60900,3160900,5217),
            (2982,'sao-domingos-das-dores',14,'SÃO DOMINGOS DAS DORES',60959,3160959,710),
            (2983,'sao-domingos-do-prata',14,'SÃO DOMINGOS DO PRATA',61007,3161007,5219),
            (2984,'sao-felix-de-minas',14,'SÃO FÉLIX DE MINAS',61056,3161056,712),
            (2985,'sao-francisco',14,'SÃO FRANCISCO',61106,3161106,5221),
            (2986,'sao-francisco-de-paula',14,'SÃO FRANCISCO DE PAULA',61205,3161205,5223),
            (2987,'sao-francisco-de-sales',14,'SÃO FRANCISCO DE SALES',61304,3161304,5225)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2988,'sao-francisco-do-gloria',14,'SÃO FRANCISCO DO GLÓRIA',61403,3161403,5227),
            (2989,'sao-geraldo',14,'SÃO GERALDO',61502,3161502,5229),
            (2990,'sao-geraldo-da-piedade',14,'SÃO GERALDO DA PIEDADE',61601,3161601,5231),
            (2991,'sao-geraldo-do-baixio',14,'SÃO GERALDO DO BAIXIO',61650,3161650,714),
            (2992,'sao-goncalo-do-abaete',14,'SÃO GONÇALO DO ABAETÉ',61700,3161700,5233),
            (2993,'sao-goncalo-do-para',14,'SÃO GONÇALO DO PARÁ',61809,3161809,5235),
            (2994,'sao-goncalo-do-rio-abaixo',14,'SÃO GONÇALO DO RIO ABAIXO',61908,3161908,5237),
            (2995,'sao-goncalo-do-rio-preto',14,'SÃO GONÇALO DO RIO PRETO',25507,3125507,4509),
            (2996,'sao-goncalo-do-sapucai',14,'SÃO GONÇALO DO SAPUCAÍ',62005,3162005,5239),
            (2997,'sao-gotardo',14,'SÃO GOTARDO',62104,3162104,5241)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (2998,'sao-joao-batista-do-gloria',14,'SÃO JOÃO BATISTA DO GLÓRIA',62203,3162203,5243),
            (2999,'sao-joao-da-lagoa',14,'SÃO JOÃO DA LAGOA',62252,3162252,716),
            (3000,'sao-joao-da-mata',14,'SÃO JOÃO DA MATA',62302,3162302,5245),
            (3001,'sao-joao-da-ponte',14,'SÃO JOÃO DA PONTE',62401,3162401,5247),
            (3002,'sao-joao-das-missoes',14,'SÃO JOÃO DAS MISSÕES',62450,3162450,718),
            (3003,'sao-joao-del-rei',14,'SÃO JOÃO DEL REI',62500,3162500,5249),
            (3004,'sao-joao-do-manhuacu',14,'SÃO JOÃO DO MANHUAÇU',62559,3162559,2677),
            (3005,'sao-joao-do-manteninha',14,'SÃO JOÃO DO MANTENINHA',62575,3162575,2679),
            (3006,'sao-joao-do-oriente',14,'SÃO JOÃO DO ORIENTE',62609,3162609,5251),
            (3007,'sao-joao-do-pacui',14,'SÃO JOÃO DO PACUÍ',62658,3162658,720)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3008,'sao-joao-do-paraiso',14,'SÃO JOÃO DO PARAÍSO',62708,3162708,5253),
            (3009,'sao-joao-evangelista',14,'SÃO JOÃO EVANGELISTA',62807,3162807,5255),
            (3010,'sao-joao-nepomuceno',14,'SÃO JOÃO NEPOMUCENO',62906,3162906,5257),
            (3011,'sao-joaquim-de-bicas',14,'SÃO JOAQUIM DE BICAS',62922,3162922,722),
            (3012,'sao-jose-da-barra',14,'SÃO JOSÉ DA BARRA',62948,3162948,724),
            (3013,'sao-jose-da-lapa',14,'SÃO JOSÉ DA LAPA',62955,3162955,2649),
            (3014,'sao-jose-da-safira',14,'SÃO JOSÉ DA SAFIRA',63003,3163003,5259),
            (3015,'sao-jose-da-varginha',14,'SÃO JOSÉ DA VARGINHA',63102,3163102,5261),
            (3016,'sao-jose-do-alegre',14,'SÃO JOSÉ DO ALEGRE',63201,3163201,5263),
            (3017,'sao-jose-do-divino',14,'SÃO JOSÉ DO DIVINO',63300,3163300,5265)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3018,'sao-jose-do-goiabal',14,'SÃO JOSÉ DO GOIABAL',63409,3163409,5267),
            (3019,'sao-jose-do-jacuri',14,'SÃO JOSÉ DO JACURI',63508,3163508,5269),
            (3020,'sao-jose-do-mantimento',14,'SÃO JOSÉ DO MANTIMENTO',63607,3163607,5271),
            (3021,'sao-lourenco',14,'SÃO LOURENÇO',63706,3163706,5273),
            (3022,'sao-miguel-do-anta',14,'SÃO MIGUEL DO ANTA',63805,3163805,5275),
            (3023,'sao-pedro-da-uniao',14,'SÃO PEDRO DA UNIÃO',63904,3163904,5277),
            (3024,'sao-pedro-do-suacui',14,'SÃO PEDRO DO SUAÇUÍ',64100,3164100,5281),
            (3025,'sao-pedro-dos-ferros',14,'SÃO PEDRO DOS FERROS',64001,3164001,5279),
            (3026,'sao-romao',14,'SÃO ROMÃO',64209,3164209,5283),
            (3027,'sao-roque-de-minas',14,'SÃO ROQUE DE MINAS',64308,3164308,5285)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3028,'sao-sebastiao-da-bela-vista',14,'SÃO SEBASTIÃO DA BELA VISTA',64407,3164407,5287),
            (3029,'sao-sebastiao-da-vargem-alegre',14,'SÃO SEBASTIÃO DA VARGEM ALEGRE',64431,3164431,726),
            (3030,'sao-sebastiao-do-anta',14,'SÃO SEBASTIÃO DO ANTA',64472,3164472,728),
            (3031,'sao-sebastiao-do-maranhao',14,'SÃO SEBASTIÃO DO MARANHÃO',64506,3164506,5289),
            (3032,'sao-sebastiao-do-oeste',14,'SÃO SEBASTIÃO DO OESTE',64605,3164605,5291),
            (3033,'sao-sebastiao-do-paraiso',14,'SÃO SEBASTIÃO DO PARAÍSO',64704,3164704,5293),
            (3034,'sao-sebastiao-do-rio-preto',14,'SÃO SEBASTIÃO DO RIO PRETO',64803,3164803,5295),
            (3035,'sao-sebastiao-do-rio-verde',14,'SÃO SEBASTIÃO DO RIO VERDE',64902,3164902,5297),
            (3036,'sao-tiago',14,'SÃO TIAGO',65008,3165008,5299),
            (3037,'sao-tomas-de-aquino',14,'SÃO TOMÁS DE AQUINO',65107,3165107,5301)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3038,'sao-tome-das-letras',14,'SÃO TOMÉ DAS LETRAS',65206,3165206,5303),
            (3039,'sao-vicente-de-minas',14,'SÃO VICENTE DE MINAS',65305,3165305,5305),
            (3040,'sapucai-mirim',14,'SAPUCAÍ-MIRIM',65404,3165404,5307),
            (3041,'sardoa',14,'SARDOÁ',65503,3165503,5309),
            (3042,'sarzedo',14,'SARZEDO',65537,3165537,730),
            (3043,'sem-peixe',14,'SEM-PEIXE',65560,3165560,734),
            (3044,'senador-amaral',14,'SENADOR AMARAL',65578,3165578,2689),
            (3045,'senador-cortes',14,'SENADOR CORTES',65602,3165602,5311),
            (3046,'senador-firmino',14,'SENADOR FIRMINO',65701,3165701,5313),
            (3047,'senador-jose-bento',14,'SENADOR JOSÉ BENTO',65800,3165800,5315)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3048,'senador-modestino-goncalves',14,'SENADOR MODESTINO GONÇALVES',65909,3165909,5317),
            (3049,'senhora-de-oliveira',14,'SENHORA DE OLIVEIRA',66006,3166006,5319),
            (3050,'senhora-do-porto',14,'SENHORA DO PORTO',66105,3166105,5321),
            (3051,'senhora-dos-remedios',14,'SENHORA DOS REMÉDIOS',66204,3166204,5323),
            (3052,'sericita',14,'SERICITA',66303,3166303,5325),
            (3053,'seritinga',14,'SERITINGA',66402,3166402,5327),
            (3054,'serra-azul-de-minas',14,'SERRA AZUL DE MINAS',66501,3166501,5329),
            (3055,'serra-da-saudade',14,'SERRA DA SAUDADE',66600,3166600,5331),
            (3056,'serra-do-salitre',14,'SERRA DO SALITRE',66808,3166808,5335),
            (3057,'serra-dos-aimores',14,'SERRA DOS AIMORÉS',66709,3166709,5333)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3058,'serrania',14,'SERRANIA',66907,3166907,5337),
            (3059,'serranopolis-de-minas',14,'SERRANÓPOLIS DE MINAS',66956,3166956,736),
            (3060,'serranos',14,'SERRANOS',67004,3167004,5339),
            (3061,'serro',14,'SERRO',67103,3167103,5341),
            (3062,'sete-lagoas',14,'SETE LAGOAS',67202,3167202,5343),
            (3063,'setubinha',14,'SETUBINHA',65552,3165552,732),
            (3064,'silveirania',14,'SILVEIRÂNIA',67301,3167301,5345),
            (3065,'silvianopolis',14,'SILVIANÓPOLIS',67400,3167400,5347),
            (3066,'simao-pereira',14,'SIMÃO PEREIRA',67509,3167509,5349),
            (3067,'simonesia',14,'SIMONÉSIA',67608,3167608,5351)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3068,'sobralia',14,'SOBRÁLIA',67707,3167707,5353),
            (3069,'soledade-de-minas',14,'SOLEDADE DE MINAS',67806,3167806,5355),
            (3070,'tabuleiro',14,'TABULEIRO',67905,3167905,5357),
            (3071,'taiobeiras',14,'TAIOBEIRAS',68002,3168002,5359),
            (3072,'taparuba',14,'TAPARUBA',68051,3168051,738),
            (3073,'tapira',14,'TAPIRA',68101,3168101,5361),
            (3074,'tapirai',14,'TAPIRAÍ',68200,3168200,5363),
            (3075,'taquaracu-de-minas',14,'TAQUARAÇU DE MINAS',68309,3168309,5365),
            (3076,'tarumirim',14,'TARUMIRIM',68408,3168408,5367),
            (3077,'teixeiras',14,'TEIXEIRAS',68507,3168507,5369)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3078,'teofilo-otoni',14,'TEÓFILO OTONI',68606,3168606,5371),
            (3079,'timoteo',14,'TIMÓTEO',68705,3168705,5373),
            (3080,'tiradentes',14,'TIRADENTES',68804,3168804,5375),
            (3081,'tiros',14,'TIROS',68903,3168903,5377),
            (3082,'tocantins',14,'TOCANTINS',69000,3169000,5379),
            (3083,'tocos-do-moji',14,'TOCOS DO MOJI',69059,3169059,740),
            (3084,'toledo',14,'TOLEDO',69109,3169109,5381),
            (3085,'tombos',14,'TOMBOS',69208,3169208,5383),
            (3086,'tres-coracoes',14,'TRÊS CORAÇÕES',69307,3169307,5385),
            (3087,'tres-marias',14,'TRÊS MARIAS',69356,3169356,4115)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3088,'tres-pontas',14,'TRÊS PONTAS',69406,3169406,5387),
            (3089,'tumiritinga',14,'TUMIRITINGA',69505,3169505,5389),
            (3090,'tupaciguara',14,'TUPACIGUARA',69604,3169604,5391),
            (3091,'turmalina',14,'TURMALINA',69703,3169703,5393),
            (3092,'turvolandia',14,'TURVOLÂNDIA',69802,3169802,5395),
            (3093,'uba',14,'UBÁ',69901,3169901,5397),
            (3094,'ubai',14,'UBAÍ',70008,3170008,5399),
            (3095,'ubaporanga',14,'UBAPORANGA',70057,3170057,2671),
            (3096,'uberaba',14,'UBERABA',70107,3170107,5401),
            (3097,'uberlandia',14,'UBERLÂNDIA',70206,3170206,5403)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3098,'umburatiba',14,'UMBURATIBA',70305,3170305,5405),
            (3099,'unai',14,'UNAÍ',70404,3170404,5407),
            (3100,'uniao-de-minas',14,'UNIÃO DE MINAS',70438,3170438,742),
            (3101,'uruana-de-minas',14,'URUANA DE MINAS',70479,3170479,744),
            (3102,'urucania',14,'URUCÂNIA',70503,3170503,5409),
            (3103,'urucuia',14,'URUCUIA',70529,3170529,2699),
            (3104,'vargem-alegre',14,'VARGEM ALEGRE',70578,3170578,746),
            (3105,'vargem-bonita',14,'VARGEM BONITA',70602,3170602,5411),
            (3106,'vargem-grande-do-rio-pardo',14,'VARGEM GRANDE DO RIO PARDO',70651,3170651,748),
            (3107,'varginha',14,'VARGINHA',70701,3170701,5413)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3108,'varjao-de-minas',14,'VARJÃO DE MINAS',70750,3170750,750),
            (3109,'varzea-da-palma',14,'VÁRZEA DA PALMA',70800,3170800,5415),
            (3110,'varzelandia',14,'VARZELÂNDIA',70909,3170909,5417),
            (3111,'vazante',14,'VAZANTE',71006,3171006,5419),
            (3112,'verdelandia',14,'VERDELÂNDIA',71030,3171030,752),
            (3113,'veredinha',14,'VEREDINHA',71071,3171071,754),
            (3114,'verissimo',14,'VERÍSSIMO',71105,3171105,5423),
            (3115,'vermelho-novo',14,'VERMELHO NOVO',71154,3171154,756),
            (3116,'vespasiano',14,'VESPASIANO',71204,3171204,5425),
            (3117,'vicosa',14,'VIÇOSA',71303,3171303,5427)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3118,'vieiras',14,'VIEIRAS',71402,3171402,5429),
            (3119,'virgem-da-lapa',14,'VIRGEM DA LAPA',71600,3171600,5433),
            (3120,'virginia',14,'VIRGÍNIA',71709,3171709,5435),
            (3121,'virginopolis',14,'VIRGINÓPOLIS',71808,3171808,5437),
            (3122,'virgolandia',14,'VIRGOLÂNDIA',71907,3171907,5439),
            (3123,'visconde-do-rio-branco',14,'VISCONDE DO RIO BRANCO',72004,3172004,5441),
            (3124,'volta-grande',14,'VOLTA GRANDE',72103,3172103,5443),
            (3125,'wenceslau-braz',14,'WENCESLAU BRAZ',72202,3172202,5421),
            (3126,'afonso-claudio',9,'AFONSO CLÁUDIO',102,3200102,5601),
            (3127,'agua-doce-do-norte',9,'ÁGUA DOCE DO NORTE',169,3200169,5717)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3128,'aguia-branca',9,'ÁGUIA BRANCA',136,3200136,5733),
            (3129,'alegre',9,'ALEGRE',201,3200201,5603),
            (3130,'alfredo-chaves',9,'ALFREDO CHAVES',300,3200300,5605),
            (3131,'alto-rio-novo',9,'ALTO RIO NOVO',359,3200359,5719),
            (3132,'anchieta',9,'ANCHIETA',409,3200409,5607),
            (3133,'apiaca',9,'APIACÁ',508,3200508,5609),
            (3134,'aracruz',9,'ARACRUZ',607,3200607,5611),
            (3135,'atilio-vivacqua',9,'ATÍLIO VIVÁCQUA',706,3200706,5613),
            (3136,'baixo-guandu',9,'BAIXO GUANDU',805,3200805,5615),
            (3137,'barra-de-sao-francisco',9,'BARRA DE SÃO FRANCISCO',904,3200904,5617)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3138,'boa-esperanca',9,'BOA ESPERANÇA',1001,3201001,5619),
            (3139,'bom-jesus-do-norte',9,'BOM JESUS DO NORTE',1100,3201100,5621),
            (3140,'brejetuba',9,'BREJETUBA',1159,3201159,758),
            (3141,'cachoeiro-de-itapemirim',9,'CACHOEIRO DE ITAPEMIRIM',1209,3201209,5623),
            (3142,'cariacica',9,'CARIACICA',1308,3201308,5625),
            (3143,'castelo',9,'CASTELO',1407,3201407,5627),
            (3144,'colatina',9,'COLATINA',1506,3201506,5629),
            (3145,'conceicao-da-barra',9,'CONCEIÇÃO DA BARRA',1605,3201605,5631),
            (3146,'conceicao-do-castelo',9,'CONCEIÇÃO DO CASTELO',1704,3201704,5633),
            (3147,'divino-de-sao-lourenco',9,'DIVINO DE SÃO LOURENÇO',1803,3201803,5635)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3148,'domingos-martins',9,'DOMINGOS MARTINS',1902,3201902,5637),
            (3149,'dores-do-rio-preto',9,'DORES DO RIO PRETO',2009,3202009,5639),
            (3150,'ecoporanga',9,'ECOPORANGA',2108,3202108,5641),
            (3151,'fundao',9,'FUNDÃO',2207,3202207,5643),
            (3152,'governador-lindenberg',9,'GOVERNADOR LINDENBERG',2256,3202256,1114),
            (3153,'guacui',9,'GUAÇUÍ',2306,3202306,5645),
            (3154,'guarapari',9,'GUARAPARI',2405,3202405,5647),
            (3155,'ibatiba',9,'IBATIBA',2454,3202454,5709),
            (3156,'ibiracu',9,'IBIRAÇU',2504,3202504,5649),
            (3157,'ibitirama',9,'IBITIRAMA',2553,3202553,6011)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3158,'iconha',9,'ICONHA',2603,3202603,5651),
            (3159,'irupi',9,'IRUPI',2652,3202652,2931),
            (3160,'itaguacu',9,'ITAGUAÇU',2702,3202702,5653),
            (3161,'itapemirim',9,'ITAPEMIRIM',2801,3202801,5655),
            (3162,'itarana',9,'ITARANA',2900,3202900,5657),
            (3163,'iuna',9,'IÚNA',3007,3203007,5659),
            (3164,'jaguare',9,'JAGUARÉ',3056,3203056,5713),
            (3165,'jeronimo-monteiro',9,'JERÔNIMO MONTEIRO',3106,3203106,5661),
            (3166,'joao-neiva',9,'JOÃO NEIVA',3130,3203130,5721),
            (3373,'bofete',26,'BOFETE',6904,3506904,6237)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3167,'laranja-da-terra',9,'LARANJA DA TERRA',3163,3203163,5723),
            (3168,'linhares',9,'LINHARES',3205,3203205,5663),
            (3169,'mantenopolis',9,'MANTENÓPOLIS',3304,3203304,5665),
            (3170,'marataizes',9,'MARATAÍZES',3320,3203320,760),
            (3171,'marechal-floriano',9,'MARECHAL FLORIANO',3346,3203346,2929),
            (3172,'marilandia',9,'MARILÂNDIA',3353,3203353,5707),
            (3173,'mimoso-do-sul',9,'MIMOSO DO SUL',3403,3203403,5667),
            (3174,'montanha',9,'MONTANHA',3502,3203502,5669),
            (3175,'mucurici',9,'MUCURICI',3601,3203601,5671),
            (3176,'muniz-freire',9,'MUNIZ FREIRE',3700,3203700,5673)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3177,'muqui',9,'MUQUI',3809,3203809,5675),
            (3178,'nova-venecia',9,'NOVA VENÉCIA',3908,3203908,5677),
            (3179,'pancas',9,'PANCAS',4005,3204005,5679),
            (3180,'pedro-canario',9,'PEDRO CANÁRIO',4054,3204054,5715),
            (3181,'pinheiros',9,'PINHEIROS',4104,3204104,5681),
            (3182,'piuma',9,'PIÚMA',4203,3204203,5683),
            (3183,'ponto-belo',9,'PONTO BELO',4252,3204252,762),
            (3184,'presidente-kennedy',9,'PRESIDENTE KENNEDY',4302,3204302,5685),
            (3185,'rio-bananal',9,'RIO BANANAL',4351,3204351,5711),
            (3186,'rio-novo-do-sul',9,'RIO NOVO DO SUL',4401,3204401,5687)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3187,'santa-leopoldina',9,'SANTA LEOPOLDINA',4500,3204500,5689),
            (3188,'santa-maria-de-jetiba',9,'SANTA MARIA DE JETIBÁ',4559,3204559,5725),
            (3189,'santa-teresa',9,'SANTA TERESA',4609,3204609,5691),
            (3190,'sao-domingos-do-norte',9,'SÃO DOMINGOS DO NORTE',4658,3204658,2933),
            (3191,'sao-gabriel-da-palha',9,'SÃO GABRIEL DA PALHA',4708,3204708,5693),
            (3192,'sao-jose-do-calcado',9,'SÃO JOSÉ DO CALÇADO',4807,3204807,5695),
            (3193,'sao-mateus',9,'SÃO MATEUS',4906,3204906,5697),
            (3194,'sao-roque-do-canaa',9,'SÃO ROQUE DO CANAÃ',4955,3204955,764),
            (3195,'serra',9,'SERRA',5002,3205002,5699),
            (3196,'sooretama',9,'SOORETAMA',5010,3205010,766)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3197,'vargem-alta',9,'VARGEM ALTA',5036,3205036,5727),
            (3198,'venda-nova-do-imigrante',9,'VENDA NOVA DO IMIGRANTE',5069,3205069,5729),
            (3199,'viana',9,'VIANA',5101,3205101,5701),
            (3200,'vila-pavao',9,'VILA PAVÃO',5150,3205150,2935),
            (3201,'vila-valerio',9,'VILA VALÉRIO',5176,3205176,768),
            (3202,'vila-velha',9,'VILA VELHA',5200,3205200,5703),
            (3203,'vitoria',9,'VITÓRIA',5309,3205309,5705),
            (3204,'angra-dos-reis',20,'ANGRA DOS REIS',100,3300100,5801),
            (3205,'aperibe',20,'APERIBÉ',159,3300159,2919),
            (3206,'araruama',20,'ARARUAMA',209,3300209,5803)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3207,'areal',20,'AREAL',225,3300225,2925),
            (3208,'armacao-dos-buzios',20,'ARMAÇÃO DOS BÚZIOS',233,3300233,770),
            (3209,'arraial-do-cabo',20,'ARRAIAL DO CABO',258,3300258,5927),
            (3210,'barra-do-pirai',20,'BARRA DO PIRAÍ',308,3300308,5805),
            (3211,'barra-mansa',20,'BARRA MANSA',407,3300407,5807),
            (3212,'belford-roxo',20,'BELFORD ROXO',456,3300456,2909),
            (3213,'bom-jardim',20,'BOM JARDIM',506,3300506,5809),
            (3214,'bom-jesus-do-itabapoana',20,'BOM JESUS DO ITABAPOANA',605,3300605,5811),
            (3215,'cabo-frio',20,'CABO FRIO',704,3300704,5813),
            (3216,'cachoeiras-de-macacu',20,'CACHOEIRAS DE MACACU',803,3300803,5815)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3217,'cambuci',20,'CAMBUCI',902,3300902,5817),
            (3218,'campos-dos-goytacazes',20,'CAMPOS DOS GOYTACAZES',1009,3301009,5819),
            (3219,'cantagalo',20,'CANTAGALO',1108,3301108,5821),
            (3220,'carapebus',20,'CARAPEBUS',936,3300936,772),
            (3221,'cardoso-moreira',20,'CARDOSO MOREIRA',1157,3301157,2915),
            (3222,'carmo',20,'CARMO',1207,3301207,5823),
            (3223,'casimiro-de-abreu',20,'CASIMIRO DE ABREU',1306,3301306,5825),
            (3224,'comendador-levy-gasparian',20,'COMENDADOR LEVY GASPARIAN',951,3300951,2927),
            (3225,'conceicao-de-macabu',20,'CONCEIÇÃO DE MACABU',1405,3301405,5827),
            (3226,'cordeiro',20,'CORDEIRO',1504,3301504,5829)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3227,'duas-barras',20,'DUAS BARRAS',1603,3301603,5831),
            (3228,'duque-de-caxias',20,'DUQUE DE CAXIAS',1702,3301702,5833),
            (3229,'engenheiro-paulo-de-frontin',20,'ENGENHEIRO PAULO DE FRONTIN',1801,3301801,5835),
            (3230,'guapimirim',20,'GUAPIMIRIM',1850,3301850,2907),
            (3231,'iguaba-grande',20,'IGUABA GRANDE',1876,3301876,774),
            (3232,'itaborai',20,'ITABORAÍ',1900,3301900,5837),
            (3233,'itaguai',20,'ITAGUAÍ',2007,3302007,5839),
            (3234,'italva',20,'ITALVA',2056,3302056,5929),
            (3235,'itaocara',20,'ITAOCARA',2106,3302106,5841),
            (3236,'itaperuna',20,'ITAPERUNA',2205,3302205,5843)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3237,'itatiaia',20,'ITATIAIA',2254,3302254,6003),
            (3238,'japeri',20,'JAPERI',2270,3302270,2913),
            (3239,'laje-do-muriae',20,'LAJE DO MURIAÉ',2304,3302304,5845),
            (3240,'macae',20,'MACAÉ',2403,3302403,5847),
            (3241,'macuco',20,'MACUCO',2452,3302452,776),
            (3242,'mage',20,'MAGÉ',2502,3302502,5849),
            (3243,'mangaratiba',20,'MANGARATIBA',2601,3302601,5851),
            (3244,'marica',20,'MARICÁ',2700,3302700,5853),
            (3245,'mendes',20,'MENDES',2809,3302809,5855),
            (3246,'mesquita',20,'MESQUITA',2858,3302858,1116)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3247,'miguel-pereira',20,'MIGUEL PEREIRA',2908,3302908,5857),
            (3248,'miracema',20,'MIRACEMA',3005,3303005,5859),
            (3249,'natividade',20,'NATIVIDADE',3104,3303104,5861),
            (3250,'nilopolis',20,'NILÓPOLIS',3203,3303203,5863),
            (3251,'niteroi',20,'NITERÓI',3302,3303302,5865),
            (3252,'nova-friburgo',20,'NOVA FRIBURGO',3401,3303401,5867),
            (3253,'nova-iguacu',20,'NOVA IGUAÇU',3500,3303500,5869),
            (3254,'paracambi',20,'PARACAMBI',3609,3303609,5871),
            (3255,'paraiba-do-sul',20,'PARAÍBA DO SUL',3708,3303708,5873),
            (3256,'paraty',20,'PARATY',3807,3303807,5875)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3257,'paty-do-alferes',20,'PATY DO ALFERES',3856,3303856,6005),
            (3258,'petropolis',20,'PETRÓPOLIS',3906,3303906,5877),
            (3259,'pinheiral',20,'PINHEIRAL',3955,3303955,778),
            (3260,'pirai',20,'PIRAÍ',4003,3304003,5879),
            (3261,'porciuncula',20,'PORCIÚNCULA',4102,3304102,5881),
            (3262,'porto-real',20,'PORTO REAL',4110,3304110,780),
            (3263,'quatis',20,'QUATIS',4128,3304128,2923),
            (3264,'queimados',20,'QUEIMADOS',4144,3304144,2911),
            (3265,'quissama',20,'QUISSAMÃ',4151,3304151,6007),
            (3266,'resende',20,'RESENDE',4201,3304201,5883)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3267,'rio-bonito',20,'RIO BONITO',4300,3304300,5885),
            (3268,'rio-claro',20,'RIO CLARO',4409,3304409,5887),
            (3269,'rio-das-flores',20,'RIO DAS FLORES',4508,3304508,5889),
            (3270,'rio-das-ostras',20,'RIO DAS OSTRAS',4524,3304524,2921),
            (3271,'rio-de-janeiro',20,'RIO DE JANEIRO',4557,3304557,6001),
            (3272,'santa-maria-madalena',20,'SANTA MARIA MADALENA',4607,3304607,5891),
            (3273,'santo-antonio-de-padua',20,'SANTO ANTÔNIO DE PÁDUA',4706,3304706,5893),
            (3274,'sao-fidelis',20,'SÃO FIDÉLIS',4805,3304805,5895),
            (3275,'sao-francisco-de-itabapoana',20,'SÃO FRANCISCO DE ITABAPOANA',4755,3304755,782),
            (3276,'sao-goncalo',20,'SÃO GONÇALO',4904,3304904,5897)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3277,'sao-joao-da-barra',20,'SÃO JOÃO DA BARRA',5000,3305000,5899),
            (3278,'sao-joao-de-meriti',20,'SÃO JOÃO DE MERITI',5109,3305109,5901),
            (3279,'sao-jose-de-uba',20,'SÃO JOSÉ DE UBÁ',5133,3305133,784),
            (3280,'sao-jose-do-vale-do-rio-preto',20,'SÃO JOSÉ DO VALE DO RIO PRETO',5158,3305158,6009),
            (3281,'sao-pedro-da-aldeia',20,'SÃO PEDRO DA ALDEIA',5208,3305208,5903),
            (3282,'sao-sebastiao-do-alto',20,'SÃO SEBASTIÃO DO ALTO',5307,3305307,5905),
            (3283,'sapucaia',20,'SAPUCAIA',5406,3305406,5907),
            (3284,'saquarema',20,'SAQUAREMA',5505,3305505,5909),
            (3285,'seropedica',20,'SEROPÉDICA',5554,3305554,786),
            (3286,'silva-jardim',20,'SILVA JARDIM',5604,3305604,5911)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3287,'sumidouro',20,'SUMIDOURO',5703,3305703,5913),
            (3288,'tangua',20,'TANGUÁ',5752,3305752,788),
            (3289,'teresopolis',20,'TERESÓPOLIS',5802,3305802,5915),
            (3290,'trajano-de-moraes',20,'TRAJANO DE MORAES',5901,3305901,5917),
            (3291,'tres-rios',20,'TRÊS RIOS',6008,3306008,5919),
            (3292,'valenca',20,'VALENÇA',6107,3306107,5921),
            (3293,'varre-sai',20,'VARRE-SAI',6156,3306156,2917),
            (3294,'vassouras',20,'VASSOURAS',6206,3306206,5923),
            (3295,'volta-redonda',20,'VOLTA REDONDA',6305,3306305,5925),
            (3296,'adamantina',26,'ADAMANTINA',105,3500105,6101)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3297,'adolfo',26,'ADOLFO',204,3500204,6103),
            (3298,'aguai',26,'AGUAÍ',303,3500303,6105),
            (3299,'aguas-da-prata',26,'ÁGUAS DA PRATA',402,3500402,6107),
            (3300,'aguas-de-lindoia',26,'ÁGUAS DE LINDÓIA',501,3500501,6109),
            (3301,'aguas-de-santa-barbara',26,'ÁGUAS DE SANTA BÁRBARA',550,3500550,7019),
            (3302,'aguas-de-sao-pedro',26,'ÁGUAS DE SÃO PEDRO',600,3500600,6111),
            (3303,'agudos',26,'AGUDOS',709,3500709,6113),
            (3304,'alambari',26,'ALAMBARI',758,3500758,2995),
            (3305,'alfredo-marcondes',26,'ALFREDO MARCONDES',808,3500808,6115),
            (3306,'altair',26,'ALTAIR',907,3500907,6117)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3307,'altinopolis',26,'ALTINÓPOLIS',1004,3501004,6119),
            (3308,'alto-alegre',26,'ALTO ALEGRE',1103,3501103,6121),
            (3309,'aluminio',26,'ALUMÍNIO',1152,3501152,3065),
            (3310,'alvares-florence',26,'ÁLVARES FLORENCE',1202,3501202,6123),
            (3311,'alvares-machado',26,'ÁLVARES MACHADO',1301,3501301,6125),
            (3312,'alvaro-de-carvalho',26,'ÁLVARO DE CARVALHO',1400,3501400,6127),
            (3313,'alvinlandia',26,'ALVINLÂNDIA',1509,3501509,6129),
            (3314,'americana',26,'AMERICANA',1608,3501608,6131),
            (3315,'americo-brasiliense',26,'AMÉRICO BRASILIENSE',1707,3501707,6133),
            (3316,'americo-de-campos',26,'AMÉRICO DE CAMPOS',1806,3501806,6135)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3317,'amparo',26,'AMPARO',1905,3501905,6137),
            (3318,'analandia',26,'ANALÂNDIA',2002,3502002,6139),
            (3319,'andradina',26,'ANDRADINA',2101,3502101,6141),
            (3320,'angatuba',26,'ANGATUBA',2200,3502200,6143),
            (3321,'anhembi',26,'ANHEMBI',2309,3502309,6145),
            (3322,'anhumas',26,'ANHUMAS',2408,3502408,6147),
            (3323,'aparecida',26,'APARECIDA',2507,3502507,6149),
            (3324,'aparecida-doeste',26,'APARECIDA D''OESTE',2606,3502606,6151),
            (3325,'apiai',26,'APIAÍ',2705,3502705,6153),
            (3326,'aracariguama',26,'ARAÇARIGUAMA',2754,3502754,3067)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3327,'aracatuba',26,'ARAÇATUBA',2804,3502804,6155),
            (3328,'aracoiaba-da-serra',26,'ARAÇOIABA DA SERRA',2903,3502903,6157),
            (3329,'aramina',26,'ARAMINA',3000,3503000,6159),
            (3330,'arandu',26,'ARANDU',3109,3503109,6161),
            (3331,'arapei',26,'ARAPEÍ',3158,3503158,2991),
            (3332,'araraquara',26,'ARARAQUARA',3208,3503208,6163),
            (3333,'araras',26,'ARARAS',3307,3503307,6165),
            (3334,'arco-iris',26,'ARCO-ÍRIS',3356,3503356,790),
            (3335,'arealva',26,'AREALVA',3406,3503406,6167),
            (3336,'areias',26,'AREIAS',3505,3503505,6169)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3337,'areiopolis',26,'AREIÓPOLIS',3604,3503604,6171),
            (3338,'ariranha',26,'ARIRANHA',3703,3503703,6173),
            (3339,'artur-nogueira',26,'ARTUR NOGUEIRA',3802,3503802,6175),
            (3340,'aruja',26,'ARUJÁ',3901,3503901,6177),
            (3341,'aspasia',26,'ASPÁSIA',3950,3503950,2981),
            (3342,'assis',26,'ASSIS',4008,3504008,6179),
            (3343,'atibaia',26,'ATIBAIA',4107,3504107,6181),
            (3344,'auriflama',26,'AURIFLAMA',4206,3504206,6183),
            (3345,'avai',26,'AVAÍ',4305,3504305,6185),
            (3346,'avanhandava',26,'AVANHANDAVA',4404,3504404,6187)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3347,'avare',26,'AVARÉ',4503,3504503,6189),
            (3348,'bady-bassitt',26,'BADY BASSITT',4602,3504602,6191),
            (3349,'balbinos',26,'BALBINOS',4701,3504701,6193),
            (3350,'balsamo',26,'BÁLSAMO',4800,3504800,6195),
            (3351,'bananal',26,'BANANAL',4909,3504909,6197),
            (3352,'barao-de-antonina',26,'BARÃO DE ANTONINA',5005,3505005,6201),
            (3353,'barbosa',26,'BARBOSA',5104,3505104,6199),
            (3354,'bariri',26,'BARIRI',5203,3505203,6203),
            (3355,'barra-bonita',26,'BARRA BONITA',5302,3505302,6205),
            (3356,'barra-do-chapeu',26,'BARRA DO CHAPÉU',5351,3505351,2997)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3357,'barra-do-turvo',26,'BARRA DO TURVO',5401,3505401,6207),
            (3358,'barretos',26,'BARRETOS',5500,3505500,6209),
            (3359,'barrinha',26,'BARRINHA',5609,3505609,6211),
            (3360,'barueri',26,'BARUERI',5708,3505708,6213),
            (3361,'bastos',26,'BASTOS',5807,3505807,6215),
            (3362,'batatais',26,'BATATAIS',5906,3505906,6217),
            (3363,'bauru',26,'BAURU',6003,3506003,6219),
            (3364,'bebedouro',26,'BEBEDOURO',6102,3506102,6221),
            (3365,'bento-de-abreu',26,'BENTO DE ABREU',6201,3506201,6223),
            (3366,'bernardino-de-campos',26,'BERNARDINO DE CAMPOS',6300,3506300,6225)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3367,'bertioga',26,'BERTIOGA',6359,3506359,2965),
            (3368,'bilac',26,'BILAC',6409,3506409,6227),
            (3369,'birigui',26,'BIRIGUI',6508,3506508,6229),
            (3370,'biritiba-mirim',26,'BIRITIBA MIRIM',6607,3506607,6231),
            (3371,'boa-esperanca-do-sul',26,'BOA ESPERANÇA DO SUL',6706,3506706,6233),
            (3374,'boituva',26,'BOITUVA',7001,3507001,6239),
            (3375,'bom-jesus-dos-perdoes',26,'BOM JESUS DOS PERDÕES',7100,3507100,6241),
            (3376,'bom-sucesso-de-itarare',26,'BOM SUCESSO DE ITARARÉ',7159,3507159,3059),
            (3377,'bora',26,'BORÁ',7209,3507209,6243),
            (3378,'boraceia',26,'BORACÉIA',7308,3507308,6245)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3379,'borborema',26,'BORBOREMA',7407,3507407,6247),
            (3380,'borebi',26,'BOREBI',7456,3507456,7247),
            (3381,'botucatu',26,'BOTUCATU',7506,3507506,6249),
            (3382,'braganca-paulista',26,'BRAGANÇA PAULISTA',7605,3507605,6251),
            (3383,'brauna',26,'BRAÚNA',7704,3507704,6255),
            (3384,'brejo-alegre',26,'BREJO ALEGRE',7753,3507753,792),
            (3385,'brodowski',26,'BRODOWSKI',7803,3507803,6257),
            (3386,'brotas',26,'BROTAS',7902,3507902,6259),
            (3387,'buri',26,'BURI',8009,3508009,6261),
            (3388,'buritama',26,'BURITAMA',8108,3508108,6263)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3389,'buritizal',26,'BURITIZAL',8207,3508207,6265),
            (3390,'cabralia-paulista',26,'CABRÁLIA PAULISTA',8306,3508306,6267),
            (3391,'cabreuva',26,'CABREÚVA',8405,3508405,6269),
            (3392,'cacapava',26,'CAÇAPAVA',8504,3508504,6271),
            (3393,'cachoeira-paulista',26,'CACHOEIRA PAULISTA',8603,3508603,6273),
            (3394,'caconde',26,'CACONDE',8702,3508702,6275),
            (3395,'cafelandia',26,'CAFELÂNDIA',8801,3508801,6277),
            (3396,'caiabu',26,'CAIABU',8900,3508900,6279),
            (3397,'caieiras',26,'CAIEIRAS',9007,3509007,6281),
            (3398,'caiua',26,'CAIUÁ',9106,3509106,6283)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3399,'cajamar',26,'CAJAMAR',9205,3509205,6285),
            (3400,'cajati',26,'CAJATI',9254,3509254,2967),
            (3401,'cajobi',26,'CAJOBI',9304,3509304,6287),
            (3402,'cajuru',26,'CAJURU',9403,3509403,6289),
            (3403,'campina-do-monte-alegre',26,'CAMPINA DO MONTE ALEGRE',9452,3509452,2999),
            (3404,'campinas',26,'CAMPINAS',9502,3509502,6291),
            (3405,'campo-limpo-paulista',26,'CAMPO LIMPO PAULISTA',9601,3509601,6293),
            (3406,'campos-do-jordao',26,'CAMPOS DO JORDÃO',9700,3509700,6295),
            (3407,'campos-novos-paulista',26,'CAMPOS NOVOS PAULISTA',9809,3509809,6297),
            (3408,'cananeia',26,'CANANÉIA',9908,3509908,6299)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3409,'canas',26,'CANAS',9957,3509957,794),
            (3410,'candido-mota',26,'CÂNDIDO MOTA',10005,3510005,6301),
            (3411,'candido-rodrigues',26,'CÂNDIDO RODRIGUES',10104,3510104,6303),
            (3412,'canitar',26,'CANITAR',10153,3510153,2947),
            (3413,'capao-bonito',26,'CAPÃO BONITO',10203,3510203,6305),
            (3414,'capela-do-alto',26,'CAPELA DO ALTO',10302,3510302,6307),
            (3415,'capivari',26,'CAPIVARI',10401,3510401,6309),
            (3416,'caraguatatuba',26,'CARAGUATATUBA',10500,3510500,6311),
            (3417,'carapicuiba',26,'CARAPICUÍBA',10609,3510609,6313),
            (3418,'cardoso',26,'CARDOSO',10708,3510708,6315)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3419,'casa-branca',26,'CASA BRANCA',10807,3510807,6317),
            (3420,'cassia-dos-coqueiros',26,'CÁSSIA DOS COQUEIROS',10906,3510906,6319),
            (3421,'castilho',26,'CASTILHO',11003,3511003,6321),
            (3422,'catanduva',26,'CATANDUVA',11102,3511102,6323),
            (3423,'catigua',26,'CATIGUÁ',11201,3511201,6325),
            (3424,'cedral',26,'CEDRAL',11300,3511300,6327),
            (3425,'cerqueira-cesar',26,'CERQUEIRA CÉSAR',11409,3511409,6329),
            (3426,'cerquilho',26,'CERQUILHO',11508,3511508,6331),
            (3427,'cesario-lange',26,'CESÁRIO LANGE',11607,3511607,6333),
            (3428,'charqueada',26,'CHARQUEADA',11706,3511706,6335)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3429,'chavantes',26,'CHAVANTES',57204,3557204,6337),
            (3430,'clementina',26,'CLEMENTINA',11904,3511904,6339),
            (3431,'colina',26,'COLINA',12001,3512001,6341),
            (3432,'colombia',26,'COLÔMBIA',12100,3512100,6343),
            (3433,'conchal',26,'CONCHAL',12209,3512209,6345),
            (3434,'conchas',26,'CONCHAS',12308,3512308,6347),
            (3435,'cordeiropolis',26,'CORDEIRÓPOLIS',12407,3512407,6349),
            (3436,'coroados',26,'COROADOS',12506,3512506,6351),
            (3437,'coronel-macedo',26,'CORONEL MACEDO',12605,3512605,6353),
            (3438,'corumbatai',26,'CORUMBATAÍ',12704,3512704,6355)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3439,'cosmopolis',26,'COSMÓPOLIS',12803,3512803,6357),
            (3440,'cosmorama',26,'COSMORAMA',12902,3512902,6359),
            (3441,'cotia',26,'COTIA',13009,3513009,6361),
            (3442,'cravinhos',26,'CRAVINHOS',13108,3513108,6363),
            (3443,'cristais-paulista',26,'CRISTAIS PAULISTA',13207,3513207,6365),
            (3444,'cruzalia',26,'CRUZÁLIA',13306,3513306,6367),
            (3445,'cruzeiro',26,'CRUZEIRO',13405,3513405,6369),
            (3446,'cubatao',26,'CUBATÃO',13504,3513504,6371),
            (3447,'cunha',26,'CUNHA',13603,3513603,6373),
            (3448,'descalvado',26,'DESCALVADO',13702,3513702,6375)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3449,'diadema',26,'DIADEMA',13801,3513801,6377),
            (3450,'dirce-reis',26,'DIRCE REIS',13850,3513850,7249),
            (3451,'divinolandia',26,'DIVINOLÂNDIA',13900,3513900,6379),
            (3452,'dobrada',26,'DOBRADA',14007,3514007,6381),
            (3453,'dois-corregos',26,'DOIS CÓRREGOS',14106,3514106,6383),
            (3454,'dolcinopolis',26,'DOLCINÓPOLIS',14205,3514205,6385),
            (3455,'dourado',26,'DOURADO',14304,3514304,6387),
            (3456,'dracena',26,'DRACENA',14403,3514403,6389),
            (3457,'duartina',26,'DUARTINA',14502,3514502,6391),
            (3458,'dumont',26,'DUMONT',14601,3514601,6393)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3459,'echapora',26,'ECHAPORÃ',14700,3514700,6395),
            (3460,'eldorado',26,'ELDORADO',14809,3514809,6397),
            (3461,'elias-fausto',26,'ELIAS FAUSTO',14908,3514908,6399),
            (3462,'elisiario',26,'ELISIÁRIO',14924,3514924,2975),
            (3463,'embauba',26,'EMBAÚBA',14957,3514957,7251),
            (3464,'embu-das-artes',26,'EMBU DAS ARTES',15004,3515004,6401),
            (3465,'embu-guacu',26,'EMBU-GUAÇU',15103,3515103,6403),
            (3466,'emilianopolis',26,'EMILIANÓPOLIS',15129,3515129,2961),
            (3467,'engenheiro-coelho',26,'ENGENHEIRO COELHO',15152,3515152,2949),
            (3468,'espirito-santo-do-pinhal',26,'ESPÍRITO SANTO DO PINHAL',15186,3515186,6865)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3469,'espirito-santo-do-turvo',26,'ESPÍRITO SANTO DO TURVO',15194,3515194,7253),
            (3470,'estiva-gerbi',26,'ESTIVA GERBI',57303,3557303,2959),
            (3471,'estrela-do-norte',26,'ESTRELA DO NORTE',15301,3515301,6407),
            (3472,'estrela-doeste',26,'ESTRELA D''OESTE',15202,3515202,6405),
            (3473,'euclides-da-cunha-paulista',26,'EUCLIDES DA CUNHA PAULISTA',15350,3515350,7255),
            (3474,'fartura',26,'FARTURA',15400,3515400,6409),
            (3475,'fernando-prestes',26,'FERNANDO PRESTES',15608,3515608,6413),
            (3476,'fernandopolis',26,'FERNANDÓPOLIS',15509,3515509,6411),
            (3477,'fernao',26,'FERNÃO',15657,3515657,796),
            (3478,'ferraz-de-vasconcelos',26,'FERRAZ DE VASCONCELOS',15707,3515707,6415)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3479,'flora-rica',26,'FLORA RICA',15806,3515806,6417),
            (3480,'floreal',26,'FLOREAL',15905,3515905,6419),
            (3481,'florida-paulista',26,'FLÓRIDA PAULISTA',16002,3516002,6421),
            (3482,'florinea',26,'FLORÍNEA',16101,3516101,6423),
            (3483,'franca',26,'FRANCA',16200,3516200,6425),
            (3484,'francisco-morato',26,'FRANCISCO MORATO',16309,3516309,6427),
            (3485,'franco-da-rocha',26,'FRANCO DA ROCHA',16408,3516408,6429),
            (3486,'gabriel-monteiro',26,'GABRIEL MONTEIRO',16507,3516507,6431),
            (3487,'galia',26,'GÁLIA',16606,3516606,6433),
            (3488,'garca',26,'GARÇA',16705,3516705,6435)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3489,'gastao-vidigal',26,'GASTÃO VIDIGAL',16804,3516804,6437),
            (3490,'gaviao-peixoto',26,'GAVIÃO PEIXOTO',16853,3516853,798),
            (3491,'general-salgado',26,'GENERAL SALGADO',16903,3516903,6439),
            (3492,'getulina',26,'GETULINA',17000,3517000,6441),
            (3493,'glicerio',26,'GLICÉRIO',17109,3517109,6443),
            (3494,'guaicara',26,'GUAIÇARA',17208,3517208,6445),
            (3495,'guaimbe',26,'GUAIMBÊ',17307,3517307,6447),
            (3496,'guaira',26,'GUAÍRA',17406,3517406,6449),
            (3497,'guapiacu',26,'GUAPIAÇU',17505,3517505,6451),
            (3498,'guapiara',26,'GUAPIARA',17604,3517604,6453)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3499,'guara',26,'GUARÁ',17703,3517703,6455),
            (3500,'guaracai',26,'GUARAÇAÍ',17802,3517802,6457),
            (3501,'guaraci',26,'GUARACI',17901,3517901,6459),
            (3502,'guarani-doeste',26,'GUARANI D''OESTE',18008,3518008,6461),
            (3503,'guaranta',26,'GUARANTÃ',18107,3518107,6463),
            (3504,'guararapes',26,'GUARARAPES',18206,3518206,6465),
            (3505,'guararema',26,'GUARAREMA',18305,3518305,6467),
            (3506,'guaratingueta',26,'GUARATINGUETÁ',18404,3518404,6469),
            (3507,'guarei',26,'GUAREÍ',18503,3518503,6471),
            (3508,'guariba',26,'GUARIBA',18602,3518602,6473)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3509,'guaruja',26,'GUARUJÁ',18701,3518701,6475),
            (3510,'guarulhos',26,'GUARULHOS',18800,3518800,6477),
            (3511,'guatapara',26,'GUATAPARÁ',18859,3518859,7257),
            (3512,'guzolandia',26,'GUZOLÂNDIA',18909,3518909,6479),
            (3513,'herculandia',26,'HERCULÂNDIA',19006,3519006,6481),
            (3514,'holambra',26,'HOLAMBRA',19055,3519055,2953),
            (3515,'hortolandia',26,'HORTOLÂNDIA',19071,3519071,2951),
            (3516,'iacanga',26,'IACANGA',19105,3519105,6483),
            (3517,'iacri',26,'IACRI',19204,3519204,6485),
            (3518,'iaras',26,'IARAS',19253,3519253,7259)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3519,'ibate',26,'IBATÉ',19303,3519303,6487),
            (3520,'ibira',26,'IBIRÁ',19402,3519402,6489),
            (3521,'ibirarema',26,'IBIRAREMA',19501,3519501,6491),
            (3522,'ibitinga',26,'IBITINGA',19600,3519600,6493),
            (3523,'ibiuna',26,'IBIÚNA',19709,3519709,6495),
            (3524,'icem',26,'ICÉM',19808,3519808,6497),
            (3525,'iepe',26,'IEPÊ',19907,3519907,6499),
            (3526,'igaracu-do-tiete',26,'IGARAÇU DO TIETÊ',20004,3520004,6501),
            (3527,'igarapava',26,'IGARAPAVA',20103,3520103,6503),
            (3528,'igarata',26,'IGARATÁ',20202,3520202,6505)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3529,'iguape',26,'IGUAPE',20301,3520301,6507),
            (3530,'ilha-comprida',26,'ILHA COMPRIDA',20426,3520426,2969),
            (3531,'ilha-solteira',26,'ILHA SOLTEIRA',20442,3520442,2943),
            (3532,'ilhabela',26,'ILHABELA',20400,3520400,6509),
            (3533,'indaiatuba',26,'INDAIATUBA',20509,3520509,6511),
            (3534,'indiana',26,'INDIANA',20608,3520608,6513),
            (3535,'indiapora',26,'INDIAPORÃ',20707,3520707,6515),
            (3536,'inubia-paulista',26,'INÚBIA PAULISTA',20806,3520806,6517),
            (3537,'ipaussu',26,'IPAUSSU',20905,3520905,6519),
            (3538,'ipero',26,'IPERÓ',21002,3521002,6521)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3539,'ipeuna',26,'IPEÚNA',21101,3521101,6523),
            (3540,'ipigua',26,'IPIGUÁ',21150,3521150,800),
            (3541,'iporanga',26,'IPORANGA',21200,3521200,6525),
            (3542,'ipua',26,'IPUÃ',21309,3521309,6527),
            (3543,'iracemapolis',26,'IRACEMÁPOLIS',21408,3521408,6529),
            (3544,'irapua',26,'IRAPUÃ',21507,3521507,6531),
            (3545,'irapuru',26,'IRAPURU',21606,3521606,6533),
            (3546,'itabera',26,'ITABERÁ',21705,3521705,6535),
            (3547,'itai',26,'ITAÍ',21804,3521804,6537),
            (3548,'itajobi',26,'ITAJOBI',21903,3521903,6539)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3549,'itaju',26,'ITAJU',22000,3522000,6541),
            (3550,'itanhaem',26,'ITANHAÉM',22109,3522109,6543),
            (3551,'itaoca',26,'ITAOCA',22158,3522158,3053),
            (3552,'itapecerica-da-serra',26,'ITAPECERICA DA SERRA',22208,3522208,6545),
            (3553,'itapetininga',26,'ITAPETININGA',22307,3522307,6547),
            (3554,'itapeva',26,'ITAPEVA',22406,3522406,6549),
            (3555,'itapevi',26,'ITAPEVI',22505,3522505,6551),
            (3556,'itapira',26,'ITAPIRA',22604,3522604,6553),
            (3557,'itapirapua-paulista',26,'ITAPIRAPUÃ PAULISTA',22653,3522653,3055),
            (3558,'itapolis',26,'ITÁPOLIS',22703,3522703,6555)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3559,'itaporanga',26,'ITAPORANGA',22802,3522802,6557),
            (3560,'itapui',26,'ITAPUÍ',22901,3522901,6559),
            (3561,'itapura',26,'ITAPURA',23008,3523008,6561),
            (3562,'itaquaquecetuba',26,'ITAQUAQUECETUBA',23107,3523107,6563),
            (3563,'itarare',26,'ITARARÉ',23206,3523206,6565),
            (3564,'itariri',26,'ITARIRI',23305,3523305,6567),
            (3565,'itatiba',26,'ITATIBA',23404,3523404,6569),
            (3566,'itatinga',26,'ITATINGA',23503,3523503,6571),
            (3567,'itirapina',26,'ITIRAPINA',23602,3523602,6573),
            (3568,'itirapua',26,'ITIRAPUÃ',23701,3523701,6575)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3569,'itobi',26,'ITOBI',23800,3523800,6577),
            (3570,'itu',26,'ITU',23909,3523909,6579),
            (3571,'itupeva',26,'ITUPEVA',24006,3524006,6581),
            (3572,'ituverava',26,'ITUVERAVA',24105,3524105,6583),
            (3573,'jaborandi',26,'JABORANDI',24204,3524204,6585),
            (3574,'jaboticabal',26,'JABOTICABAL',24303,3524303,6587),
            (3575,'jacarei',26,'JACAREÍ',24402,3524402,6589),
            (3576,'jaci',26,'JACI',24501,3524501,6591),
            (3577,'jacupiranga',26,'JACUPIRANGA',24600,3524600,6593),
            (3578,'jaguariuna',26,'JAGUARIÚNA',24709,3524709,6595)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3579,'jales',26,'JALES',24808,3524808,6597),
            (3580,'jambeiro',26,'JAMBEIRO',24907,3524907,6599),
            (3581,'jandira',26,'JANDIRA',25003,3525003,6601),
            (3582,'jardinopolis',26,'JARDINÓPOLIS',25102,3525102,6603),
            (3583,'jarinu',26,'JARINU',25201,3525201,6605),
            (3584,'jau',26,'JAÚ',25300,3525300,6607),
            (3585,'jeriquara',26,'JERIQUARA',25409,3525409,6609),
            (3586,'joanopolis',26,'JOANÓPOLIS',25508,3525508,6611),
            (3891,'tambau',26,'TAMBAÚ',53302,3553302,7167),
            (3587,'joao-ramalho',26,'JOÃO RAMALHO',25607,3525607,6613)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3588,'jose-bonifacio',26,'JOSÉ BONIFÁCIO',25706,3525706,6615),
            (3589,'julio-mesquita',26,'JÚLIO MESQUITA',25805,3525805,6617),
            (3590,'jumirim',26,'JUMIRIM',25854,3525854,802),
            (3591,'jundiai',26,'JUNDIAÍ',25904,3525904,6619),
            (3592,'junqueiropolis',26,'JUNQUEIRÓPOLIS',26001,3526001,6621),
            (3593,'juquia',26,'JUQUIÁ',26100,3526100,6623),
            (3594,'juquitiba',26,'JUQUITIBA',26209,3526209,6625),
            (3595,'lagoinha',26,'LAGOINHA',26308,3526308,6627),
            (3596,'laranjal-paulista',26,'LARANJAL PAULISTA',26407,3526407,6629),
            (3597,'lavinia',26,'LAVÍNIA',26506,3526506,6631)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3598,'lavrinhas',26,'LAVRINHAS',26605,3526605,6633),
            (3599,'leme',26,'LEME',26704,3526704,6635),
            (3600,'lencois-paulista',26,'LENÇÓIS PAULISTA',26803,3526803,6637),
            (3601,'limeira',26,'LIMEIRA',26902,3526902,6639),
            (3602,'lindoia',26,'LINDÓIA',27009,3527009,6641),
            (3603,'lins',26,'LINS',27108,3527108,6643),
            (3604,'lorena',26,'LORENA',27207,3527207,6645),
            (3605,'lourdes',26,'LOURDES',27256,3527256,2937),
            (3606,'louveira',26,'LOUVEIRA',27306,3527306,6647),
            (3607,'lucelia',26,'LUCÉLIA',27405,3527405,6649)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3608,'lucianopolis',26,'LUCIANÓPOLIS',27504,3527504,6651),
            (3609,'luis-antonio',26,'LUÍS ANTÔNIO',27603,3527603,6653),
            (3610,'luiziania',26,'LUIZIÂNIA',27702,3527702,6655),
            (3611,'lupercio',26,'LUPÉRCIO',27801,3527801,6657),
            (3612,'lutecia',26,'LUTÉCIA',27900,3527900,6659),
            (3613,'macatuba',26,'MACATUBA',28007,3528007,6661),
            (3614,'macaubal',26,'MACAUBAL',28106,3528106,6663),
            (3615,'macedonia',26,'MACEDÔNIA',28205,3528205,6665),
            (3616,'magda',26,'MAGDA',28304,3528304,6667),
            (3617,'mairinque',26,'MAIRINQUE',28403,3528403,6669)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3618,'mairipora',26,'MAIRIPORÃ',28502,3528502,6671),
            (3619,'manduri',26,'MANDURI',28601,3528601,6673),
            (3620,'maraba-paulista',26,'MARABÁ PAULISTA',28700,3528700,6675),
            (3621,'maracai',26,'MARACAÍ',28809,3528809,6677),
            (3622,'marapoama',26,'MARAPOAMA',28858,3528858,2977),
            (3623,'mariapolis',26,'MARIÁPOLIS',28908,3528908,6679),
            (3624,'marilia',26,'MARÍLIA',29005,3529005,6681),
            (3625,'marinopolis',26,'MARINÓPOLIS',29104,3529104,6683),
            (3626,'martinopolis',26,'MARTINÓPOLIS',29203,3529203,6685),
            (3627,'matao',26,'MATÃO',29302,3529302,6687)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3628,'maua',26,'MAUÁ',29401,3529401,6689),
            (3629,'mendonca',26,'MENDONÇA',29500,3529500,6691),
            (3630,'meridiano',26,'MERIDIANO',29609,3529609,6693),
            (3631,'mesopolis',26,'MESÓPOLIS',29658,3529658,2983),
            (3632,'miguelopolis',26,'MIGUELÓPOLIS',29708,3529708,6695),
            (3633,'mineiros-do-tiete',26,'MINEIROS DO TIETÊ',29807,3529807,6697),
            (3634,'mira-estrela',26,'MIRA ESTRELA',30003,3530003,6701),
            (3635,'miracatu',26,'MIRACATU',29906,3529906,6699),
            (3636,'mirandopolis',26,'MIRANDÓPOLIS',30102,3530102,6703),
            (3637,'mirante-do-paranapanema',26,'MIRANTE DO PARANAPANEMA',30201,3530201,6705)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3638,'mirassol',26,'MIRASSOL',30300,3530300,6707),
            (3639,'mirassolandia',26,'MIRASSOLÂNDIA',30409,3530409,6709),
            (3640,'mococa',26,'MOCOCA',30508,3530508,6711),
            (3641,'mogi-das-cruzes',26,'MOGI DAS CRUZES',30607,3530607,6713),
            (3642,'mogi-guacu',26,'MOGI GUAÇU',30706,3530706,6715),
            (3643,'mogi-mirim',26,'MOGI MIRIM',30805,3530805,6717),
            (3644,'mombuca',26,'MOMBUCA',30904,3530904,6719),
            (3645,'moncoes',26,'MONÇÕES',31001,3531001,6721),
            (3646,'mongagua',26,'MONGAGUÁ',31100,3531100,6723),
            (3647,'monte-alegre-do-sul',26,'MONTE ALEGRE DO SUL',31209,3531209,6725)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3648,'monte-alto',26,'MONTE ALTO',31308,3531308,6727),
            (3649,'monte-aprazivel',26,'MONTE APRAZÍVEL',31407,3531407,6729),
            (3650,'monte-azul-paulista',26,'MONTE AZUL PAULISTA',31506,3531506,6731),
            (3651,'monte-castelo',26,'MONTE CASTELO',31605,3531605,6733),
            (3652,'monte-mor',26,'MONTE MOR',31803,3531803,6737),
            (3653,'monteiro-lobato',26,'MONTEIRO LOBATO',31704,3531704,6735),
            (3654,'morro-agudo',26,'MORRO AGUDO',31902,3531902,6739),
            (3655,'morungaba',26,'MORUNGABA',32009,3532009,6741),
            (3656,'motuca',26,'MOTUCA',32058,3532058,7263),
            (3657,'murutinga-do-sul',26,'MURUTINGA DO SUL',32108,3532108,6743)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3658,'nantes',26,'NANTES',32157,3532157,804),
            (3659,'narandiba',26,'NARANDIBA',32207,3532207,6745),
            (3660,'natividade-da-serra',26,'NATIVIDADE DA SERRA',32306,3532306,6747),
            (3661,'nazare-paulista',26,'NAZARÉ PAULISTA',32405,3532405,6749),
            (3662,'neves-paulista',26,'NEVES PAULISTA',32504,3532504,6751),
            (3663,'nhandeara',26,'NHANDEARA',32603,3532603,6753),
            (3664,'nipoa',26,'NIPOÃ',32702,3532702,6755),
            (3665,'nova-alianca',26,'NOVA ALIANÇA',32801,3532801,6757),
            (3666,'nova-campina',26,'NOVA CAMPINA',32827,3532827,3061),
            (3667,'nova-canaa-paulista',26,'NOVA CANAÃ PAULISTA',32843,3532843,2985)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3668,'nova-castilho',26,'NOVA CASTILHO',32868,3532868,806),
            (3669,'nova-europa',26,'NOVA EUROPA',32900,3532900,6759),
            (3670,'nova-granada',26,'NOVA GRANADA',33007,3533007,6761),
            (3671,'nova-guataporanga',26,'NOVA GUATAPORANGA',33106,3533106,6763),
            (3672,'nova-independencia',26,'NOVA INDEPENDÊNCIA',33205,3533205,6765),
            (3673,'nova-luzitania',26,'NOVA LUZITÂNIA',33304,3533304,6767),
            (3674,'nova-odessa',26,'NOVA ODESSA',33403,3533403,6769),
            (3675,'novais',26,'NOVAIS',33254,3533254,2979),
            (3676,'novo-horizonte',26,'NOVO HORIZONTE',33502,3533502,6771),
            (3677,'nuporanga',26,'NUPORANGA',33601,3533601,6773)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3678,'ocaucu',26,'OCAUÇU',33700,3533700,6775),
            (3679,'oleo',26,'ÓLEO',33809,3533809,6777),
            (3680,'olimpia',26,'OLÍMPIA',33908,3533908,6779),
            (3681,'onda-verde',26,'ONDA VERDE',34005,3534005,6781),
            (3682,'oriente',26,'ORIENTE',34104,3534104,6783),
            (3683,'orindiuva',26,'ORINDIÚVA',34203,3534203,6785),
            (3684,'orlandia',26,'ORLÂNDIA',34302,3534302,6787),
            (3685,'osasco',26,'OSASCO',34401,3534401,6789),
            (3686,'oscar-bressane',26,'OSCAR BRESSANE',34500,3534500,6791),
            (3687,'osvaldo-cruz',26,'OSVALDO CRUZ',34609,3534609,6793)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3688,'ourinhos',26,'OURINHOS',34708,3534708,6795),
            (3689,'ouro-verde',26,'OURO VERDE',34807,3534807,6797),
            (3690,'ouroeste',26,'OUROESTE',34757,3534757,808),
            (3691,'pacaembu',26,'PACAEMBU',34906,3534906,6799),
            (3692,'palestina',26,'PALESTINA',35002,3535002,6801),
            (3693,'palmares-paulista',26,'PALMARES PAULISTA',35101,3535101,6803),
            (3694,'palmeira-doeste',26,'PALMEIRA D''OESTE',35200,3535200,6805),
            (3695,'palmital',26,'PALMITAL',35309,3535309,6807),
            (3696,'panorama',26,'PANORAMA',35408,3535408,6809),
            (3697,'paraguacu-paulista',26,'PARAGUAÇU PAULISTA',35507,3535507,6811)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3698,'paraibuna',26,'PARAIBUNA',35606,3535606,6813),
            (3699,'paraiso',26,'PARAÍSO',35705,3535705,6815),
            (3700,'paranapanema',26,'PARANAPANEMA',35804,3535804,6817),
            (3701,'paranapua',26,'PARANAPUÃ',35903,3535903,6819),
            (3702,'parapua',26,'PARAPUÃ',36000,3536000,6821),
            (3703,'pardinho',26,'PARDINHO',36109,3536109,6823),
            (3704,'pariquera-acu',26,'PARIQUERA-AÇU',36208,3536208,6825),
            (3705,'parisi',26,'PARISI',36257,3536257,2989),
            (3706,'patrocinio-paulista',26,'PATROCÍNIO PAULISTA',36307,3536307,6827),
            (3707,'pauliceia',26,'PAULICÉIA',36406,3536406,6829)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3708,'paulinia',26,'PAULÍNIA',36505,3536505,6831),
            (3709,'paulistania',26,'PAULISTÂNIA',36570,3536570,810),
            (3710,'paulo-de-faria',26,'PAULO DE FARIA',36604,3536604,6833),
            (3711,'pederneiras',26,'PEDERNEIRAS',36703,3536703,6835),
            (3712,'pedra-bela',26,'PEDRA BELA',36802,3536802,6837),
            (3713,'pedranopolis',26,'PEDRANÓPOLIS',36901,3536901,6839),
            (3714,'pedregulho',26,'PEDREGULHO',37008,3537008,6841),
            (3715,'pedreira',26,'PEDREIRA',37107,3537107,6843),
            (3716,'pedrinhas-paulista',26,'PEDRINHAS PAULISTA',37156,3537156,2963),
            (3717,'pedro-de-toledo',26,'PEDRO DE TOLEDO',37206,3537206,6845)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3718,'penapolis',26,'PENÁPOLIS',37305,3537305,6847),
            (3719,'pereira-barreto',26,'PEREIRA BARRETO',37404,3537404,6849),
            (3720,'pereiras',26,'PEREIRAS',37503,3537503,6851),
            (3721,'peruibe',26,'PERUÍBE',37602,3537602,6853),
            (3722,'piacatu',26,'PIACATU',37701,3537701,6855),
            (3723,'piedade',26,'PIEDADE',37800,3537800,6857),
            (3724,'pilar-do-sul',26,'PILAR DO SUL',37909,3537909,6859),
            (3725,'pindamonhangaba',26,'PINDAMONHANGABA',38006,3538006,6861),
            (3726,'pindorama',26,'PINDORAMA',38105,3538105,6863),
            (3727,'pinhalzinho',26,'PINHALZINHO',38204,3538204,6867)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3728,'piquerobi',26,'PIQUEROBI',38303,3538303,6869),
            (3729,'piquete',26,'PIQUETE',38501,3538501,6871),
            (3730,'piracaia',26,'PIRACAIA',38600,3538600,6873),
            (3731,'piracicaba',26,'PIRACICABA',38709,3538709,6875),
            (3732,'piraju',26,'PIRAJU',38808,3538808,6877),
            (3733,'pirajui',26,'PIRAJUÍ',38907,3538907,6879),
            (3734,'pirangi',26,'PIRANGI',39004,3539004,6881),
            (3735,'pirapora-do-bom-jesus',26,'PIRAPORA DO BOM JESUS',39103,3539103,6883),
            (3736,'pirapozinho',26,'PIRAPOZINHO',39202,3539202,6885),
            (3737,'pirassununga',26,'PIRASSUNUNGA',39301,3539301,6887)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3738,'piratininga',26,'PIRATININGA',39400,3539400,6889),
            (3739,'pitangueiras',26,'PITANGUEIRAS',39509,3539509,6891),
            (3740,'planalto',26,'PLANALTO',39608,3539608,6893),
            (3741,'platina',26,'PLATINA',39707,3539707,6895),
            (3742,'poa',26,'POÁ',39806,3539806,6897),
            (3743,'poloni',26,'POLONI',39905,3539905,6899),
            (3744,'pompeia',26,'POMPÉIA',40002,3540002,6901),
            (3745,'pongai',26,'PONGAÍ',40101,3540101,6903),
            (3746,'pontal',26,'PONTAL',40200,3540200,6905),
            (3747,'pontalinda',26,'PONTALINDA',40259,3540259,2987)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3748,'pontes-gestal',26,'PONTES GESTAL',40309,3540309,6907),
            (3749,'populina',26,'POPULINA',40408,3540408,6909),
            (3750,'porangaba',26,'PORANGABA',40507,3540507,6911),
            (3751,'porto-feliz',26,'PORTO FELIZ',40606,3540606,6913),
            (3752,'porto-ferreira',26,'PORTO FERREIRA',40705,3540705,6915),
            (3753,'potim',26,'POTIM',40754,3540754,2993),
            (3754,'potirendaba',26,'POTIRENDABA',40804,3540804,6917),
            (3755,'pracinha',26,'PRACINHA',40853,3540853,812),
            (3756,'pradopolis',26,'PRADÓPOLIS',40903,3540903,6919),
            (3757,'praia-grande',26,'PRAIA GRANDE',41000,3541000,6921)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3758,'pratania',26,'PRATÂNIA',41059,3541059,814),
            (3759,'presidente-alves',26,'PRESIDENTE ALVES',41109,3541109,6923),
            (3760,'presidente-bernardes',26,'PRESIDENTE BERNARDES',41208,3541208,6925),
            (3761,'presidente-epitacio',26,'PRESIDENTE EPITÁCIO',41307,3541307,6927),
            (3762,'presidente-prudente',26,'PRESIDENTE PRUDENTE',41406,3541406,6929),
            (3763,'presidente-venceslau',26,'PRESIDENTE VENCESLAU',41505,3541505,6931),
            (3764,'promissao',26,'PROMISSÃO',41604,3541604,6933),
            (3765,'quadra',26,'QUADRA',41653,3541653,816),
            (3766,'quata',26,'QUATÁ',41703,3541703,6935),
            (3767,'queiroz',26,'QUEIROZ',41802,3541802,6937)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3768,'queluz',26,'QUELUZ',41901,3541901,6939),
            (3769,'quintana',26,'QUINTANA',42008,3542008,6941),
            (3770,'rafard',26,'RAFARD',42107,3542107,6943),
            (3771,'rancharia',26,'RANCHARIA',42206,3542206,6945),
            (3772,'redencao-da-serra',26,'REDENÇÃO DA SERRA',42305,3542305,6947),
            (3773,'regente-feijo',26,'REGENTE FEIJÓ',42404,3542404,6949),
            (3774,'reginopolis',26,'REGINÓPOLIS',42503,3542503,6951),
            (3775,'registro',26,'REGISTRO',42602,3542602,6953),
            (3776,'restinga',26,'RESTINGA',42701,3542701,6955),
            (3777,'ribeira',26,'RIBEIRA',42800,3542800,6957)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3778,'ribeirao-bonito',26,'RIBEIRÃO BONITO',42909,3542909,6959),
            (3779,'ribeirao-branco',26,'RIBEIRÃO BRANCO',43006,3543006,6961),
            (3780,'ribeirao-corrente',26,'RIBEIRÃO CORRENTE',43105,3543105,6963),
            (3781,'ribeirao-do-sul',26,'RIBEIRÃO DO SUL',43204,3543204,6965),
            (3782,'ribeirao-dos-indios',26,'RIBEIRÃO DOS ÍNDIOS',43238,3543238,818),
            (3783,'ribeirao-grande',26,'RIBEIRÃO GRANDE',43253,3543253,3057),
            (3784,'ribeirao-pires',26,'RIBEIRÃO PIRES',43303,3543303,6967),
            (3785,'ribeirao-preto',26,'RIBEIRÃO PRETO',43402,3543402,6969),
            (3786,'rifaina',26,'RIFAINA',43600,3543600,6973),
            (3787,'rincao',26,'RINCÃO',43709,3543709,6975)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3788,'rinopolis',26,'RINÓPOLIS',43808,3543808,6977),
            (3789,'rio-claro',26,'RIO CLARO',43907,3543907,6979),
            (3790,'rio-das-pedras',26,'RIO DAS PEDRAS',44004,3544004,6981),
            (3791,'rio-grande-da-serra',26,'RIO GRANDE DA SERRA',44103,3544103,6983),
            (3792,'riolandia',26,'RIOLÂNDIA',44202,3544202,6985),
            (3793,'riversul',26,'RIVERSUL',43501,3543501,6971),
            (3794,'rosana',26,'ROSANA',44251,3544251,7265),
            (3795,'roseira',26,'ROSEIRA',44301,3544301,6987),
            (3796,'rubiacea',26,'RUBIÁCEA',44400,3544400,6989),
            (3797,'rubineia',26,'RUBINÉIA',44509,3544509,6991)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3798,'sabino',26,'SABINO',44608,3544608,6993),
            (3799,'sagres',26,'SAGRES',44707,3544707,6995),
            (3800,'sales',26,'SALES',44806,3544806,6997),
            (3801,'sales-oliveira',26,'SALES OLIVEIRA',44905,3544905,6999),
            (3802,'salesopolis',26,'SALESÓPOLIS',45001,3545001,7001),
            (3803,'salmourao',26,'SALMOURÃO',45100,3545100,7003),
            (3804,'saltinho',26,'SALTINHO',45159,3545159,5445),
            (3805,'salto',26,'SALTO',45209,3545209,7005),
            (3806,'salto-de-pirapora',26,'SALTO DE PIRAPORA',45308,3545308,7007),
            (3807,'salto-grande',26,'SALTO GRANDE',45407,3545407,7009)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3808,'sandovalina',26,'SANDOVALINA',45506,3545506,7011),
            (3809,'santa-adelia',26,'SANTA ADÉLIA',45605,3545605,7013),
            (3810,'santa-albertina',26,'SANTA ALBERTINA',45704,3545704,7015),
            (3811,'santa-barbara-doeste',26,'SANTA BÁRBARA D''OESTE',45803,3545803,7017),
            (3812,'santa-branca',26,'SANTA BRANCA',46009,3546009,7021),
            (3813,'santa-clara-doeste',26,'SANTA CLARA D''OESTE',46108,3546108,7023),
            (3814,'santa-cruz-da-conceicao',26,'SANTA CRUZ DA CONCEIÇÃO',46207,3546207,7025),
            (3815,'santa-cruz-da-esperanca',26,'SANTA CRUZ DA ESPERANÇA',46256,3546256,820),
            (3816,'santa-cruz-das-palmeiras',26,'SANTA CRUZ DAS PALMEIRAS',46306,3546306,7027),
            (3817,'santa-cruz-do-rio-pardo',26,'SANTA CRUZ DO RIO PARDO',46405,3546405,7029)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3818,'santa-ernestina',26,'SANTA ERNESTINA',46504,3546504,7031),
            (3819,'santa-fe-do-sul',26,'SANTA FÉ DO SUL',46603,3546603,7033),
            (3820,'santa-gertrudes',26,'SANTA GERTRUDES',46702,3546702,7035),
            (3821,'santa-isabel',26,'SANTA ISABEL',46801,3546801,7037),
            (3822,'santa-lucia',26,'SANTA LÚCIA',46900,3546900,7039),
            (3823,'santa-maria-da-serra',26,'SANTA MARIA DA SERRA',47007,3547007,7041),
            (3824,'santa-mercedes',26,'SANTA MERCEDES',47106,3547106,7043),
            (3825,'santa-rita-do-passa-quatro',26,'SANTA RITA DO PASSA QUATRO',47502,3547502,7051),
            (3826,'santa-rita-doeste',26,'SANTA RITA D''OESTE',47403,3547403,7049),
            (3827,'santa-rosa-de-viterbo',26,'SANTA ROSA DE VITERBO',47601,3547601,7053)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3828,'santa-salete',26,'SANTA SALETE',47650,3547650,822),
            (3829,'santana-da-ponte-pensa',26,'SANTANA DA PONTE PENSA',47205,3547205,7045),
            (3830,'santana-de-parnaiba',26,'SANTANA DE PARNAÍBA',47304,3547304,7047),
            (3831,'santo-anastacio',26,'SANTO ANASTÁCIO',47700,3547700,7055),
            (3832,'santo-andre',26,'SANTO ANDRÉ',47809,3547809,7057),
            (3833,'santo-antonio-da-alegria',26,'SANTO ANTÔNIO DA ALEGRIA',47908,3547908,7059),
            (3834,'santo-antonio-de-posse',26,'SANTO ANTÔNIO DE POSSE',48005,3548005,7061),
            (3835,'santo-antonio-do-aracangua',26,'SANTO ANTÔNIO DO ARACANGUÁ',48054,3548054,2939),
            (3836,'santo-antonio-do-jardim',26,'SANTO ANTÔNIO DO JARDIM',48104,3548104,7063),
            (3837,'santo-antonio-do-pinhal',26,'SANTO ANTÔNIO DO PINHAL',48203,3548203,7065)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3838,'santo-expedito',26,'SANTO EXPEDITO',48302,3548302,7067),
            (3839,'santopolis-do-aguapei',26,'SANTÓPOLIS DO AGUAPEÍ',48401,3548401,7069),
            (3840,'santos',26,'SANTOS',48500,3548500,7071),
            (3841,'sao-bento-do-sapucai',26,'SÃO BENTO DO SAPUCAÍ',48609,3548609,7073),
            (3842,'sao-bernardo-do-campo',26,'SÃO BERNARDO DO CAMPO',48708,3548708,7075),
            (3843,'sao-caetano-do-sul',26,'SÃO CAETANO DO SUL',48807,3548807,7077),
            (3844,'sao-carlos',26,'SÃO CARLOS',48906,3548906,7079),
            (3845,'sao-francisco',26,'SÃO FRANCISCO',49003,3549003,7081),
            (3846,'sao-joao-da-boa-vista',26,'SÃO JOÃO DA BOA VISTA',49102,3549102,7083),
            (3847,'sao-joao-das-duas-pontes',26,'SÃO JOÃO DAS DUAS PONTES',49201,3549201,7085)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3848,'sao-joao-de-iracema',26,'SÃO JOÃO DE IRACEMA',49250,3549250,2941),
            (3849,'sao-joao-do-pau-dalho',26,'SÃO JOÃO DO PAU D''ALHO',49300,3549300,7087),
            (3850,'sao-joaquim-da-barra',26,'SÃO JOAQUIM DA BARRA',49409,3549409,7089),
            (3851,'sao-jose-da-bela-vista',26,'SÃO JOSÉ DA BELA VISTA',49508,3549508,7091),
            (3852,'sao-jose-do-barreiro',26,'SÃO JOSÉ DO BARREIRO',49607,3549607,7093),
            (3853,'sao-jose-do-rio-pardo',26,'SÃO JOSÉ DO RIO PARDO',49706,3549706,7095),
            (3854,'sao-jose-do-rio-preto',26,'SÃO JOSÉ DO RIO PRETO',49805,3549805,7097),
            (3855,'sao-jose-dos-campos',26,'SÃO JOSÉ DOS CAMPOS',49904,3549904,7099),
            (3856,'sao-lourenco-da-serra',26,'SÃO LOURENÇO DA SERRA',49953,3549953,5447),
            (3857,'sao-luiz-do-paraitinga',26,'SÃO LUIZ DO PARAITINGA',50001,3550001,7101)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3858,'sao-manuel',26,'SÃO MANUEL',50100,3550100,7103),
            (3859,'sao-miguel-arcanjo',26,'SÃO MIGUEL ARCANJO',50209,3550209,7105),
            (3860,'sao-paulo',26,'SÃO PAULO',50308,3550308,7107),
            (3861,'sao-pedro',26,'SÃO PEDRO',50407,3550407,7109),
            (3862,'sao-pedro-do-turvo',26,'SÃO PEDRO DO TURVO',50506,3550506,7111),
            (3863,'sao-roque',26,'SÃO ROQUE',50605,3550605,7113),
            (3864,'sao-sebastiao',26,'SÃO SEBASTIÃO',50704,3550704,7115),
            (3865,'sao-sebastiao-da-grama',26,'SÃO SEBASTIÃO DA GRAMA',50803,3550803,7117),
            (3866,'sao-simao',26,'SÃO SIMÃO',50902,3550902,7119),
            (3867,'sao-vicente',26,'SÃO VICENTE',51009,3551009,7121)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3868,'sarapui',26,'SARAPUÍ',51108,3551108,7123),
            (3869,'sarutaia',26,'SARUTAIÁ',51207,3551207,7125),
            (3870,'sebastianopolis-do-sul',26,'SEBASTIANÓPOLIS DO SUL',51306,3551306,7127),
            (3871,'serra-azul',26,'SERRA AZUL',51405,3551405,7129),
            (3872,'serra-negra',26,'SERRA NEGRA',51603,3551603,7133),
            (3873,'serrana',26,'SERRANA',51504,3551504,7131),
            (3874,'sertaozinho',26,'SERTÃOZINHO',51702,3551702,7135),
            (3875,'sete-barras',26,'SETE BARRAS',51801,3551801,7137),
            (3876,'severinia',26,'SEVERÍNIA',51900,3551900,7139),
            (3877,'silveiras',26,'SILVEIRAS',52007,3552007,7141)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3878,'socorro',26,'SOCORRO',52106,3552106,7143),
            (3879,'sorocaba',26,'SOROCABA',52205,3552205,7145),
            (3880,'sud-mennucci',26,'SUD MENNUCCI',52304,3552304,7147),
            (3881,'sumare',26,'SUMARÉ',52403,3552403,7149),
            (3882,'suzanapolis',26,'SUZANÁPOLIS',52551,3552551,2945),
            (3883,'suzano',26,'SUZANO',52502,3552502,7151),
            (3884,'tabapua',26,'TABAPUÃ',52601,3552601,7153),
            (3885,'tabatinga',26,'TABATINGA',52700,3552700,7155),
            (3886,'taboao-da-serra',26,'TABOÃO DA SERRA',52809,3552809,7157),
            (3887,'taciba',26,'TACIBA',52908,3552908,7159)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3888,'taguai',26,'TAGUAÍ',53005,3553005,7161),
            (3889,'taiacu',26,'TAIAÇU',53104,3553104,7163),
            (3890,'taiuva',26,'TAIÚVA',53203,3553203,7165),
            (3892,'tanabi',26,'TANABI',53401,3553401,7169),
            (3893,'tapirai',26,'TAPIRAÍ',53500,3553500,7171),
            (3894,'tapiratiba',26,'TAPIRATIBA',53609,3553609,7173),
            (3895,'taquaral',26,'TAQUARAL',53658,3553658,824),
            (3896,'taquaritinga',26,'TAQUARITINGA',53708,3553708,7175),
            (3897,'taquarituba',26,'TAQUARITUBA',53807,3553807,7177),
            (3898,'taquarivai',26,'TAQUARIVAÍ',53856,3553856,3063)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3899,'tarabai',26,'TARABAI',53906,3553906,7179),
            (3900,'taruma',26,'TARUMÃ',53955,3553955,7267),
            (3901,'tatui',26,'TATUÍ',54003,3554003,7181),
            (3902,'taubate',26,'TAUBATÉ',54102,3554102,7183),
            (3903,'tejupa',26,'TEJUPÁ',54201,3554201,7185),
            (3904,'teodoro-sampaio',26,'TEODORO SAMPAIO',54300,3554300,7187),
            (3905,'terra-roxa',26,'TERRA ROXA',54409,3554409,7189),
            (3906,'tiete',26,'TIETÊ',54508,3554508,7191),
            (3907,'timburi',26,'TIMBURI',54607,3554607,7193),
            (3908,'torre-de-pedra',26,'TORRE DE PEDRA',54656,3554656,3227)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3909,'torrinha',26,'TORRINHA',54706,3554706,7195),
            (3910,'trabiju',26,'TRABIJU',54755,3554755,826),
            (3911,'tremembe',26,'TREMEMBÉ',54805,3554805,7197),
            (3912,'tres-fronteiras',26,'TRÊS FRONTEIRAS',54904,3554904,7199),
            (3913,'tuiuti',26,'TUIUTI',54953,3554953,2955),
            (3914,'tupa',26,'TUPÃ',55000,3555000,7201),
            (3915,'tupi-paulista',26,'TUPI PAULISTA',55109,3555109,7203),
            (3916,'turiuba',26,'TURIÚBA',55208,3555208,7205),
            (3917,'turmalina',26,'TURMALINA',55307,3555307,7207),
            (3918,'ubarana',26,'UBARANA',55356,3555356,2971)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3919,'ubatuba',26,'UBATUBA',55406,3555406,7209),
            (3920,'ubirajara',26,'UBIRAJARA',55505,3555505,7211),
            (3921,'uchoa',26,'UCHOA',55604,3555604,7213),
            (3922,'uniao-paulista',26,'UNIÃO PAULISTA',55703,3555703,7215),
            (3923,'urania',26,'URÂNIA',55802,3555802,7217),
            (3924,'uru',26,'URU',55901,3555901,7219),
            (3925,'urupes',26,'URUPÊS',56008,3556008,7221),
            (3926,'valentim-gentil',26,'VALENTIM GENTIL',56107,3556107,7223),
            (3927,'valinhos',26,'VALINHOS',56206,3556206,7225),
            (3928,'valparaiso',26,'VALPARAÍSO',56305,3556305,7227)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3929,'vargem',26,'VARGEM',56354,3556354,2957),
            (3930,'vargem-grande-do-sul',26,'VARGEM GRANDE DO SUL',56404,3556404,7231),
            (3931,'vargem-grande-paulista',26,'VARGEM GRANDE PAULISTA',56453,3556453,7273),
            (3932,'varzea-paulista',26,'VÁRZEA PAULISTA',56503,3556503,7233),
            (3933,'vera-cruz',26,'VERA CRUZ',56602,3556602,7235),
            (3934,'vinhedo',26,'VINHEDO',56701,3556701,7237),
            (3935,'viradouro',26,'VIRADOURO',56800,3556800,7239),
            (3936,'vista-alegre-do-alto',26,'VISTA ALEGRE DO ALTO',56909,3556909,7241),
            (3937,'vitoria-brasil',26,'VITÓRIA BRASIL',56958,3556958,828),
            (3938,'votorantim',26,'VOTORANTIM',57006,3557006,7243)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3939,'votuporanga',26,'VOTUPORANGA',57105,3557105,7245),
            (3940,'zacarias',26,'ZACARIAS',57154,3557154,2973),
            (3941,'abatia',17,'ABATIÁ',103,4100103,7401),
            (3942,'adrianopolis',17,'ADRIANÓPOLIS',202,4100202,7403),
            (3943,'agudos-do-sul',17,'AGUDOS DO SUL',301,4100301,7405),
            (3944,'almirante-tamandare',17,'ALMIRANTE TAMANDARÉ',400,4100400,7407),
            (3945,'altamira-do-parana',17,'ALTAMIRA DO PARANÁ',459,4100459,8455),
            (3946,'alto-paraiso',17,'ALTO PARAÍSO',28625,4128625,5523),
            (3947,'alto-parana',17,'ALTO PARANÁ',608,4100608,7409),
            (3948,'alto-piquiri',17,'ALTO PIQUIRI',707,4100707,7411)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3949,'altonia',17,'ALTÔNIA',509,4100509,7951),
            (3950,'alvorada-do-sul',17,'ALVORADA DO SUL',806,4100806,7413),
            (3951,'amapora',17,'AMAPORÃ',905,4100905,7415),
            (3952,'ampere',17,'AMPÉRE',1002,4101002,7417),
            (3953,'anahy',17,'ANAHY',1051,4101051,5463),
            (3954,'andira',17,'ANDIRÁ',1101,4101101,7419),
            (3955,'angulo',17,'ÂNGULO',1150,4101150,5509),
            (3956,'antonina',17,'ANTONINA',1200,4101200,7421),
            (3957,'antonio-olinto',17,'ANTÔNIO OLINTO',1309,4101309,7423),
            (3958,'apucarana',17,'APUCARANA',1408,4101408,7425)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3959,'arapongas',17,'ARAPONGAS',1507,4101507,7427),
            (3960,'arapoti',17,'ARAPOTI',1606,4101606,7429),
            (3961,'arapua',17,'ARAPUÃ',1655,4101655,830),
            (3962,'araruna',17,'ARARUNA',1705,4101705,7431),
            (3963,'araucaria',17,'ARAUCÁRIA',1804,4101804,7435),
            (3964,'ariranha-do-ivai',17,'ARIRANHA DO IVAÍ',1853,4101853,832),
            (3965,'assai',17,'ASSAÍ',1903,4101903,7437),
            (3966,'assis-chateaubriand',17,'ASSIS CHATEAUBRIAND',2000,4102000,7953),
            (3967,'astorga',17,'ASTORGA',2109,4102109,7439),
            (3968,'atalaia',17,'ATALAIA',2208,4102208,7441)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3969,'balsa-nova',17,'BALSA NOVA',2307,4102307,7443),
            (3970,'bandeirantes',17,'BANDEIRANTES',2406,4102406,7445),
            (3971,'barbosa-ferraz',17,'BARBOSA FERRAZ',2505,4102505,7447),
            (3972,'barra-do-jacare',17,'BARRA DO JACARÉ',2703,4102703,7451),
            (3973,'barracao',17,'BARRACÃO',2604,4102604,7449),
            (3974,'bela-vista-da-caroba',17,'BELA VISTA DA CAROBA',2752,4102752,834),
            (3975,'bela-vista-do-paraiso',17,'BELA VISTA DO PARAÍSO',2802,4102802,7453),
            (3976,'bituruna',17,'BITURUNA',2901,4102901,7455),
            (3977,'boa-esperanca',17,'BOA ESPERANÇA',3008,4103008,7457),
            (3978,'boa-esperanca-do-iguacu',17,'BOA ESPERANÇA DO IGUAÇU',3024,4103024,5471)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3979,'boa-ventura-de-sao-roque',17,'BOA VENTURA DE SÃO ROQUE',3040,4103040,836),
            (3980,'boa-vista-da-aparecida',17,'BOA VISTA DA APARECIDA',3057,4103057,7981),
            (3981,'bocaiuva-do-sul',17,'BOCAIÚVA DO SUL',3107,4103107,7459),
            (3982,'bom-jesus-do-sul',17,'BOM JESUS DO SUL',3156,4103156,838),
            (3983,'bom-sucesso',17,'BOM SUCESSO',3206,4103206,7461),
            (3984,'bom-sucesso-do-sul',17,'BOM SUCESSO DO SUL',3222,4103222,9979),
            (3985,'borrazopolis',17,'BORRAZÓPOLIS',3305,4103305,7463),
            (3986,'braganey',17,'BRAGANEY',3354,4103354,7983),
            (3987,'brasilandia-do-sul',17,'BRASILÂNDIA DO SUL',3370,4103370,5521),
            (3988,'cafeara',17,'CAFEARA',3404,4103404,7465)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3989,'cafelandia',17,'CAFELÂNDIA',3453,4103453,7985),
            (3990,'cafezal-do-sul',17,'CAFEZAL DO SUL',3479,4103479,5491),
            (3991,'california',17,'CALIFÓRNIA',3503,4103503,7467),
            (3992,'cambara',17,'CAMBARÁ',3602,4103602,7469),
            (3993,'cambe',17,'CAMBÉ',3701,4103701,7471),
            (3994,'cambira',17,'CAMBIRA',3800,4103800,7473),
            (3995,'campina-da-lagoa',17,'CAMPINA DA LAGOA',3909,4103909,7475),
            (4502,'meleiro',25,'MELEIRO',10803,4210803,8211),
            (3996,'campina-do-simao',17,'CAMPINA DO SIMÃO',3958,4103958,840),
            (3997,'campina-grande-do-sul',17,'CAMPINA GRANDE DO SUL',4006,4104006,7477)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (3998,'campo-bonito',17,'CAMPO BONITO',4055,4104055,8475),
            (3999,'campo-do-tenente',17,'CAMPO DO TENENTE',4105,4104105,7479),
            (4000,'campo-largo',17,'CAMPO LARGO',4204,4104204,7481),
            (4001,'campo-magro',17,'CAMPO MAGRO',4253,4104253,842),
            (4002,'campo-mourao',17,'CAMPO MOURÃO',4303,4104303,7483),
            (4003,'candido-de-abreu',17,'CÂNDIDO DE ABREU',4402,4104402,7485),
            (4004,'candoi',17,'CANDÓI',4428,4104428,5499),
            (4005,'cantagalo',17,'CANTAGALO',4451,4104451,8451),
            (4006,'capanema',17,'CAPANEMA',4501,4104501,7487),
            (4007,'capitao-leonidas-marques',17,'CAPITÃO LEÔNIDAS MARQUES',4600,4104600,7489)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4008,'carambei',17,'CARAMBEÍ',4659,4104659,844),
            (4009,'carlopolis',17,'CARLÓPOLIS',4709,4104709,7491),
            (4010,'cascavel',17,'CASCAVEL',4808,4104808,7493),
            (4011,'castro',17,'CASTRO',4907,4104907,7495),
            (4012,'catanduvas',17,'CATANDUVAS',5003,4105003,7497),
            (4013,'centenario-do-sul',17,'CENTENÁRIO DO SUL',5102,4105102,7499),
            (4014,'cerro-azul',17,'CERRO AZUL',5201,4105201,7501),
            (4015,'ceu-azul',17,'CÉU AZUL',5300,4105300,7957),
            (4016,'chopinzinho',17,'CHOPINZINHO',5409,4105409,7503),
            (4017,'cianorte',17,'CIANORTE',5508,4105508,7505)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4018,'cidade-gaucha',17,'CIDADE GAÚCHA',5607,4105607,7507),
            (4019,'clevelandia',17,'CLEVELÂNDIA',5706,4105706,7509),
            (4020,'colombo',17,'COLOMBO',5805,4105805,7513),
            (4021,'colorado',17,'COLORADO',5904,4105904,7515),
            (4022,'congonhinhas',17,'CONGONHINHAS',6001,4106001,7517),
            (4023,'conselheiro-mairinck',17,'CONSELHEIRO MAIRINCK',6100,4106100,7519),
            (4024,'contenda',17,'CONTENDA',6209,4106209,7521),
            (4025,'corbelia',17,'CORBÉLIA',6308,4106308,7523),
            (4026,'cornelio-procopio',17,'CORNÉLIO PROCÓPIO',6407,4106407,7525),
            (4027,'coronel-domingos-soares',17,'CORONEL DOMINGOS SOARES',6456,4106456,846)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4028,'coronel-vivida',17,'CORONEL VIVIDA',6506,4106506,7527),
            (4029,'corumbatai-do-sul',17,'CORUMBATAÍ DO SUL',6555,4106555,8479),
            (4030,'cruz-machado',17,'CRUZ MACHADO',6803,4106803,7533),
            (4031,'cruzeiro-do-iguacu',17,'CRUZEIRO DO IGUAÇU',6571,4106571,5473),
            (4032,'cruzeiro-do-oeste',17,'CRUZEIRO DO OESTE',6605,4106605,7529),
            (4033,'cruzeiro-do-sul',17,'CRUZEIRO DO SUL',6704,4106704,7531),
            (4034,'cruzmaltina',17,'CRUZMALTINA',6852,4106852,848),
            (4035,'curitiba',17,'CURITIBA',6902,4106902,7535),
            (4036,'curiuva',17,'CURIÚVA',7009,4107009,7537),
            (4037,'diamante-do-norte',17,'DIAMANTE DO NORTE',7108,4107108,7539)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4038,'diamante-do-sul',17,'DIAMANTE DO SUL',7124,4107124,5465),
            (4039,'diamante-doeste',17,'DIAMANTE D''OESTE',7157,4107157,9915),
            (4040,'dois-vizinhos',17,'DOIS VIZINHOS',7207,4107207,7541),
            (4041,'douradina',17,'DOURADINA',7256,4107256,8465),
            (4042,'doutor-camargo',17,'DOUTOR CAMARGO',7306,4107306,7543),
            (4043,'doutor-ulysses',17,'DOUTOR ULYSSES',28633,4128633,5449),
            (4044,'eneas-marques',17,'ENÉAS MARQUES',7405,4107405,7545),
            (4045,'engenheiro-beltrao',17,'ENGENHEIRO BELTRÃO',7504,4107504,7547),
            (4046,'entre-rios-do-oeste',17,'ENTRE RIOS DO OESTE',7538,4107538,5529),
            (4047,'esperanca-nova',17,'ESPERANÇA NOVA',7520,4107520,850)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4048,'espigao-alto-do-iguacu',17,'ESPIGÃO ALTO DO IGUAÇU',7546,4107546,852),
            (4049,'farol',17,'FAROL',7553,4107553,5511),
            (4050,'faxinal',17,'FAXINAL',7603,4107603,7549),
            (4051,'fazenda-rio-grande',17,'FAZENDA RIO GRANDE',7652,4107652,9983),
            (4052,'fenix',17,'FÊNIX',7702,4107702,7551),
            (4053,'fernandes-pinheiro',17,'FERNANDES PINHEIRO',7736,4107736,854),
            (4054,'figueira',17,'FIGUEIRA',7751,4107751,8457),
            (4055,'flor-da-serra-do-sul',17,'FLOR DA SERRA DO SUL',7850,4107850,5475),
            (4056,'florai',17,'FLORAÍ',7801,4107801,7553),
            (4057,'floresta',17,'FLORESTA',7900,4107900,7555)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4058,'florestopolis',17,'FLORESTÓPOLIS',8007,4108007,7557),
            (4059,'florida',17,'FLÓRIDA',8106,4108106,7559),
            (4060,'formosa-do-oeste',17,'FORMOSA DO OESTE',8205,4108205,7561),
            (4061,'foz-do-iguacu',17,'FOZ DO IGUAÇU',8304,4108304,7563),
            (4062,'foz-do-jordao',17,'FOZ DO JORDÃO',8452,4108452,856),
            (4063,'francisco-alves',17,'FRANCISCO ALVES',8320,4108320,7977),
            (4064,'francisco-beltrao',17,'FRANCISCO BELTRÃO',8403,4108403,7565),
            (4065,'general-carneiro',17,'GENERAL CARNEIRO',8502,4108502,7567),
            (4066,'godoy-moreira',17,'GODOY MOREIRA',8551,4108551,9947),
            (4067,'goioere',17,'GOIOERÊ',8601,4108601,7569)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4068,'goioxim',17,'GOIOXIM',8650,4108650,858),
            (4069,'grandes-rios',17,'GRANDES RIOS',8700,4108700,7959),
            (4070,'guaira',17,'GUAÍRA',8809,4108809,7571),
            (4071,'guairaca',17,'GUAIRAÇÁ',8908,4108908,7573),
            (4072,'guamiranga',17,'GUAMIRANGA',8957,4108957,860),
            (4073,'guapirama',17,'GUAPIRAMA',9005,4109005,7575),
            (4074,'guaporema',17,'GUAPOREMA',9104,4109104,7577),
            (4075,'guaraci',17,'GUARACI',9203,4109203,7579),
            (4076,'guaraniacu',17,'GUARANIAÇU',9302,4109302,7581),
            (4077,'guarapuava',17,'GUARAPUAVA',9401,4109401,7583)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4078,'guaraquecaba',17,'GUARAQUEÇABA',9500,4109500,7585),
            (4079,'guaratuba',17,'GUARATUBA',9609,4109609,7587),
            (4080,'honorio-serpa',17,'HONÓRIO SERPA',9658,4109658,9981),
            (4081,'ibaiti',17,'IBAITI',9708,4109708,7589),
            (4082,'ibema',17,'IBEMA',9757,4109757,9949),
            (4083,'ibipora',17,'IBIPORÃ',9807,4109807,7591),
            (4084,'icaraima',17,'ICARAÍMA',9906,4109906,7593),
            (4085,'iguaracu',17,'IGUARAÇU',10003,4110003,7595),
            (4086,'iguatu',17,'IGUATU',10052,4110052,5467),
            (4087,'imbau',17,'IMBAÚ',10078,4110078,862)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4088,'imbituva',17,'IMBITUVA',10102,4110102,7597),
            (4089,'inacio-martins',17,'INÁCIO MARTINS',10201,4110201,7599),
            (4090,'inaja',17,'INAJÁ',10300,4110300,7601),
            (4091,'indianopolis',17,'INDIANÓPOLIS',10409,4110409,7961),
            (4092,'ipiranga',17,'IPIRANGA',10508,4110508,7603),
            (4093,'ipora',17,'IPORÃ',10607,4110607,7605),
            (4094,'iracema-do-oeste',17,'IRACEMA DO OESTE',10656,4110656,5485),
            (4095,'irati',17,'IRATI',10706,4110706,7607),
            (4096,'iretama',17,'IRETAMA',10805,4110805,7609),
            (4097,'itaguaje',17,'ITAGUAJÉ',10904,4110904,7611)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4098,'itaipulandia',17,'ITAIPULÂNDIA',10953,4110953,5525),
            (4099,'itambaraca',17,'ITAMBARACÁ',11001,4111001,7613),
            (4100,'itambe',17,'ITAMBÉ',11100,4111100,7615),
            (4101,'itapejara-doeste',17,'ITAPEJARA D''OESTE',11209,4111209,7617),
            (4102,'itaperucu',17,'ITAPERUÇU',11258,4111258,5451),
            (4103,'itauna-do-sul',17,'ITAÚNA DO SUL',11308,4111308,7619),
            (4104,'ivai',17,'IVAÍ',11407,4111407,7621),
            (4105,'ivaipora',17,'IVAIPORÃ',11506,4111506,7623),
            (4106,'ivate',17,'IVATÉ',11555,4111555,9955),
            (4107,'ivatuba',17,'IVATUBA',11605,4111605,7625)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4108,'jaboti',17,'JABOTI',11704,4111704,7627),
            (4109,'jacarezinho',17,'JACAREZINHO',11803,4111803,7629),
            (4110,'jaguapita',17,'JAGUAPITÃ',11902,4111902,7631),
            (4111,'jaguariaiva',17,'JAGUARIAÍVA',12009,4112009,7633),
            (4112,'jandaia-do-sul',17,'JANDAIA DO SUL',12108,4112108,7635),
            (4113,'janiopolis',17,'JANIÓPOLIS',12207,4112207,7637),
            (4114,'japira',17,'JAPIRA',12306,4112306,7639),
            (4115,'japura',17,'JAPURÁ',12405,4112405,7641),
            (4116,'jardim-alegre',17,'JARDIM ALEGRE',12504,4112504,7643),
            (4117,'jardim-olinda',17,'JARDIM OLINDA',12603,4112603,7645)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4118,'jataizinho',17,'JATAIZINHO',12702,4112702,7647),
            (4119,'jesuitas',17,'JESUÍTAS',12751,4112751,7997),
            (4120,'joaquim-tavora',17,'JOAQUIM TÁVORA',12801,4112801,7649),
            (4121,'jundiai-do-sul',17,'JUNDIAÍ DO SUL',12900,4112900,7651),
            (4122,'juranda',17,'JURANDA',12959,4112959,8463),
            (4123,'jussara',17,'JUSSARA',13007,4113007,7653),
            (4124,'kalore',17,'KALORÉ',13106,4113106,7655),
            (4125,'lapa',17,'LAPA',13205,4113205,7657),
            (4126,'laranjal',17,'LARANJAL',13254,4113254,5501),
            (4127,'laranjeiras-do-sul',17,'LARANJEIRAS DO SUL',13304,4113304,7659)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4128,'leopolis',17,'LEÓPOLIS',13403,4113403,7661),
            (4129,'lidianopolis',17,'LIDIANÓPOLIS',13429,4113429,5507),
            (4130,'lindoeste',17,'LINDOESTE',13452,4113452,9959),
            (4131,'loanda',17,'LOANDA',13502,4113502,7663),
            (4132,'lobato',17,'LOBATO',13601,4113601,7665),
            (4133,'londrina',17,'LONDRINA',13700,4113700,7667),
            (4134,'luiziana',17,'LUIZIANA',13734,4113734,8481),
            (4135,'lunardelli',17,'LUNARDELLI',13759,4113759,8459),
            (4136,'lupionopolis',17,'LUPIONÓPOLIS',13809,4113809,7669),
            (4137,'mallet',17,'MALLET',13908,4113908,7671)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4138,'mambore',17,'MAMBORÊ',14005,4114005,7673),
            (4139,'mandaguacu',17,'MANDAGUAÇU',14104,4114104,7675),
            (4140,'mandaguari',17,'MANDAGUARI',14203,4114203,7677),
            (4141,'mandirituba',17,'MANDIRITUBA',14302,4114302,7679),
            (4142,'manfrinopolis',17,'MANFRINÓPOLIS',14351,4114351,864),
            (4143,'mangueirinha',17,'MANGUEIRINHA',14401,4114401,7511),
            (4144,'manoel-ribas',17,'MANOEL RIBAS',14500,4114500,7681),
            (4145,'marechal-candido-rondon',17,'MARECHAL CÂNDIDO RONDON',14609,4114609,7683),
            (4146,'maria-helena',17,'MARIA HELENA',14708,4114708,7685),
            (4147,'marialva',17,'MARIALVA',14807,4114807,7687)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4148,'marilandia-do-sul',17,'MARILÂNDIA DO SUL',14906,4114906,7433),
            (4149,'marilena',17,'MARILENA',15002,4115002,7975),
            (4150,'mariluz',17,'MARILUZ',15101,4115101,7689),
            (4151,'maringa',17,'MARINGÁ',15200,4115200,7691),
            (4152,'mariopolis',17,'MARIÓPOLIS',15309,4115309,7693),
            (4153,'maripa',17,'MARIPÁ',15358,4115358,5487),
            (4154,'marmeleiro',17,'MARMELEIRO',15408,4115408,7695),
            (4155,'marquinho',17,'MARQUINHO',15457,4115457,866),
            (4156,'marumbi',17,'MARUMBI',15507,4115507,7697),
            (4157,'matelandia',17,'MATELÂNDIA',15606,4115606,7699)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4158,'matinhos',17,'MATINHOS',15705,4115705,7963),
            (4159,'mato-rico',17,'MATO RICO',15739,4115739,5503),
            (4160,'maua-da-serra',17,'MAUÁ DA SERRA',15754,4115754,5459),
            (4161,'medianeira',17,'MEDIANEIRA',15804,4115804,7701),
            (4162,'mercedes',17,'MERCEDES',15853,4115853,5531),
            (4163,'mirador',17,'MIRADOR',15903,4115903,7703),
            (4164,'miraselva',17,'MIRASELVA',16000,4116000,7705),
            (4165,'missal',17,'MISSAL',16059,4116059,8469),
            (4166,'moreira-sales',17,'MOREIRA SALES',16109,4116109,7707),
            (4167,'morretes',17,'MORRETES',16208,4116208,7709)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4168,'munhoz-de-melo',17,'MUNHOZ DE MELO',16307,4116307,7711),
            (4169,'nossa-senhora-das-gracas',17,'NOSSA SENHORA DAS GRAÇAS',16406,4116406,7713),
            (4170,'nova-alianca-do-ivai',17,'NOVA ALIANÇA DO IVAÍ',16505,4116505,7715),
            (4171,'nova-america-da-colina',17,'NOVA AMÉRICA DA COLINA',16604,4116604,7717),
            (4172,'nova-aurora',17,'NOVA AURORA',16703,4116703,7965),
            (4173,'nova-cantu',17,'NOVA CANTU',16802,4116802,7719),
            (4174,'nova-esperanca',17,'NOVA ESPERANÇA',16901,4116901,7721),
            (4175,'nova-esperanca-do-sudoeste',17,'NOVA ESPERANÇA DO SUDOESTE',16950,4116950,5477),
            (4176,'nova-fatima',17,'NOVA FÁTIMA',17008,4117008,7723),
            (4177,'nova-laranjeiras',17,'NOVA LARANJEIRAS',17057,4117057,5479)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4178,'nova-londrina',17,'NOVA LONDRINA',17107,4117107,7725),
            (4179,'nova-olimpia',17,'NOVA OLÍMPIA',17206,4117206,7967),
            (4180,'nova-prata-do-iguacu',17,'NOVA PRATA DO IGUAÇU',17255,4117255,7995),
            (4181,'nova-santa-barbara',17,'NOVA SANTA BÁRBARA',17214,4117214,5457),
            (4182,'nova-santa-rosa',17,'NOVA SANTA ROSA',17222,4117222,7979),
            (4183,'nova-tebas',17,'NOVA TEBAS',17271,4117271,9913),
            (4184,'novo-itacolomi',17,'NOVO ITACOLOMI',17297,4117297,5517),
            (4185,'ortigueira',17,'ORTIGUEIRA',17305,4117305,7727),
            (4186,'ourizona',17,'OURIZONA',17404,4117404,7729),
            (4187,'ouro-verde-do-oeste',17,'OURO VERDE DO OESTE',17453,4117453,9965)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4188,'paicandu',17,'PAIÇANDU',17503,4117503,7731),
            (4189,'palmas',17,'PALMAS',17602,4117602,7733),
            (4190,'palmeira',17,'PALMEIRA',17701,4117701,7735),
            (4191,'palmital',17,'PALMITAL',17800,4117800,7737),
            (4192,'palotina',17,'PALOTINA',17909,4117909,7739),
            (4193,'paraiso-do-norte',17,'PARAÍSO DO NORTE',18006,4118006,7741),
            (4194,'paranacity',17,'PARANACITY',18105,4118105,7743),
            (4195,'paranagua',17,'PARANAGUÁ',18204,4118204,7745),
            (4196,'paranapoema',17,'PARANAPOEMA',18303,4118303,7747),
            (4197,'paranavai',17,'PARANAVAÍ',18402,4118402,7749)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4198,'pato-bragado',17,'PATO BRAGADO',18451,4118451,5533),
            (4199,'pato-branco',17,'PATO BRANCO',18501,4118501,7751),
            (4603,'sombrio',25,'SOMBRIO',17709,4217709,8349),
            (4200,'paula-freitas',17,'PAULA FREITAS',18600,4118600,7753),
            (4201,'paulo-frontin',17,'PAULO FRONTIN',18709,4118709,7755),
            (4202,'peabiru',17,'PEABIRU',18808,4118808,7757),
            (4203,'perobal',17,'PEROBAL',18857,4118857,868),
            (4204,'perola',17,'PÉROLA',18907,4118907,7969),
            (4205,'perola-doeste',17,'PÉROLA D''OESTE',19004,4119004,7759),
            (4206,'pien',17,'PIÊN',19103,4119103,7761)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4207,'pinhais',17,'PINHAIS',19152,4119152,5453),
            (4208,'pinhal-de-sao-bento',17,'PINHAL DE SÃO BENTO',19251,4119251,5495),
            (4209,'pinhalao',17,'PINHALÃO',19202,4119202,7763),
            (4210,'pinhao',17,'PINHÃO',19301,4119301,7765),
            (4211,'pirai-do-sul',17,'PIRAÍ DO SUL',19400,4119400,7767),
            (4212,'piraquara',17,'PIRAQUARA',19509,4119509,7769),
            (4213,'pitanga',17,'PITANGA',19608,4119608,7771),
            (4214,'pitangueiras',17,'PITANGUEIRAS',19657,4119657,5461),
            (4215,'planaltina-do-parana',17,'PLANALTINA DO PARANÁ',19707,4119707,7773),
            (4216,'planalto',17,'PLANALTO',19806,4119806,7775)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4217,'ponta-grossa',17,'PONTA GROSSA',19905,4119905,7777),
            (4218,'pontal-do-parana',17,'PONTAL DO PARANÁ',19954,4119954,870),
            (4219,'porecatu',17,'PORECATU',20002,4120002,7779),
            (4220,'porto-amazonas',17,'PORTO AMAZONAS',20101,4120101,7781),
            (4221,'porto-barreiro',17,'PORTO BARREIRO',20150,4120150,872),
            (4222,'porto-rico',17,'PORTO RICO',20200,4120200,7783),
            (4223,'porto-vitoria',17,'PORTO VITÓRIA',20309,4120309,7785),
            (4224,'prado-ferreira',17,'PRADO FERREIRA',20333,4120333,874),
            (4225,'pranchita',17,'PRANCHITA',20358,4120358,7991),
            (4226,'presidente-castelo-branco',17,'PRESIDENTE CASTELO BRANCO',20408,4120408,7787)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4227,'primeiro-de-maio',17,'PRIMEIRO DE MAIO',20507,4120507,7789),
            (4228,'prudentopolis',17,'PRUDENTÓPOLIS',20606,4120606,7791),
            (4229,'quarto-centenario',17,'QUARTO CENTENÁRIO',20655,4120655,876),
            (4230,'quatigua',17,'QUATIGUÁ',20705,4120705,7793),
            (4231,'quatro-barras',17,'QUATRO BARRAS',20804,4120804,7795),
            (4232,'quatro-pontes',17,'QUATRO PONTES',20853,4120853,5535),
            (4233,'quedas-do-iguacu',17,'QUEDAS DO IGUAÇU',20903,4120903,7955),
            (4234,'querencia-do-norte',17,'QUERÊNCIA DO NORTE',21000,4121000,7797),
            (4235,'quinta-do-sol',17,'QUINTA DO SOL',21109,4121109,7799),
            (4236,'quitandinha',17,'QUITANDINHA',21208,4121208,7801)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4237,'ramilandia',17,'RAMILÂNDIA',21257,4121257,5527),
            (4238,'rancho-alegre',17,'RANCHO ALEGRE',21307,4121307,7803),
            (4239,'rancho-alegre-doeste',17,'RANCHO ALEGRE D''OESTE',21356,4121356,5513),
            (4240,'realeza',17,'REALEZA',21406,4121406,7805),
            (4241,'reboucas',17,'REBOUÇAS',21505,4121505,7807),
            (4242,'renascenca',17,'RENASCENÇA',21604,4121604,7809),
            (4243,'reserva',17,'RESERVA',21703,4121703,7811),
            (4244,'reserva-do-iguacu',17,'RESERVA DO IGUAÇU',21752,4121752,878),
            (4245,'ribeirao-claro',17,'RIBEIRÃO CLARO',21802,4121802,7813),
            (4246,'ribeirao-do-pinhal',17,'RIBEIRÃO DO PINHAL',21901,4121901,7815)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4247,'rio-azul',17,'RIO AZUL',22008,4122008,7817),
            (4248,'rio-bom',17,'RIO BOM',22107,4122107,7819),
            (4249,'rio-bonito-do-iguacu',17,'RIO BONITO DO IGUAÇU',22156,4122156,5481),
            (4250,'rio-branco-do-ivai',17,'RIO BRANCO DO IVAÍ',22172,4122172,880),
            (4251,'rio-branco-do-sul',17,'RIO BRANCO DO SUL',22206,4122206,7821),
            (4252,'rio-negro',17,'RIO NEGRO',22305,4122305,7823),
            (4253,'rolandia',17,'ROLÂNDIA',22404,4122404,7825),
            (4254,'roncador',17,'RONCADOR',22503,4122503,7827),
            (4255,'rondon',17,'RONDON',22602,4122602,7829),
            (4256,'rosario-do-ivai',17,'ROSÁRIO DO IVAÍ',22651,4122651,8473)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4257,'sabaudia',17,'SABÁUDIA',22701,4122701,7831),
            (4258,'salgado-filho',17,'SALGADO FILHO',22800,4122800,7833),
            (4259,'salto-do-itarare',17,'SALTO DO ITARARÉ',22909,4122909,7835),
            (4260,'salto-do-lontra',17,'SALTO DO LONTRA',23006,4123006,7837),
            (4261,'santa-amelia',17,'SANTA AMÉLIA',23105,4123105,7839),
            (4262,'santa-cecilia-do-pavao',17,'SANTA CECÍLIA DO PAVÃO',23204,4123204,7841),
            (4263,'santa-cruz-de-monte-castelo',17,'SANTA CRUZ DE MONTE CASTELO',23303,4123303,7843),
            (4264,'santa-fe',17,'SANTA FÉ',23402,4123402,7845),
            (4265,'santa-helena',17,'SANTA HELENA',23501,4123501,7971),
            (4266,'santa-ines',17,'SANTA INÊS',23600,4123600,7847)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4267,'santa-isabel-do-ivai',17,'SANTA ISABEL DO IVAÍ',23709,4123709,7849),
            (4268,'santa-izabel-do-oeste',17,'SANTA IZABEL DO OESTE',23808,4123808,7851),
            (4269,'santa-lucia',17,'SANTA LÚCIA',23824,4123824,5469),
            (4270,'santa-maria-do-oeste',17,'SANTA MARIA DO OESTE',23857,4123857,5505),
            (4271,'santa-mariana',17,'SANTA MARIANA',23907,4123907,7853),
            (4272,'santa-monica',17,'SANTA MÔNICA',23956,4123956,5519),
            (4273,'santa-tereza-do-oeste',17,'SANTA TEREZA DO OESTE',24020,4124020,9969),
            (4274,'santa-terezinha-de-itaipu',17,'SANTA TEREZINHA DE ITAIPU',24053,4124053,8467),
            (4275,'santana-do-itarare',17,'SANTANA DO ITARARÉ',24004,4124004,7855),
            (4276,'santo-antonio-da-platina',17,'SANTO ANTÔNIO DA PLATINA',24103,4124103,7859)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4277,'santo-antonio-do-caiua',17,'SANTO ANTÔNIO DO CAIUÁ',24202,4124202,7861),
            (4278,'santo-antonio-do-paraiso',17,'SANTO ANTÔNIO DO PARAÍSO',24301,4124301,7863),
            (4279,'santo-antonio-do-sudoeste',17,'SANTO ANTÔNIO DO SUDOESTE',24400,4124400,7857),
            (4280,'santo-inacio',17,'SANTO INÁCIO',24509,4124509,7865),
            (4281,'sao-carlos-do-ivai',17,'SÃO CARLOS DO IVAÍ',24608,4124608,7867),
            (4282,'sao-jeronimo-da-serra',17,'SÃO JERÔNIMO DA SERRA',24707,4124707,7869),
            (4283,'sao-joao',17,'SÃO JOÃO',24806,4124806,7871),
            (4284,'sao-joao-do-caiua',17,'SÃO JOÃO DO CAIUÁ',24905,4124905,7873),
            (4285,'sao-joao-do-ivai',17,'SÃO JOÃO DO IVAÍ',25001,4125001,7875),
            (4286,'sao-joao-do-triunfo',17,'SÃO JOÃO DO TRIUNFO',25100,4125100,7877)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4287,'sao-jorge-do-ivai',17,'SÃO JORGE DO IVAÍ',25308,4125308,7879),
            (4288,'sao-jorge-do-patrocinio',17,'SÃO JORGE DO PATROCÍNIO',25357,4125357,7999),
            (4289,'sao-jorge-doeste',17,'SÃO JORGE D''OESTE',25209,4125209,7881),
            (4290,'sao-jose-da-boa-vista',17,'SÃO JOSÉ DA BOA VISTA',25407,4125407,7883),
            (4291,'sao-jose-das-palmeiras',17,'SÃO JOSÉ DAS PALMEIRAS',25456,4125456,8471),
            (4292,'sao-jose-dos-pinhais',17,'SÃO JOSÉ DOS PINHAIS',25506,4125506,7885),
            (4293,'sao-manoel-do-parana',17,'SÃO MANOEL DO PARANÁ',25555,4125555,5515),
            (5109,'vacaria',22,'VACARIA',22509,4322509,8953),
            (4294,'sao-mateus-do-sul',17,'SÃO MATEUS DO SUL',25605,4125605,7887),
            (4295,'sao-miguel-do-iguacu',17,'SÃO MIGUEL DO IGUAÇU',25704,4125704,7889)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4296,'sao-pedro-do-iguacu',17,'SÃO PEDRO DO IGUAÇU',25753,4125753,5489),
            (4297,'sao-pedro-do-ivai',17,'SÃO PEDRO DO IVAÍ',25803,4125803,7891),
            (4298,'sao-pedro-do-parana',17,'SÃO PEDRO DO PARANÁ',25902,4125902,7893),
            (4299,'sao-sebastiao-da-amoreira',17,'SÃO SEBASTIÃO DA AMOREIRA',26009,4126009,7895),
            (4300,'sao-tome',17,'SÃO TOMÉ',26108,4126108,7897),
            (4301,'sapopema',17,'SAPOPEMA',26207,4126207,7899),
            (4302,'sarandi',17,'SARANDI',26256,4126256,8461),
            (4303,'saudade-do-iguacu',17,'SAUDADE DO IGUAÇU',26272,4126272,5493),
            (4304,'senges',17,'SENGÉS',26306,4126306,7901),
            (4305,'serranopolis-do-iguacu',17,'SERRANÓPOLIS DO IGUAÇU',26355,4126355,882)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4306,'sertaneja',17,'SERTANEJA',26405,4126405,7903),
            (4307,'sertanopolis',17,'SERTANÓPOLIS',26504,4126504,7905),
            (4308,'siqueira-campos',17,'SIQUEIRA CAMPOS',26603,4126603,7907),
            (4309,'sulina',17,'SULINA',26652,4126652,8477),
            (4310,'tamarana',17,'TAMARANA',26678,4126678,884),
            (4311,'tamboara',17,'TAMBOARA',26702,4126702,7909),
            (4312,'tapejara',17,'TAPEJARA',26801,4126801,7911),
            (4313,'tapira',17,'TAPIRA',26900,4126900,7973),
            (4314,'teixeira-soares',17,'TEIXEIRA SOARES',27007,4127007,7913),
            (4315,'telemaco-borba',17,'TELÊMACO BORBA',27106,4127106,7915)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4316,'terra-boa',17,'TERRA BOA',27205,4127205,7917),
            (4317,'terra-rica',17,'TERRA RICA',27304,4127304,7919),
            (4318,'terra-roxa',17,'TERRA ROXA',27403,4127403,7921),
            (4319,'tibagi',17,'TIBAGI',27502,4127502,7923),
            (4320,'tijucas-do-sul',17,'TIJUCAS DO SUL',27601,4127601,7925),
            (4321,'toledo',17,'TOLEDO',27700,4127700,7927),
            (4322,'tomazina',17,'TOMAZINA',27809,4127809,7929),
            (4323,'tres-barras-do-parana',17,'TRÊS BARRAS DO PARANÁ',27858,4127858,7987),
            (4324,'tunas-do-parana',17,'TUNAS DO PARANÁ',27882,4127882,5455),
            (4325,'tuneiras-do-oeste',17,'TUNEIRAS DO OESTE',27908,4127908,7931)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4326,'tupassi',17,'TUPÃSSI',27957,4127957,7993),
            (4327,'turvo',17,'TURVO',27965,4127965,8453),
            (4328,'ubirata',17,'UBIRATÃ',28005,4128005,7933),
            (4329,'umuarama',17,'UMUARAMA',28104,4128104,7935),
            (4330,'uniao-da-vitoria',17,'UNIÃO DA VITÓRIA',28203,4128203,7937),
            (4331,'uniflor',17,'UNIFLOR',28302,4128302,7939),
            (4332,'urai',17,'URAÍ',28401,4128401,7941),
            (4333,'ventania',17,'VENTANIA',28534,4128534,5497),
            (4334,'vera-cruz-do-oeste',17,'VERA CRUZ DO OESTE',28559,4128559,7989),
            (4335,'vere',17,'VERÊ',28609,4128609,7945)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4336,'virmond',17,'VIRMOND',28658,4128658,5483),
            (4337,'vitorino',17,'VITORINO',28708,4128708,7947),
            (4338,'wenceslau-braz',17,'WENCESLAU BRAZ',28500,4128500,7943),
            (4339,'xambre',17,'XAMBRÊ',28807,4128807,7949),
            (4340,'abdon-batista',25,'ABDON BATISTA',51,4200051,9939),
            (4341,'abelardo-luz',25,'ABELARDO LUZ',101,4200101,8001),
            (4342,'agrolandia',25,'AGROLÂNDIA',200,4200200,8003),
            (4343,'agronomica',25,'AGRONÔMICA',309,4200309,8005),
            (4344,'agua-doce',25,'ÁGUA DOCE',408,4200408,8007),
            (4345,'aguas-de-chapeco',25,'ÁGUAS DE CHAPECÓ',507,4200507,8009)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4346,'aguas-frias',25,'ÁGUAS FRIAS',556,4200556,5577),
            (4347,'aguas-mornas',25,'ÁGUAS MORNAS',606,4200606,8011),
            (4348,'alfredo-wagner',25,'ALFREDO WAGNER',705,4200705,8013),
            (4349,'alto-bela-vista',25,'ALTO BELA VISTA',754,4200754,886),
            (4350,'anchieta',25,'ANCHIETA',804,4200804,8015),
            (4351,'angelina',25,'ANGELINA',903,4200903,8017),
            (4352,'anita-garibaldi',25,'ANITA GARIBALDI',1000,4201000,8019),
            (4353,'anitapolis',25,'ANITÁPOLIS',1109,4201109,8021),
            (4354,'antonio-carlos',25,'ANTÔNIO CARLOS',1208,4201208,8023),
            (4355,'apiuna',25,'APIÚNA',1257,4201257,9941)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4356,'arabuta',25,'ARABUTÃ',1273,4201273,5597),
            (4357,'araquari',25,'ARAQUARI',1307,4201307,8025),
            (4358,'ararangua',25,'ARARANGUÁ',1406,4201406,8027),
            (4359,'armazem',25,'ARMAZÉM',1505,4201505,8029),
            (4360,'arroio-trinta',25,'ARROIO TRINTA',1604,4201604,8031),
            (4361,'arvoredo',25,'ARVOREDO',1653,4201653,5599),
            (4362,'ascurra',25,'ASCURRA',1703,4201703,8033),
            (4363,'atalanta',25,'ATALANTA',1802,4201802,8035),
            (4364,'aurora',25,'AURORA',1901,4201901,8037),
            (4365,'balneario-arroio-do-silva',25,'BALNEÁRIO ARROIO DO SILVA',1950,4201950,888)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4366,'balneario-barra-do-sul',25,'BALNEÁRIO BARRA DO SUL',2057,4202057,5549),
            (4367,'balneario-camboriu',25,'BALNEÁRIO CAMBORIÚ',2008,4202008,8039),
            (4368,'balneario-gaivota',25,'BALNEÁRIO GAIVOTA',2073,4202073,890),
            (4369,'balneario-picarras',25,'BALNEÁRIO PIÇARRAS',12809,4212809,8251),
            (4370,'balneario-rincao',25,'BALNEÁRIO RINCÃO',20000,4220000,1192),
            (4371,'bandeirante',25,'BANDEIRANTE',2081,4202081,892),
            (4372,'barra-bonita',25,'BARRA BONITA',2099,4202099,894),
            (4373,'barra-velha',25,'BARRA VELHA',2107,4202107,8041),
            (4374,'bela-vista-do-toldo',25,'BELA VISTA DO TOLDO',2131,4202131,896),
            (4375,'belmonte',25,'BELMONTE',2156,4202156,5745)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4376,'benedito-novo',25,'BENEDITO NOVO',2206,4202206,8043),
            (4377,'biguacu',25,'BIGUAÇU',2305,4202305,8045),
            (4378,'blumenau',25,'BLUMENAU',2404,4202404,8047),
            (4379,'bocaina-do-sul',25,'BOCAINA DO SUL',2438,4202438,898),
            (4380,'bom-jardim-da-serra',25,'BOM JARDIM DA SERRA',2503,4202503,8389),
            (4381,'bom-jesus',25,'BOM JESUS',2537,4202537,900),
            (4382,'bom-jesus-do-oeste',25,'BOM JESUS DO OESTE',2578,4202578,902),
            (4383,'bom-retiro',25,'BOM RETIRO',2602,4202602,8049),
            (4384,'bombinhas',25,'BOMBINHAS',2453,4202453,5537),
            (4385,'botuvera',25,'BOTUVERÁ',2701,4202701,8051)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4386,'braco-do-norte',25,'BRAÇO DO NORTE',2800,4202800,8053),
            (4387,'braco-do-trombudo',25,'BRAÇO DO TROMBUDO',2859,4202859,5557),
            (4388,'brunopolis',25,'BRUNÓPOLIS',2875,4202875,904),
            (4389,'brusque',25,'BRUSQUE',2909,4202909,8055),
            (4390,'cacador',25,'CAÇADOR',3006,4203006,8057),
            (4391,'caibi',25,'CAIBI',3105,4203105,8059),
            (4392,'calmon',25,'CALMON',3154,4203154,5553),
            (4393,'camboriu',25,'CAMBORIÚ',3204,4203204,8061),
            (4394,'campo-alegre',25,'CAMPO ALEGRE',3303,4203303,8063),
            (4395,'campo-belo-do-sul',25,'CAMPO BELO DO SUL',3402,4203402,8065)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4396,'campo-ere',25,'CAMPO ERÊ',3501,4203501,8067),
            (4397,'campos-novos',25,'CAMPOS NOVOS',3600,4203600,8069),
            (4398,'canelinha',25,'CANELINHA',3709,4203709,8071),
            (4399,'canoinhas',25,'CANOINHAS',3808,4203808,8073),
            (4400,'capao-alto',25,'CAPÃO ALTO',3253,4203253,906),
            (4401,'capinzal',25,'CAPINZAL',3907,4203907,8075),
            (4402,'capivari-de-baixo',25,'CAPIVARI DE BAIXO',3956,4203956,5545),
            (4403,'catanduvas',25,'CATANDUVAS',4004,4204004,8077),
            (4404,'caxambu-do-sul',25,'CAXAMBU DO SUL',4103,4204103,8079),
            (4405,'celso-ramos',25,'CELSO RAMOS',4152,4204152,9943)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4406,'cerro-negro',25,'CERRO NEGRO',4178,4204178,5567),
            (4407,'chapadao-do-lageado',25,'CHAPADÃO DO LAGEADO',4194,4204194,908),
            (4408,'chapeco',25,'CHAPECÓ',4202,4204202,8081),
            (4409,'cocal-do-sul',25,'COCAL DO SUL',4251,4204251,5543),
            (4410,'concordia',25,'CONCÓRDIA',4301,4204301,8083),
            (4411,'cordilheira-alta',25,'CORDILHEIRA ALTA',4350,4204350,5579),
            (4412,'coronel-freitas',25,'CORONEL FREITAS',4400,4204400,8085),
            (4413,'coronel-martins',25,'CORONEL MARTINS',4459,4204459,5735),
            (4414,'correia-pinto',25,'CORREIA PINTO',4558,4204558,8395),
            (4415,'corupa',25,'CORUPÁ',4509,4204509,8087)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4416,'criciuma',25,'CRICIÚMA',4608,4204608,8089),
            (4417,'cunha-pora',25,'CUNHA PORÃ',4707,4204707,8091),
            (4418,'cunhatai',25,'CUNHATAÍ',4756,4204756,910),
            (4419,'curitibanos',25,'CURITIBANOS',4806,4204806,8093),
            (4420,'descanso',25,'DESCANSO',4905,4204905,8095),
            (4421,'dionisio-cerqueira',25,'DIONÍSIO CERQUEIRA',5001,4205001,8097),
            (4422,'dona-emma',25,'DONA EMMA',5100,4205100,8099),
            (4423,'doutor-pedrinho',25,'DOUTOR PEDRINHO',5159,4205159,9945),
            (4424,'entre-rios',25,'ENTRE RIOS',5175,4205175,912),
            (4425,'ermo',25,'ERMO',5191,4205191,914)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4426,'erval-velho',25,'ERVAL VELHO',5209,4205209,8101),
            (4427,'faxinal-dos-guedes',25,'FAXINAL DOS GUEDES',5308,4205308,8103),
            (4428,'flor-do-sertao',25,'FLOR DO SERTÃO',5357,4205357,916),
            (4429,'florianopolis',25,'FLORIANÓPOLIS',5407,4205407,8105),
            (4430,'formosa-do-sul',25,'FORMOSA DO SUL',5431,4205431,5581),
            (4431,'forquilhinha',25,'FORQUILHINHA',5456,4205456,973),
            (4432,'fraiburgo',25,'FRAIBURGO',5506,4205506,8107),
            (4433,'frei-rogerio',25,'FREI ROGÉRIO',5555,4205555,918),
            (4434,'galvao',25,'GALVÃO',5605,4205605,8109),
            (4435,'garopaba',25,'GAROPABA',5704,4205704,8113)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4436,'garuva',25,'GARUVA',5803,4205803,8115),
            (4437,'gaspar',25,'GASPAR',5902,4205902,8117),
            (4438,'governador-celso-ramos',25,'GOVERNADOR CELSO RAMOS',6009,4206009,8111),
            (4439,'grao-para',25,'GRÃO-PARÁ',6108,4206108,8119),
            (4440,'gravatal',25,'GRAVATAL',6207,4206207,8121),
            (4441,'guabiruba',25,'GUABIRUBA',6306,4206306,8123),
            (4442,'guaraciaba',25,'GUARACIABA',6405,4206405,8125),
            (4443,'guaramirim',25,'GUARAMIRIM',6504,4206504,8127),
            (4444,'guaruja-do-sul',25,'GUARUJÁ DO SUL',6603,4206603,8129),
            (4445,'guatambu',25,'GUATAMBÚ',6652,4206652,5583)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4446,'herval-doeste',25,'HERVAL D''OESTE',6702,4206702,8131),
            (4447,'ibiam',25,'IBIAM',6751,4206751,920),
            (4448,'ibicare',25,'IBICARÉ',6801,4206801,8133),
            (4449,'ibirama',25,'IBIRAMA',6900,4206900,8135),
            (4450,'icara',25,'IÇARA',7007,4207007,8137),
            (4451,'ilhota',25,'ILHOTA',7106,4207106,8139),
            (4452,'imarui',25,'IMARUÍ',7205,4207205,8141),
            (4453,'imbituba',25,'IMBITUBA',7304,4207304,8143),
            (4454,'imbuia',25,'IMBUIA',7403,4207403,8145),
            (4455,'indaial',25,'INDAIAL',7502,4207502,8147)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4456,'iomere',25,'IOMERÊ',7577,4207577,922),
            (4457,'ipira',25,'IPIRA',7601,4207601,8149),
            (4458,'ipora-do-oeste',25,'IPORÃ DO OESTE',7650,4207650,9951),
            (4459,'ipuacu',25,'IPUAÇU',7684,4207684,5737),
            (4460,'ipumirim',25,'IPUMIRIM',7700,4207700,8151),
            (4461,'iraceminha',25,'IRACEMINHA',7759,4207759,9953),
            (4462,'irani',25,'IRANI',7809,4207809,8153),
            (4463,'irati',25,'IRATI',7858,4207858,5585),
            (4464,'irineopolis',25,'IRINEÓPOLIS',7908,4207908,8155),
            (4465,'ita',25,'ITÁ',8005,4208005,8157)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4466,'itaiopolis',25,'ITAIÓPOLIS',8104,4208104,8159),
            (4467,'itajai',25,'ITAJAÍ',8203,4208203,8161),
            (4468,'itapema',25,'ITAPEMA',8302,4208302,8163),
            (4469,'itapiranga',25,'ITAPIRANGA',8401,4208401,8165),
            (4470,'itapoa',25,'ITAPOÁ',8450,4208450,9985),
            (4471,'ituporanga',25,'ITUPORANGA',8500,4208500,8167),
            (4472,'jabora',25,'JABORÁ',8609,4208609,8169),
            (4473,'jacinto-machado',25,'JACINTO MACHADO',8708,4208708,8171),
            (4474,'jaguaruna',25,'JAGUARUNA',8807,4208807,8173),
            (4475,'jaragua-do-sul',25,'JARAGUÁ DO SUL',8906,4208906,8175)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4476,'jardinopolis',25,'JARDINÓPOLIS',8955,4208955,5587),
            (4477,'joacaba',25,'JOAÇABA',9003,4209003,8177),
            (4478,'joinville',25,'JOINVILLE',9102,4209102,8179),
            (4479,'jose-boiteux',25,'JOSÉ BOITEUX',9151,4209151,9957),
            (4480,'jupia',25,'JUPIÁ',9177,4209177,924),
            (4481,'lacerdopolis',25,'LACERDÓPOLIS',9201,4209201,8181),
            (4482,'lages',25,'LAGES',9300,4209300,8183),
            (4483,'laguna',25,'LAGUNA',9409,4209409,8185),
            (4484,'lajeado-grande',25,'LAJEADO GRANDE',9458,4209458,5739),
            (4485,'laurentino',25,'LAURENTINO',9508,4209508,8187)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4486,'lauro-muller',25,'LAURO MÜLLER',9607,4209607,8189),
            (4487,'lebon-regis',25,'LEBON RÉGIS',9706,4209706,8191),
            (4488,'leoberto-leal',25,'LEOBERTO LEAL',9805,4209805,8193),
            (4489,'lindoia-do-sul',25,'LINDÓIA DO SUL',9854,4209854,9961),
            (4490,'lontras',25,'LONTRAS',9904,4209904,8195),
            (4491,'luiz-alves',25,'LUIZ ALVES',10001,4210001,8197),
            (4492,'luzerna',25,'LUZERNA',10035,4210035,926),
            (4493,'macieira',25,'MACIEIRA',10050,4210050,5575),
            (4494,'mafra',25,'MAFRA',10100,4210100,8199),
            (4495,'major-gercino',25,'MAJOR GERCINO',10209,4210209,8201)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4496,'major-vieira',25,'MAJOR VIEIRA',10308,4210308,8203),
            (4497,'maracaja',25,'MARACAJÁ',10407,4210407,8391),
            (4498,'maravilha',25,'MARAVILHA',10506,4210506,8205),
            (4499,'marema',25,'MAREMA',10555,4210555,9963),
            (4500,'massaranduba',25,'MASSARANDUBA',10605,4210605,8207),
            (4501,'matos-costa',25,'MATOS COSTA',10704,4210704,8209),
            (4503,'mirim-doce',25,'MIRIM DOCE',10852,4210852,5559),
            (4504,'modelo',25,'MODELO',10902,4210902,8213),
            (4505,'mondai',25,'MONDAÍ',11009,4211009,8215),
            (4506,'monte-carlo',25,'MONTE CARLO',11058,4211058,5561)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4507,'monte-castelo',25,'MONTE CASTELO',11108,4211108,8217),
            (4508,'morro-da-fumaca',25,'MORRO DA FUMAÇA',11207,4211207,8219),
            (4509,'morro-grande',25,'MORRO GRANDE',11256,4211256,5539),
            (4510,'navegantes',25,'NAVEGANTES',11306,4211306,8221),
            (4511,'nova-erechim',25,'NOVA ERECHIM',11405,4211405,8223),
            (4512,'nova-itaberaba',25,'NOVA ITABERABA',11454,4211454,5589),
            (4513,'nova-trento',25,'NOVA TRENTO',11504,4211504,8225),
            (4514,'nova-veneza',25,'NOVA VENEZA',11603,4211603,8227),
            (4515,'novo-horizonte',25,'NOVO HORIZONTE',11652,4211652,5591),
            (4516,'orleans',25,'ORLEANS',11702,4211702,8229)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4517,'otacilio-costa',25,'OTACÍLIO COSTA',11751,4211751,8397),
            (4518,'ouro',25,'OURO',11801,4211801,8231),
            (4519,'ouro-verde',25,'OURO VERDE',11850,4211850,5741),
            (4520,'paial',25,'PAIAL',11876,4211876,928),
            (4521,'painel',25,'PAINEL',11892,4211892,930),
            (4522,'palhoca',25,'PALHOÇA',11900,4211900,8233),
            (4523,'palma-sola',25,'PALMA SOLA',12007,4212007,8235),
            (4524,'palmeira',25,'PALMEIRA',12056,4212056,932),
            (4525,'palmitos',25,'PALMITOS',12106,4212106,8237),
            (4526,'papanduva',25,'PAPANDUVA',12205,4212205,8239)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4527,'paraiso',25,'PARAÍSO',12239,4212239,5747),
            (4528,'passo-de-torres',25,'PASSO DE TORRES',12254,4212254,5541),
            (4529,'passos-maia',25,'PASSOS MAIA',12270,4212270,5743),
            (4530,'paulo-lopes',25,'PAULO LOPES',12304,4212304,8241),
            (4531,'pedras-grandes',25,'PEDRAS GRANDES',12403,4212403,8243),
            (4532,'penha',25,'PENHA',12502,4212502,8245),
            (4533,'peritiba',25,'PERITIBA',12601,4212601,8247),
            (4534,'pescaria-brava',25,'PESCARIA BRAVA',12650,4212650,1194),
            (4535,'petrolandia',25,'PETROLÂNDIA',12700,4212700,8249),
            (4536,'pinhalzinho',25,'PINHALZINHO',12908,4212908,8253)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4537,'pinheiro-preto',25,'PINHEIRO PRETO',13005,4213005,8255),
            (4538,'piratuba',25,'PIRATUBA',13104,4213104,8257),
            (4539,'planalto-alegre',25,'PLANALTO ALEGRE',13153,4213153,5593),
            (4540,'pomerode',25,'POMERODE',13203,4213203,8259),
            (4541,'ponte-alta',25,'PONTE ALTA',13302,4213302,8261),
            (4542,'ponte-alta-do-norte',25,'PONTE ALTA DO NORTE',13351,4213351,5569),
            (4543,'ponte-serrada',25,'PONTE SERRADA',13401,4213401,8263),
            (4544,'porto-belo',25,'PORTO BELO',13500,4213500,8265),
            (4545,'porto-uniao',25,'PORTO UNIÃO',13609,4213609,8267),
            (4546,'pouso-redondo',25,'POUSO REDONDO',13708,4213708,8269)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4547,'praia-grande',25,'PRAIA GRANDE',13807,4213807,8271),
            (4548,'presidente-castello-branco',25,'PRESIDENTE CASTELLO BRANCO',13906,4213906,8273),
            (4549,'presidente-getulio',25,'PRESIDENTE GETÚLIO',14003,4214003,8275),
            (4550,'presidente-nereu',25,'PRESIDENTE NEREU',14102,4214102,8277),
            (4551,'princesa',25,'PRINCESA',14151,4214151,934),
            (4552,'quilombo',25,'QUILOMBO',14201,4214201,8279),
            (4553,'rancho-queimado',25,'RANCHO QUEIMADO',14300,4214300,8281),
            (4554,'rio-das-antas',25,'RIO DAS ANTAS',14409,4214409,8283),
            (4555,'rio-do-campo',25,'RIO DO CAMPO',14508,4214508,8285),
            (4556,'rio-do-oeste',25,'RIO DO OESTE',14607,4214607,8287)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4557,'rio-do-sul',25,'RIO DO SUL',14805,4214805,8291),
            (4558,'rio-dos-cedros',25,'RIO DOS CEDROS',14706,4214706,8289),
            (4559,'rio-fortuna',25,'RIO FORTUNA',14904,4214904,8293),
            (4560,'rio-negrinho',25,'RIO NEGRINHO',15000,4215000,8295),
            (4561,'rio-rufino',25,'RIO RUFINO',15059,4215059,5571),
            (4562,'riqueza',25,'RIQUEZA',15075,4215075,5749),
            (4563,'rodeio',25,'RODEIO',15109,4215109,8297),
            (4564,'romelandia',25,'ROMELÂNDIA',15208,4215208,8299),
            (4565,'salete',25,'SALETE',15307,4215307,8301),
            (4566,'saltinho',25,'SALTINHO',15356,4215356,936)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4567,'salto-veloso',25,'SALTO VELOSO',15406,4215406,8303),
            (4568,'sangao',25,'SANGÃO',15455,4215455,5547),
            (4569,'santa-cecilia',25,'SANTA CECÍLIA',15505,4215505,8305),
            (4570,'santa-helena',25,'SANTA HELENA',15554,4215554,5751),
            (4571,'santa-rosa-de-lima',25,'SANTA ROSA DE LIMA',15604,4215604,8307),
            (4572,'santa-rosa-do-sul',25,'SANTA ROSA DO SUL',15653,4215653,9967),
            (4573,'santa-terezinha',25,'SANTA TEREZINHA',15679,4215679,5555),
            (4574,'santa-terezinha-do-progresso',25,'SANTA TEREZINHA DO PROGRESSO',15687,4215687,938),
            (4575,'santiago-do-sul',25,'SANTIAGO DO SUL',15695,4215695,940),
            (4576,'santo-amaro-da-imperatriz',25,'SANTO AMARO DA IMPERATRIZ',15703,4215703,8309)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4577,'sao-bento-do-sul',25,'SÃO BENTO DO SUL',15802,4215802,8311),
            (4578,'sao-bernardino',25,'SÃO BERNARDINO',15752,4215752,942),
            (4579,'sao-bonifacio',25,'SÃO BONIFÁCIO',15901,4215901,8313),
            (4580,'sao-carlos',25,'SÃO CARLOS',16008,4216008,8315),
            (4581,'sao-cristovao-do-sul',25,'SÃO CRISTÓVÃO DO SUL',16057,4216057,5573),
            (4582,'sao-domingos',25,'SÃO DOMINGOS',16107,4216107,8317),
            (4583,'sao-francisco-do-sul',25,'SÃO FRANCISCO DO SUL',16206,4216206,8319),
            (4584,'sao-joao-batista',25,'SÃO JOÃO BATISTA',16305,4216305,8321),
            (4585,'sao-joao-do-itaperiu',25,'SÃO JOÃO DO ITAPERIÚ',16354,4216354,5551),
            (4586,'sao-joao-do-oeste',25,'SÃO JOÃO DO OESTE',16255,4216255,5753)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4587,'sao-joao-do-sul',25,'SÃO JOÃO DO SUL',16404,4216404,8323),
            (4588,'sao-joaquim',25,'SÃO JOAQUIM',16503,4216503,8325),
            (4589,'sao-jose',25,'SÃO JOSÉ',16602,4216602,8327),
            (4590,'sao-jose-do-cedro',25,'SÃO JOSÉ DO CEDRO',16701,4216701,8329),
            (4591,'sao-jose-do-cerrito',25,'SÃO JOSÉ DO CERRITO',16800,4216800,8331),
            (4592,'sao-lourenco-do-oeste',25,'SÃO LOURENÇO DO OESTE',16909,4216909,8333),
            (4593,'sao-ludgero',25,'SÃO LUDGERO',17006,4217006,8335),
            (4594,'sao-martinho',25,'SÃO MARTINHO',17105,4217105,8337),
            (4595,'sao-miguel-da-boa-vista',25,'SÃO MIGUEL DA BOA VISTA',17154,4217154,5755),
            (4596,'sao-miguel-do-oeste',25,'SÃO MIGUEL DO OESTE',17204,4217204,8339)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4597,'sao-pedro-de-alcantara',25,'SÃO PEDRO DE ALCÂNTARA',17253,4217253,944),
            (4598,'saudades',25,'SAUDADES',17303,4217303,8341),
            (4599,'schroeder',25,'SCHROEDER',17402,4217402,8343),
            (4600,'seara',25,'SEARA',17501,4217501,8345),
            (4601,'serra-alta',25,'SERRA ALTA',17550,4217550,9989),
            (4602,'sideropolis',25,'SIDERÓPOLIS',17600,4217600,8347),
            (4604,'sul-brasil',25,'SUL BRASIL',17758,4217758,5595),
            (4605,'taio',25,'TAIÓ',17808,4217808,8351),
            (4606,'tangara',25,'TANGARÁ',17907,4217907,8353),
            (4607,'tigrinhos',25,'TIGRINHOS',17956,4217956,946)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4608,'tijucas',25,'TIJUCAS',18004,4218004,8355),
            (4609,'timbe-do-sul',25,'TIMBÉ DO SUL',18103,4218103,8393),
            (4610,'timbo',25,'TIMBÓ',18202,4218202,8357),
            (4611,'timbo-grande',25,'TIMBÓ GRANDE',18251,4218251,9971),
            (4612,'tres-barras',25,'TRÊS BARRAS',18301,4218301,8359),
            (4613,'treviso',25,'TREVISO',18350,4218350,948),
            (4614,'treze-de-maio',25,'TREZE DE MAIO',18400,4218400,8361),
            (4615,'treze-tilias',25,'TREZE TÍLIAS',18509,4218509,8363),
            (4616,'trombudo-central',25,'TROMBUDO CENTRAL',18608,4218608,8365),
            (4617,'tubarao',25,'TUBARÃO',18707,4218707,8367)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4618,'tunapolis',25,'TUNÁPOLIS',18756,4218756,9991),
            (4619,'turvo',25,'TURVO',18806,4218806,8369),
            (4620,'uniao-do-oeste',25,'UNIÃO DO OESTE',18855,4218855,9973),
            (4621,'urubici',25,'URUBICI',18905,4218905,8371),
            (4622,'urupema',25,'URUPEMA',18954,4218954,9975),
            (4623,'urussanga',25,'URUSSANGA',19002,4219002,8373),
            (4624,'vargeao',25,'VARGEÃO',19101,4219101,8375),
            (4625,'vargem',25,'VARGEM',19150,4219150,5563),
            (4626,'vargem-bonita',25,'VARGEM BONITA',19176,4219176,5565),
            (4627,'vidal-ramos',25,'VIDAL RAMOS',19200,4219200,8377)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4628,'videira',25,'VIDEIRA',19309,4219309,8379),
            (4629,'vitor-meireles',25,'VITOR MEIRELES',19358,4219358,9977),
            (4630,'witmarsum',25,'WITMARSUM',19408,4219408,8381),
            (4631,'xanxere',25,'XANXERÊ',19507,4219507,8383),
            (4632,'xavantina',25,'XAVANTINA',19606,4219606,8385),
            (4633,'xaxim',25,'XAXIM',19705,4219705,8387),
            (4634,'zortea',25,'ZORTÉA',19853,4219853,950),
            (4635,'acegua',22,'ACEGUÁ',34,4300034,1118),
            (4636,'agua-santa',22,'ÁGUA SANTA',59,4300059,8499),
            (4637,'agudo',22,'AGUDO',109,4300109,8501)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4638,'ajuricaba',22,'AJURICABA',208,4300208,8503),
            (4639,'alecrim',22,'ALECRIM',307,4300307,8505),
            (4640,'alegrete',22,'ALEGRETE',406,4300406,8507),
            (4641,'alegria',22,'ALEGRIA',455,4300455,8497),
            (4642,'almirante-tamandare-do-sul',22,'ALMIRANTE TAMANDARÉ DO SUL',471,4300471,1120),
            (4643,'alpestre',22,'ALPESTRE',505,4300505,8509),
            (4644,'alto-alegre',22,'ALTO ALEGRE',554,4300554,8495),
            (4645,'alto-feliz',22,'ALTO FELIZ',570,4300570,6045),
            (4646,'alvorada',22,'ALVORADA',604,4300604,8511),
            (4647,'amaral-ferrador',22,'AMARAL FERRADOR',638,4300638,8493)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4648,'ametista-do-sul',22,'AMETISTA DO SUL',646,4300646,5969),
            (4649,'andre-da-rocha',22,'ANDRÉ DA ROCHA',661,4300661,8491),
            (4650,'anta-gorda',22,'ANTA GORDA',703,4300703,8513),
            (4651,'antonio-prado',22,'ANTÔNIO PRADO',802,4300802,8515),
            (4652,'arambare',22,'ARAMBARÉ',851,4300851,5779),
            (4653,'ararica',22,'ARARICÁ',877,4300877,952),
            (4654,'aratiba',22,'ARATIBA',901,4300901,8517),
            (4655,'arroio-do-meio',22,'ARROIO DO MEIO',1008,4301008,8519),
            (4656,'arroio-do-padre',22,'ARROIO DO PADRE',1073,4301073,1122),
            (4657,'arroio-do-sal',22,'ARROIO DO SAL',1057,4301057,8489)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4658,'arroio-do-tigre',22,'ARROIO DO TIGRE',1206,4301206,8523),
            (4659,'arroio-dos-ratos',22,'ARROIO DOS RATOS',1107,4301107,8521),
            (4660,'arroio-grande',22,'ARROIO GRANDE',1305,4301305,8525),
            (4661,'arvorezinha',22,'ARVOREZINHA',1404,4301404,8527),
            (4662,'augusto-pestana',22,'AUGUSTO PESTANA',1503,4301503,8529),
            (4663,'aurea',22,'ÁUREA',1552,4301552,8487),
            (4664,'bage',22,'BAGÉ',1602,4301602,8531),
            (4665,'balneario-pinhal',22,'BALNEÁRIO PINHAL',1636,4301636,954),
            (4666,'barao',22,'BARÃO',1651,4301651,8485),
            (4667,'barao-de-cotegipe',22,'BARÃO DE COTEGIPE',1701,4301701,8533)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4668,'barao-do-triunfo',22,'BARÃO DO TRIUNFO',1750,4301750,5771),
            (4669,'barra-do-guarita',22,'BARRA DO GUARITA',1859,4301859,6069),
            (4670,'barra-do-quarai',22,'BARRA DO QUARAÍ',1875,4301875,956),
            (4671,'barra-do-ribeiro',22,'BARRA DO RIBEIRO',1909,4301909,8537),
            (4672,'barra-do-rio-azul',22,'BARRA DO RIO AZUL',1925,4301925,5959),
            (4673,'barra-funda',22,'BARRA FUNDA',1958,4301958,5943),
            (4674,'barracao',22,'BARRACÃO',1800,4301800,8535),
            (4675,'barros-cassal',22,'BARROS CASSAL',2006,4302006,8539),
            (4676,'benjamin-constant-do-sul',22,'BENJAMIN CONSTANT DO SUL',2055,4302055,958),
            (4677,'bento-goncalves',22,'BENTO GONÇALVES',2105,4302105,8541)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4678,'boa-vista-das-missoes',22,'BOA VISTA DAS MISSÕES',2154,4302154,5981),
            (4679,'boa-vista-do-burica',22,'BOA VISTA DO BURICÁ',2204,4302204,8543),
            (4680,'boa-vista-do-cadeado',22,'BOA VISTA DO CADEADO',2220,4302220,1124),
            (4681,'boa-vista-do-incra',22,'BOA VISTA DO INCRA',2238,4302238,1126),
            (4682,'boa-vista-do-sul',22,'BOA VISTA DO SUL',2253,4302253,960),
            (4683,'bom-jesus',22,'BOM JESUS',2303,4302303,8545),
            (4684,'bom-principio',22,'BOM PRINCÍPIO',2352,4302352,9823),
            (4685,'bom-progresso',22,'BOM PROGRESSO',2378,4302378,6071),
            (4686,'bom-retiro-do-sul',22,'BOM RETIRO DO SUL',2402,4302402,8547),
            (4687,'boqueirao-do-leao',22,'BOQUEIRÃO DO LEÃO',2451,4302451,8483)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4688,'bossoroca',22,'BOSSOROCA',2501,4302501,8549),
            (4689,'bozano',22,'BOZANO',2584,4302584,1128),
            (4690,'braga',22,'BRAGA',2600,4302600,8551),
            (4691,'brochier',22,'BROCHIER',2659,4302659,8449),
            (4692,'butia',22,'BUTIÁ',2709,4302709,8553),
            (4693,'cacapava-do-sul',22,'CAÇAPAVA DO SUL',2808,4302808,8555),
            (4694,'cacequi',22,'CACEQUI',2907,4302907,8557),
            (4695,'cachoeira-do-sul',22,'CACHOEIRA DO SUL',3004,4303004,8559),
            (4696,'cachoeirinha',22,'CACHOEIRINHA',3103,4303103,8561),
            (4697,'cacique-doble',22,'CACIQUE DOBLE',3202,4303202,8563)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4698,'caibate',22,'CAIBATÉ',3301,4303301,8565),
            (4699,'caicara',22,'CAIÇARA',3400,4303400,8567),
            (4700,'camaqua',22,'CAMAQUÃ',3509,4303509,8569),
            (4701,'camargo',22,'CAMARGO',3558,4303558,8447),
            (4702,'cambara-do-sul',22,'CAMBARÁ DO SUL',3608,4303608,8571),
            (4703,'campestre-da-serra',22,'CAMPESTRE DA SERRA',3673,4303673,6013),
            (4704,'campina-das-missoes',22,'CAMPINA DAS MISSÕES',3707,4303707,8573),
            (4705,'campinas-do-sul',22,'CAMPINAS DO SUL',3806,4303806,8575),
            (4706,'campo-bom',22,'CAMPO BOM',3905,4303905,8577),
            (4707,'campo-novo',22,'CAMPO NOVO',4002,4304002,8579)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4708,'campos-borges',22,'CAMPOS BORGES',4101,4304101,8445),
            (4709,'candelaria',22,'CANDELÁRIA',4200,4304200,8581),
            (4710,'candido-godoi',22,'CÂNDIDO GODÓI',4309,4304309,8583),
            (4711,'candiota',22,'CANDIOTA',4358,4304358,6083),
            (4712,'canela',22,'CANELA',4408,4304408,8585),
            (4713,'cangucu',22,'CANGUÇU',4507,4304507,8587),
            (4714,'canoas',22,'CANOAS',4606,4304606,8589),
            (4715,'canudos-do-vale',22,'CANUDOS DO VALE',4614,4304614,1130),
            (4716,'capao-bonito-do-sul',22,'CAPÃO BONITO DO SUL',4622,4304622,1132),
            (4717,'capao-da-canoa',22,'CAPÃO DA CANOA',4630,4304630,8915)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4718,'capao-do-cipo',22,'CAPÃO DO CIPÓ',4655,4304655,1134),
            (4719,'capao-do-leao',22,'CAPÃO DO LEÃO',4663,4304663,8973),
            (4720,'capela-de-santana',22,'CAPELA DE SANTANA',4689,4304689,8443),
            (4721,'capitao',22,'CAPITÃO',4697,4304697,6025),
            (4722,'capivari-do-sul',22,'CAPIVARI DO SUL',4671,4304671,962),
            (4723,'caraa',22,'CARAÁ',4713,4304713,964),
            (4724,'carazinho',22,'CARAZINHO',4705,4304705,8591),
            (4725,'carlos-barbosa',22,'CARLOS BARBOSA',4804,4304804,8593),
            (4726,'carlos-gomes',22,'CARLOS GOMES',4853,4304853,5961),
            (4727,'casca',22,'CASCA',4903,4304903,8595)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4728,'caseiros',22,'CASEIROS',4952,4304952,8441),
            (4729,'catuipe',22,'CATUÍPE',5009,4305009,8597),
            (4730,'caxias-do-sul',22,'CAXIAS DO SUL',5108,4305108,8599),
            (4731,'centenario',22,'CENTENÁRIO',5116,4305116,5963),
            (4732,'cerrito',22,'CERRITO',5124,4305124,966),
            (4733,'cerro-branco',22,'CERRO BRANCO',5132,4305132,8439),
            (4734,'cerro-grande',22,'CERRO GRANDE',5157,4305157,8437),
            (4735,'cerro-grande-do-sul',22,'CERRO GRANDE DO SUL',5173,4305173,8435),
            (4736,'cerro-largo',22,'CERRO LARGO',5207,4305207,8601),
            (4737,'chapada',22,'CHAPADA',5306,4305306,8603)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4738,'charqueadas',22,'CHARQUEADAS',5355,4305355,8693),
            (4739,'charrua',22,'CHARRUA',5371,4305371,5965),
            (4740,'chiapetta',22,'CHIAPETTA',5405,4305405,8605),
            (4741,'chui',22,'CHUÍ',5439,4305439,968),
            (4742,'chuvisca',22,'CHUVISCA',5447,4305447,970),
            (4743,'cidreira',22,'CIDREIRA',5454,4305454,8433),
            (4744,'ciriaco',22,'CIRÍACO',5504,4305504,8607),
            (4745,'colinas',22,'COLINAS',5587,4305587,6029),
            (4746,'colorado',22,'COLORADO',5603,4305603,8609),
            (4747,'condor',22,'CONDOR',5702,4305702,8611)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4748,'constantina',22,'CONSTANTINA',5801,4305801,8613),
            (4749,'coqueiro-baixo',22,'COQUEIRO BAIXO',5835,4305835,1136),
            (4750,'coqueiros-do-sul',22,'COQUEIROS DO SUL',5850,4305850,5945),
            (4751,'coronel-barros',22,'CORONEL BARROS',5871,4305871,6055),
            (4752,'coronel-bicaco',22,'CORONEL BICACO',5900,4305900,8615),
            (4753,'coronel-pilar',22,'CORONEL PILAR',5934,4305934,1138),
            (4754,'cotipora',22,'COTIPORÃ',5959,4305959,8977),
            (4755,'coxilha',22,'COXILHA',5975,4305975,5797),
            (4756,'crissiumal',22,'CRISSIUMAL',6007,4306007,8617),
            (4757,'cristal',22,'CRISTAL',6056,4306056,8431)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4758,'cristal-do-sul',22,'CRISTAL DO SUL',6072,4306072,972),
            (4759,'cruz-alta',22,'CRUZ ALTA',6106,4306106,8619),
            (4760,'cruzaltense',22,'CRUZALTENSE',6130,4306130,1140),
            (4761,'cruzeiro-do-sul',22,'CRUZEIRO DO SUL',6205,4306205,8621),
            (4762,'david-canabarro',22,'DAVID CANABARRO',6304,4306304,8623),
            (4763,'derrubadas',22,'DERRUBADAS',6320,4306320,6073),
            (4764,'dezesseis-de-novembro',22,'DEZESSEIS DE NOVEMBRO',6353,4306353,8429),
            (4765,'dilermando-de-aguiar',22,'DILERMANDO DE AGUIAR',6379,4306379,974),
            (4766,'dois-irmaos',22,'DOIS IRMÃOS',6403,4306403,8625),
            (4767,'dois-irmaos-das-missoes',22,'DOIS IRMÃOS DAS MISSÕES',6429,4306429,5971)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4768,'dois-lajeados',22,'DOIS LAJEADOS',6452,4306452,8427),
            (4769,'dom-feliciano',22,'DOM FELICIANO',6502,4306502,8627),
            (4770,'dom-pedrito',22,'DOM PEDRITO',6601,4306601,8629),
            (4771,'dom-pedro-de-alcantara',22,'DOM PEDRO DE ALCÂNTARA',6551,4306551,976),
            (4772,'dona-francisca',22,'DONA FRANCISCA',6700,4306700,8631),
            (4773,'doutor-mauricio-cardoso',22,'DOUTOR MAURÍCIO CARDOSO',6734,4306734,8425),
            (4774,'doutor-ricardo',22,'DOUTOR RICARDO',6759,4306759,978),
            (4775,'eldorado-do-sul',22,'ELDORADO DO SUL',6767,4306767,8423),
            (4776,'encantado',22,'ENCANTADO',6809,4306809,8633),
            (4777,'encruzilhada-do-sul',22,'ENCRUZILHADA DO SUL',6908,4306908,8635)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4778,'engenho-velho',22,'ENGENHO VELHO',6924,4306924,5947),
            (4779,'entre-rios-do-sul',22,'ENTRE RIOS DO SUL',6957,4306957,8421),
            (4780,'entre-ijuis',22,'ENTRE-IJUÍS',6932,4306932,8419),
            (4781,'erebango',22,'EREBANGO',6973,4306973,8417),
            (4782,'erechim',22,'ERECHIM',7005,4307005,8637),
            (4783,'ernestina',22,'ERNESTINA',7054,4307054,8415),
            (4784,'erval-grande',22,'ERVAL GRANDE',7203,4307203,8641),
            (4785,'erval-seco',22,'ERVAL SECO',7302,4307302,8643),
            (4786,'esmeralda',22,'ESMERALDA',7401,4307401,8645),
            (4787,'esperanca-do-sul',22,'ESPERANÇA DO SUL',7450,4307450,980)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4788,'espumoso',22,'ESPUMOSO',7500,4307500,8647),
            (4789,'estacao',22,'ESTAÇÃO',7559,4307559,7301),
            (4790,'estancia-velha',22,'ESTÂNCIA VELHA',7609,4307609,8649),
            (4791,'esteio',22,'ESTEIO',7708,4307708,8651),
            (4792,'estrela',22,'ESTRELA',7807,4307807,8653),
            (4793,'estrela-velha',22,'ESTRELA VELHA',7815,4307815,982),
            (4794,'eugenio-de-castro',22,'EUGÊNIO DE CASTRO',7831,4307831,8413),
            (4795,'fagundes-varela',22,'FAGUNDES VARELA',7864,4307864,8411),
            (4796,'farroupilha',22,'FARROUPILHA',7906,4307906,8655),
            (4797,'faxinal-do-soturno',22,'FAXINAL DO SOTURNO',8003,4308003,8657)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4798,'faxinalzinho',22,'FAXINALZINHO',8052,4308052,8409),
            (4799,'fazenda-vilanova',22,'FAZENDA VILANOVA',8078,4308078,984),
            (4800,'feliz',22,'FELIZ',8102,4308102,8659),
            (4801,'flores-da-cunha',22,'FLORES DA CUNHA',8201,4308201,8661),
            (4802,'floriano-peixoto',22,'FLORIANO PEIXOTO',8250,4308250,986),
            (4803,'fontoura-xavier',22,'FONTOURA XAVIER',8300,4308300,8663),
            (4804,'formigueiro',22,'FORMIGUEIRO',8409,4308409,8665),
            (4805,'forquetinha',22,'FORQUETINHA',8433,4308433,1142),
            (4806,'fortaleza-dos-valos',22,'FORTALEZA DOS VALOS',8458,4308458,9827),
            (4807,'frederico-westphalen',22,'FREDERICO WESTPHALEN',8508,4308508,8667)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5410,'catalao',10,'CATALÃO',5109,5205109,9301),
            (4808,'garibaldi',22,'GARIBALDI',8607,4308607,8669),
            (4809,'garruchos',22,'GARRUCHOS',8656,4308656,6081),
            (4810,'gaurama',22,'GAURAMA',8706,4308706,8671),
            (4811,'general-camara',22,'GENERAL CÂMARA',8805,4308805,8673),
            (4812,'gentil',22,'GENTIL',8854,4308854,5799),
            (4813,'getulio-vargas',22,'GETÚLIO VARGAS',8904,4308904,8677),
            (4814,'girua',22,'GIRUÁ',9001,4309001,8679),
            (4815,'glorinha',22,'GLORINHA',9050,4309050,8407),
            (4816,'gramado',22,'GRAMADO',9100,4309100,8681)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4817,'gramado-dos-loureiros',22,'GRAMADO DOS LOUREIROS',9126,4309126,5949),
            (4818,'gramado-xavier',22,'GRAMADO XAVIER',9159,4309159,5763),
            (4819,'gravatai',22,'GRAVATAÍ',9209,4309209,8683),
            (4820,'guabiju',22,'GUABIJU',9258,4309258,8405),
            (4821,'guaiba',22,'GUAÍBA',9308,4309308,8685),
            (4822,'guapore',22,'GUAPORÉ',9407,4309407,8687),
            (4823,'guarani-das-missoes',22,'GUARANI DAS MISSÕES',9506,4309506,8689),
            (4824,'harmonia',22,'HARMONIA',9555,4309555,8403),
            (4825,'herval',22,'HERVAL',7104,4307104,8639),
            (4826,'herveiras',22,'HERVEIRAS',9571,4309571,988)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4827,'horizontina',22,'HORIZONTINA',9605,4309605,8691),
            (4828,'hulha-negra',22,'HULHA NEGRA',9654,4309654,6085),
            (4829,'humaita',22,'HUMAITÁ',9704,4309704,8695),
            (4830,'ibarama',22,'IBARAMA',9753,4309753,8401),
            (4831,'ibiaca',22,'IBIAÇÁ',9803,4309803,8697),
            (4832,'ibiraiaras',22,'IBIRAIARAS',9902,4309902,8699),
            (4833,'ibirapuita',22,'IBIRAPUITÃ',9951,4309951,7299),
            (4834,'ibiruba',22,'IBIRUBÁ',10009,4310009,8701),
            (4835,'igrejinha',22,'IGREJINHA',10108,4310108,8703),
            (4836,'ijui',22,'IJUÍ',10207,4310207,8705)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4837,'ilopolis',22,'ILÓPOLIS',10306,4310306,8707),
            (4838,'imbe',22,'IMBÉ',10330,4310330,7297),
            (4839,'imigrante',22,'IMIGRANTE',10363,4310363,7295),
            (4840,'independencia',22,'INDEPENDÊNCIA',10405,4310405,8709),
            (4841,'inhacora',22,'INHACORÁ',10413,4310413,6051),
            (4842,'ipe',22,'IPÊ',10439,4310439,8399),
            (4843,'ipiranga-do-sul',22,'IPIRANGA DO SUL',10462,4310462,7399),
            (4844,'irai',22,'IRAÍ',10504,4310504,8711),
            (4845,'itaara',22,'ITAARA',10538,4310538,990),
            (4846,'itacurubi',22,'ITACURUBI',10553,4310553,7397)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4847,'itapuca',22,'ITAPUCA',10579,4310579,6027),
            (4848,'itaqui',22,'ITAQUI',10603,4310603,8713),
            (4849,'itati',22,'ITATI',10652,4310652,1144),
            (4850,'itatiba-do-sul',22,'ITATIBA DO SUL',10702,4310702,8715),
            (4851,'ivora',22,'IVORÁ',10751,4310751,7395),
            (4852,'ivoti',22,'IVOTI',10801,4310801,8717),
            (4853,'jaboticaba',22,'JABOTICABA',10850,4310850,7393),
            (4854,'jacuizinho',22,'JACUIZINHO',10876,4310876,1146),
            (4855,'jacutinga',22,'JACUTINGA',10900,4310900,8719),
            (4856,'jaguarao',22,'JAGUARÃO',11007,4311007,8721)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4857,'jaguari',22,'JAGUARI',11106,4311106,8723),
            (4858,'jaquirana',22,'JAQUIRANA',11122,4311122,7391),
            (4859,'jari',22,'JARI',11130,4311130,992),
            (4860,'joia',22,'JÓIA',11155,4311155,9829),
            (4861,'julio-de-castilhos',22,'JÚLIO DE CASTILHOS',11205,4311205,8725),
            (4862,'lagoa-bonita-do-sul',22,'LAGOA BONITA DO SUL',11239,4311239,1148),
            (4863,'lagoa-dos-tres-cantos',22,'LAGOA DOS TRÊS CANTOS',11270,4311270,5951),
            (4864,'lagoa-vermelha',22,'LAGOA VERMELHA',11304,4311304,8727),
            (4865,'lagoao',22,'LAGOÃO',11254,4311254,7389),
            (4866,'lajeado',22,'LAJEADO',11403,4311403,8729)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4867,'lajeado-do-bugre',22,'LAJEADO DO BUGRE',11429,4311429,5983),
            (4868,'lavras-do-sul',22,'LAVRAS DO SUL',11502,4311502,8731),
            (4869,'liberato-salzano',22,'LIBERATO SALZANO',11601,4311601,8733),
            (4870,'lindolfo-collor',22,'LINDOLFO COLLOR',11627,4311627,6017),
            (4871,'linha-nova',22,'LINHA NOVA',11643,4311643,6047),
            (4872,'macambara',22,'MAÇAMBARÁ',11718,4311718,994),
            (4873,'machadinho',22,'MACHADINHO',11700,4311700,8735),
            (4874,'mampituba',22,'MAMPITUBA',11734,4311734,996),
            (4875,'manoel-viana',22,'MANOEL VIANA',11759,4311759,6079),
            (4876,'maquine',22,'MAQUINÉ',11775,4311775,5783)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4877,'marata',22,'MARATÁ',11791,4311791,6039),
            (4878,'marau',22,'MARAU',11809,4311809,8737),
            (4879,'marcelino-ramos',22,'MARCELINO RAMOS',11908,4311908,8739),
            (4880,'mariana-pimentel',22,'MARIANA PIMENTEL',11981,4311981,5759),
            (4881,'mariano-moro',22,'MARIANO MORO',12005,4312005,8741),
            (4882,'marques-de-souza',22,'MARQUES DE SOUZA',12054,4312054,998),
            (4883,'mata',22,'MATA',12104,4312104,8743),
            (4884,'mato-castelhano',22,'MATO CASTELHANO',12138,4312138,5931),
            (4885,'mato-leitao',22,'MATO LEITÃO',12153,4312153,6031),
            (4886,'mato-queimado',22,'MATO QUEIMADO',12179,4312179,1150)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4887,'maximiliano-de-almeida',22,'MAXIMILIANO DE ALMEIDA',12203,4312203,8745),
            (4888,'minas-do-leao',22,'MINAS DO LEÃO',12252,4312252,5773),
            (4889,'miraguai',22,'MIRAGUAÍ',12302,4312302,8747),
            (4890,'montauri',22,'MONTAURI',12351,4312351,7387),
            (4891,'monte-alegre-dos-campos',22,'MONTE ALEGRE DOS CAMPOS',12377,4312377,1000),
            (4892,'monte-belo-do-sul',22,'MONTE BELO DO SUL',12385,4312385,5993),
            (4893,'montenegro',22,'MONTENEGRO',12401,4312401,8749),
            (4894,'mormaco',22,'MORMAÇO',12427,4312427,5933),
            (4895,'morrinhos-do-sul',22,'MORRINHOS DO SUL',12443,4312443,5775),
            (4896,'morro-redondo',22,'MORRO REDONDO',12450,4312450,7385)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4897,'morro-reuter',22,'MORRO REUTER',12476,4312476,6019),
            (4898,'mostardas',22,'MOSTARDAS',12500,4312500,8751),
            (4899,'mucum',22,'MUÇUM',12609,4312609,8753),
            (4900,'muitos-capoes',22,'MUITOS CAPÕES',12617,4312617,1002),
            (4901,'muliterno',22,'MULITERNO',12625,4312625,5935),
            (4902,'nao-me-toque',22,'NÃO-ME-TOQUE',12658,4312658,8755),
            (4903,'nicolau-vergueiro',22,'NICOLAU VERGUEIRO',12674,4312674,5937),
            (4904,'nonoai',22,'NONOAI',12708,4312708,8757),
            (4905,'nova-alvorada',22,'NOVA ALVORADA',12757,4312757,7383),
            (4906,'nova-araca',22,'NOVA ARAÇÁ',12807,4312807,8759)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4907,'nova-bassano',22,'NOVA BASSANO',12906,4312906,8761),
            (4908,'nova-boa-vista',22,'NOVA BOA VISTA',12955,4312955,5953),
            (4909,'nova-brescia',22,'NOVA BRÉSCIA',13003,4313003,8763),
            (4910,'nova-candelaria',22,'NOVA CANDELÁRIA',13011,4313011,1004),
            (4911,'nova-esperanca-do-sul',22,'NOVA ESPERANÇA DO SUL',13037,4313037,7381),
            (5411,'caturai',10,'CATURAÍ',5208,5205208,9303),
            (4912,'nova-hartz',22,'NOVA HARTZ',13060,4313060,7379),
            (4913,'nova-padua',22,'NOVA PÁDUA',13086,4313086,5991),
            (4914,'nova-palma',22,'NOVA PALMA',13102,4313102,8765),
            (4915,'nova-petropolis',22,'NOVA PETRÓPOLIS',13201,4313201,8767)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4916,'nova-prata',22,'NOVA PRATA',13300,4313300,8769),
            (4917,'nova-ramada',22,'NOVA RAMADA',13334,4313334,1006),
            (4918,'nova-roma-do-sul',22,'NOVA ROMA DO SUL',13359,4313359,7377),
            (4919,'nova-santa-rita',22,'NOVA SANTA RITA',13375,4313375,5757),
            (4920,'novo-barreiro',22,'NOVO BARREIRO',13490,4313490,5985),
            (4921,'novo-cabrais',22,'NOVO CABRAIS',13391,4313391,1008),
            (4922,'novo-hamburgo',22,'NOVO HAMBURGO',13409,4313409,8771),
            (4923,'novo-machado',22,'NOVO MACHADO',13425,4313425,6057),
            (4924,'novo-tiradentes',22,'NOVO TIRADENTES',13441,4313441,5973),
            (4925,'novo-xingu',22,'NOVO XINGU',13466,4313466,1152)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4926,'osorio',22,'OSÓRIO',13508,4313508,8773),
            (4927,'paim-filho',22,'PAIM FILHO',13607,4313607,8775),
            (4928,'palmares-do-sul',22,'PALMARES DO SUL',13656,4313656,8967),
            (4929,'palmeira-das-missoes',22,'PALMEIRA DAS MISSÕES',13706,4313706,8777),
            (4930,'palmitinho',22,'PALMITINHO',13805,4313805,8779),
            (4931,'panambi',22,'PANAMBI',13904,4313904,8781),
            (4932,'pantano-grande',22,'PANTANO GRANDE',13953,4313953,7375),
            (4933,'parai',22,'PARAÍ',14001,4314001,8783),
            (4934,'paraiso-do-sul',22,'PARAÍSO DO SUL',14027,4314027,7373),
            (4935,'pareci-novo',22,'PARECI NOVO',14035,4314035,6041)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4936,'parobe',22,'PAROBÉ',14050,4314050,9825),
            (4937,'passa-sete',22,'PASSA SETE',14068,4314068,1010),
            (4938,'passo-do-sobrado',22,'PASSO DO SOBRADO',14076,4314076,5765),
            (4939,'passo-fundo',22,'PASSO FUNDO',14100,4314100,8785),
            (4940,'paulo-bento',22,'PAULO BENTO',14134,4314134,1154),
            (4941,'paverama',22,'PAVERAMA',14159,4314159,7371),
            (4942,'pedras-altas',22,'PEDRAS ALTAS',14175,4314175,1156),
            (4943,'pedro-osorio',22,'PEDRO OSÓRIO',14209,4314209,8787),
            (4944,'pejucara',22,'PEJUÇARA',14308,4314308,8789),
            (4945,'pelotas',22,'PELOTAS',14407,4314407,8791)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4946,'picada-cafe',22,'PICADA CAFÉ',14423,4314423,6021),
            (4947,'pinhal',22,'PINHAL',14456,4314456,7369),
            (4948,'pinhal-da-serra',22,'PINHAL DA SERRA',14464,4314464,1158),
            (4949,'pinhal-grande',22,'PINHAL GRANDE',14472,4314472,5787),
            (4950,'pinheirinho-do-vale',22,'PINHEIRINHO DO VALE',14498,4314498,5975),
            (4951,'pinheiro-machado',22,'PINHEIRO MACHADO',14506,4314506,8793),
            (4952,'pinto-bandeira',22,'PINTO BANDEIRA',14548,4314548,1160),
            (4953,'pirapo',22,'PIRAPÓ',14555,4314555,7367),
            (4954,'piratini',22,'PIRATINI',14605,4314605,8795),
            (4955,'planalto',22,'PLANALTO',14704,4314704,8797)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4956,'poco-das-antas',22,'POÇO DAS ANTAS',14753,4314753,7365),
            (4957,'pontao',22,'PONTÃO',14779,4314779,5939),
            (4958,'ponte-preta',22,'PONTE PRETA',14787,4314787,5967),
            (4959,'portao',22,'PORTÃO',14803,4314803,8799),
            (4960,'porto-alegre',22,'PORTO ALEGRE',14902,4314902,8801),
            (4961,'porto-lucena',22,'PORTO LUCENA',15008,4315008,8803),
            (4962,'porto-maua',22,'PORTO MAUÁ',15057,4315057,6065),
            (4963,'porto-vera-cruz',22,'PORTO VERA CRUZ',15073,4315073,6067),
            (4964,'porto-xavier',22,'PORTO XAVIER',15107,4315107,8805),
            (4965,'pouso-novo',22,'POUSO NOVO',15131,4315131,7363)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4966,'presidente-lucena',22,'PRESIDENTE LUCENA',15149,4315149,6023),
            (4967,'progresso',22,'PROGRESSO',15156,4315156,7361),
            (4968,'protasio-alves',22,'PROTÁSIO ALVES',15172,4315172,7359),
            (4969,'putinga',22,'PUTINGA',15206,4315206,8807),
            (4970,'quarai',22,'QUARAÍ',15305,4315305,8809),
            (4971,'quatro-irmaos',22,'QUATRO IRMÃOS',15313,4315313,1162),
            (4972,'quevedos',22,'QUEVEDOS',15321,4315321,5789),
            (4973,'quinze-de-novembro',22,'QUINZE DE NOVEMBRO',15354,4315354,7357),
            (4974,'redentora',22,'REDENTORA',15404,4315404,8811),
            (4975,'relvado',22,'RELVADO',15453,4315453,7355)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4976,'restinga-seca',22,'RESTINGA SÊCA',15503,4315503,8813),
            (4977,'rio-dos-indios',22,'RIO DOS ÍNDIOS',15552,4315552,5955),
            (4978,'rio-grande',22,'RIO GRANDE',15602,4315602,8815),
            (4979,'rio-pardo',22,'RIO PARDO',15701,4315701,8817),
            (4980,'riozinho',22,'RIOZINHO',15750,4315750,7353),
            (4981,'roca-sales',22,'ROCA SALES',15800,4315800,8819),
            (4982,'rodeio-bonito',22,'RODEIO BONITO',15909,4315909,8821),
            (4983,'rolador',22,'ROLADOR',15958,4315958,1164),
            (4984,'rolante',22,'ROLANTE',16006,4316006,8823),
            (4985,'ronda-alta',22,'RONDA ALTA',16105,4316105,8825)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4986,'rondinha',22,'RONDINHA',16204,4316204,8827),
            (4987,'roque-gonzales',22,'ROQUE GONZALES',16303,4316303,8829),
            (4988,'rosario-do-sul',22,'ROSÁRIO DO SUL',16402,4316402,8831),
            (4989,'sagrada-familia',22,'SAGRADA FAMÍLIA',16428,4316428,5987),
            (4990,'saldanha-marinho',22,'SALDANHA MARINHO',16436,4316436,7339),
            (4991,'salto-do-jacui',22,'SALTO DO JACUÍ',16451,4316451,8975),
            (4992,'salvador-das-missoes',22,'SALVADOR DAS MISSÕES',16477,4316477,6061),
            (4993,'salvador-do-sul',22,'SALVADOR DO SUL',16501,4316501,8833),
            (4994,'sananduva',22,'SANANDUVA',16600,4316600,8835),
            (4995,'santa-barbara-do-sul',22,'SANTA BÁRBARA DO SUL',16709,4316709,8837)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (4996,'santa-cecilia-do-sul',22,'SANTA CECÍLIA DO SUL',16733,4316733,1166),
            (4997,'santa-clara-do-sul',22,'SANTA CLARA DO SUL',16758,4316758,6033),
            (4998,'santa-cruz-do-sul',22,'SANTA CRUZ DO SUL',16808,4316808,8839),
            (4999,'santa-margarida-do-sul',22,'SANTA MARGARIDA DO SUL',16972,4316972,1168),
            (5000,'santa-maria',22,'SANTA MARIA',16907,4316907,8841),
            (5001,'santa-maria-do-herval',22,'SANTA MARIA DO HERVAL',16956,4316956,7337),
            (5002,'santa-rosa',22,'SANTA ROSA',17202,4317202,8847),
            (5003,'santa-tereza',22,'SANTA TEREZA',17251,4317251,5995),
            (5004,'santa-vitoria-do-palmar',22,'SANTA VITÓRIA DO PALMAR',17301,4317301,8849),
            (5005,'santana-da-boa-vista',22,'SANTANA DA BOA VISTA',17004,4317004,8843)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5006,'santana-do-livramento',22,'SANT''ANA DO LIVRAMENTO',17103,4317103,8845),
            (5007,'santiago',22,'SANTIAGO',17400,4317400,8851),
            (5008,'santo-angelo',22,'SANTO ÂNGELO',17509,4317509,8853),
            (5009,'santo-antonio-da-patrulha',22,'SANTO ANTÔNIO DA PATRULHA',17608,4317608,8855),
            (5010,'santo-antonio-das-missoes',22,'SANTO ANTÔNIO DAS MISSÕES',17707,4317707,8857),
            (5011,'santo-antonio-do-palma',22,'SANTO ANTÔNIO DO PALMA',17558,4317558,5941),
            (5012,'santo-antonio-do-planalto',22,'SANTO ANTÔNIO DO PLANALTO',17756,4317756,5957),
            (5013,'santo-augusto',22,'SANTO AUGUSTO',17806,4317806,8859),
            (5014,'santo-cristo',22,'SANTO CRISTO',17905,4317905,8861),
            (5015,'santo-expedito-do-sul',22,'SANTO EXPEDITO DO SUL',17954,4317954,5977)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5016,'sao-borja',22,'SÃO BORJA',18002,4318002,8863),
            (5017,'sao-domingos-do-sul',22,'SÃO DOMINGOS DO SUL',18051,4318051,7351),
            (5018,'sao-francisco-de-assis',22,'SÃO FRANCISCO DE ASSIS',18101,4318101,8865),
            (5019,'sao-francisco-de-paula',22,'SÃO FRANCISCO DE PAULA',18200,4318200,8867),
            (5020,'sao-gabriel',22,'SÃO GABRIEL',18309,4318309,8869),
            (5021,'sao-jeronimo',22,'SÃO JERÔNIMO',18408,4318408,8871),
            (5022,'sao-joao-da-urtiga',22,'SÃO JOÃO DA URTIGA',18424,4318424,7349),
            (5023,'sao-joao-do-polesine',22,'SÃO JOÃO DO POLÊSINE',18432,4318432,5791),
            (5024,'sao-jorge',22,'SÃO JORGE',18440,4318440,7347),
            (5025,'sao-jose-das-missoes',22,'SÃO JOSÉ DAS MISSÕES',18457,4318457,5989)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5026,'sao-jose-do-herval',22,'SÃO JOSÉ DO HERVAL',18465,4318465,7345),
            (5027,'sao-jose-do-hortencio',22,'SÃO JOSÉ DO HORTÊNCIO',18481,4318481,7343),
            (5028,'sao-jose-do-inhacora',22,'SÃO JOSÉ DO INHACORÁ',18499,4318499,6059),
            (5029,'sao-jose-do-norte',22,'SÃO JOSÉ DO NORTE',18507,4318507,8873),
            (5030,'sao-jose-do-ouro',22,'SÃO JOSÉ DO OURO',18606,4318606,8875),
            (5031,'sao-jose-do-sul',22,'SÃO JOSÉ DO SUL',18614,4318614,1170),
            (5032,'sao-jose-dos-ausentes',22,'SÃO JOSÉ DOS AUSENTES',18622,4318622,6015),
            (5033,'sao-leopoldo',22,'SÃO LEOPOLDO',18705,4318705,8877),
            (5034,'sao-lourenco-do-sul',22,'SÃO LOURENÇO DO SUL',18804,4318804,8879),
            (5035,'sao-luiz-gonzaga',22,'SÃO LUIZ GONZAGA',18903,4318903,8881)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5036,'sao-marcos',22,'SÃO MARCOS',19000,4319000,8883),
            (5037,'sao-martinho',22,'SÃO MARTINHO',19109,4319109,8885),
            (5038,'sao-martinho-da-serra',22,'SÃO MARTINHO DA SERRA',19125,4319125,5793),
            (5039,'sao-miguel-das-missoes',22,'SÃO MIGUEL DAS MISSÕES',19158,4319158,7341),
            (5040,'sao-nicolau',22,'SÃO NICOLAU',19208,4319208,8887),
            (5041,'sao-paulo-das-missoes',22,'SÃO PAULO DAS MISSÕES',19307,4319307,8889),
            (5042,'sao-pedro-da-serra',22,'SÃO PEDRO DA SERRA',19356,4319356,6043),
            (5043,'sao-pedro-das-missoes',22,'SÃO PEDRO DAS MISSÕES',19364,4319364,1172),
            (5044,'sao-pedro-do-butia',22,'SÃO PEDRO DO BUTIÁ',19372,4319372,6063),
            (5045,'sao-pedro-do-sul',22,'SÃO PEDRO DO SUL',19406,4319406,8891)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5046,'sao-sebastiao-do-cai',22,'SÃO SEBASTIÃO DO CAÍ',19505,4319505,8893),
            (5047,'sao-sepe',22,'SÃO SEPÉ',19604,4319604,8895),
            (5048,'sao-valentim',22,'SÃO VALENTIM',19703,4319703,8897),
            (5049,'sao-valentim-do-sul',22,'SÃO VALENTIM DO SUL',19711,4319711,5997),
            (5050,'sao-valerio-do-sul',22,'SÃO VALÉRIO DO SUL',19737,4319737,6075),
            (5051,'sao-vendelino',22,'SÃO VENDELINO',19752,4319752,7293),
            (5052,'sao-vicente-do-sul',22,'SÃO VICENTE DO SUL',19802,4319802,8675),
            (5053,'sapiranga',22,'SAPIRANGA',19901,4319901,8899),
            (5054,'sapucaia-do-sul',22,'SAPUCAIA DO SUL',20008,4320008,8901),
            (5055,'sarandi',22,'SARANDI',20107,4320107,8903)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5056,'seberi',22,'SEBERI',20206,4320206,8905),
            (5057,'sede-nova',22,'SEDE NOVA',20230,4320230,7335),
            (5058,'segredo',22,'SEGREDO',20263,4320263,7317),
            (5059,'selbach',22,'SELBACH',20305,4320305,8907),
            (5060,'senador-salgado-filho',22,'SENADOR SALGADO FILHO',20321,4320321,1012),
            (5061,'sentinela-do-sul',22,'SENTINELA DO SUL',20354,4320354,5781),
            (5062,'serafina-correa',22,'SERAFINA CORRÊA',20404,4320404,8909),
            (5063,'serio',22,'SÉRIO',20453,4320453,6035),
            (5064,'sertao',22,'SERTÃO',20503,4320503,8911),
            (5065,'sertao-santana',22,'SERTÃO SANTANA',20552,4320552,5761)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5066,'sete-de-setembro',22,'SETE DE SETEMBRO',20578,4320578,1014),
            (5067,'severiano-de-almeida',22,'SEVERIANO DE ALMEIDA',20602,4320602,8913),
            (5068,'silveira-martins',22,'SILVEIRA MARTINS',20651,4320651,7315),
            (5069,'sinimbu',22,'SINIMBU',20677,4320677,5767),
            (5070,'sobradinho',22,'SOBRADINHO',20701,4320701,8917),
            (5071,'soledade',22,'SOLEDADE',20800,4320800,8919),
            (5072,'tabai',22,'TABAÍ',20859,4320859,1016),
            (5073,'tapejara',22,'TAPEJARA',20909,4320909,8921),
            (5074,'tapera',22,'TAPERA',21006,4321006,8923),
            (5075,'tapes',22,'TAPES',21105,4321105,8925)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5076,'taquara',22,'TAQUARA',21204,4321204,8927),
            (5077,'taquari',22,'TAQUARI',21303,4321303,8929),
            (5078,'taquarucu-do-sul',22,'TAQUARUÇU DO SUL',21329,4321329,7313),
            (5079,'tavares',22,'TAVARES',21352,4321352,8971),
            (5080,'tenente-portela',22,'TENENTE PORTELA',21402,4321402,8931),
            (5081,'terra-de-areia',22,'TERRA DE AREIA',21436,4321436,7333),
            (5082,'teutonia',22,'TEUTÔNIA',21451,4321451,9821),
            (5083,'tio-hugo',22,'TIO HUGO',21469,4321469,1174),
            (5084,'tiradentes-do-sul',22,'TIRADENTES DO SUL',21477,4321477,6077),
            (5085,'toropi',22,'TOROPI',21493,4321493,1018)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5086,'torres',22,'TORRES',21501,4321501,8933),
            (5087,'tramandai',22,'TRAMANDAÍ',21600,4321600,8935),
            (5088,'travesseiro',22,'TRAVESSEIRO',21626,4321626,6037),
            (5089,'tres-arroios',22,'TRÊS ARROIOS',21634,4321634,7331),
            (5090,'tres-cachoeiras',22,'TRÊS CACHOEIRAS',21667,4321667,7329),
            (5091,'tres-coroas',22,'TRÊS COROAS',21709,4321709,8937),
            (5092,'tres-de-maio',22,'TRÊS DE MAIO',21808,4321808,8939),
            (5093,'tres-forquilhas',22,'TRÊS FORQUILHAS',21832,4321832,5777),
            (5094,'tres-palmeiras',22,'TRÊS PALMEIRAS',21857,4321857,7327),
            (5095,'tres-passos',22,'TRÊS PASSOS',21907,4321907,8941)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5096,'trindade-do-sul',22,'TRINDADE DO SUL',21956,4321956,7325),
            (5097,'triunfo',22,'TRIUNFO',22004,4322004,8943),
            (5098,'tucunduva',22,'TUCUNDUVA',22103,4322103,8945),
            (5099,'tunas',22,'TUNAS',22152,4322152,7323),
            (5100,'tupanci-do-sul',22,'TUPANCI DO SUL',22186,4322186,5979),
            (5101,'tupancireta',22,'TUPANCIRETÃ',22202,4322202,8947),
            (5102,'tupandi',22,'TUPANDI',22251,4322251,7321),
            (5103,'tuparendi',22,'TUPARENDI',22301,4322301,8949),
            (5104,'turucu',22,'TURUÇU',22327,4322327,1020),
            (5105,'ubiretama',22,'UBIRETAMA',22343,4322343,1022)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5106,'uniao-da-serra',22,'UNIÃO DA SERRA',22350,4322350,5999),
            (5107,'unistalda',22,'UNISTALDA',22376,4322376,1024),
            (5108,'uruguaiana',22,'URUGUAIANA',22400,4322400,8951),
            (5110,'vale-do-sol',22,'VALE DO SOL',22533,4322533,5769),
            (5111,'vale-real',22,'VALE REAL',22541,4322541,6049),
            (5112,'vale-verde',22,'VALE VERDE',22525,4322525,1026),
            (5113,'vanini',22,'VANINI',22558,4322558,7319),
            (5114,'venancio-aires',22,'VENÂNCIO AIRES',22608,4322608,8955),
            (5115,'vera-cruz',22,'VERA CRUZ',22707,4322707,8957),
            (5116,'veranopolis',22,'VERANÓPOLIS',22806,4322806,8959)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5117,'vespasiano-correa',22,'VESPASIANO CORRÊA',22855,4322855,1028),
            (5118,'viadutos',22,'VIADUTOS',22905,4322905,8961),
            (5119,'viamao',22,'VIAMÃO',23002,4323002,8963),
            (5120,'vicente-dutra',22,'VICENTE DUTRA',23101,4323101,8965),
            (5121,'victor-graeff',22,'VICTOR GRAEFF',23200,4323200,8969),
            (5122,'vila-flores',22,'VILA FLORES',23309,4323309,7311),
            (5123,'vila-langaro',22,'VILA LÂNGARO',23358,4323358,1030),
            (5124,'vila-maria',22,'VILA MARIA',23408,4323408,7309),
            (5125,'vila-nova-do-sul',22,'VILA NOVA DO SUL',23457,4323457,5795),
            (5126,'vista-alegre',22,'VISTA ALEGRE',23507,4323507,7307)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5127,'vista-alegre-do-prata',22,'VISTA ALEGRE DO PRATA',23606,4323606,7305),
            (5128,'vista-gaucha',22,'VISTA GAÚCHA',23705,4323705,7303),
            (5129,'vitoria-das-missoes',22,'VITÓRIA DAS MISSÕES',23754,4323754,6053),
            (5130,'westfalia',22,'WESTFÁLIA',23770,4323770,1176),
            (5131,'xangri-la',22,'XANGRI-LÁ',23804,4323804,5785),
            (5132,'agua-clara',13,'ÁGUA CLARA',203,5000203,9003),
            (5133,'alcinopolis',13,'ALCINÓPOLIS',252,5000252,141),
            (5134,'amambai',13,'AMAMBAI',609,5000609,9011),
            (5135,'anastacio',13,'ANASTÁCIO',708,5000708,9013),
            (5136,'anaurilandia',13,'ANAURILÂNDIA',807,5000807,9015)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5137,'angelica',13,'ANGÉLICA',856,5000856,9169),
            (5138,'antonio-joao',13,'ANTÔNIO JOÃO',906,5000906,9017),
            (5139,'aparecida-do-taboado',13,'APARECIDA DO TABOADO',1003,5001003,9019),
            (5140,'aquidauana',13,'AQUIDAUANA',1102,5001102,9021),
            (5141,'aral-moreira',13,'ARAL MOREIRA',1243,5001243,9171),
            (5142,'bandeirantes',13,'BANDEIRANTES',1508,5001508,9029),
            (5143,'bataguassu',13,'BATAGUASSU',1904,5001904,9037),
            (5144,'bataypora',13,'BATAYPORÃ',2001,5002001,9039),
            (5145,'bela-vista',13,'BELA VISTA',2100,5002100,9041),
            (5146,'bodoquena',13,'BODOQUENA',2159,5002159,9801)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5147,'bonito',13,'BONITO',2209,5002209,9043),
            (5148,'brasilandia',13,'BRASILÂNDIA',2308,5002308,9045),
            (5149,'caarapo',13,'CAARAPÓ',2407,5002407,9055),
            (5150,'camapua',13,'CAMAPUÃ',2605,5002605,9049),
            (5151,'campo-grande',13,'CAMPO GRANDE',2704,5002704,9051),
            (5152,'caracol',13,'CARACOL',2803,5002803,9053),
            (5153,'cassilandia',13,'CASSILÂNDIA',2902,5002902,9057),
            (5154,'chapadao-do-sul',13,'CHAPADÃO DO SUL',2951,5002951,9787),
            (5155,'corguinho',13,'CORGUINHO',3108,5003108,9061),
            (5156,'coronel-sapucaia',13,'CORONEL SAPUCAIA',3157,5003157,9997)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5157,'corumba',13,'CORUMBÁ',3207,5003207,9063),
            (5158,'costa-rica',13,'COSTA RICA',3256,5003256,9803),
            (5159,'coxim',13,'COXIM',3306,5003306,9065),
            (5160,'deodapolis',13,'DEODÁPOLIS',3454,5003454,9175),
            (5161,'dois-irmaos-do-buriti',13,'DOIS IRMÃOS DO BURITI',3488,5003488,9793),
            (5162,'douradina',13,'DOURADINA',3504,5003504,9805),
            (5163,'dourados',13,'DOURADOS',3702,5003702,9073),
            (5164,'eldorado',13,'ELDORADO',3751,5003751,9173),
            (5165,'fatima-do-sul',13,'FÁTIMA DO SUL',3801,5003801,9075),
            (5166,'figueirao',13,'FIGUEIRÃO',3900,5003900,1178)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5167,'gloria-de-dourados',13,'GLÓRIA DE DOURADOS',4007,5004007,9079),
            (5168,'guia-lopes-da-laguna',13,'GUIA LOPES DA LAGUNA',4106,5004106,9081),
            (5169,'iguatemi',13,'IGUATEMI',4304,5004304,9085),
            (5170,'inocencia',13,'INOCÊNCIA',4403,5004403,9087),
            (5171,'itapora',13,'ITAPORÃ',4502,5004502,9089),
            (5172,'itaquirai',13,'ITAQUIRAÍ',4601,5004601,9807),
            (5173,'ivinhema',13,'IVINHEMA',4700,5004700,9093),
            (5174,'japora',13,'JAPORÃ',4809,5004809,161),
            (5175,'jaraguari',13,'JARAGUARI',4908,5004908,9097),
            (5176,'jardim',13,'JARDIM',5004,5005004,9099)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5177,'jatei',13,'JATEÍ',5103,5005103,9101),
            (5178,'juti',13,'JUTI',5152,5005152,9923),
            (5179,'ladario',13,'LADÁRIO',5202,5005202,9103),
            (5180,'laguna-carapa',13,'LAGUNA CARAPÃ',5251,5005251,163),
            (5181,'maracaju',13,'MARACAJU',5400,5005400,9107),
            (5182,'miranda',13,'MIRANDA',5608,5005608,9111),
            (5183,'mundo-novo',13,'MUNDO NOVO',5681,5005681,9179),
            (5184,'navirai',13,'NAVIRAÍ',5707,5005707,9113),
            (5185,'nioaque',13,'NIOAQUE',5806,5005806,9115),
            (5186,'nova-alvorada-do-sul',13,'NOVA ALVORADA DO SUL',6002,5006002,143)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5187,'nova-andradina',13,'NOVA ANDRADINA',6200,5006200,9123),
            (5188,'novo-horizonte-do-sul',13,'NOVO HORIZONTE DO SUL',6259,5006259,159),
            (5189,'paraiso-das-aguas',13,'PARAÍSO DAS ÁGUAS',6275,5006275,1196),
            (5190,'paranaiba',13,'PARANAÍBA',6309,5006309,9125),
            (5191,'paranhos',13,'PARANHOS',6358,5006358,9739),
            (5192,'pedro-gomes',13,'PEDRO GOMES',6408,5006408,9127),
            (5193,'ponta-pora',13,'PONTA PORÃ',6606,5006606,9131),
            (5194,'porto-murtinho',13,'PORTO MURTINHO',6903,5006903,9137),
            (5195,'ribas-do-rio-pardo',13,'RIBAS DO RIO PARDO',7109,5007109,9141),
            (5196,'rio-brilhante',13,'RIO BRILHANTE',7208,5007208,9143)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5197,'rio-negro',13,'RIO NEGRO',7307,5007307,9145),
            (5198,'rio-verde-de-mato-grosso',13,'RIO VERDE DE MATO GROSSO',7406,5007406,9147),
            (5199,'rochedo',13,'ROCHEDO',7505,5007505,9149),
            (5200,'santa-rita-do-pardo',13,'SANTA RITA DO PARDO',7554,5007554,9745),
            (5201,'sao-gabriel-do-oeste',13,'SÃO GABRIEL DO OESTE',7695,5007695,9809),
            (5202,'selviria',13,'SELVÍRIA',7802,5007802,9811),
            (5203,'sete-quedas',13,'SETE QUEDAS',7703,5007703,9813),
            (5204,'sidrolandia',13,'SIDROLÂNDIA',7901,5007901,9157),
            (5205,'sonora',13,'SONORA',7935,5007935,9757),
            (5206,'tacuru',13,'TACURU',7950,5007950,9815)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5207,'taquarussu',13,'TAQUARUSSU',7976,5007976,9817),
            (5208,'terenos',13,'TERENOS',8008,5008008,9159),
            (5209,'tres-lagoas',13,'TRÊS LAGOAS',8305,5008305,9165),
            (5210,'vicentina',13,'VICENTINA',8404,5008404,9187),
            (5211,'acorizal',12,'ACORIZAL',102,5100102,9001),
            (5212,'agua-boa',12,'ÁGUA BOA',201,5100201,9191),
            (5213,'alta-floresta',12,'ALTA FLORESTA',250,5100250,8987),
            (5214,'alto-araguaia',12,'ALTO ARAGUAIA',300,5100300,9005),
            (5215,'alto-boa-vista',12,'ALTO BOA VISTA',359,5100359,127),
            (5216,'alto-garcas',12,'ALTO GARÇAS',409,5100409,9007)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5217,'alto-paraguai',12,'ALTO PARAGUAI',508,5100508,9009),
            (5218,'alto-taquari',12,'ALTO TAQUARI',607,5100607,9911),
            (5219,'apiacas',12,'APIACÁS',805,5100805,9773),
            (5220,'araguaiana',12,'ARAGUAIANA',1001,5101001,9869),
            (5221,'araguainha',12,'ARAGUAINHA',1209,5101209,9023),
            (5222,'araputanga',12,'ARAPUTANGA',1258,5101258,8989),
            (5223,'arenapolis',12,'ARENÁPOLIS',1308,5101308,9025),
            (5224,'aripuana',12,'ARIPUANÃ',1407,5101407,9027),
            (5225,'barao-de-melgaco',12,'BARÃO DE MELGAÇO',1605,5101605,9031),
            (5226,'barra-do-bugres',12,'BARRA DO BUGRES',1704,5101704,9033)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5227,'barra-do-garcas',12,'BARRA DO GARÇAS',1803,5101803,9035),
            (5228,'bom-jesus-do-araguaia',12,'BOM JESUS DO ARAGUAIA',1852,5101852,1078),
            (5229,'brasnorte',12,'BRASNORTE',1902,5101902,9873),
            (5230,'caceres',12,'CÁCERES',2504,5102504,9047),
            (5231,'campinapolis',12,'CAMPINÁPOLIS',2603,5102603,9863),
            (5232,'campo-novo-do-parecis',12,'CAMPO NOVO DO PARECIS',2637,5102637,9777),
            (5233,'campo-verde',12,'CAMPO VERDE',2678,5102678,9779),
            (5234,'campos-de-julio',12,'CAMPOS DE JÚLIO',2686,5102686,1032),
            (5235,'canabrava-do-norte',12,'CANABRAVA DO NORTE',2694,5102694,129),
            (5236,'canarana',12,'CANARANA',2702,5102702,9193)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5237,'carlinda',12,'CARLINDA',2793,5102793,1034),
            (5238,'castanheira',12,'CASTANHEIRA',2850,5102850,9783),
            (5239,'chapada-dos-guimaraes',12,'CHAPADA DOS GUIMARÃES',3007,5103007,9059),
            (5240,'claudia',12,'CLÁUDIA',3056,5103056,9789),
            (5241,'cocalinho',12,'COCALINHO',3106,5103106,9865),
            (5242,'colider',12,'COLÍDER',3205,5103205,8979),
            (5243,'colniza',12,'COLNIZA',3254,5103254,1080),
            (5244,'comodoro',12,'COMODORO',3304,5103304,9883),
            (5245,'confresa',12,'CONFRESA',3353,5103353,131),
            (5246,'conquista-doeste',12,'CONQUISTA D''OESTE',3361,5103361,1082)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5247,'cotriguacu',12,'COTRIGUAÇU',3379,5103379,89),
            (5248,'cuiaba',12,'CUIABÁ',3403,5103403,9067),
            (5249,'curvelandia',12,'CURVELÂNDIA',3437,5103437,1084),
            (5250,'denise',12,'DENISE',3452,5103452,9833),
            (5251,'diamantino',12,'DIAMANTINO',3502,5103502,9069),
            (5252,'dom-aquino',12,'DOM AQUINO',3601,5103601,9071),
            (5253,'feliz-natal',12,'FELIZ NATAL',3700,5103700,1036),
            (5254,'figueiropolis-doeste',12,'FIGUEIRÓPOLIS D''OESTE',3809,5103809,9881),
            (5255,'gaucha-do-norte',12,'GAÚCHA DO NORTE',3858,5103858,1038),
            (5256,'general-carneiro',12,'GENERAL CARNEIRO',3908,5103908,9077)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5257,'gloria-doeste',12,'GLÓRIA D''OESTE',3957,5103957,135),
            (5258,'guaranta-do-norte',12,'GUARANTÃ DO NORTE',4104,5104104,9887),
            (5259,'guiratinga',12,'GUIRATINGA',4203,5104203,9083),
            (5260,'indiavai',12,'INDIAVAÍ',4500,5104500,9877),
            (5261,'ipiranga-do-norte',12,'IPIRANGA DO NORTE',4526,5104526,1184),
            (5262,'itanhanga',12,'ITANHANGÁ',4542,5104542,1186),
            (5263,'itauba',12,'ITAÚBA',4559,5104559,9901),
            (5264,'itiquira',12,'ITIQUIRA',4609,5104609,9091),
            (5265,'jaciara',12,'JACIARA',4807,5104807,9095),
            (5266,'jangada',12,'JANGADA',4906,5104906,9861)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5267,'jauru',12,'JAURU',5002,5105002,8991),
            (5268,'juara',12,'JUARA',5101,5105101,9819),
            (5269,'juina',12,'JUÍNA',5150,5105150,9831),
            (5270,'juruena',12,'JURUENA',5176,5105176,9921),
            (5271,'juscimeira',12,'JUSCIMEIRA',5200,5105200,9189),
            (5272,'lambari-doeste',12,'LAMBARI D''OESTE',5234,5105234,137),
            (5273,'lucas-do-rio-verde',12,'LUCAS DO RIO VERDE',5259,5105259,9925),
            (5274,'luciara',12,'LUCIARA',5309,5105309,9105),
            (5275,'marcelandia',12,'MARCELÂNDIA',5580,5105580,9899),
            (5276,'matupa',12,'MATUPÁ',5606,5105606,9929)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5277,'mirassol-doeste',12,'MIRASSOL D''OESTE',5622,5105622,9177),
            (5278,'nobres',12,'NOBRES',5903,5105903,9117),
            (5279,'nortelandia',12,'NORTELÂNDIA',6000,5106000,9119),
            (5280,'nossa-senhora-do-livramento',12,'NOSSA SENHORA DO LIVRAMENTO',6109,5106109,9121),
            (5281,'nova-bandeirantes',12,'NOVA BANDEIRANTES',6158,5106158,117),
            (5282,'nova-brasilandia',12,'NOVA BRASILÂNDIA',6208,5106208,8981),
            (5283,'nova-canaa-do-norte',12,'NOVA CANAÃ DO NORTE',6216,5106216,9889),
            (5284,'nova-guarita',12,'NOVA GUARITA',8808,5108808,121),
            (5285,'nova-lacerda',12,'NOVA LACERDA',6182,5106182,1040),
            (5286,'nova-marilandia',12,'NOVA MARILÂNDIA',8857,5108857,103)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5287,'nova-maringa',12,'NOVA MARINGÁ',8907,5108907,111),
            (5288,'nova-monte-verde',12,'NOVA MONTE VERDE',8956,5108956,119),
            (5289,'nova-mutum',12,'NOVA MUTUM',6224,5106224,9937),
            (5290,'nova-nazare',12,'NOVA NAZARÉ',6174,5106174,1086),
            (5291,'nova-olimpia',12,'NOVA OLÍMPIA',6232,5106232,9893),
            (5292,'nova-santa-helena',12,'NOVA SANTA HELENA',6190,5106190,1088),
            (5293,'nova-ubirata',12,'NOVA UBIRATÃ',6240,5106240,1042),
            (5294,'nova-xavantina',12,'NOVA XAVANTINA',6257,5106257,9195),
            (5295,'novo-horizonte-do-norte',12,'NOVO HORIZONTE DO NORTE',6273,5106273,9903),
            (5296,'novo-mundo',12,'NOVO MUNDO',6265,5106265,1044)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5297,'novo-santo-antonio',12,'NOVO SANTO ANTÔNIO',6315,5106315,1090),
            (5298,'novo-sao-joaquim',12,'NOVO SÃO JOAQUIM',6281,5106281,9867),
            (5299,'paranaita',12,'PARANAÍTA',6299,5106299,9885),
            (5300,'paranatinga',12,'PARANATINGA',6307,5106307,8983),
            (5301,'pedra-preta',12,'PEDRA PRETA',6372,5106372,9181),
            (5302,'peixoto-de-azevedo',12,'PEIXOTO DE AZEVEDO',6422,5106422,9891),
            (5303,'planalto-da-serra',12,'PLANALTO DA SERRA',6455,5106455,91),
            (5304,'pocone',12,'POCONÉ',6505,5106505,9129),
            (5305,'pontal-do-araguaia',12,'PONTAL DO ARAGUAIA',6653,5106653,95),
            (5306,'ponte-branca',12,'PONTE BRANCA',6703,5106703,9133)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5307,'pontes-e-lacerda',12,'PONTES E LACERDA',6752,5106752,8999),
            (5308,'porto-alegre-do-norte',12,'PORTO ALEGRE DO NORTE',6778,5106778,9895),
            (5309,'porto-dos-gauchos',12,'PORTO DOS GAÚCHOS',6802,5106802,9135),
            (5310,'porto-esperidiao',12,'PORTO ESPERIDIÃO',6828,5106828,9875),
            (5311,'porto-estrela',12,'PORTO ESTRELA',6851,5106851,101),
            (5312,'poxoreu',12,'POXORÉU',7008,5107008,9139),
            (5313,'primavera-do-leste',12,'PRIMAVERA DO LESTE',7040,5107040,9871),
            (5314,'querencia',12,'QUERÊNCIA',7065,5107065,97),
            (5315,'reserva-do-cabacal',12,'RESERVA DO CABAÇAL',7156,5107156,9879),
            (5316,'ribeirao-cascalheira',12,'RIBEIRÃO CASCALHEIRA',7180,5107180,9741)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5317,'ribeiraozinho',12,'RIBEIRÃOZINHO',7198,5107198,99),
            (5318,'rio-branco',12,'RIO BRANCO',7206,5107206,8995),
            (5319,'rondolandia',12,'RONDOLÂNDIA',7578,5107578,1092),
            (5320,'rondonopolis',12,'RONDONÓPOLIS',7602,5107602,9151),
            (5321,'rosario-oeste',12,'ROSÁRIO OESTE',7701,5107701,9153),
            (5322,'salto-do-ceu',12,'SALTO DO CÉU',7750,5107750,8997),
            (5323,'santa-carmem',12,'SANTA CARMEM',7248,5107248,123),
            (5324,'santa-cruz-do-xingu',12,'SANTA CRUZ DO XINGU',7743,5107743,1094),
            (5325,'santa-rita-do-trivelato',12,'SANTA RITA DO TRIVELATO',7768,5107768,1096),
            (5326,'santa-terezinha',12,'SANTA TEREZINHA',7776,5107776,9197)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5327,'santo-afonso',12,'SANTO AFONSO',7263,5107263,115),
            (5328,'santo-antonio-do-leste',12,'SANTO ANTÔNIO DO LESTE',7792,5107792,1098),
            (5329,'santo-antonio-do-leverger',12,'SANTO ANTÔNIO DO LEVERGER',7800,5107800,9155),
            (5330,'sao-felix-do-araguaia',12,'SÃO FÉLIX DO ARAGUAIA',7859,5107859,9183),
            (5331,'sao-jose-do-povo',12,'SÃO JOSÉ DO POVO',7297,5107297,6087),
            (5332,'sao-jose-do-rio-claro',12,'SÃO JOSÉ DO RIO CLARO',7305,5107305,9199),
            (5333,'sao-jose-do-xingu',12,'SÃO JOSÉ DO XINGU',7354,5107354,133),
            (5334,'sao-jose-dos-quatro-marcos',12,'SÃO JOSÉ DOS QUATRO MARCOS',7107,5107107,8993),
            (5335,'sao-pedro-da-cipa',12,'SÃO PEDRO DA CIPA',7404,5107404,93),
            (5336,'sapezal',12,'SAPEZAL',7875,5107875,1046)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5337,'serra-nova-dourada',12,'SERRA NOVA DOURADA',7883,5107883,1100),
            (5338,'sinop',12,'SINOP',7909,5107909,8985),
            (5339,'sorriso',12,'SORRISO',7925,5107925,9907),
            (5340,'tabapora',12,'TABAPORÃ',7941,5107941,125),
            (5341,'tangara-da-serra',12,'TANGARÁ DA SERRA',7958,5107958,9185),
            (5342,'tapurah',12,'TAPURAH',8006,5108006,9763),
            (5343,'terra-nova-do-norte',12,'TERRA NOVA DO NORTE',8055,5108055,9909),
            (5344,'tesouro',12,'TESOURO',8105,5108105,9161),
            (5345,'torixoreu',12,'TORIXORÉU',8204,5108204,9163),
            (5346,'uniao-do-sul',12,'UNIÃO DO SUL',8303,5108303,1048)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5347,'vale-de-sao-domingos',12,'VALE DE SÃO DOMINGOS',8352,5108352,1102),
            (5348,'varzea-grande',12,'VÁRZEA GRANDE',8402,5108402,9167),
            (5349,'vera',12,'VERA',8501,5108501,9905),
            (5350,'vila-bela-da-santissima-trindade',12,'VILA BELA DA SANTÍSSIMA TRINDADE',5507,5105507,9109),
            (5351,'vila-rica',12,'VILA RICA',8600,5108600,9897),
            (5352,'abadia-de-goias',10,'ABADIA DE GOIÁS',50,5200050,1050),
            (5353,'abadiania',10,'ABADIÂNIA',100,5200100,9201),
            (5354,'acreuna',10,'ACREÚNA',134,5200134,9645),
            (5355,'adelandia',10,'ADELÂNDIA',159,5200159,9769),
            (5356,'agua-fria-de-goias',10,'ÁGUA FRIA DE GOIÁS',175,5200175,9771)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5357,'agua-limpa',10,'ÁGUA LIMPA',209,5200209,9203),
            (5358,'aguas-lindas-de-goias',10,'ÁGUAS LINDAS DE GOIÁS',258,5200258,1052),
            (5359,'alexania',10,'ALEXÂNIA',308,5200308,9205),
            (5360,'aloandia',10,'ALOÂNDIA',506,5200506,9209),
            (5361,'alto-horizonte',10,'ALTO HORIZONTE',555,5200555,85),
            (5362,'alto-paraiso-de-goias',10,'ALTO PARAÍSO DE GOIÁS',605,5200605,9211),
            (5363,'alvorada-do-norte',10,'ALVORADA DO NORTE',803,5200803,9215),
            (5364,'amaralina',10,'AMARALINA',829,5200829,1054),
            (5365,'americano-do-brasil',10,'AMERICANO DO BRASIL',852,5200852,9661),
            (5366,'amorinopolis',10,'AMORINÓPOLIS',902,5200902,9217)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5367,'anapolis',10,'ANÁPOLIS',1108,5201108,9221),
            (5368,'anhanguera',10,'ANHANGUERA',1207,5201207,9223),
            (5369,'anicuns',10,'ANICUNS',1306,5201306,9225),
            (5370,'aparecida-de-goiania',10,'APARECIDA DE GOIÂNIA',1405,5201405,9227),
            (5371,'aparecida-do-rio-doce',10,'APARECIDA DO RIO DOCE',1454,5201454,71),
            (5372,'apore',10,'APORÉ',1504,5201504,9229),
            (5373,'aracu',10,'ARAÇU',1603,5201603,9231),
            (5374,'aragarcas',10,'ARAGARÇAS',1702,5201702,9233),
            (5375,'aragoiania',10,'ARAGOIÂNIA',1801,5201801,9235),
            (5376,'araguapaz',10,'ARAGUAPAZ',2155,5202155,9669)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5377,'arenopolis',10,'ARENÓPOLIS',2353,5202353,9671),
            (5378,'aruana',10,'ARUANÃ',2502,5202502,9249),
            (5379,'aurilandia',10,'AURILÂNDIA',2601,5202601,9251),
            (5380,'avelinopolis',10,'AVELINÓPOLIS',2809,5202809,9255),
            (5381,'baliza',10,'BALIZA',3104,5203104,9261),
            (5382,'barro-alto',10,'BARRO ALTO',3203,5203203,9263),
            (5383,'bela-vista-de-goias',10,'BELA VISTA DE GOIÁS',3302,5203302,9265),
            (5384,'bom-jardim-de-goias',10,'BOM JARDIM DE GOIÁS',3401,5203401,9267),
            (5385,'bom-jesus-de-goias',10,'BOM JESUS DE GOIÁS',3500,5203500,9269),
            (5386,'bonfinopolis',10,'BONFINÓPOLIS',3559,5203559,9775)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5387,'bonopolis',10,'BONÓPOLIS',3575,5203575,1056),
            (5388,'brazabrantes',10,'BRAZABRANTES',3609,5203609,9271),
            (5389,'britania',10,'BRITÂNIA',3807,5203807,9275),
            (5390,'buriti-alegre',10,'BURITI ALEGRE',3906,5203906,9277),
            (5391,'buriti-de-goias',10,'BURITI DE GOIÁS',3939,5203939,63),
            (5392,'buritinopolis',10,'BURITINÓPOLIS',3962,5203962,61),
            (5393,'cabeceiras',10,'CABECEIRAS',4003,5204003,9279),
            (5394,'cachoeira-alta',10,'CACHOEIRA ALTA',4102,5204102,9281),
            (5395,'cachoeira-de-goias',10,'CACHOEIRA DE GOIÁS',4201,5204201,9283),
            (5396,'cachoeira-dourada',10,'CACHOEIRA DOURADA',4250,5204250,9673)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5397,'cacu',10,'CAÇU',4300,5204300,9285),
            (5398,'caiaponia',10,'CAIAPÔNIA',4409,5204409,9287),
            (5399,'caldas-novas',10,'CALDAS NOVAS',4508,5204508,9289),
            (5400,'caldazinha',10,'CALDAZINHA',4557,5204557,31),
            (5401,'campestre-de-goias',10,'CAMPESTRE DE GOIÁS',4607,5204607,9291),
            (5402,'campinacu',10,'CAMPINAÇU',4656,5204656,9687),
            (5403,'campinorte',10,'CAMPINORTE',4706,5204706,9293),
            (5404,'campo-alegre-de-goias',10,'CAMPO ALEGRE DE GOIÁS',4805,5204805,9295),
            (5405,'campo-limpo-de-goias',10,'CAMPO LIMPO DE GOIÁS',4854,5204854,1070),
            (5406,'campos-belos',10,'CAMPOS BELOS',4904,5204904,9297)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5407,'campos-verdes',10,'CAMPOS VERDES',4953,5204953,9781),
            (5408,'carmo-do-rio-verde',10,'CARMO DO RIO VERDE',5000,5205000,9299),
            (5409,'castelandia',10,'CASTELÂNDIA',5059,5205059,81),
            (5412,'cavalcante',10,'CAVALCANTE',5307,5205307,9305),
            (5413,'ceres',10,'CERES',5406,5205406,9307),
            (5414,'cezarina',10,'CEZARINA',5455,5205455,9785),
            (5415,'chapadao-do-ceu',10,'CHAPADÃO DO CÉU',5471,5205471,73),
            (5416,'cidade-ocidental',10,'CIDADE OCIDENTAL',5497,5205497,77),
            (5417,'cocalzinho-de-goias',10,'COCALZINHO DE GOIÁS',5513,5205513,55),
            (5418,'colinas-do-sul',10,'COLINAS DO SUL',5521,5205521,9791)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5419,'corrego-do-ouro',10,'CÓRREGO DO OURO',5703,5205703,9315),
            (5420,'corumba-de-goias',10,'CORUMBÁ DE GOIÁS',5802,5205802,9317),
            (5421,'corumbaiba',10,'CORUMBAÍBA',5901,5205901,9319),
            (5422,'cristalina',10,'CRISTALINA',6206,5206206,9325),
            (5423,'cristianopolis',10,'CRISTIANÓPOLIS',6305,5206305,9327),
            (5424,'crixas',10,'CRIXÁS',6404,5206404,9329),
            (5425,'crominia',10,'CROMÍNIA',6503,5206503,9331),
            (5426,'cumari',10,'CUMARI',6602,5206602,9333),
            (5427,'damianopolis',10,'DAMIANÓPOLIS',6701,5206701,9335),
            (5428,'damolandia',10,'DAMOLÂNDIA',6800,5206800,9337)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5429,'davinopolis',10,'DAVINÓPOLIS',6909,5206909,9339),
            (5430,'diorama',10,'DIORAMA',7105,5207105,9343),
            (5431,'divinopolis-de-goias',10,'DIVINÓPOLIS DE GOIÁS',8301,5208301,9309),
            (5432,'doverlandia',10,'DOVERLÂNDIA',7253,5207253,9675),
            (5433,'edealina',10,'EDEALINA',7352,5207352,9795),
            (5434,'edeia',10,'EDÉIA',7402,5207402,9349),
            (5435,'estrela-do-norte',10,'ESTRELA DO NORTE',7501,5207501,9351),
            (5436,'faina',10,'FAINA',7535,5207535,9797),
            (5437,'fazenda-nova',10,'FAZENDA NOVA',7600,5207600,9353),
            (5438,'firminopolis',10,'FIRMINÓPOLIS',7808,5207808,9357)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5439,'flores-de-goias',10,'FLORES DE GOIÁS',7907,5207907,9359),
            (5440,'formosa',10,'FORMOSA',8004,5208004,9361),
            (5441,'formoso',10,'FORMOSO',8103,5208103,9363),
            (5442,'gameleira-de-goias',10,'GAMELEIRA DE GOIÁS',8152,5208152,1072),
            (5443,'goianapolis',10,'GOIANÁPOLIS',8400,5208400,9367),
            (5444,'goiandira',10,'GOIANDIRA',8509,5208509,9369),
            (5445,'goianesia',10,'GOIANÉSIA',8608,5208608,9371),
            (5446,'goiania',10,'GOIÂNIA',8707,5208707,9373),
            (5447,'goianira',10,'GOIANIRA',8806,5208806,9375),
            (5448,'goias',10,'GOIÁS',8905,5208905,9377)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5449,'goiatuba',10,'GOIATUBA',9101,5209101,9379),
            (5450,'gouvelandia',10,'GOUVELÂNDIA',9150,5209150,9799),
            (5451,'guapo',10,'GUAPÓ',9200,5209200,9381),
            (5452,'guaraita',10,'GUARAÍTA',9291,5209291,65),
            (5453,'guarani-de-goias',10,'GUARANI DE GOIÁS',9408,5209408,9383),
            (5454,'guarinos',10,'GUARINOS',9457,5209457,9993),
            (5455,'heitorai',10,'HEITORAÍ',9606,5209606,9387),
            (5456,'hidrolandia',10,'HIDROLÂNDIA',9705,5209705,9389),
            (5457,'hidrolina',10,'HIDROLINA',9804,5209804,9391),
            (5458,'iaciara',10,'IACIARA',9903,5209903,9393)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5459,'inaciolandia',10,'INACIOLÂNDIA',9937,5209937,69),
            (5460,'indiara',10,'INDIARA',9952,5209952,9681),
            (5461,'inhumas',10,'INHUMAS',10000,5210000,9395),
            (5462,'ipameri',10,'IPAMERI',10109,5210109,9397),
            (5463,'ipiranga-de-goias',10,'IPIRANGA DE GOIÁS',10158,5210158,1074),
            (5464,'ipora',10,'IPORÁ',10208,5210208,9399),
            (5465,'israelandia',10,'ISRAELÂNDIA',10307,5210307,9401),
            (5466,'itaberai',10,'ITABERAÍ',10406,5210406,9403),
            (5467,'itaguari',10,'ITAGUARI',10562,5210562,9919),
            (5468,'itaguaru',10,'ITAGUARU',10604,5210604,9407)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5469,'itaja',10,'ITAJÁ',10802,5210802,9411),
            (5470,'itapaci',10,'ITAPACI',10901,5210901,9413),
            (5471,'itapirapua',10,'ITAPIRAPUÃ',11008,5211008,9415),
            (5472,'itapuranga',10,'ITAPURANGA',11206,5211206,9419),
            (5473,'itaruma',10,'ITARUMÃ',11305,5211305,9421),
            (5474,'itaucu',10,'ITAUÇU',11404,5211404,9423),
            (5475,'itumbiara',10,'ITUMBIARA',11503,5211503,9425),
            (5476,'ivolandia',10,'IVOLÂNDIA',11602,5211602,9427),
            (5477,'jandaia',10,'JANDAIA',11701,5211701,9429),
            (5478,'jaragua',10,'JARAGUÁ',11800,5211800,9431)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5479,'jatai',10,'JATAÍ',11909,5211909,9433),
            (5480,'jaupaci',10,'JAUPACI',12006,5212006,9435),
            (5481,'jesupolis',10,'JESÚPOLIS',12055,5212055,49),
            (5482,'joviania',10,'JOVIÂNIA',12105,5212105,9437),
            (5483,'jussara',10,'JUSSARA',12204,5212204,9439),
            (5484,'lagoa-santa',10,'LAGOA SANTA',12253,5212253,1076),
            (5485,'leopoldo-de-bulhoes',10,'LEOPOLDO DE BULHÕES',12303,5212303,9443),
            (5486,'luziania',10,'LUZIÂNIA',12501,5212501,9445),
            (5487,'mairipotaba',10,'MAIRIPOTABA',12600,5212600,9447),
            (5488,'mambai',10,'MAMBAÍ',12709,5212709,9449)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5489,'mara-rosa',10,'MARA ROSA',12808,5212808,9451),
            (5490,'marzagao',10,'MARZAGÃO',12907,5212907,9453),
            (5491,'matrincha',10,'MATRINCHÃ',12956,5212956,9927),
            (5492,'maurilandia',10,'MAURILÂNDIA',13004,5213004,9457),
            (5493,'mimoso-de-goias',10,'MIMOSO DE GOIÁS',13053,5213053,9931),
            (5494,'minacu',10,'MINAÇU',13087,5213087,9647),
            (5495,'mineiros',10,'MINEIROS',13103,5213103,9459),
            (5496,'moipora',10,'MOIPORÁ',13400,5213400,9465),
            (5497,'monte-alegre-de-goias',10,'MONTE ALEGRE DE GOIÁS',13509,5213509,9467),
            (5498,'montes-claros-de-goias',10,'MONTES CLAROS DE GOIÁS',13707,5213707,9471)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5499,'montividiu',10,'MONTIVIDIU',13756,5213756,9933),
            (5500,'montividiu-do-norte',10,'MONTIVIDIU DO NORTE',13772,5213772,79),
            (5501,'morrinhos',10,'MORRINHOS',13806,5213806,9473),
            (5502,'morro-agudo-de-goias',10,'MORRO AGUDO DE GOIÁS',13855,5213855,9935),
            (5503,'mossamedes',10,'MOSSÂMEDES',13905,5213905,9475),
            (5504,'mozarlandia',10,'MOZARLÂNDIA',14002,5214002,9477),
            (5505,'mundo-novo',10,'MUNDO NOVO',14051,5214051,9651),
            (5506,'mutunopolis',10,'MUTUNÓPOLIS',14101,5214101,9479),
            (5507,'nazario',10,'NAZÁRIO',14408,5214408,9485),
            (5508,'neropolis',10,'NERÓPOLIS',14507,5214507,9487)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5509,'niquelandia',10,'NIQUELÂNDIA',14606,5214606,9489),
            (5510,'nova-america',10,'NOVA AMÉRICA',14705,5214705,9491),
            (5511,'nova-aurora',10,'NOVA AURORA',14804,5214804,9493),
            (5512,'nova-crixas',10,'NOVA CRIXÁS',14838,5214838,9653),
            (5513,'nova-gloria',10,'NOVA GLÓRIA',14861,5214861,9655),
            (5514,'nova-iguacu-de-goias',10,'NOVA IGUAÇU DE GOIÁS',14879,5214879,87),
            (5515,'nova-roma',10,'NOVA ROMA',14903,5214903,9495),
            (5516,'nova-veneza',10,'NOVA VENEZA',15009,5215009,9497),
            (5517,'novo-brasil',10,'NOVO BRASIL',15207,5215207,9501),
            (5518,'novo-gama',10,'NOVO GAMA',15231,5215231,1058)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5519,'novo-planalto',10,'NOVO PLANALTO',15256,5215256,9735),
            (5520,'orizona',10,'ORIZONA',15306,5215306,9503),
            (5521,'ouro-verde-de-goias',10,'OURO VERDE DE GOIÁS',15405,5215405,9505),
            (5522,'ouvidor',10,'OUVIDOR',15504,5215504,9507),
            (5523,'padre-bernardo',10,'PADRE BERNARDO',15603,5215603,9509),
            (5524,'palestina-de-goias',10,'PALESTINA DE GOIÁS',15652,5215652,9737),
            (5525,'palmeiras-de-goias',10,'PALMEIRAS DE GOIÁS',15702,5215702,9511),
            (5526,'palmelo',10,'PALMELO',15801,5215801,9513),
            (5527,'palminopolis',10,'PALMINÓPOLIS',15900,5215900,9515),
            (5528,'panama',10,'PANAMÁ',16007,5216007,9517)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5529,'paranaiguara',10,'PARANAIGUARA',16304,5216304,9455),
            (5530,'parauna',10,'PARAÚNA',16403,5216403,9523),
            (5531,'perolandia',10,'PEROLÂNDIA',16452,5216452,75),
            (5532,'petrolina-de-goias',10,'PETROLINA DE GOIÁS',16809,5216809,9531),
            (5533,'pilar-de-goias',10,'PILAR DE GOIÁS',16908,5216908,9535),
            (5534,'piracanjuba',10,'PIRACANJUBA',17104,5217104,9539),
            (5535,'piranhas',10,'PIRANHAS',17203,5217203,9541),
            (5536,'pirenopolis',10,'PIRENÓPOLIS',17302,5217302,9543),
            (5537,'pires-do-rio',10,'PIRES DO RIO',17401,5217401,9545),
            (5538,'planaltina',10,'PLANALTINA',17609,5217609,9595)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5539,'pontalina',10,'PONTALINA',17708,5217708,9549),
            (5540,'porangatu',10,'PORANGATU',18003,5218003,9555),
            (5541,'porteirao',10,'PORTEIRÃO',18052,5218052,1060),
            (5542,'portelandia',10,'PORTELÂNDIA',18102,5218102,9557),
            (5543,'posse',10,'POSSE',18300,5218300,9561),
            (5544,'professor-jamil',10,'PROFESSOR JAMIL',18391,5218391,51),
            (5545,'quirinopolis',10,'QUIRINÓPOLIS',18508,5218508,9563),
            (5546,'rialma',10,'RIALMA',18607,5218607,9565),
            (5547,'rianapolis',10,'RIANÁPOLIS',18706,5218706,9567),
            (5548,'rio-quente',10,'RIO QUENTE',18789,5218789,9995)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5549,'rio-verde',10,'RIO VERDE',18805,5218805,9571),
            (5550,'rubiataba',10,'RUBIATABA',18904,5218904,9573),
            (5551,'sanclerlandia',10,'SANCLERLÂNDIA',19001,5219001,9575),
            (5552,'santa-barbara-de-goias',10,'SANTA BÁRBARA DE GOIÁS',19100,5219100,9577),
            (5553,'santa-cruz-de-goias',10,'SANTA CRUZ DE GOIÁS',19209,5219209,9579),
            (5554,'santa-fe-de-goias',10,'SANTA FÉ DE GOIÁS',19258,5219258,9743),
            (5555,'santa-helena-de-goias',10,'SANTA HELENA DE GOIÁS',19308,5219308,9581),
            (5556,'santa-isabel',10,'SANTA ISABEL',19357,5219357,9689),
            (5557,'santa-rita-do-araguaia',10,'SANTA RITA DO ARAGUAIA',19407,5219407,9583),
            (5558,'santa-rita-do-novo-destino',10,'SANTA RITA DO NOVO DESTINO',19456,5219456,1062)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5559,'santa-rosa-de-goias',10,'SANTA ROSA DE GOIÁS',19506,5219506,9585),
            (5560,'santa-tereza-de-goias',10,'SANTA TEREZA DE GOIÁS',19605,5219605,9587),
            (5561,'santa-terezinha-de-goias',10,'SANTA TEREZINHA DE GOIÁS',19704,5219704,9589),
            (5562,'santo-antonio-da-barra',10,'SANTO ANTÔNIO DA BARRA',19712,5219712,83),
            (5563,'santo-antonio-de-goias',10,'SANTO ANTÔNIO DE GOIÁS',19738,5219738,53),
            (5564,'santo-antonio-do-descoberto',10,'SANTO ANTÔNIO DO DESCOBERTO',19753,5219753,9677),
            (5565,'sao-domingos',10,'SÃO DOMINGOS',19803,5219803,9591),
            (5566,'sao-francisco-de-goias',10,'SÃO FRANCISCO DE GOIÁS',19902,5219902,9593),
            (5567,'sao-joao-da-parauna',10,'SÃO JOÃO DA PARAÚNA',20058,5220058,9747),
            (5568,'sao-joao-dalianca',10,'SÃO JOÃO D''ALIANÇA',20009,5220009,9597)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5569,'sao-luis-de-montes-belos',10,'SÃO LUÍS DE MONTES BELOS',20108,5220108,9599),
            (5570,'sao-luiz-do-norte',10,'SÃO LUIZ DO NORTE',20157,5220157,9749),
            (5571,'sao-miguel-do-araguaia',10,'SÃO MIGUEL DO ARAGUAIA',20207,5220207,9601),
            (5572,'sao-miguel-do-passa-quatro',10,'SÃO MIGUEL DO PASSA QUATRO',20264,5220264,9751),
            (5573,'sao-patricio',10,'SÃO PATRÍCIO',20280,5220280,1064),
            (5574,'sao-simao',10,'SÃO SIMÃO',20405,5220405,9605),
            (5575,'senador-canedo',10,'SENADOR CANEDO',20454,5220454,9753),
            (5576,'serranopolis',10,'SERRANÓPOLIS',20504,5220504,9607),
            (5577,'silvania',10,'SILVÂNIA',20603,5220603,9609),
            (5578,'simolandia',10,'SIMOLÂNDIA',20686,5220686,9755)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5579,'sitio-dabadia',10,'SÍTIO D''ABADIA',20702,5220702,9611),
            (5580,'taquaral-de-goias',10,'TAQUARAL DE GOIÁS',21007,5221007,9617),
            (5581,'teresina-de-goias',10,'TERESINA DE GOIÁS',21080,5221080,9759),
            (5582,'terezopolis-de-goias',10,'TEREZÓPOLIS DE GOIÁS',21197,5221197,57),
            (5583,'tres-ranchos',10,'TRÊS RANCHOS',21304,5221304,9623),
            (5584,'trindade',10,'TRINDADE',21403,5221403,9625),
            (5585,'trombas',10,'TROMBAS',21452,5221452,9761),
            (5586,'turvania',10,'TURVÂNIA',21502,5221502,9631),
            (5587,'turvelandia',10,'TURVELÂNDIA',21551,5221551,9765),
            (5588,'uirapuru',10,'UIRAPURU',21577,5221577,59)`));
    
        sql.push(queryRunner.query(`
          INSERT INTO cities (id,alias,state_id,"name",ibge_code_city,ibge_code,siafi_code) VALUES
            (5589,'uruacu',10,'URUAÇU',21601,5221601,9633),
            (5590,'uruana',10,'URUANA',21700,5221700,9635),
            (5591,'urutai',10,'URUTAÍ',21809,5221809,9637),
            (5592,'valparaiso-de-goias',10,'VALPARAÍSO DE GOIÁS',21858,5221858,1066),
            (5593,'varjao',10,'VARJÃO',21908,5221908,9639),
            (5594,'vianopolis',10,'VIANÓPOLIS',22005,5222005,9641),
            (5595,'vicentinopolis',10,'VICENTINÓPOLIS',22054,5222054,9657),
            (5596,'vila-boa',10,'VILA BOA',22203,5222203,67),
            (5597,'vila-propicio',10,'VILA PROPÍCIO',22302,5222302,1068),
            (5598,'brasilia',8,'BRASÍLIA',108,5300108,9701)`));
    
        await Promise.all(sql);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM cities");
    }

}
