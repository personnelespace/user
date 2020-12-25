<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\ContactUS;

class ContactUsController extends Controller
{
  /**
    * Show the application dashboard.
    *
    * @return \Illuminate\Http\Response
    */
    public function contactUS()
    {
        return view('contact-us');
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function contactSaveData(Request $request)
    {
        $this->validate($request, [
         'name' => 'required',
         'email' => 'required|email',
         'subject'=>'required',
         'message' => 'required'
         ]);
        ContactUS::create($request->all());
        return back()->with('success', 'Thanks for contacting us!');
    }
}
