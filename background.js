// ***Add more sites here***

let newsSites  =
        [
                //BBC News
                "bbc.co.uk/news",
                //The Telegraph
                "telegraph.co.uk",
                //The Guardian
                "theguardian.com",
                //Financial Times
                "ft.com"
        ];


//date calculations


var d = new Date();
var g = d.getDate();

var m = d.getMonth();
var y = d.getFullYear();
var getDaysInMonth = function(month, year) {
        return new Date(year, month, 0).getDate();
};


var g = (g - 7) % getDaysInMonth(m, y);
var g2 = g+1;


//string manipulation


var m_string = String(m+1);
var y_string = String(y);
var g_string = String(g);
var g2_string = String(g2);

if (m_string.length == 1) {
   m_string = "0"+m_string;
};

if (g_string.length == 1) {
   g_string = "0"+g_string;
};

if (g2_string.length == 1) {
   g2_string = "0"+g2_string ;
};


var searchDate = y_string+"-"+m_string+"-"+g_string;
var searchDate2 = y_string+"-"+m_string+"-"+g2_string;



var string = ""
var i 
for (i = 0; i < newsSites.length - 1; i++){
    string = string+"site%3A"+newsSites[i]+"+OR+"
};

var searchTerms = string+"site%3A"+newsSites[newsSites.length -1];

//google search query


var gUrl = 'https://www.google.com/search?tbm=nws&q='+searchTerms+'+before%3A'+searchDate2+'+after%3A'+searchDate+'&oq='+searchTerms+'+before%3A'+searchDate2+'+after%3A'+searchDate;

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: gUrl})
});


