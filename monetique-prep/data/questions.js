/* global QUESTION_BANK */
const QUESTION_BANK = {

  module1: [
    {
      q: "Le GIM-UEMOA a été créé en quelle année et est opérationnel depuis ?",
      choices: ["Fondé en 2000, opérationnel en 2003","Fondé en 2003, opérationnel en 2007","Fondé en 2007, opérationnel en 2009","Fondé en 2005, opérationnel en 2008"],
      correct: 1,
      exp: "Le GIM-UEMOA a été créé en 2003. La plateforme interbancaire est opérationnelle depuis le 15 juin 2007."
    },
    {
      q: "Quel texte réglementaire consacre l'irrévocabilité des transactions et la dérogation au droit de la faillite dans les systèmes de paiement UEMOA ?",
      choices: ["Instruction n°008-05-2015","Décision n°31/2015/CM/UMOA","Règlement n°15/2002/CM/UEMOA","Directive n°08/2002/CM/UEMOA"],
      correct: 2,
      exp: "Le Règlement n°15/2002/CM/UEMOA du 19 septembre 2002 est le texte fondateur. Il consacre l'irrévocabilité, la dérogation au droit de la faillite (règle du zéro heure), l'admission de l'écrit électronique et la compensation multilatérale."
    },
    {
      q: "La Décision n°31 du 29/09/2015/CM/UMOA a eu quel effet mesurable sur le réseau GIM-UEMOA entre 2017 et 2018 ?",
      choices: ["Diminution du volume de -20%","Hausse de +55% de l'activité monétique","Fusion avec GIMTEL","Suppression des frais de compensation"],
      correct: 1,
      exp: "Selon la BCEAO, l'application de la Décision n°31 imposant le règlement en FCFA et réduisant les frais de retrait a généré une hausse de +55% de l'activité GIM, avec 95 millions d'opérations pour 10 160 milliards de FCFA."
    },
    {
      q: "Quelle institution détient une part majoritaire au capital du GIM-UEMOA depuis décembre 2009 ?",
      choices: ["La Banque Mondiale","L'UEMOA Commission","La BCEAO","Visa International"],
      correct: 2,
      exp: "La BCEAO a pris une part majoritaire au capital du GIM-UEMOA depuis décembre 2009, manifestant son implication directe dans la promotion du paiement électronique."
    },
    {
      q: "Le fichier LIS produit par le GIM-UEMOA contient :",
      choices: ["Les demandes d'autorisation en temps réel","Les transactions interbancaires de la journée pour la réconciliation","La liste des cartes bloquées","Les paramètres de configuration des TPE"],
      correct: 1,
      exp: "Le LIS (Lien Interbancaire Spécifique) est le fichier de compensation du GIM envoyé après le cut-off quotidien. Il liste toutes les transactions interbancaires servant de base à la réconciliation comptable entre banques membres."
    },
    {
      q: "Quelle est la différence entre les services bancaires 'par délégation permanente' et 'par délégation temporaire' du GIM-UEMOA ?",
      choices: ["Il n'y a aucune différence","La délégation permanente est pour les banques sans système monétique propre, la temporaire est un secours ou complément","La délégation temporaire est réservée aux filiales","La délégation permanente est plus chère"],
      correct: 1,
      exp: "Le GIM offre des services par délégation permanente aux établissements non équipés de systèmes monétiques propres, et par délégation temporaire comme secours ou complément pour ceux qui ont leur propre système."
    },
    {
      q: "L'Acquisition Commerçant Unique (ACU) adoptée en 2009 consiste à :",
      choices: ["Attribuer un seul acquéreur par pays","Centraliser l'acquisition et la gestion des TPE interbancaires au niveau du GIM-UEMOA","Interdire aux banques d'avoir leurs propres TPE","Fusionner les réseaux Visa et GIM"],
      correct: 1,
      exp: "L'ACU centralise l'acquisition et la gestion des TPE interbancaires au GIM-UEMOA. Le GIM assure le placement, la maintenance des TPE et le traitement des flux de paiement. Les banques conservent la relation commerciale avec les commerçants."
    },
    {
      q: "L'Instruction n°008-05-2015 de la BCEAO régit :",
      choices: ["La surveillance des systèmes de paiement","Les conditions d'exercice des émetteurs de monnaie électronique","Les modalités de chargeback interbancaire","La certification des TPE"],
      correct: 1,
      exp: "L'Instruction n°008-05-2015 du 21 mai 2015 régit les conditions et modalités d'exercice des activités des émetteurs de monnaie électronique (Mobile Money, cartes prépayées) dans les États membres de l'UMOA."
    },
    {
      q: "Dans une transaction interbancaire GIM, comment le switch identifie-t-il la banque émettrice ?",
      choices: ["Par le nom du porteur","Par le BIN (6 premiers chiffres du numéro de carte)","Par le code pays du TPE","Par le montant de la transaction"],
      correct: 1,
      exp: "Le BIN (Bank Identification Number) correspond aux 6 premiers chiffres du PAN (numéro de carte). Le switch GIM-UEMOA utilise ces 6 chiffres pour identifier la banque émettrice et router la demande d'autorisation vers elle."
    },
    {
      q: "La Décision n°042-01-13 du 15 janvier 2013 de la BCEAO a créé :",
      choices: ["Le GIM-UEMOA","Les Cellules de Gestion des Incidents des Systèmes de Paiement","Le Fonds de garantie de compensation","Le registre des porteurs fraudeurs"],
      correct: 1,
      exp: "La Décision n°042-01-13 a institué des Cellules de Gestion des Incidents des Systèmes de Paiement dans chaque banque, chargées de remonter et traiter les incidents significatifs affectant les systèmes de paiement."
    }
  ],

  module2: [
    {
      q: "Dans le modèle à quatre parties, qui verse l'interchange et à qui ?",
      choices: ["Le commerçant verse à l'émetteur","L'acquéreur verse à l'émetteur","L'émetteur verse à l'acquéreur","Visa/Mastercard verse aux deux banques"],
      correct: 1,
      exp: "L'interchange est la commission que la banque acquéreur verse à la banque émettrice pour chaque transaction. Elle compense l'émetteur pour le risque de crédit et les services rendus au porteur. Mastercard confirme qu'il ne fait aucun profit sur l'interchange."
    },
    {
      q: "Le fichier EP (Early Processing) Visa contient :",
      choices: ["Les autorisations en temps réel","Les détails des transactions de la journée (clearing)","Le solde net de règlement financier","Les cartes blacklistées"],
      correct: 1,
      exp: "EP (Early Processing) est le fichier de clearing Visa contenant les détails de toutes les transactions de la journée. À distinguer du VSS (Visa Settlement Service) qui est le fichier de règlement financier indiquant le solde net à régler."
    },
    {
      q: "Une transaction en UEMOA entre deux banques membres GIM co-badgées GIM-Visa est routée via :",
      choices: ["VisaNet uniquement","Le Switch GIM-UEMOA car la transaction est intrarégionale","STAR-UEMOA","Banknet Mastercard"],
      correct: 1,
      exp: "Pour une transaction entre deux membres GIM dans la zone UEMOA, le routing passe par le Switch GIM-UEMOA. Visa/Mastercard n'intervient que pour les transactions hors zone UEMOA, si la carte est co-badgée."
    },
    {
      q: "Le code de réponse ISO 8583 '51' signifie :",
      choices: ["Carte expirée","Transaction non permise","Provision insuffisante","Émetteur non joignable"],
      correct: 2,
      exp: "Le code 51 signifie provision insuffisante — le solde disponible du porteur ne couvre pas le montant demandé."
    },
    {
      q: "Le MTI 0100 dans un message ISO 8583 correspond à :",
      choices: ["Une réponse d'autorisation de l'émetteur","Une demande d'autorisation du TPE vers l'émetteur","Un renversement (annulation)","Un test de connexion réseau"],
      correct: 1,
      exp: "MTI 0100 = Authorization Request (demande d'autorisation envoyée par le TPE/acquéreur vers l'émetteur). La réponse est MTI 0110. MTI 0400 = renversement, MTI 0800 = message réseau."
    },
    {
      q: "Quel est le rôle du Data Element DE37 dans ISO 8583 ?",
      choices: ["Contient le PIN Block chiffré","Contient le numéro de carte (PAN)","Contient le numéro de référence unique de la transaction chez l'acquéreur","Contient le code de réponse"],
      correct: 2,
      exp: "DE37 est le Retrieval Reference Number (RRN) — le numéro de référence unique attribué par l'acquéreur à chaque transaction. Il est essentiel pour la réconciliation et la gestion des litiges car il permet de retrouver une transaction précise."
    },
    {
      q: "La 3D Secure Visa s'appelle :",
      choices: ["Mastercard SecureCode","Verified by Visa","SafeKey","VisaProtect"],
      correct: 1,
      exp: "Visa appelle son protocole 3D Secure 'Verified by Visa'. Mastercard appelle le sien 'Mastercard SecureCode'. Ces protocoles ajoutent une étape d'authentification forte pour les paiements en ligne."
    },
    {
      q: "Quel est l'intervalle dans lequel un porteur doit généralement contester une transaction pour déclencher un chargeback ?",
      choices: ["7 jours après la transaction","Dans les 60 jours après le relevé de compte","6 mois après la transaction","N'importe quand selon Visa"],
      correct: 1,
      exp: "Les réseaux fixent généralement une fenêtre de 60 jours à partir du relevé de compte pour que le porteur conteste une transaction. Au-delà, la réclamation peut être rejetée."
    },
    {
      q: "Qu'est-ce que le BIN range et à quoi sert-il ?",
      choices: ["C'est le numéro complet de la carte","Ce sont les 6 premiers chiffres de la carte identifiant la banque émettrice et le type de carte","C'est le code PIN de secours","C'est le code d'autorisation réseau"],
      correct: 1,
      exp: "Le BIN (Bank Identification Number) ou IIN correspond aux 6 premiers chiffres du PAN. Il identifie la banque émettrice, le réseau (Visa commence par 4, Mastercard par 5 ou 2), le type de carte (débit, crédit, prépayée) et la zone géographique."
    },
    {
      q: "Dans la chaîne de rémunération d'une transaction commerçant, les 'scheme fees' sont versés à :",
      choices: ["La banque émettrice","La banque acquéreur","Le réseau Visa ou Mastercard","La BCEAO"],
      correct: 2,
      exp: "Les scheme fees (frais de réseau) sont la rémunération de Visa ou Mastercard pour la mise à disposition de leur infrastructure de traitement. Ils s'ajoutent à l'interchange (émetteur) et à la commission acquéreur pour former le coût total de la transaction pour le commerçant."
    }
  ],

  module3: [
    {
      q: "Parmi ces données, laquelle peut être stockée après autorisation avec protection appropriée ?",
      choices: ["Le code CVV/CVC","Le contenu complet de la piste magnétique","Le PAN (numéro de carte)","Le PIN Block"],
      correct: 2,
      exp: "Le PAN peut être stocké mais doit être protégé (troncature, hachage, chiffrement, tokenisation). CVV/CVC, piste magnétique et PIN Block ne doivent JAMAIS être stockés après autorisation selon PCI-DSS."
    },
    {
      q: "Le GIM-UEMOA a obtenu quelle version de la certification PCI-DSS en 2024 ?",
      choices: ["PCI-DSS 2.0","PCI-DSS 3.2.1","PCI-DSS 4.0.1","PCI-DSS 1.2"],
      correct: 2,
      exp: "Le GIM-UEMOA a obtenu la certification PCI-DSS 4.0.1 en 2024, la version la plus récente et la plus exigeante de la norme internationale de sécurité des paiements."
    },
    {
      q: "Dans la construction du PIN Block ISO-0, le bloc PIN est XOR avec :",
      choices: ["Le numéro de série du TPE","Les 12 chiffres centraux du PAN","La date d'expiration de la carte","Le code pays de l'émetteur"],
      correct: 1,
      exp: "Dans le format ISO-0, le bloc PIN est XOR avec les 12 chiffres centraux du PAN. Cette opération lie cryptographiquement le PIN à la carte spécifique, empêchant les attaques par replay sur une autre carte."
    },
    {
      q: "Un audit PCI-DSS de niveau 1 (entités > 6 millions de transactions/an) exige :",
      choices: ["Un simple questionnaire SAQ auto-rempli","Un audit par QSA externe avec émission d'un ROC","Une déclaration auprès de la BCEAO","Une certification annuelle par Visa"],
      correct: 1,
      exp: "Les entités de niveau 1 doivent mandater un QSA (Qualified Security Assessor) accrédité pour réaliser l'audit. Le résultat est un ROC (Report on Compliance) + une AOC (Attestation of Compliance). Les niveaux inférieurs peuvent s'autocertifier via un SAQ."
    },
    {
      q: "Qu'est-ce qu'un HSM (Hardware Security Module) ?",
      choices: ["Un logiciel de gestion des cartes","Un dispositif physique inviolable qui gère les clés cryptographiques sans les exposer en clair","Un protocole d'authentification 3D Secure","Un format de fichier de compensation"],
      correct: 1,
      exp: "Le HSM est un équipement physique certifié PCI-PTS qui stocke et utilise les clés cryptographiques de façon sécurisée. Aucune clé ne sort jamais du HSM en clair. Indispensable pour le chiffrement des PIN et la gestion des cartes."
    },
    {
      q: "La règle de 'liability shift' EMV signifie que :",
      choices: ["L'émetteur est toujours responsable des fraudes","En cas de fraude sur transaction sans puce (fallback bande magnétique), la responsabilité se transfère vers la partie non EMV-compliant","Le commerçant est systématiquement responsable","Visa absorbe toutes les pertes de fraude"],
      correct: 1,
      exp: "La liability shift transfère la responsabilité financière en cas de fraude vers la partie qui n'a pas mis en œuvre EMV. Si le commerçant n'a pas de terminal puce, la perte revient à l'acquéreur. Si la carte n'a pas de puce, la perte revient à l'émetteur."
    },
    {
      q: "PCI-DSS est géré par quel organisme ?",
      choices: ["La BCEAO","Visa seul","Le PCI Security Standards Council (PCI-SSC)","La Banque Mondiale"],
      correct: 2,
      exp: "Le PCI Security Standards Council (PCI-SSC) a été créé le 15 décembre 2004 par les 5 grands réseaux : Visa, Mastercard, American Express, Discover et JCB. C'est cet organisme indépendant qui publie et maintient la norme PCI-DSS."
    },
    {
      q: "Le Data Element DE52 dans ISO 8583 contient :",
      choices: ["Le montant de la transaction","Le code d'autorisation","Le PIN Block chiffré","La date d'expiration de la carte"],
      correct: 2,
      exp: "DE52 contient le PIN Data — c'est-à-dire le PIN Block chiffré avec la clé de session du TPE dérivée de la Master Key injectée dans le HSM. Ce champ n'est présent que pour les transactions nécessitant une vérification du PIN."
    },
    {
      q: "Combien d'exigences PCI-DSS existent et en combien d'objectifs sont-elles regroupées ?",
      choices: ["8 exigences en 4 objectifs","12 exigences en 6 objectifs","10 exigences en 5 objectifs","15 exigences en 3 objectifs"],
      correct: 1,
      exp: "PCI-DSS comprend 12 exigences regroupées en 6 objectifs : réseau sécurisé, protection des données, gestion des vulnérabilités, contrôle des accès, surveillance/tests, et politique de sécurité."
    },
    {
      q: "Le cryptogramme EMV (iARQC) généré par la puce lors d'une transaction :",
      choices: ["Est réutilisable pour plusieurs transactions","Est unique à chaque transaction et prouve la présence physique de la carte","Est identique au CVV imprimé sur la carte","Peut être reproduit en copiant la piste magnétique"],
      correct: 1,
      exp: "Le cryptogramme EMV (iARQC — Authorization Request Cryptogram) est généré dynamiquement par la puce pour chaque transaction unique. C'est cette unicité qui rend la clonage EMV quasi-impossible, contrairement à la bande magnétique qui est statique et facilement copiable."
    }
  ],

  module4: [
    {
      q: "Le chargeback est initié par :",
      choices: ["Le commerçant auprès de sa banque","La banque émettrice au nom du porteur","L'acquéreur directement auprès du réseau","La BCEAO"],
      correct: 1,
      exp: "Le chargeback est initié par la banque émettrice après réception et validation d'une réclamation du porteur. C'est l'émetteur qui débite l'acquéreur du montant contesté via le réseau Visa, Mastercard ou GIM."
    },
    {
      q: "Un suspens débiteur en réconciliation monétique signifie :",
      choices: ["Tu as une transaction interne que le réseau ne reconnaît pas","Le réseau a une transaction que tu n'as pas en interne — charge potentielle non comptabilisée","Il y a un doublon dans le fichier LIS","La transaction a été annulée côté émetteur"],
      correct: 1,
      exp: "Un suspens débiteur signifie que le fichier réseau (LIS, EP, IP) inclut une transaction absente de ton système interne. C'est une charge potentielle non comptabilisée, à investiguer en priorité pour éviter une perte financière."
    },
    {
      q: "Quel délai a généralement l'acquéreur pour répondre à un chargeback par une représentation ?",
      choices: ["7 jours ouvrés","15 jours calendaires","30 à 45 jours selon le réseau","90 jours"],
      correct: 2,
      exp: "La fenêtre de représentation est généralement de 30 à 45 jours selon le réseau et le type de chargeback. Passé ce délai, le chargeback est automatiquement accepté et la perte est définitive pour l'acquéreur."
    },
    {
      q: "Un porteur conteste une transaction car il n'a jamais reçu le bien commandé. Quel est le motif de chargeback ?",
      choices: ["Fraude sur identité","Absence d'autorisation","Marchandise ou service non reçu","Double débit"],
      correct: 2,
      exp: "'Marchandise ou service non reçu' est un motif classé dans la catégorie litiges service client. Pour défendre ce chargeback, l'acquéreur doit fournir une preuve de livraison ou de prestation du service."
    },
    {
      q: "La Décision n°042-01-13 du 15 janvier 2013 de la BCEAO a créé :",
      choices: ["Le GIM-UEMOA","Les Cellules de Gestion des Incidents des Systèmes de Paiement","Le Fonds de garantie de compensation","Le registre des porteurs fraudeurs"],
      correct: 1,
      exp: "La Décision n°042-01-13 a institué des Cellules de Gestion des Incidents des Systèmes de Paiement dans chaque banque, responsables de la remontée et du traitement des incidents affectant les systèmes de paiement."
    },
    {
      q: "Qu'est-ce qu'un Retrieval Request dans le processus de litige ?",
      choices: ["Une demande de blocage de carte","Une demande de justificatif de transaction envoyée par l'émetteur à l'acquéreur avant d'initier un chargeback","Un renversement automatique de transaction","Une demande de remboursement direct au porteur"],
      correct: 1,
      exp: "Le Retrieval Request est une demande formelle de l'émetteur à l'acquéreur pour obtenir les justificatifs d'une transaction (ticket signé, logs). C'est souvent la première étape avant un chargeback formel. L'acquéreur doit répondre dans les délais imposés."
    },
    {
      q: "Parmi ces preuves, laquelle est la plus solide pour défendre un chargeback pour 'transaction non autorisée' sur un achat physique ?",
      choices: ["Une capture d'écran du système de caisse","Le ticket de caisse signé par le porteur avec log de vérification PIN","Un email de confirmation d'achat","Le relevé de compte du commerçant"],
      correct: 1,
      exp: "Le ticket signé combiné à la preuve d'utilisation du PIN (log TPE/HSM) démontre la présence physique du porteur et l'authentification réussie. C'est la preuve la plus robuste contre une allégation de transaction non autorisée."
    },
    {
      q: "Qu'est-ce que la phase d'arbitrage dans le processus de chargeback ?",
      choices: ["Une médiation amiable entre porteur et commerçant","La décision finale rendue par le réseau Visa ou Mastercard, avec frais à la charge du perdant","Un recours auprès de la BCEAO","Une procédure judiciaire"],
      correct: 1,
      exp: "L'arbitrage est le dernier recours dans le processus de litige. Le réseau (Visa ou Mastercard) tranche définitivement après avoir examiné les preuves des deux parties. Des frais d'arbitrage (~500 USD) sont facturés à la partie qui perd."
    },
    {
      q: "Un suspens créditeur en réconciliation signifie :",
      choices: ["Le réseau a une transaction que tu n'as pas en interne","Tu as une transaction en interne que le réseau ne reconnaît pas — produit potentiel non encaissé","Il manque un fichier LIS","La transaction est en attente d'autorisation"],
      correct: 1,
      exp: "Un suspens créditeur signifie que ton système interne a enregistré une transaction absente du fichier réseau. C'est un produit potentiel non encore encaissé. À investiguer pour s'assurer que le règlement interviendra bien."
    },
    {
      q: "Le motif de chargeback 'double débit' correspond à :",
      choices: ["Deux porteurs différents ont payé la même facture","La même transaction a été débitée deux fois sur le compte du porteur","Le commerçant a saisi deux fois le même montant sur le TPE","L'émetteur a appliqué deux fois les frais d'interchange"],
      correct: 1,
      exp: "Le double débit (duplicate processing) se produit lorsque la même transaction a été présentée deux fois à la compensation, entraînant deux débits sur le compte du porteur. Cela peut résulter d'un problème technique de télécollecte ou d'une erreur de traitement back-office."
    }
  ],

  module5: [
    {
      q: "Quelle est la première étape obligatoire pour qu'une filiale puisse participer au réseau GIM-UEMOA ?",
      choices: ["Déployer les GAB","Obtenir la certification GUIM","Signer un accord Visa","Former les caissiers"],
      correct: 1,
      exp: "La certification GUIM est le prérequis absolu. Sans elle, la banque ne peut être connectée à la plateforme interbancaire GIM-UEMOA. Elle valide la conformité technique et fonctionnelle du système monétique de la filiale."
    },
    {
      q: "Un taux d'autorisation anormalement bas sur une courte période indique en priorité :",
      choices: ["Une augmentation du nombre de porteurs","Une panne ou mauvais paramétrage du système d'autorisation","Une hausse des fraudes","Un problème de liquidité"],
      correct: 1,
      exp: "Un effondrement soudain du taux d'autorisation est presque toujours technique : coupure réseau avec le switch, panne du système d'autorisation, mauvais paramétrage BIN, ou expiration de clés cryptographiques. À investiguer immédiatement."
    },
    {
      q: "Qu'est-ce qu'un 'mandate' Visa ou Mastercard ?",
      choices: ["Un formulaire de réclamation porteur","Une exigence technique que les membres doivent implémenter avant une date limite sous peine de pénalités","Un contrat d'adhésion au réseau","Un rapport de conformité PCI-DSS"],
      correct: 1,
      exp: "Les réseaux publient des mandates — obligations techniques (ex : migration EMV, 3D Secure 2.0, tokenisation) que tous les membres doivent implémenter avant une date imposée. Le non-respect entraîne des pénalités financières."
    },
    {
      q: "Quel taux de chargeback déclenche le programme de surveillance Mastercard (MATCH) pour un commerçant ?",
      choices: ["0,5%","1%","2%","5%"],
      correct: 1,
      exp: "Le programme MATCH de Mastercard est déclenché quand le taux de chargeback d'un commerçant dépasse 1% du volume mensuel. Au-delà de certains seuils, la banque acquéreur peut perdre le droit d'acquérir pour ce commerçant."
    },
    {
      q: "Lors d'une migration de core banking, quelle action est absolument prioritaire avant la bascule en production ?",
      choices: ["Former les clients","Communiquer par email aux porteurs","Effectuer une sauvegarde complète et exécuter des tests de régression monétiques","Changer les clés API des partenaires"],
      correct: 2,
      exp: "Avant toute bascule, la sauvegarde complète et les tests de régression monétiques sont impératifs. Ils valident que toutes les fonctions critiques (autorisations, compensation, gestion des cartes, GAB) fonctionnent correctement sur le nouveau système."
    },
    {
      q: "Qu'est-ce que le taux de disponibilité GAB et quel objectif est généralement visé ?",
      choices: ["% de transactions approuvées, objectif > 90%","% du temps où les GAB sont opérationnels, objectif généralement ≥ 98%","% de GAB en réseau, objectif 100%","% de GAB connectés au GIM, objectif > 80%"],
      correct: 1,
      exp: "Le taux de disponibilité GAB mesure le pourcentage du temps où les guichets sont opérationnels (online et avec du cash). L'objectif standard du secteur est ≥ 98%. En dessous, la banque subit des pertes de revenus et une dégradation de l'expérience client."
    },
    {
      q: "Pour obtenir un BIN Visa ou un ICA Mastercard, une banque doit :",
      choices: ["Le générer elle-même dans son système","Faire une demande formelle au réseau et signer un accord de membre/participant","L'acheter sur le marché secondaire","Le déduire de son code SWIFT"],
      correct: 1,
      exp: "Le BIN Visa (Bank Identification Number) et l'ICA Mastercard (Interbank Card Association number) sont attribués par les réseaux après signature d'un accord de membre. Ils identifient officiellement la banque dans le système mondial de paiement."
    },
    {
      q: "Lors des tests de certification GUIM, si un script de test échoue, que fait-on ?",
      choices: ["On passe au script suivant sans corriger","On corrige l'anomalie dans le système et on ré-exécute le script jusqu'à validation complète","On signale l'échec à la BCEAO","On retarde la certification d'un an minimum"],
      correct: 1,
      exp: "Le processus de certification est itératif : chaque anomalie détectée lors d'un script de test doit être corrigée, puis le script est ré-exécuté. La certification n'est accordée que quand tous les scripts passent sans erreur."
    },
    {
      q: "Le risque 'indisponibilité du réseau GIM/Visa lors du go-live' est classé :",
      choices: ["Probabilité élevée / impact faible","Probabilité faible / impact très élevé","Probabilité élevée / impact élevé","Probabilité faible / impact faible"],
      correct: 1,
      exp: "Ce risque a une probabilité faible car les réseaux sont très stables, mais un impact très élevé car toutes les transactions seraient refusées lors du lancement. La mitigation passe par un plan de continuité et un mode dégradé (transactions offline préautorisées)."
    },
    {
      q: "Quel KPI permet de détecter une panne de switch ou un problème de paramétrage BIN en temps réel ?",
      choices: ["Le taux de chargeback","Le taux de disponibilité GAB","Le taux d'autorisation","Le délai de réconciliation"],
      correct: 2,
      exp: "Le taux d'autorisation (% de transactions approuvées / total demandes) est le premier indicateur à surveiller. Un effondrement soudain signale quasi systématiquement une panne technique ou un mauvais paramétrage (BIN, règles d'autorisation, clés expirées)."
    }
  ]

};
