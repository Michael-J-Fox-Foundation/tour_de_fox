// need to add header code to pageWrapper head and include ref to this file in head tag
// <!-- adobe analytics header code -->
// <script src="//assets.adobedtm.com/466cca7e5ee48072b5662b8693112d191c37175a/satelliteLib-c1dd521ab71c7aab5b0c64127b37c5d938554cfa-staging.js"></script>

// also need to add to footer
// <!-- adobe analytics footer code -->
// <script type="text/javascript">_satellite.pageBottom();</script>

function getUrlVar(key){
  var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
  return result && unescape(result[1]) || "";
}

if ((getUrlVar('sid') === '1070') && (getUrlVar('pg') === 'informational')) {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>home"
      },
      category:{
        primaryCategory:"home",
        subCategory1: "n/a",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if ((getUrlVar('sid') === '1210') && (getUrlVar('pg') === 'informational')) {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>ways to get involved"
      },
      category:{
        primaryCategory:"ways to get involved",
        subCategory1: "n/a",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if ((getUrlVar('sid') === '1190') && (getUrlVar('pg') === 'informational')) {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>tdf extreme events"
      },
      category:{
        primaryCategory:"tdf extreme events",
        subCategory1: "n/a",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if (getUrlVar('sid') === '1130') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>about sam"
      },
      category:{
        primaryCategory:"about sam",
        subCategory1: "n/a",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if (getUrlVar('sid') === '1110') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>tour updates"
      },
      category:{
        primaryCategory:"tour updates",
        subCategory1: "n/a",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if (getUrlVar('pg') === 'complist') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>tour schedule"
      },
      category:{
        primaryCategory:"tour schedule",
        subCategory1: "n/a",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if ((getUrlVar('pg') === 'company') && (getUrlVar('company_id') === '1090')) {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>donate landing page"
      },
      category:{
        primaryCategory:"donate landing page",
        subCategory1: "n/a",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if ((getUrlVar('pg') === 'company') && (getUrlVar('company_id') != '1090')) {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: ""
      },
      category:{
        primaryCategory: "state",
        subCategory1: "",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
  jQuery(document).ready(function() {
    var stateName = jQuery("p.cstmTitle").text().toLowerCase()
    digitalData.page.pageInfo.pageName = "tdf tr>state>" + stateName;
    digitalData.page.category.subCategory1 = stateName;
  });
} else if (getUrlVar('pg') === 'pfind') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>participant search"
      },
      category:{
        primaryCategory:"participant search",
        subCategory1: "n/a",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if (getUrlVar('pg') === 'utype') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>registration>join the tour"
      },
      category:{
        primaryCategory:"registration",
        subCategory1: "join the tour",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if (getUrlVar('pg') === 'tfind') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>registration>join a team"
      },
      category:{
        primaryCategory:"registration",
        subCategory1: "join a team",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if (getUrlVar('pg') === 'ptype') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>registration>participation options"
      },
      category:{
        primaryCategory:"registration",
        subCategory1: "participation options",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if (getUrlVar('pg') === 'reg') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>registration>contact information"
      },
      category:{
        primaryCategory:"registration",
        subCategory1: "contact information",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if (window.location.pathname.indexOf("/mjff/site/Donation2") === 0) {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>donation form>" + getUrlVar('4060.donation') + ">" + getUrlVar('FR_ID') + ">" + getUrlVar('PROXY_ID')
      },
      category:{
        primaryCategory: "donation form",
        subCategory1: getUrlVar('4060.donation'),
        subCategory2: getUrlVar('FR_ID'),
        subCategory3: getUrlVar('PROXY_ID')
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
} else if (getUrlVar('view') === 'Detail') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: ""
      },
      category:{
        primaryCategory: "event",
        subCategory1: "",
        subCategory2: "n/a",
        subCategory3: "n/a" 
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
  jQuery(document).ready(function() {
    var str = jQuery("#lo-address-61-62-63").text();
    var matches = str.match(/\,(.*)/);
    var stateZip = trim(matches[1].toLowerCase());
    digitalData.page.pageInfo.pageName = "tdf tr>event>" + stateZip;
    digitalData.page.category.subCategory1 = stateZip;
  }); 
} else if ((window.location.pathname.indexOf("/site/Calendar") === 0) && (!getUrlVar('view'))) {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: ""
      },
      category:{
        primaryCategory: "event rsvp form",
        subCategory1: "",
        subCategory2: "n/a",
        subCategory3: "n/a"
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
  jQuery(document).ready(function() {
    var str = jQuery("#lo-address-61-62-63").text();
    var matches = str.match(/\,(.*)/);
    var stateZip = trim(matches[1].toLowerCase());
    digitalData.page.pageInfo.pageName = "tdf tr>event>" + stateZip;
    digitalData.page.category.subCategory1 = stateZip;
  });
} else {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: ""
      },
      category:{
        primaryCategory: "",
        subCategory1: "",
        subCategory2: "",
        subCategory3: ""
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[{
      eventInfo:{
        eventAction:"pageView"
      } 
    }]
  }
};

