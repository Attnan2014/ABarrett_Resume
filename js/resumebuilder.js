var bio = { 
 "name": "Arlene Barrett", 
  "role": "FRONT END DEVELOPER", 
 "contacts": { 
     "email": "arlenebarrett@comcast.net", 
     "mobile": "770 313 4467", 
     "email": "arlenebarrett@comcast.net", 
     "github": "www.github.com/attnan2014", 
     "twitter": "@arleneBa",
      "blog": "ABBBlog",
     "location": "Alpharetta, GA" 
   }, 
  "welcomeMessage": "Hi, thanks for visiting to my resume page", 
  "skills": [ 
    "SharePoint", "CSS", "HTML 5", "Javascript", "ASP.NET", "Responsive Design"
   ], 
   "bioPic": "images/AB.jpg" 
 };
 
 
 //header 
 var formattedName = HTMLheaderName.replace("%data%", "Arlene Barrett"); 
 var formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer"); 
 $("#header").prepend(formattedName); 
 $("#header").prepend(formattedRole); 
 var bioPic = "images/AB.jpg"; 
 var formattedbioPic = HTMLbioPic.replace("%data%", bioPic); 
 $("#header").append(formattedbioPic); 
 
 
 //contact 
 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); 
 $("#topContacts").append(formattedMobile); 
 $("#footerContacts").append(formattedMobile); 
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email); 
 $("#topContacts").append(formattedEmail); 
 $("#footerContacts").append(formattedEmail); 
 var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter); 
  $("#topContacts").append(formattedTwitter); 
 $("#footerContacts").append(formattedTwitter); 
 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github); 
 $("#topContacts").append(formattedGithub); 
 $("#footerContacts").append(formattedGithub); 
 var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog); 
 $("#topContacts").append(formattedBlog); 
 $("#footerContacts").append(formattedBlog); 
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location); 
 $("#footerContacts").append(formattedLocation); 
 
 
 //skills 
 if(bio.skills.length > 0) { 
   $("#header").append(HTMLskillsStart); 
   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]); 
   $("#skills").append(formattedSkill); 
   formattedSkill = HTMLskills.replace("%data%",bio.skills[1]); 
   $("#skills").append(formattedSkill); 
   formattedSkill = HTMLskills.replace("%data%",bio.skills[2]); 
   $("#skills").append(formattedSkill); 
   formattedSkill = HTMLskills.replace("%data%",bio.skills[3]); 
   $("#skills").append(formattedSkill); 
   formattedSkill = HTMLskills.replace("%data%",bio.skills[4]); 
   $("#skills").append(formattedSkill); 
   formattedSkill = HTMLskills.replace("%data%",bio.skills[5]); 
   $("#skills").append(formattedSkill);
 }
 
 
 //welcome message 
 var welcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage); 
 $("#header").append(welcomeMessage); 
 
 
 var education = { 
  "schools" : [ 
    { 
     "name": "Nova Southeastern University", 
     "location": "Fort Lauderdale, FL", 
     "major": "Masters Information Systems", 
     "dates": "2005 - 2006", 
     "url": "http://nova.edu"
    },
     
    { 
     "name": "Nova Southeastern University", 
     "location": "Fort Lauderdale, FL", 
     "major": "Bachelor of Science - Science Education", 
     "dates": "1996 - 1997", 
     "url": "http://nova.edu",
    }, 

    { 
     "name": "Bethlehem Teachers College", 
     "location": "St Elizabeth, Jamaica", 
     "major": "AS - Science Education", 
     "dates": "1983 - 1986", 
     "url": "http://www.bmc.edu.jm"    } 
  ], 

   "onlineCourses": [ 
   { 
    "title": "Front End Web Developer Nanodegree Course: HTML & CSS", 
    "school": "UDACITY", 
    "dates": "2014", 
    "url": "www.udacity.com/course/ud304-nd" 
   }

  ] 
}
 
 
 //education 
 education.display = function() { 
 for (schools in education.schools) { 
   $("#education").append(HTMLschoolStart); 
 
 
   var formattedName = HTMLschoolName.replace("%data%", education.schools[schools].name); 
   $(".education-entry:last").append(formattedName); 
 
 
   var formattedStudies = HTMLschoolStudies.replace("%data%", education.schools[schools].major); 
   $(".education-entry:last").append(formattedStudies); 
 
 
   var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates); 
   $(".education-entry:last").append(formattedDates); 
 
 
   var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location); 
   $(".education-entry:last").append(formattedLocation); 
 }
 
 
 for (onlineCourses in education.onlineCourses) { 
   $("#education").append(HTMLonlineClasses); 
   $("#education").append(HTMLschoolStart); 
 
 
     var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourses].title); 
     $(".education-entry:last").append(formattedTitle); 
 
 
     var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourses].school); 
     $(".education-entry:last").prepend(formattedSchool); 
 
 
     var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourses].dates); 
     $(".education-entry:last").append(formattedDates); 
 
 
     var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourses].url); 
     $(".education-entry:last").append(formattedUrl); 
 } 
 }
education.display(); 
 
 
 var work = { 
   "jobs": [ 
   { 
     "employer": "AT&T", 
     "title": "SR SPECIALIST-SYSTEMS ADMINISTRATOR", 
     "dates": "2006 - present", 
     "location": "Alpharetta, GA", 
     "description": "Plan, design and implement SharePoint. Manage the overall support and administration of the Sharepoint 2013, 2010, MOSS 2007, SharePoint 2003 and WSS 3.0 production environments.", 
   }, 
   { 
    "employer": "Verizon Business", 
     "title": "Senior Developer", 
     "dates": "2005 - 2006", 
     "location": "Atlanta, GA", 
     "description": "Plan, design and implement SharePoint. Manage the overall support and administration of the SharePoint 2003 and WSS 3.0 production environments.", 
   }, 
   { 
     "employer": "Reed Information Systems", 
     "title": "Senior Developer", 
     "dates": "2002 - 2005", 
     "location": "Norcross, GA", 
     "description": "Designed and developed marketing data web Applications using Visual InterDev 6.0. , ASP, ASP.net, vb.net, C#, JavaScript and vbscript and XML for the GUI design." 
   } 
   ] 
 }
 
 //work 
 work.display = function() { 
  for (job in work.jobs) { 
   $("#workExperience").append(HTMLworkStart); 
 
 
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); 
 
 
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title); 
   var formattedEmployerTitle = formattedEmployer + formattedTitle; 
 
 
  $(".work-entry:last").append(formattedEmployerTitle); 
 
 
 var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates); 
 $(".work-entry:last").append(formattedDates); 
 
 
 var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location); 
 $(".work-entry:last").append(formattedLocation); 
 
 
 var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description); 
 $(".work-entry:last").append(formattedDescription); 
 } 
} 
 work.display(); 
 
 
 var projects = { 
   "projects": [ 
   { 
     "title": "Portfolio", 
     "dates": "2014", 
     "description": "This was the first project created in the Udacity's Front End course. We were required create a portfolio page based on a mockup that we were given. The project also included modals and Responsive Design.", 
     "images": ["images/Port1.png"] 
   } 
   ] 
 } 
 
 
 //projects 
    projects.display = function() { 
     for (project in projects.projects) { 
     $("#projects").append(HTMLprojectStart);  
 
     var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title); 
     $(".project-entry:last").append(formattedTitle); 
 
 
     var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates); 
     $(".project-entry:last").append(formattedDates); 
 
 
     var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description); 
     $(".project-entry:last").append(formattedDescription); 
 
 
     if (projects.projects[project].images.length > 0) { 
       for (image in projects.projects[project].images) { 
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]); 
        $(".project-entry:last").append(formattedImage); 
       } 
     } 
   } 
 } 
 projects.display(); 
 
 
 function inName(name) { 
   name = name.trim().split(" "); 
    console.log(name); 
     name[1] = name[1].toUpperCase(); 
     name[0] = name[0].slice(0,1).toUpperCase() +  
     name[0].slice(1).toLowerCase(); 
 
 
     return name[0] +" "+name[1]; 
  } 

 
 $("#main").append(internationalizeButton); 
 
 
 var map = { 
   display : function() { 
     $("#mapDiv").append(googleMap); 
   } 
 } 
 map.display(); 
 
 
