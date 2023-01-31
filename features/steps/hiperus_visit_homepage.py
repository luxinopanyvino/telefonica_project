"""from behave import *
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

@given(u'launch chrome browser')
def launchBrowser(context):
    options = Options()
    context.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    context.driver.get("https://www.google.com")
    options.add_argument("start-maximized")
    context.driver.maximize_window()
    options.headless = True


@when(u'open hiberus home page')
def openHomePage(context):
    home_page = "https://www.hiberus.com/"
    context.driver.get(home_page)
    context.driver.maximize_window()

@Then(u'accept the cookies to close it')
def acceptCookies(context):
    cookie_xpath = '//button[@id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]'
    cookie = 'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'
    #context.WebDriverWait(context.driver, 10000).until(EC.presence_of_element_located((By.XPATH, cookie_xpath))).click()
    context.driver.find_element(By.ID, cookie).click()

@then(u'close browser')
def closeBrowser(context):
    context.driver.close()"""

