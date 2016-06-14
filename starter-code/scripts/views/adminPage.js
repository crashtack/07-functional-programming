articleView.initAdminPage = function() {
  var template = Handlebars.compile($('#author-template').html());

  Article.numWordsByAuthor().forEach(function(stat) {
    $('.author-stats').append(template(stat));
  });
  $('#blog-stats .articles').text(Article.allArticles.length);
  $('#blog-stats .words').text(Article.numWordsAll());

  template = Handlebars.compile($('#category-template').html());

  Article.articlesByCategory().forEach(function(stat) {
    $('.category-stats').append(template(stat));
  });

};

Article.fetchAll(articleView.initAdminPage);
