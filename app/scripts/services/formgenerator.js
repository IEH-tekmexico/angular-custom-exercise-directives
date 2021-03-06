'use strict';

/**
 * @ngdoc service
 * @name angularExamApp.formGenerator
 * @description
 * # formGenerator
 * Service in the angularExamApp.
 */
angular.module('formGeneration', [])
  .service('formGenerator', function ($compile) {

    var compiled = $compile('<div data-type="chart_modal" class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title" id="myModalLabel">Chart Options</h4> </div> <div class="modal-body"><form role="form"> <div class="form-group"> <label for="title">Title</label> <input type="text" id="title" name="title.text" ng-model="bar.title.text" class="form-control" placeholder="Title"> </div><div class="form-group"> <label for="chartType">Chart Type</label> <select id="chartType" name="chart.type" ng-model="bar.chart.type" data-value="bar" class="form-control"> <option value="bar" selected>Bar</option> <option value="column">Column</option><option value="line">Line</option><option value="pie">Pie</option></select> <div class="form-group"> <label for="xAxis">X Axis</label> <input type="text" id="xAxis" name="xAxis.categories" ng-model="bar.xAxis.categories" class="form-control" placeholder="comma separated values category a, category b, etc."> </div><div class="form-group"> <label for="yAxis">yAxis</label> <input type="text" id="yAxis" name="yAxis.title.text" ng-model="bar.yAxis.title.text" class="form-control" placeholder="yAxis"> </div><div class="form-group"> <label>Series</label> <div class="row"> <div class="col-xs-6"> <div class="form-group"> <label for="name1"></label> <input type="text" id="name1" name="Series.name" ng-model="bar.Series.name1" class="form-control" placeholder="Name"> </div></div><div class="col-xs-6"> <div class="form-group"> <label for="data1"></label> <input type="text" id="data1" name="Series.data" ng-model="bar.Series.data1" class="form-control" placeholder="Data comma separated values"> </div></div></div><div class="row"> <div class="col-xs-6"> <div class="form-group"> <label for="name2"></label> <input type="text" id="name2" name="Series.name" ng-model="bar.Series.name2" class="form-control" placeholder="Name"> </div></div><div class="col-xs-6"> <div class="form-group"> <label for="data2"></label> <input type="text" id="data2" name="Series.data" ng-model="bar.Series.data2" class="form-control" placeholder="Data comma separated values"> </div></div></div><div class="row"> <div class="col-xs-6"> <div class="form-group"> <label for="name3"></label> <input type="text" id="name3" name="Series.name" ng-model="bar.Series.name3" class="form-control" placeholder="Name"> </div></div><div class="col-xs-6"> <div class="form-group"> <label for="data3"></label> <input type="text" id="data3" name="Series.data" ng-model="bar.Series.data3" class="form-control" placeholder="Data comma separated values"> </div></div></div></div></div></form></div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> <button type="button" class="btn btn-primary" data-dismiss="modal" ng-click="submit(bar)">Save changes</button></div></div></div></div>');


    var formTemplates = {
        bar:compiled,
        pie:compiled,
        line:compiled
    };

    return function(type, scope) {
      return formTemplates[type](scope);
    };
  });
