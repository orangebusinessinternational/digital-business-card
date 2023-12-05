import os

import qrcode
from qrcode.image import svg
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import RoundedModuleDrawer


LOGO_IMAGE_FILE = r'C:\Users\HGWC0974\Desktop\Projects\digital-business-card\docs\static\images\orange_logo.png'


def generate_qrcode(url, filename, logo=LOGO_IMAGE_FILE):
	qr = qrcode.QRCode(
		version = 1,
		error_correction = qrcode.constants.ERROR_CORRECT_H,
		box_size=10,
		border=4
	)

	qr.add_data(url)
	qr.make(fit=True)

	img = qr.make_image(image_factory=StyledPilImage, module_drawer=RoundedModuleDrawer(), embeded_image_path=logo)
	img.save(filename)


if __name__ == '__main__':
	url = 'https://orangebusinessinternational.github.io/digital-business-card/cards/bruno/light.pdf'
	filename = r'C:\Users\HGWC0974\Desktop\Projects data\business card\qr.jpg'

	generate_qrcode(url, filename)