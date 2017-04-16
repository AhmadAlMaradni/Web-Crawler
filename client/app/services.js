angular.module('myapp.services', [])

.factory('Aumet',function ($http) {

  var getAll = function () {
    return $http({
      method : 'GET',
      url : '/Pharmaceutical'
    }).then(function (resp) {
      console.log(resp)
      return resp.data
    })
  }

    var getHealth = function () {
    return $http({
      method : 'GET',
      url : '/healthcare'
    }).then(function (resp) {
      console.log(resp)
      return resp.data
    })
  }

    var getEquipment = function () {
    return $http({
      method : 'GET',
      url : '/Equipment'
    }).then(function (resp) {
      console.log(resp)
      return resp.data
    })
  }

    var getLaboratory = function () {
    return $http({
      method : 'GET',
      url : '/Laboratory'
    }).then(function (resp) {
      console.log(resp)
      return resp.data
    })
  }

  return {
    getAll : getAll,
    getHealth : getHealth,
    getEquipment : getEquipment,
    getLaboratory : getLaboratory
  }
})
