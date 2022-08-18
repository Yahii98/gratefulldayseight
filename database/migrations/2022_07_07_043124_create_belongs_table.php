<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('belongs', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->tinyInteger('company_id');
            $table->tinyInteger('type_id');
            $table->tinyInteger('post_id');
            $table->tinyInteger('office_id');
            $table->tinyInteger('dept_id');
            $table->timestamp('belong_updated_at');
            $table->tinyInteger('belong_deleted');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('belongs');
    }
};
