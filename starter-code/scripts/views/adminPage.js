articleView.initAdminPage = function() {
  vartemplate= Handlebars.compile($('#author-template').html());

  Article.numWordsByAuthor().forEach(function(stat) {
    $('.arthor-stats').append(template(stat));
  });
  $('#blog-stats .articles').text(Article.all.length);
  $('#blog-stats .words').text(Article.numWordsAll());
};

Article.fetchAll(articleView.initAdminPage);
