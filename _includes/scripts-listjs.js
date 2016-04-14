<script type="text/javascript" src="/assets/js/list.js"></script>
<script type="text/javascript" src="/assets/js/list.pagination.js"></script>

<script type="text/javascript">
{% assign tags = site.tags %}
{% assign filters = site.data.filters %}

  var options = {
      valueNames: [ 'title', 'tag', 'tag_0','tag_1','tag_2','tag_3','tag_4', 'tag_5', 'tag_6', 'tag_7'{% for filter in site.data.filters %}{% if forloop.first %} ,{% endif %}'{{filter.key}}'{% unless forloop.last %}, {% endunless %}{% endfor %}],
      listClass: 'list-filter',
      page: 15,
      plugins: [ ListPagination({

        paginationClass: "pagination-list"

      }) ]
  };
  var postList = new List('container-filter', options);
  //var filtersButton = $('#filter-none').hide(); // MOVED TO _js/main.js for JQuery dependency.


 {% for tag in tags %}
  if (document.getElementById("filter-{{ tag[0] }}")) {
    document.getElementById("filter-{{ tag[0] }}").onclick=function(){
      postList.filter(function(item) {
           if (item.values().tag_0 == "{{ tag[0] }}" ) {
             return true;
             }
             else if (item.values().tag_1 == "{{ tag[0] }}" ) {
             return true;
             }
             else if (item.values().tag_2 == "{{ tag[0] }}" ) {
             return true;
             }
             else if (item.values().tag_3 == "{{ tag[0] }}" ) {
             return true;
             }
             else if (item.values().tag_4 == "{{ tag[0] }}" ) {
             return true;
             } else {
             return false;
          }
      });
      filtersButton.show();
    };
  }
{% endfor %}
{% for tag in filters %}
  if (document.getElementById("filter-{{ tag.key }}")) {
    document.getElementById("filter-{{ tag.key }}").onclick=function(){
      postList.filter(function(item) {
           if (item.values().{{ tag.key }} == "{{ tag.key }}" ) {
             return true;
             }
              else {
             return false;
          }
      });
      filtersButton.show();
    };
  }
{% endfor %}
    //and clear the filters
if (document.getElementById("filter-none")) {
 document.getElementById("filter-none").onclick=function(){
     postList.filter();
    };
  }

// END image caption


</script>
