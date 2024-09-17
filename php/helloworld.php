<?php
class Based{
	public function Ex0($fuga){
		return $fuga." is public";// Ex0はpublicなので取得可
	}

	protected function Ex1($fuga){
		return $fuga." is protected";// Ex1はprotectedなので継承していないと取得不可
	}

	private function Ex2($fuga){
		return $fuga." is private";// Ex2はprivateなので継承していても取得不可
	}
}

class NoExtend{
	public function Ex3($fuga){
		$base = new Based;
		return $base->Ex0($fuga)." to noextend";// Ex0はpublicなので取得可
	}

	public function Ex4($fuga){
		$base = new Based;
		return $base->Ex1($fuga)." to noextend";// Ex1はprotectedなので継承していないと取得不可
	}

	public function Ex5($fuga){
		$base = new Based;
		return $base->Ex2($fuga)." to noextend";// Ex2はprivateなので継承していても取得不可
	}
}

class Extend extends Based{
	public function Ex6($fuga){
		$base = new Based;
		return $base->Ex0($fuga)." to extend";// Ex0はpublicなので取得可
	}

	public function Ex7($fuga){
		$base = new Based;
		return $base->Ex1($fuga)." to extend";// Ex1はprotectedなので継承していれば取得可
	}

	public function Ex8($fuga){
		$base = new Based;
		return $base->Ex2($fuga)." to extend";// Ex2はprivateなので継承していても取得不可
	}
}

// 取得して表示
$class = new Based;
echo $class->Ex1("this"); 
?>