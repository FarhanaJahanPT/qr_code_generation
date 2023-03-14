odoo.define('qr.generator', function (require) {
    "use strict";

    var core = require('web.core');
    var Widget = require('web.Widget');
    var SystrayMenu = require('web.SystrayMenu');
    var rpc = require('web.rpc')
var QrGenerateWidget = Widget.extend({
   template: 'QrGeneratorSystray',
   events: {
       "click #toggle_icon": "_onClick",
       "click #generate_btn": "_onGenerate",
       "click #clear_btn": "_onClear",
       "click #close_qr":"_Close",

   },
   start: function(){
            this.$("#form_id_qr").hide();
            this.$('#BtnDownload').hide();
        },
_onClick: function () {
        $("#form_id_qr").show();

        },
_Close:function(){
        $("#text_input").val("");
        $('#image_qr_code').hide();
        $('#BtnDownload').hide();
        $("#form_id_qr").hide();
        },

_onGenerate: function() {
            var data = $('#text_input').val();
            if (data != "") {
                rpc.query({
                model: 'qr.generator',
                method: 'qr_generator_button',
                args: [data]
                }).then(function(result){
                    document.getElementById("image_qr_code").src = "data:image/png;base64," + result;
                    document.getElementById("download_qr_code").href = "data:image/png;base64," + result;
                    $('#image_qr_code').show();
                    $('#BtnDownload').show();
                });
            }
           else{
               $('#image_qr_code').hide();
               $('#BtnDownload').hide();
                }
        },
_onClear: function(){
        $("#text_input").val("");
        $('#image_qr_code').hide();
        $('#BtnDownload').hide();
        }
});
    SystrayMenu.Items.push(QrGenerateWidget);

    return {
        QrGenerateWidget: QrGenerateWidget,
    };
});