{
    'name': 'Generate QR-Code',
    'sequence': 1,
    'version': '16.0.1.0.0',
    'depends': ['base', 'web'],
    # 'qweb': ['static/src/xml/qr_code.xml'],
    'data': [
        'security/ir.model.access.csv',
        # 'views/qr_code_generator.xml',

    ],
    'assets': {
   'web.assets_backend': {
       'generate_qr_code/static/src/js/qr_code.js',
       'generate_qr_code/static/src/xml/qr_code.xml',
   },
# #    'web.assets_qweb': {
# #        '/generate_qr_code/static/src/xml/qr_code.xml',
# #    },
},
# 'qweb': ['static/src/xml/qr_code.xml'],

    'installable': True,
    'application': True,
    'auto_install': False,

}
