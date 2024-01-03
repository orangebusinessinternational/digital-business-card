from applepassgenerator.client import ApplePassGeneratorClient
from applepassgenerator.models import Generic


card_info = Generic()
card_info.add_primary_field('name', 'Mona Ashour', 'Name')
card_info.add_primary_field('works at', 'Orange Business', 'TheOrg')
card_info.add_secondary_field('loc', 'EG', 'Country')
card_info.add_secondary_field('more-loc', 'Cairo', 'City')

team_identifier = "43997268SR"
pass_type_identifier = "pass.com.orange-business.bcard"
organization_name = "Orange Business"

applepassgenerator_client = ApplePassGeneratorClient(team_identifier, pass_type_identifier, organization_name)
apple_pass = applepassgenerator_client.get_pass(card_info)

# Add logo/icon/strip image to file
apple_pass.add_file("logo.png", open(r"C:\Users\YBXP1015\Desktop\logos\ib_new_logo.png", "rb"))
apple_pass.add_file("icon.png", open(r"C:\Users\YBXP1015\Desktop\logos\TDT.png", "rb"))

CERTIFICATE_PATH = r"C:\Users\YBXP1015\Documents\projects\bcard_github_pages\wallet\certs\pass.pem"
PASSWORD_KEY = r"C:\Users\YBXP1015\Documents\projects\bcard_github_pages\wallet\certs\private.key"
WWDR_CERTIFICATE_PATH = r"C:\Users\YBXP1015\Documents\projects\bcard_github_pages\wallet\certs\AppleWWDRCAG3.pem"
CERTIFICATE_PASSWORD = r"123456"
OUTPUT_PASS_NAME = r"mypass.pkpass"

apple_pass.create(CERTIFICATE_PATH, PASSWORD_KEY, WWDR_CERTIFICATE_PATH, CERTIFICATE_PASSWORD, OUTPUT_PASS_NAME)