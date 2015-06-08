function getUrlVar(key){
  var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
  return result && unescape(result[1]) || "";
}

function formStart() {
  digitalData.form = digitalData.form || {};
  digitalData.form.name = "team fox>registration>" + getUrlVar('fr_id');
  digitalData.event.push({
    eventInfo: {
      eventAction: "formStart"
    }
  });
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
    event:[
      { eventInfo:{
        eventAction:"pageView"
      } },
      { eventInfo:{
        eventAction:"formView"
      } },
    ]
  }
  jQuery(document).ready(function() {
    jQuery("input").bind("focus.tdfStartRegistration", function() {
      formStart();
      jQuery("input").unbind("focus.tdfStartRegistration");
    });
    jQuery(".manageable-editor a").click(function() {
      formStart();
    });
  });
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
    event:[
      { eventInfo:{
        eventAction:"pageView"
      } },
      { eventInfo:{
        eventAction:"formView"
      } },
    ]
  }
  jQuery(document).ready(function() {
    jQuery("#next_step").click(function() {
      var fr_goal = jQuery("#fr_goal").val().replace('$', '');
      var fr_gift = jQuery("#fr_gift").val().replace('$', '');
      digitalData.form = digitalData.form || {};
      digitalData.form.settings = "registration_fee:25|tf_goal_amount:" + fr_goal + "|donation_amt:" + fr_gift;
      digitalData.event.push({
        eventInfo: {
          eventAction: "formInteraction"
        }
      });
    });
  });
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
    event:[
      { eventInfo:{
        eventAction:"pageView"
      } },
      { eventInfo:{
        eventAction:"formView"
      } },
    ]
  }
} else if ( (getUrlVar('pg') === 'waiver') || (getUrlVar('pg') === 'regsummary') || (getUrlVar('pg') === 'paymentForm') ) {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>registration>" + getUrlVar('fr_id') + ">" + getUrlVar('pg')
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
    event:[
      { eventInfo:{
        eventAction:"pageView"
      } },
      { eventInfo:{
        eventAction:"formView"
      } },
    ]
  }
} else if (window.location.pathname.indexOf("/mjff/site/Donation2") === 0) {
  var digitalData = digitalData || {}; 
  digitalData = {
    page:{
      pageInfo:{ 
        pageName: "tdf tr>donation form>" + getUrlVar(getUrlVar('df_id') +'.donation') + ">" + getUrlVar('FR_ID') + ">" + getUrlVar('PROXY_ID')
      },
      category:{
        primaryCategory: "donation form",
        subCategory1: getUrlVar(getUrlVar('df_id') +'.donation'),
        subCategory2: getUrlVar('FR_ID'),
        subCategory3: getUrlVar('PROXY_ID')
      },
      attributes:{
        site:"tdf tr"
      } 
    },
    event:[
      { eventInfo:{
        eventAction:"pageView"
      } },
      { eventInfo:{
        eventAction:"formView"
      } }
    ]
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

jQuery(document).ready(function() {
  // donation & form events
  jQuery("#ProcessForm input").bind("focus.tdfDonationStart", function() {
    digitalData.form = digitalData.form || {};
    digitalData.donation = digitalData.donation || {};
    digitalData.form.name = "donation>team fox>" + getUrlVar('df_id') + ">" + getUrlVar('fr_id');
    digitalData.donation.form = "team fox>" + getUrlVar('df_id') + ">" + getUrlVar('fr_id');      
    digitalData.event.push(
        { eventInfo: {
            eventAction: "formStart"
        } },
        { eventInfo: {
            eventAction: "donationStart"
        } }
    );
    jQuery("#ProcessForm input").unbind("focus.tdfDonationStart");
    setTimeout(_satellite.track( 'donation-start'), 500);
  });

  // donation form.settings 
  if ( getUrlVar(getUrlVar('df_id') +'.donation') == 'form3' ) {
    if (jQuery(".entry-label:contains('Level:')").length) {
      var custom = "custom";
    } else {
      var custom = "preset";
    };
    var amt = jQuery(".entry-label:contains('Amount:')").next().text().trim().replace('$', '');
    if (jQuery(".entry-label:contains('Anonymous donation:')").length) {
      var anon = jQuery(".entry-label:contains('Anonymous donation:')").next().text().trim().toLowerCase();
    } else {
      var anon = "no"
    };
    var displayGift = jQuery(".entry-label:contains('Show Gift Amount to Public:')").next().text().trim().toLowerCase();
    digitalData.form = digitalData.form || {};
    digitalData.form.settings = "amt:" + custom + "_" + amt + "|anon:" + anon + "|display_gift:" + displayGift;
    digitalData.event.push({
      eventInfo: {
        eventAction: "formInteraction"
      }
    });
  };

});
