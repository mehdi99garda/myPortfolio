var arrLang = new Array();
        arrLang['en'] = new Array();
        arrLang['fr'] = new Array();

        // English content
        arrLang['en']['hello'] = 'Hello, I am';
        arrLang['en']['title'] = 'Mobile(Flutter) & Web Front-end Developer';
        arrLang['en']['print'] = 'Print Resume';
        arrLang['en']['home'] = 'Home';
        arrLang['en']['about'] = 'About';
        arrLang['en']['portofolio'] = 'Portfolio';
        arrLang['en']['resume'] = 'Resume';
        arrLang['en']['contact'] = 'Contact';
        arrLang['en']['year'] = 'years old';
        arrLang['en']['phone'] = 'Phone';
        arrLang['en']['address'] = 'Address';
        arrLang['en']['who'] = 'Who am I ?';
        arrLang['en']['download'] = 'Download My CV';
        arrLang['en']['personal_info'] = 'Personal Info';
        arrLang['en']['my'] = 'My';
        arrLang['en']['resume'] = 'Resume';
        arrLang['en']['available'] = 'I Am Available For FreeLance';
        arrLang['en']['contact_me'] = 'Contact me';
        arrLang['en']['agile'] = 'Agile Method';
        arrLang['en']['expertise'] = 'My Expertise';
        arrLang['en']['read_more'] = 'Read more >';
        arrLang['en']['latest'] = 'Latest';
        arrLang['en']['news'] = 'News';
        arrLang['en']['skills'] = 'Skills';
        arrLang['en']['get_in_touch'] = 'Get in touch';
        arrLang['en']['send_msg'] = 'Send a message';
        arrLang['en']['send'] = 'Send';
        arrLang['en']['all'] = 'All';


        //french content
        arrLang['fr']['hello'] = 'Salut, je suis';
        arrLang['fr']['title'] = 'Développeur Front-end Mobile(Flutter) et Web ';
        arrLang['fr']['print'] = 'Imprimer CV';
        arrLang['fr']['home'] = 'Accueil';
        arrLang['fr']['about'] = 'À propos';
        arrLang['fr']['portofolio'] = 'Portefeuille';
        arrLang['fr']['resume'] = 'CV';
        arrLang['fr']['contact'] = 'Contactez';
        arrLang['fr']['year'] = 'ans';
        arrLang['fr']['phone'] = 'Téléphone';
        arrLang['fr']['address'] = 'Adresse';
        arrLang['fr']['who'] = 'Qui suis je ?';
        arrLang['fr']['download'] = 'Télécharger mon CV';
        arrLang['fr']['personal_info'] = 'Info Personnelle';
        arrLang['fr']['my'] = 'Mon';
        arrLang['fr']['resume'] = 'Parcours';
        arrLang['fr']['available'] = 'Je suis disponible pour freelance';
        arrLang['fr']['contact_me'] = 'Contactez moi';
        arrLang['fr']['agile'] = 'Méthode Agile';
        arrLang['fr']['expertise'] = 'Mon expérience';
        arrLang['fr']['read_more'] = 'Lire la suite >';
        arrLang['fr']['latest'] = 'Dernières';
        arrLang['fr']['news'] = 'Nouvelles';
        arrLang['fr']['skills'] = 'Compétences';
        arrLang['fr']['get_in_touch'] = 'Entrer en contact';
        arrLang['fr']['send_msg'] = 'Envoyer un message';
        arrLang['fr']['send'] = 'Envoyer';
        arrLang['fr']['all'] = 'Tous';

        // Process translation
        $(function () {
            $('.translate').click(function () {
                var lang = $(this).attr('id');

                $('.lang').each(function (index, item) {
                    $(this).text(arrLang[lang][$(this).attr('key')]);
                });
            });
        });