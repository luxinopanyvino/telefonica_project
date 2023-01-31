from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time
import random
from datetime import datetime
from dateutil.relativedelta import relativedelta
from selenium.webdriver.support.wait import WebDriverWait

'''def get_driver(self):
    driver = webdriver.Chrome(r"C:\\Users\\LSan\\Downloads\\chromedriver_win32\\chromedriver.exe")
    driver.get(self.url)
    driver.maximize_window()
    options = Options()
    options.headless = True
    return driver'''

url = 'https://www.hiberus.com/'
options = Options()
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.google.com")
options.add_argument("start-maximized")
driver.get(url)
options.headless = True


first_names = ['John', 'Jane', 'Corey', 'Travis', 'Dave', 'Kurt', 'Neil', 'Sam', 'Steve', 'Tom', 'James', 'Robert',
                   'Michael', 'Charles', 'Joe', 'Mary', 'Maggie', 'Nicole', 'Patricia', 'Linda', 'Barbara', 'Elizabeth',
                   'Laura', 'Jennifer', 'Maria']
last_names = ['Smith', 'Doe', 'Jenkins', 'Robinson', 'Davis', 'Stuart', 'Jefferson', 'Jacobs', 'Wright',
                  'Patterson', 'Wilks', 'Arnold', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson',
                  'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin']
street_names = ['Main', 'High', 'Pearl', 'Maple', 'Park', 'Oak', 'Pine', 'Cedar', 'Elm', 'Washington', 'Lake',
                    'Hill']
fake_cities = ['Metropolis', 'Eerie', "King's Landing", 'Sunnydale', 'Bedrock', 'South Park', 'Atlantis', 'Mordor',
                   'Olympus', 'Dawnstar', 'Balmora', 'Gotham', 'Springfield', 'Quahog', 'Smalltown', 'Epicburg',
                   'Pythonville', 'Faketown', 'Westworld', 'Thundera', 'Vice City', 'Blackwater', 'Oldtown', 'Valyria',
                   'Winterfell', 'Braavos‎', 'Lakeview']
states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
              'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC',
              'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
companies = ['Endesa', 'Hiberus', 'IKEA', 'Deimler', 'MediaMark', 'Intel', 'Google', 'Meta']
genres = ['Male', 'Female', 'Non binary', 'Undefined']
salaries = ['1000', '3000', '5000', '10000', '30000']
marital_status = ['Married', 'Single', 'Widowed', 'Separated']
children = ['0', '1', '2', '3', '4', '5']
religions = ['Atheist', 'Catholic', 'Muslim', 'Agnostic']
functions = ['DevSecOps', 'UX Designer', 'Automation Engineer', 'Ethical Hacker', 'Microservices Java Developer']

for num in range(1):
        first = random.choice(first_names)
        last = random.choice(last_names)
        genre = random.choice(genres)
        children = random.randint(1, 10)
        marital_ = random.choice(marital_status)
        religion = random.choice(religions)
        phone = f'{random.randint(100, 999)}-555-{random.randint(1000, 9999)}'
        date_g = f'{random.randint(1955, 2004)}-{random.randint(1, 12)}-{random.randint(1, 30)}'
        birth_d = datetime.strptime(date_g, "%Y-%m-%d")
        age_g = relativedelta(datetime.now(), birth_d)
        age = f"{age_g.years} years old"
        street_num = random.randint(1, 999)
        street = random.choice(street_names)
        city = random.choice(fake_cities)
        role = random.choice(functions)
        company = random.choice(companies)
        state = random.choice(states)
        messages = ('This is a writing test..')
        #message = random.choice(messages)
        zip_code = random.randint(10000, 99999)
        type = random.randint(1, 8)
        address = f'{street_num} {street} St., {city} {state} {zip_code}'
        email = first.lower() + '_' + last.lower() + '@' + company.lower() + '.com'

def slow_typing(element, text):
    for character in text:
        element.send_keys(character)
        time.sleep(0.8)


def fill_form():
    cookie_xpath = '//button[@id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]'
    WebDriverWait(driver, 10000).until(EC.presence_of_element_located((By.XPATH, cookie_xpath))).click()
    driver.find_element(By.ID,'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

    driver.find_element(By.ID,'form-field-email').send_keys(email)

    driver.find_element(By.ID,'form-field-name').send_keys(first)

    driver.find_element(By.ID,'form-field-forname').send_keys(last)

    driver.find_element(By.ID,'form-field-company').send_keys(company)

    driver.find_element(By.ID,'form-field-function').send_keys(role)

    Select(driver.find_element(By.ID,'form-field-inquiry')).select_by_index(type)

    Select(driver.find_element(By.ID,'form-field-country')).select_by_index(type)

    driver.find_element(By.ID,'form-field-message').send_keys(messages)

    time.sleep(5)
    checkbox_1 = '//input[@class="elementor-field elementor-size-sm  elementor-acceptance-field"]'
    WebDriverWait(driver, 100).until(EC.presence_of_element_located((By.XPATH, checkbox_1))).click()
    time.sleep(5)
    checkbox_2 = '//input[@value="I agree to be contacted at the email address provided to receive information, offers and news from Amaris Consulting."]'
    WebDriverWait(driver, 100).until(EC.presence_of_element_located((By.XPATH, checkbox_2))).click()
    time.sleep(5)
    submit_xpath = '//button[@type="submit"]'
    WebDriverWait(driver, 100).until(EC.presence_of_element_located((By.XPATH, submit_xpath))).click()
    time.sleep(2)

if __name__ == '__main__':
    fill_form()
