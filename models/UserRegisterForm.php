<?php

namespace app\models;

use yii\base\Model;
use Yii;

class UserRegisterForm extends Model
{
    public $id;
	public $phone;
    public $password;

    public function rules()
    {
        return [
            [['phone', 'password'], 'required'],
			['phone', 'string', 'length' => [11], 'message' => '请输入正确电话号码'],
			['password', 'string', 'length' => [8, 16], 'message' => '请输入8~16位的字母或数字组成的密码'],
        ];
    }
}