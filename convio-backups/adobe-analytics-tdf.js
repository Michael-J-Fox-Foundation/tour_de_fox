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
        pageName: "tdf tr>home",
        destinationURL: window.location.href
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
} else if (getUrlVar('sid') === '1130') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>about sam",
        destinationURL: window.location.href
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
        pageName: "tdf tr>tour updates",
        destinationURL: window.location.href
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
        pageName: "tdf tr>tour schedule",
        destinationURL: window.location.href
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
} else if (getUrlVar('pg') === 'company') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>donate landing page",
        destinationURL: window.location.href
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
} else if (getUrlVar('pg') === 'pfind') {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>participant search",
        destinationURL: window.location.href
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
        pageName: "tdf tr>registration>join the tour",
        destinationURL: window.location.href
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
        pageName: "tdf tr>registration>join a team",
        destinationURL: window.location.href
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
        pageName: "tdf tr>registration>participation options",
        destinationURL: window.location.href
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
        pageName: "tdf tr>registration>contact information",
        destinationURL: window.location.href
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
        pageName: "tdf tr>donation form>" + getUrlVar('4060.donation') + ">" + getUrlVar('FR_ID') + ">" + getUrlVar('PROXY_ID'),
        destinationURL: window.location.href
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
} else {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>registration>" + getUrlVar('fr_id') + ">" + getUrlVar('pg'),
        destinationURL: window.location.href
      },
      category:{
        primaryCategory: "registration",
        subCategory1: getUrlVar('fr_id'),
        subCategory2: getUrlVar('pg'),
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
};

