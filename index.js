function update_language(language)
{
    var file;
    if(language === "es")
    {
        file = es;
    }
    else //language === "en"
    {
        file = en;
    }
    /**
     * NavBar
     */
    document.getElementById('company').innerHTML = file.navbar.company[0];
    document.getElementById('presentation').innerHTML = file.navbar.company[1];
    document.getElementById('production').innerHTML = file.navbar.company[2];
    document.getElementById('brands').innerHTML = file.navbar.brands;
    document.getElementById('news').innerHTML = file.navbar.news;
    document.getElementById('contact').innerHTML = file.navbar.contact;
    document.getElementById('inputSearch').setAttribute('placeholder', file.navbar.search);
    document.getElementById('inputSearch').setAttribute('aria-label', file.navbar.search);
    document.getElementById('btnSearch').innerHTML = file.navbar.search;

    /**
     * Carousel
    */
    document.getElementById('c1').setAttribute('src', file.carousel[0]);
    document.getElementById('c2').setAttribute('src', file.carousel[1]);
    document.getElementById('c3').setAttribute('src', file.carousel[2]);

    /**
     * Description
     */
    document.getElementById('description').innerHTML = file.description;

    /**
     * Form
     */
    document.getElementById('question').innerHTML = file.form.question;
    document.getElementById('lblName').innerHTML = file.form.name;
    document.getElementById('lblEmail').innerHTML = file.form.email.lbl;
    document.getElementById('lblSubject').innerHTML = file.form.subject;
    document.getElementById('lblMessage').innerHTML = file.form.message;
    document.getElementById('inpName').setAttribute('placeholder', file.form.name);
    document.getElementById('inpEmail').setAttribute('placeholder', file.form.email.placeholder);
    document.getElementById('inpSubject').setAttribute('placeholder', file.form.subject);
    document.getElementById('submit').setAttribute('value', file.form.submit);
}

function check_language()
{
    var btn = document.getElementById('language_switch');
    if(btn.getAttribute('aria-pressed') === 'false')
    {
        btn.innerHTML = 'Español';
        update_language('en');
    }
    else
    {
        btn.innerHTML = 'English';
        update_language('es');
    }
}