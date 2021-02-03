const data = {
    about: {
        first: 'Ryan', 
        last: 'Brophy',
        digits: '734.904.0788',
        email: 'rbrophy@att.net'
         },
    summary: {
        'Aspiring Developer': 'Strong interest and aptitude in software development aspiring to be a contributing member of a development team that improves the practice of pharmacy.',
        'Time Management': 'Experience filling an average of 350 prescriptions per day as the only pharmacist on staff while managing 2-4 pharmacy technicians. From October-November 2020, administered approximately 50 flu shots per day while maintaining the normal workload of the pharmacy.',
        'Team Leadership': 'Provide on-the-job education and training to new technicians to improve overall workflow and patient satisfaction.',
        'Patient Education': 'Educate patients using common terminology, have received positive feedback from patients and peers regarding knowledge and care.'
    },
    education: {
        where: 'Ferris State University',
        when: 'May 2020',
        degree: 'PharmD'
    },
    professional: {
        cvs: [{
            when: 'July 2020 - Present', 
            where: 'Kalamazoo, MI', 
            what: 'Staff Pharmacist',
            summary: 'Experience at high volume (400+ prescriptions/day) stores throughout West Michigan. Staff pharmacist in Kalamazoo (Sept. 2020) at a location that fills, on average, 250 scripts per day.'
        },{
            when: 'Dec 2016 - July 2020',
            where: 'Grand Rapids, MI',
            what: 'Pharmacy Intern',
            summary: 'Responsibilities included data entry of prescriptions, prescription production, patient care outreach, administering immunizations, resolving insurance rejections and supporting/teaching pharmacy technicians.'
        }],
        rotations: [{
            when: 'May 2019 - June 2019',
            what: 'Nuclear Pharmacy',
            where: 'Cardinal Health',
            summary: 'Assisted with quality assurance to ensure every dose had the required radioactive activity needed for imaging.'
        },{
            when: 'June 2019 - July 2019',
            what: 'Community Pharmacy',
            where: 'Spartan Nash',
            summary: 'Focused on patient care through vaccinations, Comprehensive Medication Reviews and TIPs in MTMOutcomes. Provided patient education through production of a webpage which discussed outdoor safety hazards found in Michigan during the summer.'
        },{
            when: 'Aug 2019 - Oct 2019',
            what: 'Ambulatory Care',
            where: 'Spectrum Health',
            summary: 'Two rotations that advanced my ability to lead patient appointments and complete Comprehensive Medication Reviews.'
        },{
            when: 'Oct 2019 - Nov 2019',
            what: 'Institutional Pharmacy',
            where: 'Metro Health',
            summary: 'Spent time investigating patient charts in all areas of the hospital including infectious disease, ICU and transitional care.'
        },{
            when: 'Jan 2020 - Feb 2020',
            what: 'Internal Medicine',
            where: 'Spectrum Health',
            summary: 'Reviewed charts for 5 to 10 patients every morning and presented recommendations during rounds.'
        }]
    },
    qualificationsSkills: [
        'Patient Education',
        'Retail Pharmacy Operations',
        'Time Management',
        'Team Management',
        'Quality Assurance Checks',
        'Innovative Use of Technology',
        'Immunizations',
        'EMR Experience',
    ],
    presentationsProjects: [
        'Brophy, R. (May 2020) The Use of Pimavanserin in Alzheimer’s Disease Related Psychosis. Paper presented at Ferris State University College of Pharmacy, Grand Rapids, MI.',
        'Brophy, R. (Sep 2019) Opioids: Use and Safety. Presented at Spectrum Health United Hospital, Greenville, MI.'
    ],
    tech: {
        languages: ['JS','HTML','CSS','React.js'],
        github: '@brophy57473',
        githubSRC: 'https://github.com/brophy57473',
        projects: {  
            alternativeScoring: {
                what: 'Brophy Disc Golf Scoring',
                when: 'Winter 2020 - Present',
                src: 'https://friendly-hypatia-0eebde.netlify.app/',
                summary: 'A web application in progress. This application is intended to be used on a mobile interface and assist in scoring casual rounds of disc golf using various scoring structures. My first project built with React.js.'
            },
            workflow: {
                what: 'Community Pharmacy Workflow Aid',
                when: 'Fall 2020 - Present',
                src: 'https://brophy57473.github.io/workflow',
                summary: 'A small project to increase efficiency while working as a retail pharmacist. This page generates various barcodes which are used to complete prescription verification within the software used by CVS.'
            },
            putting: {
                what: 'Big Rapids Disc Golf Putting League Website',
                when: 'Fall 2019',
                src: 'https://script.google.com/macros/s/AKfycbxmmTUj6aW09eFcgykMUF6LwvX02PDDu3WZsxNJAESX5Bu7fQ/exec',
                srcAlternative: 'https://script.google.com/macros/s/AKfycbwaKvQxX2f7hxaek3qFZAtqe_SCh02ck9bmflbXk-jZ-MEkLA/exec',
                summary: 'A website to manage the local disc golf putting league. Built to ensure the league could self-sustain once I moved out of Big Rapids. This project challenged my understanding of html/css/js. As I had not learned about React or back-end development, I used a Google Sheet as my database and built it entirely in Google Apps Script.',
            }      
        }
    },
    leadership: {
        pdga: {
            what: 'Professional Disc Golf Association Tournament Director',
            when: 'Sept 2018 - Present',
            summary: 'Doubled player attendance over three years through collaboration with local businesses, participating with course improvements, and overhauling event organization.',
            recentEvents: [{
                name: "Champion's Course Grand Opening",
                when: 'Nov 2020',
                size: '57 players',
                tier: 'C-tier'
            },{
                name: 'Big Dawg',
                when: 'Sept 2020',
                size: '65 players',
                tier: 'C-tier'
            },{
                name: 'Big Dawg',
                when: 'Sept 2019',
                size: '30 players',
                tier: 'C-tier'
            },{
                name: 'Big Dawg',
                when: 'Sept 2018',
                size: '37 Players',
                tier: 'C-tier'
            }]
        },
        coach: {
            what: 'Coach of Ferris Statue University Disc Golf Team',
            when: 'May 2019 - Present',
            summary: 'Teach new and experienced golfers the skills needed to compete in collegiate disc golf at the highest level. Plan and coordinate team trips and events. Conduct tryouts and assist in announcing team decisions. Developed and managed a website to score and track statistics for Big Rapids’ annual winter putting league.'
        },
        president: {
            what: 'President of Ferris State University Disc Sports Club',
            when: 'Aug 2015 - May 2019',
            summary: 'Competed with and led the 2015, 2017 and 2019 National Collegiate Disc Golf Champions. Successfully restructured the club, monitored spending, and presented the club budget to Club Sports Council each spring. Raised awareness of the club through advertising and recruiting on campus which increased student involvement each year throughout my presidency.'
        }
    },
    licenses: {
        pharmacist: {
            name: 'Michigan Pharmacist License',
            expires: '7/13/2022',
            licenseNumber: '5302412615'
        },
        controlledSubstance: {
            name: 'Controlled Substance License',
            expires: '7/13/2022',
            licenseNumber: '5315220122'
        },
        basicLifeSupport: {
            name: 'BLS Certified',
            expires: '7/13/2022',
        },
        immunization: {
            name: 'Immunization Certified'
        }
    }
}
$(function(){

    let windowHeight = $(window).height();
    let windowWidth = $(window).width();
    let introHeight = $('.intro-container').height();
    $('.intro').css('min-height', windowHeight);
    $('.intro-container').css('margin-top', ((windowHeight/2) - (introHeight/2) - 80));
    

    //SCROLLING
    $("nav a").click(function(e){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    function removePX(str) {
        str = str.split('p');
        str = parseInt(str[0]);
        return str;
    }

    let vertical = 1;
    let horizontal = 1;
    var lastScrollTop = 0;
    $(window).scroll(function() {
        let top = $('.pic').css('top');
        let right = $('.pic').css('right');
        top = removePX(top);
        right = removePX(right);    
        let offset = 1;
        if (top == (windowHeight - 500)  || top == 0) {
            vertical = vertical * -1;
        }
        if (right == 0 || right == windowWidth - 250) {
            horizontal = horizontal * -1;
        }
        console.log(`vertical: ${vertical} horizontal: ${horizontal}`)
        var st = $(window).scrollTop();
        if (st > lastScrollTop){
            $('.pic').css('top', top + (offset*vertical));
            $('.pic').css('right', right + (offset*horizontal));
        } else {
            $('.pic').css('top', top - (offset*vertical));
            $('.pic').css('right', right - (offset*horizontal));
        }
        lastScrollTop = st;
    })

    //ABOUT
    let summary = data.summary;
    for (let sum in summary) {
        $('.summary').append(
            `<div class="sum-text info">
                <h4>${sum}</h4>
                ${summary[sum]}
            </div>`);
    }

    //PHARMACY
    const pharmacy = data.professional;
    for (let job in pharmacy.cvs) {
        $('.work-experience').append(
            `<div class="job-text info">
            <div>
                <h3>${pharmacy.cvs[job].what}</h3> | CVS Health
            </div>   
            <div class='sub-info'>
            ${pharmacy.cvs[job].when} | 
            ${pharmacy.cvs[job].where}<br/></div>
            ${pharmacy.cvs[job].summary}
            </div>`
        );
    }
    let rotations = '';
    pharmacy.rotations.reverse().forEach( ({where, when, what, summary}) => {
        rotations = rotations + 
        `<div class='job-text rotations info'>
        <span>${what}</span> | ${where}
        <div class='sub-info'>${when}</div>
        ${summary}
        </div>`
    })
    $('.rotations').append(rotations);

    //TECHNOLOGY
    const tech = data.tech;
    const languages = tech.languages;
    const techProjects = tech.projects;

    let languagesList = '';
    languages.forEach( item => {
        languagesList = languagesList + `<li>${item}</li>`;
    });

    let techProjectsList = '';
    for (let proj in techProjects) {
        techProjectsList = techProjectsList +
        `<li><h4>${techProjects[proj].what}</h4>
        <div class="sub-info">${techProjects[proj].when}</div>
        <div>${techProjects[proj].summary}</div>
        <a href=${techProjects[proj].src} target="_blank">View Project</a>
        </li>`
    }

    $('.technology').append(
        `<div class='languages'><h3>Languages</h3>
            <ul>${languagesList}</ul>
        </div>
        <div class='projects'>
            <h3 id='projects-title'>Current and Past Projects</h3>
            <ul>${techProjectsList}</ul>
        </div>
        <div class='github'><a href=${tech.githubSRC} target="_blank">Github</a></div>
        `
    );




    //LEADERSHIP
    const leadership = data.leadership;
    const pdga = leadership.pdga;
    let events = '';
    pdga.recentEvents.forEach( ({name, when, size}) => {
        events = events + `<li><h4>${name}</h4> | ${when}
        <br/>Players: ${size}`;
    })

    $('.leadership').append(
        `<div class="job-text info">
            <h3>${pdga.what}</h3>
            <div class='sub-info'>
                ${pdga.when}
            </div>
            ${pdga.summary}
            <h3 id='recent-events'>Recent Events</h3>
            <ul>
                ${events}  
            </ul>
            <div class='leader-box'>
            <h3>${leadership.coach.what}</h3>
            <div class='sub-info'>
                ${leadership.coach.when}
            </div>
            ${leadership.coach.summary}
            <div class='leader-box'>
            <h3>${leadership.president.what}</h3>
            <div class='sub-info'>
                ${leadership.president.when}
            </div>
            ${leadership.president.summary}
        </div>`
    );

    //CONTACT
    let contact = data.about;
    $('.contact').append(
        `<h4>${contact.email}</h4>
        <h4>${contact.digits}</h4>`
    )




})