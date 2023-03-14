# -*- coding: utf-8 -*-
import base64

import qrcode,io

from odoo import models, fields, api


class QRGenerator(models.Model):
    _name = 'qr.generator'

    @api.model
    def qr_generator_button(self,data):
            if data != "":
                img = qrcode.make(data)
                result = io.BytesIO()
                img.save(result, format='PNG')
                result.seek(0)
                image_result = base64.b64encode(result.read())
                return image_result




