from appium.webdriver import appium_service
from appium.webdriver.common.appiumby import AppiumBy
from behave import given, when, then
from appium import webdriver
from appium.webdriver.appium_service import AppiumService
from appium.webdriver.common.touch_action import TouchAction
import time

from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.core import driver


@given(u'I launch chrome browser')
def launchBrowser(context):
    desired_capabilities = \
{
  "appium:platformName": "Android",
  "appium:deviceName": "device",
  "appium:automationName": "UiAutomator1",
  "browserName": "chrome",
  "appium:chromedriverExecutable": "C:\\Users\\LSan\\Downloads\\chromedriver_win32\\chromedriver.exe"
}

    context.driver = webdriver.Remote("http://127.0.0.1:4723/wd/hub", desired_capabilities)


@when(u'I open hiberus home page')
def openHomePage(context):
    home_page = "https://www.hiberus.com"
    context.driver.get(home_page)




@then(u'Accept the cookies to close it')
def acceptCookies(context):
    context.driver.find_element(By.ID,"CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click()

"""@then(u'Press on the menu bar')
def pressMainMenu(context):
    time.sleep(2)
    main_menu_bar='main-menu-button'
    context.driver.find_elements(AppiumBy.ACCESSIBILITY_ID,main_menu_bar).click()


@then(u'I select the contacto button"')
def pressContactButton(context):
    time.sleep(2)
    contact = 'Contacto'
    context.driver.find_elements(AppiumBy.ACCESSIBILITY_ID, contact).click()
"""

@then(u'close browser')
def closeBrowser(context):
    context.driver.close()