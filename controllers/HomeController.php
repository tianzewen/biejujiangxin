<?php

namespace app\controllers;

use yii\web\Controller;

class HomeController extends Controller
{
	public $layout = false;
	
	public function actionCsrf()
	{
		return $this->render('csrf');
	}
	
	public function actionIndex()
	{
		return "这就是首页需要的内容吧";
	}
	
	/*
	注册*/
	public function actionRegister()
	{
		return "这就是首页需要的内容吧";
	}
}