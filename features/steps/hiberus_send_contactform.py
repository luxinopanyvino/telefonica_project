from datetime import time
from behave import *
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

@given(u'I launch chrome browser')
def launchBrowser(context):
    options = Options()
    context.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    context.driver.get("https://www.google.com")
    options.add_argument("start-maximized")
    context.driver.maximize_window()
    #options.headless = True


@when(u'I open hiberus home page')
def openHomePage(context):
    home_page = "https://www.hiberus.com/"
    context.driver.get(home_page)
    context.driver.maximize_window()


@then(u'Accept the cookies to close it')
def acceptCookies(context):
    cookie_xpath = '//button[@id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]'
    cookie = 'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'
    # context.WebDriverWait(context.driver, 10000).until(EC.presence_of_element_located((By.ID, cookie_xpath))).click()
    context.driver.find_element(By.ID, cookie).click()

@then(u'Click on contactos button')
def pressContactButton(context):
    contact_button = "//*[@id='block-mainmenu']/ul/li[6]/a"
    context.driver.find_element(By.XPATH, contact_button).click()


@then(u'Fill the name field')
def fillName(context):
    name = '//*[@id="edit-field-form-text1-0-value"]'
    context.driver.find_element(By.XPATH, name).send_keys("This is a Test Example")

"""
@then(u'Fill the email field')
def fillEmail(context):
    email = 'edit-field-form-email1-req-0-value'
    context.driver.find_element(By.ID, email).send_keys("test@hotmail.es")


@then(u'Fill the phone field')
def fillPhone(context):
    phone = 'edit-field-form-text3-0-value'
    context.driver.find_element(By.ID, phone).send_keys("+3456789546")


@then(u'Fill the company name')
def fillCompany(context):
    company = 'edit-field-form-text2-0-value'
    context.driver.find_element(By.ID, company).send_keys("Hiberus")


@then(u'Fill the message field')
def fillMessage(context):
    message = 'edit-field-mensaje-0-value'
    context.driver.find_element(By.ID, message).send_keys("This is a Test Example")


@then(u'Accept checkbox of privacity')
def acceptPrivacity(context):
    checkbox = '//input[@class="elementor-field elementor-size-sm  elementor-acceptance-field"]'
    context.WebDriverWait(context.driver, 100).until(EC.presence_of_element_located((By.ID, checkbox))).click()

@then(u'Press the submit button')
def pressSubmitButton(context):
    submit_button = 'edit-submit'
    context.WebDriverWait(context.driver, 100).until(EC.presence_of_element_located((By.ID, submit_button))).click()
"""
@then(u'Close browser')
def closeBrowser(context):
    context.driver.close()