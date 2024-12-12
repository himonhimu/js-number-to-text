Public Function SpellTaka(SpNum As String)
Dim yDP As Integer
Dim yArr As Variant
Dim yR_Paisa As String
Dim yNum As String
Dim yF As Integer
Dim yTemp As String
Dim yStr As String
Dim yR As String
Dim yLp As Integer
yArr = Array("", "", " Thousand ", " Lacs ", " Crores ", " Trillion ", "", "", "", "")
On Error Resume Next
If SpNum = "" Then
  SpellTaka = ""
  Exit Function
End If
yNum = Trim(Str(SpNum))
If yNum = "" Then
  SpellTaka = ""
  Exit Function
End If
yR = ""
yLp = 0
If (yNum > 999999999.99) Then
    SpellTaka = "Exceeds Max limit"
    Exit Function
End If
yDP = InStr(yNum, ".")
If yDP > 0 Then
    If (Len(yNum) - yDP) = 1 Then
       yR_Paisa = SpellTaka_GetT(Left(Mid(yNum, yDP + 1) & "0", 2))
    ElseIf (Len(yNum) - yDP) > 1 Then
       yR_Paisa = SpellTaka_GetT(Left(Mid(yNum, yDP + 1), 2))
    End If
        yNum = Trim(Left(yNum, yDP - 1))
    End If
    yF = 1
    Do While yNum <> ""
        If (yF >= 2) Then
            yTemp = Right(yNum, 2)
        Else
            If (Len(yNum) = 2) Then
                yTemp = Right(yNum, 2)
            ElseIf (Len(yNum) = 1) Then
                yTemp = Right(yNum, 1)
            Else
                yTemp = Right(yNum, 3)
            End If
        End If
        yStr = ""
        If Val(yTemp) > 99 Then
            yStr = SpellTaka_GetH(Right(yTemp, 3), yLp)
            If Right(Trim(yStr), 3) <> "Lac" Then
            yLp = yLp + 1
            End If
        ElseIf Val(yTemp) <= 99 And Val(yTemp) > 9 Then
            yStr = SpellTaka_GetT(Right(yTemp, 2))
        ElseIf Val(yTemp) < 10 Then
            yStr = SpellTaka_GetD(Right(yTemp, 2))
        End If
        If yStr <> "" Then
            yR = yStr & yArr(yF) & yR
        End If
        If yF = 2 Then
            If Len(yNum) = 1 Then
                yNum = ""
            Else
                yNum = Left(yNum, Len(yNum) - 2)
            End If
       ElseIf yF = 3 Then
            If Len(yNum) >= 3 Then
                 yNum = Left(yNum, Len(yNum) - 2)
            Else
                yNum = ""
            End If
        ElseIf yF = 4 Then
          yNum = ""
    Else
        If Len(yNum) <= 2 Then
        yNum = ""
    Else
        yNum = Left(yNum, Len(yNum) - 3)
        End If
    End If
        yF = yF + 1
Loop
    If yR = "" Then
       yR = "No Taka"
    Else
       yR = yR & " Taka "
    End If
    If yR_Paisa <> "" Then
       yR_Paisa = "and " & yR_Paisa & " Paisa"
    End If
    SpellTaka = yR & yR_Paisa & " Only"
    End Function
Function SpellTaka_GetH(yStrH As String, yLp As Integer)
Dim yR As String
If Val(yStrH) < 1 Then
    SpellTaka_GetH = ""
    Exit Function
Else
   yStrH = Right("000" & yStrH, 3)
   If Mid(yStrH, 1, 1) <> "0" Then
        If (yLp > 0) Then
         yR = SpellTaka_GetD(Mid(yStrH, 1, 1)) & " Lac "
        Else
         yR = SpellTaka_GetD(Mid(yStrH, 1, 1)) & " Hundred "
        End If
    End If
    If Mid(yStrH, 2, 1) <> "0" Then
        yR = yR & SpellTaka_GetT(Mid(yStrH, 2))
    Else
        yR = yR & SpellTaka_GetD(Mid(yStrH, 3))
    End If
End If
    SpellTaka_GetH = yR
End Function
Function SpellTaka_GetT(yTStr As String)
    Dim yTArr1 As Variant
    Dim yTArr2 As Variant
    Dim yR As String
    yTArr1 = Array("Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen")
    yTArr2 = Array("", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety")
    Result = ""
    If Val(Left(yTStr, 1)) = 1 Then
        yR = yTArr1(Val(Mid(yTStr, 2, 1)))
    Else
        If Val(Left(yTStr, 1)) > 0 Then
            yR = yTArr2(Val(Left(yTStr, 1)) - 1)
        End If
        yR = yR & SpellTaka_GetD(Right(yTStr, 1))
    End If
      SpellTaka_GetT = yR
End Function
Function SpellTaka_GetD(yDStr As String)
Dim yArr_1() As Variant
    yArr_1 = Array(" One", " Two", " Three", " Four", " Five", " Six", " Seven", " Eight", " Nine", "")
    If Val(yDStr) > 0 Then
        SpellTaka_GetD = yArr_1(Val(yDStr) - 1)
    Else
        SpellTaka_GetD = ""
    End If
End Function
